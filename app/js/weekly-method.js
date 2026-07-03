/* ========================================
   周度学习方法系统 v1.0
   每周主推一种方法，融入学习流程
   ======================================== */
(function() {
  "use strict";

  // ===== 每周方法配置 =====
  var weeklyPlan = [
    {week:1, days:"1-7",  method:"feynman",  icon:"👨‍🏫", name:"费曼学习法", color:"#3182CE"},
    {week:2, days:"8-14", method:"pomodoro", icon:"🍅", name:"番茄工作法", color:"#E53E3E"},
    {week:3, days:"15-21",method:"mindmap",  icon:"🧠", name:"思维导图法", color:"#805AD5"},
    {week:4, days:"22-30",method:"recall",   icon:"🔍", name:"主动回忆法", color:"#DD6B20"}
  ];

  function getWeekInfo(day) {
    if (day <= 7) return weeklyPlan[0];
    if (day <= 14) return weeklyPlan[1];
    if (day <= 21) return weeklyPlan[2];
    return weeklyPlan[3];
  }

  // ===== 生成方法特定内容 =====
  function getMethodContent(dayNum, subject) {
    var week = getWeekInfo(dayNum);
    if (!week) return "";

    switch(week.method) {
      case "feynman":
        return renderFeynmanContent(subject);
      case "pomodoro":
        return renderPomodoroBanner(dayNum);
      case "mindmap":
        return renderMindmapTip(subject);
      case "recall":
        return renderRecallPrompt(dayNum);
      default:
        return "";
    }
  }

  // ===== 费曼学习法内容 =====
  function renderFeynmanContent(subject) {
    var tips = {
      chinese: "📖 合上课本，用最简单的语言讲一遍这篇课文讲了什么。如果能说清楚，说明你真懂了。",
      math: "🧮 假装给同学讲今天的数学公式——为什么这样算？道理是什么？讲不下去就是没真懂。",
      english: "🔤 用刚学的单词和句型造3个句子，然后假装教给一个不会英语的人。"
    };
    return `<div class="feynman-check" onclick="this.classList.toggle('expanded')">
      <div class="feynman-header">👨‍🏫 <strong>费曼检验</strong><span style="font-size:0.78rem;color:#718096;font-weight:400;"> — 点击展开</span></div>
      <div class="feynman-body">
        <div style="margin-bottom:6px;">学完这一课，试着完成下面三步：</div>
        <div class="feynman-step">❶ 合上书，不要看任何笔记</div>
        <div class="feynman-step">❷ 用最简单的语言讲给想象中的同学听</div>
        <div class="feynman-step">❸ 卡住的地方就是没真懂——回头再看一遍</div>
        <div style="margin-top:6px;padding:8px 10px;background:#EBF8FF;border-radius:8px;font-size:0.82rem;">💡 ${tips[subject] || "用你自己的话，把今天学的讲清楚。"}</div>
        <div class="feynman-done" onclick="event.stopPropagation();this.textContent='✅ 已通过费曼检验';this.style.background='#C6F6D5';">👆 点击标记：已通过检验</div>
      </div>
    </div>`;
  }

  // ===== 番茄钟计时器 =====
  var pomodoroState = {running:false, phase:"focus", timeLeft:25*60, focusTime:25, breakTime:5};

  function renderPomodoroBanner(dayNum) {
    var weekInfo = getWeekInfo(dayNum);
    return `<div class="pomodoro-section" id="pomodoroSection">
      <div class="pomodoro-header">
        <span style="font-size:1.2rem;">🍅</span>
        <span><strong>番茄工作法 · 第${weekInfo.week}周重点：${weekInfo.name}</strong></span>
        <span style="font-size:0.78rem;color:#718096;">25分钟专注 + 5分钟休息</span>
      </div>
      <div class="pomodoro-timer" id="pomodoroDisplay">25:00</div>
      <div class="pomodoro-phase" id="pomodoroPhase">🎯 专注时间</div>
      <div class="pomodoro-controls">
        <button class="pomodoro-btn start-btn" id="pomodoroStart" onclick="window.Pomodoro.start()">▶ 开始</button>
        <button class="pomodoro-btn reset-btn" id="pomodoroReset" onclick="window.Pomodoro.reset()">↺ 重置</button>
      </div>
      <div class="pomodoro-progress" id="pomodoroProgress"><div class="pomodoro-bar" id="pomodoroBar"></div></div>
      <div class="pomodoro-tip">💡 今日建议：学完一科用1个番茄钟，休息5分钟再学下一科</div>
    </div>`;
  }

  // ===== 番茄钟逻辑 =====
  var Pomodoro = {
    start: function() {
      if (this.interval) return;
      var self = this;
      pomodoroState.running = true;
      document.getElementById("pomodoroStart").textContent = "⏸ 暂停";

      this.interval = setInterval(function() {
        pomodoroState.timeLeft--;
        self.updateDisplay();

        if (pomodoroState.timeLeft <= 0) {
          clearInterval(self.interval);
          self.interval = null;
          pomodoroState.running = false;
          // 切换阶段
          if (pomodoroState.phase === "focus") {
            pomodoroState.phase = "break";
            pomodoroState.timeLeft = pomodoroState.breakTime * 60;
            self.speak("该休息5分钟了！站起来走走，喝口水。");
            document.getElementById("pomodoroPhase").textContent = "☕ 休息时间";
            document.getElementById("pomodoroPhase").style.color = "#38A169";
            document.getElementById("pomodoroStart").textContent = "▶ 开始休息";
          } else {
            pomodoroState.phase = "focus";
            pomodoroState.timeLeft = pomodoroState.focusTime * 60;
            self.speak("休息结束，开始新一轮专注学习！");
            document.getElementById("pomodoroPhase").textContent = "🎯 专注时间";
            document.getElementById("pomodoroPhase").style.color = "#E53E3E";
            document.getElementById("pomodoroStart").textContent = "▶ 开始学习";
          }
          self.updateDisplay();
        }
      }, 1000);
    },

    pause: function() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
        pomodoroState.running = false;
        document.getElementById("pomodoroStart").textContent = "▶ 继续";
      }
    },

    reset: function() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
      pomodoroState.running = false;
      pomodoroState.phase = "focus";
      pomodoroState.timeLeft = pomodoroState.focusTime * 60;
      document.getElementById("pomodoroDisplay").textContent = "25:00";
      document.getElementById("pomodoroPhase").textContent = "🎯 专注时间";
      document.getElementById("pomodoroPhase").style.color = "#E53E3E";
      document.getElementById("pomodoroStart").textContent = "▶ 开始";
      document.getElementById("pomodoroBar").style.width = "0%";
    },

    updateDisplay: function() {
      var total = pomodoroState.phase === "focus" ? pomodoroState.focusTime * 60 : pomodoroState.breakTime * 60;
      var mins = Math.floor(pomodoroState.timeLeft / 60);
      var secs = pomodoroState.timeLeft % 60;
      document.getElementById("pomodoroDisplay").textContent =
        (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
      document.getElementById("pomodoroBar").style.width = ((1 - pomodoroState.timeLeft / total) * 100) + "%";
    },

    speak: function(text) {
      try {
        if (window.speechSynthesis) {
          var msg = new SpeechSynthesisUtterance(text);
          msg.lang = "zh-CN";
          msg.rate = 1.0;
          msg.volume = 1.0;
          window.speechSynthesis.cancel();
          setTimeout(function() { window.speechSynthesis.speak(msg); }, 100);
        }
      } catch(e) { console.log("语音提醒不可用"); }
    }
  };
  window.Pomodoro = Pomodoro;

  // ===== 思维导图提示 =====
  function renderMindmapTip(subject) {
    return `<div class="method-embed" style="background:#FAF5FF;border-color:#805AD5;">
      <div class="embed-header">🧠 <strong>思维导图练习</strong></div>
      <div style="font-size:0.82rem;line-height:1.6;">今天学完后，在笔记本上画一张思维导图：<br>
      中心写主题 → 分支写子知识点 → 末端写关键词和例子<br>
      <span style="color:#718096;">💡 用不同颜色区分不同分支，好看又好记</span></div>
    </div>`;
  }

  // ===== 主动回忆提示 =====
  function renderRecallPrompt(dayNum) {
    var prevDay = dayNum - 1;
    return `<div class="method-embed" style="background:#FFF5F5;border-color:#DD6B20;">
      <div class="embed-header">🔍 <strong>主动回忆 · 先复习再学新</strong></div>
      <div style="font-size:0.82rem;line-height:1.6;">
      开始今天的学习前，先花<strong>3分钟</strong>回忆第${prevDay}天学了什么：<br>
      📖 语文讲了什么课文？✏️ 数学学了什么公式？🔤 英语学了什么句型？<br>
      <span style="color:#718096;">💡 想不起来的就是需要复习的地方！</span></div>
    </div>`;
  }

  // ===== 样式注入 =====
  var style = document.createElement("style");
  style.textContent = `
    .feynman-check {
      background: #EBF8FF;
      border: 1px solid #BEE3F8;
      border-radius: 10px;
      padding: 0;
      margin: 8px 0;
      cursor: pointer;
      overflow: hidden;
    }
    .feynman-header {
      padding: 10px 14px;
      font-size: 0.85rem;
      color: #2B6CB0;
    }
    .feynman-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s;
      padding: 0 14px;
    }
    .feynman-check.expanded .feynman-body {
      max-height: 400px;
      padding: 0 14px 14px;
    }
    .feynman-step {
      padding: 4px 0;
      font-size: 0.82rem;
      color: #4A5568;
    }
    .feynman-done {
      margin-top: 8px;
      padding: 6px 12px;
      background: #E2E8F0;
      border-radius: 6px;
      font-size: 0.78rem;
      text-align: center;
      cursor: pointer;
    }
    .pomodoro-section {
      background: linear-gradient(135deg, #FFF5F5, #FFFAF0);
      border: 2px solid #FC8181;
      border-radius: 14px;
      padding: 14px;
      margin: 8px 0;
      text-align: center;
    }
    .pomodoro-header {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
    }
    .pomodoro-timer {
      font-size: 3rem;
      font-weight: 700;
      color: #E53E3E;
      font-variant-numeric: tabular-nums;
    }
    .pomodoro-phase {
      font-size: 0.85rem;
      font-weight: 600;
      margin: 4px 0;
    }
    .pomodoro-controls {
      margin: 8px 0;
    }
    .pomodoro-btn {
      padding: 8px 20px;
      border: none;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      margin: 0 4px;
    }
    .start-btn { background: #E53E3E; color: white; }
    .start-btn:hover { background: #C53030; }
    .reset-btn { background: #EDF2F7; color: #4A5568; }
    .pomodoro-progress {
      height: 6px;
      background: #EDF2F7;
      border-radius: 3px;
      margin: 8px 0;
      overflow: hidden;
    }
    .pomodoro-bar {
      height: 100%;
      background: #E53E3E;
      border-radius: 3px;
      width: 0%;
      transition: width 0.5s;
    }
    .pomodoro-tip {
      font-size: 0.75rem;
      color: #718096;
    }
    .method-embed {
      border: 1px solid;
      border-radius: 10px;
      padding: 12px;
      margin: 8px 0;
    }
    .embed-header {
      font-size: 0.85rem;
      margin-bottom: 4px;
    }
  `;
  document.head.appendChild(style);

  // ===== 挂载到App渲染流程 =====
  var origRenderSubjectContent = App.renderSubjectContent;
  App.renderSubjectContent = function(dayData, subject) {
    origRenderSubjectContent.call(this, dayData, subject);
    var contentEl = document.getElementById("dayContent");
    if (!contentEl) return;

    // ★ 每天都显示番茄钟（通用学习工具）
    contentEl.insertAdjacentHTML("afterbegin", renderPomodoroBanner(dayData.day));

    // 在内容末尾插入本周方法特定内容
    var methodContent = getMethodContent(dayData.day, subject);
    if (methodContent) {
      contentEl.insertAdjacentHTML("beforeend", methodContent);
    }

    // 绑定番茄钟按钮事件
    setTimeout(function() {
      var startBtn = document.getElementById("pomodoroStart");
      if (startBtn) {
        startBtn.onclick = function() {
          if (pomodoroState.running) {
            Pomodoro.pause();
          } else {
            Pomodoro.start();
          }
        };
      }
    }, 100);
  };

  // ===== 每周加载时语音提示 =====
  function weeklyVoiceTip(dayNum) {
    var week = getWeekInfo(dayNum);
    var tips = {
      feynman: "欢迎来到第一周！本周重点学习方法：费曼学习法。学完每个知识点后，合上书，用最简单的语言讲一遍。能讲清楚才是真懂。",
      pomodoro: "欢迎来到第二周！本周使用番茄工作法。每25分钟专注学习后休息5分钟，页面上有计时器帮你计时。",
      mindmap: "欢迎来到第三周！本周重点学习方法：思维导图法。每学完一课，在笔记本上画出知识结构图。",
      recall: "欢迎来到第四周！本周重点：主动回忆法。每次学习新内容前，先花3分钟回忆昨天学了什么。"
    };
    var tip = tips[week.method];
    if (tip) {
      setTimeout(function() {
        try {
          if (window.speechSynthesis) {
            var msg = new SpeechSynthesisUtterance(tip);
            msg.lang = "zh-CN";
            msg.rate = 0.9;
            window.speechSynthesis.speak(msg);
          }
        } catch(e) {}
      }, 2000);
    }
  }

  // 检测每周第一天
  var origRenderDay = App.renderDay;
  App.renderDay = function(dayNum) {
    origRenderDay.call(this, dayNum);
    var week = getWeekInfo(dayNum);
    // 每周第一天显示方法介绍
    var weekStarts = {1:1, 2:8, 3:15, 4:22};
    if (weekStarts[week.week] === dayNum) {
      weeklyVoiceTip(dayNum);
    }
  };

  console.log("📅 周度学习方法系统已加载");
})();
