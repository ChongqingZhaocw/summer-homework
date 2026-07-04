
﻿/* ========================================
   暑期作业Web应用主逻辑
   ======================================== */
var App = {
  currentDay: 1,
  currentSubject: "chinese",
  
  init: function() {
    this.loadProgress();
    this.renderDaySelector();
    this.renderDay(1);
    this.renderProgress();
    this.bindEvents();
  },
  
  // 加载本地存储进度
  loadProgress: function() {
    try {
      this.progress = JSON.parse(localStorage.getItem("summerProgress")) || {};
    } catch(e) {
      this.progress = {};
    }
  },
  
  saveProgress: function() {
    localStorage.setItem("summerProgress", JSON.stringify(this.progress));
  },
  
  // 获取某天的完成状态
  getDayStatus: function(day) {
    var p = this.progress[day];
    if (!p) return {chinese:[], math:[], english:[]};
    return p;
  },
  
  toggleTask: function(day, subject, taskIndex) {
    if (!this.progress[day]) this.progress[day] = {chinese:[], math:[], english:[]};
    var tasks = this.progress[day][subject];
    var idx = tasks.indexOf(taskIndex);
    if (idx > -1) tasks.splice(idx, 1);
    else tasks.push(taskIndex);
    this.saveProgress();
    this.renderDay(day);
    this.renderProgress();
    this.renderDaySelector();
  },
  
  // 渲染日期选择器
  renderDaySelector: function() {
    var html = "";
    for (var i = 1; i <= 30; i++) {
      var cls = "day-dot";
      if (i === this.currentDay) cls += " active";
      var dayData = this.getDayStatus(i);
      var totalDone = dayData.chinese.length + dayData.math.length + dayData.english.length;
      if (totalDone > 0) cls += " completed";
      html += "<div class=\"" + cls + "\" data-day=\"" + i + "\">" + i + "</div>";
    }
    document.getElementById("daySelector").innerHTML = html;
  },
  
  // 渲染某一天的内容
  renderDay: function(dayNum) {
    this.currentDay = dayNum;
    var dayData = this.getDayData(dayNum);
    if (!dayData) {
      document.getElementById("contentArea").innerHTML = "<div class='empty-state'><div class='icon'>📚</div><div class='text'>内容加载中...</div></div>";
      return;
    }
    
    // 更新顶部信息
    document.getElementById("dayNum").textContent = "第" + dayNum + "天";
    document.getElementById("dayDate").textContent = dayData.date + " " + dayData.weekday;
    document.getElementById("dayDifficulty").textContent = "难度：" + dayData.difficulty;
    document.getElementById("dayFocus").textContent = "今日重点：" + dayData.focus;
    
    // 渲染摘要条
    this.renderSummary(dayData);
    
    // 渲染科目标签
    this.renderSubjectTabs(dayData);
    
    // 渲染当前科目的内容
    this.renderSubjectContent(dayData, this.currentSubject);
    
    // 滚动到顶部
    window.scrollTo({top: 0, behavior: "smooth"});
  },
  
  getDayData: function(day) {
    // 从全局 COURSE_DATA 查找
    for (var i = 0; i < COURSE_DATA.length; i++) {
      if (COURSE_DATA[i].day === day) return COURSE_DATA[i];
    }
    return null;
  },
  
  renderSummary: function(dayData) {
    var subjects = ["chinese","math","english"];
    var names = {"chinese":"语文","math":"数学","english":"英语"};
    var classes = {"chinese":"chinese","math":"math","english":"english"};
    var html = "";
    for (var i = 0; i < subjects.length; i++) {
      var s = subjects[i];
      var tasks = dayData.subjects[s].sections;
      var taskCount = 0;
      for (var t = 0; t < tasks.length; t++) {
        if (tasks[t].type === "task" && tasks[t].tasks) {
          taskCount += tasks[t].tasks.length;
        }
      }
      var done = this.progress[dayData.day] ? (this.progress[dayData.day][s] || []).length : 0;
      html += "<div class='summary-item " + classes[s] + "'><div class='label'>" + names[s] + "</div><div class='value'>" + done + "/" + taskCount + "</div></div>";
    }
    document.getElementById("summaryBar").innerHTML = html;
  },
  
  renderSubjectTabs: function(dayData) {
    var subjects = ["chinese","math","english"];
    var names = {"chinese":"📖 语文","math":"📐 数学","english":"🌍 英语"};
    var classes = {"chinese":"chinese","math":"math","english":"english"};
    var html = "";
    for (var i = 0; i < subjects.length; i++) {
      var s = subjects[i];
      var tasks = dayData.subjects[s].sections;
      var total = 0;
      for (var t = 0; t < tasks.length; t++) {
        if (tasks[t].type === "task" && tasks[t].tasks) total += tasks[t].tasks.length;
      }
      var done = this.progress[dayData.day] ? (this.progress[dayData.day][s] || []).length : 0;
      var check = total > 0 && done >= total ? " ✅" : (done > 0 ? " 🔄" : "");
      var active = s === this.currentSubject ? " active" : "";
      html += "<button class='subject-tab " + classes[s] + active + "' data-subject='" + s + "'>" + names[s] + "<span class='check-icon'>" + check + "</span></button>";
    }
    document.getElementById("subjectTabs").innerHTML = html;
  },
  
  renderSubjectContent: function(dayData, subject) {
    var content = dayData.subjects[subject];
    if (!content) return;
    
    var title = content.title;
    var preview = content.preview || "";
    var sections = content.sections;
    
    // 构建标题区
    var html = "<div class='content-section'><div class='section-title'><span>📖</span>" + title + "</div>";
    if (preview) html += "<p style='font-size:0.85rem;color:#718096;margin-bottom:10px;line-height:1.6;'>" + preview + "</p></div>";
    
    // 构建各区内容
    for (var i = 0; i < sections.length; i++) {
      html += this.renderSection(sections[i], dayData.day, subject, i);
    }
    
    // 添加手写板
    html += this.renderWhiteboard(subject);
    
    document.getElementById("dayContent").innerHTML = html;
    document.getElementById("dayContent").className = "day-content active";
    
    // 重新绑定事件
    this.bindSectionEvents(dayData.day, subject);
  },
  
  renderSection: function(section, day, subject, sectionIdx) {
    var html = "<div class='content-section'>";
    
    switch(section.type) {
      case "objectives":
        html += "<div class='objectives-card'><div class='obj-header'><span>🎯</span>" + (section.title || "今日学习目标") + "</div><div class='obj-body'>";
        for (var oi = 0; oi < section.items.length; oi++) {
          html += "<div class='obj-item'><div class='obj-icon'>" + (section.items[oi].icon || "📌") + "</div><div class='obj-text'><strong>" + section.items[oi].label + "</strong><br><span style='font-size:0.82rem;color:#4A5568;'>" + section.items[oi].desc + "</span></div></div>";
        }
        if (section.why) html += "<div class='obj-why'>💡 <strong>为什么学这个？</strong><br>" + section.why + "</div>";
        html += "</div>";
        break;
      case "mindmap":
        html += "<div class='mindmap-card'><div class='section-title'><span>🧠</span>" + (section.title || "知识结构") + "</div>";
        html += "<div class='mindmap-node center'>" + section.center + "</div>";
        for (var mi = 0; mi < section.branches.length; mi++) {
          html += "<div class='mindmap-branch'><div class='branch-label'>" + section.branches[mi].label + "</div>";
          for (var mj = 0; mj < section.branches[mi].items.length; mj++) {
            html += "<div class='branch-item'>" + section.branches[mi].items[mj] + "</div>";
          }
          html += "</div>";
        }
        html += "</div>";
        break;
      case "knowledge":
        html += "<div class='section-title'><span>📝</span>" + (section.title || "知识点") + "</div>";
        html += "<div class='knowledge-card'><div class='body'>" + section.body + "</div></div>";
        break;
        
      case "poem":
        html += "<div class='section-title'><span>📜</span>" + (section.title || "古诗") + "</div>";
        html += "<div class='poem-card'>";
        html += "<div class='poem-title'>" + section.poem + "</div>";
        html += "<div class='poem-author'>" + section.author + "</div>";
        html += "<div class='poem-content'>" + section.content + "</div>";
        if (section.translation) html += "<div class='poem-translation'>" + section.translation + "</div>";
        html += "</div>";
        break;
        
      case "phonetic":
        html += "<div class='section-title'><span>🔊</span>" + (section.title || "音标") + "</div>";
        html += "<div class='phonetic-card'>";
        for (var p = 0; p < section.items.length; p++) {
          html += "<div class='phonetic-item'><div class='symbol'>" + section.items[p].symbol + "</div><div class='example'>" + section.items[p].example + "</div>";
          if (section.items[p].compare) html += "<div style='font-size:0.72rem;color:#718096;margin-top:2px;'>" + section.items[p].compare + "</div>";
          html += "</div>";
        }
        html += "</div>";
        break;
        
      case "math-formula":
        html += "<div class='section-title'><span>🧮</span>" + (section.title || "公式") + "</div>";
        html += "<div class='math-formula'>" + section.formula + "<div class='explain'>" + section.explain + "</div></div>";
        break;
        
      case "math-example":
        html += "<div class='section-title'><span>✏️</span>" + (section.title || "例题") + "</div>";
        html += "<div class='math-example'><div style='font-weight:700;margin-bottom:4px;'>" + section.content + "</div>";
        if (section.steps) html += section.steps;
        html += "</div>";
        break;
        
      case "practice":
        html += "<div class='section-title'><span>📝</span>" + (section.title || "练习题") + "</div>";
        for (var q = 0; q < section.questions.length; q++) {
          var qData = section.questions[q];
          html += "<div class='practice-box'>";
          html += "<div class='question'>" + qData.q + "</div>";
          if (qData.hint) html += "<div class='hint' onclick=\"this.nextElementSibling.style.display='block'\">💡 查看提示</div><div class='answer-reveal'><strong>提示：</strong>" + qData.hint + "</div>";
          if (qData.answer) html += "<div class='hint' style='color:#52C41A;' onclick=\"this.nextElementSibling.style.display='block'\">✅ 查看答案</div><div class='answer-reveal'><strong>答案：</strong>" + qData.answer + "</div>";
          html += "</div>";
        }
        break;
        
      case "quiz":
        html += "<div class='section-title'><span>" + (section.title.includes("测验")?"📝":"❓") + "</span>" + (section.title || "小测验") + "</div>";
        for (var qz = 0; qz < section.questions.length; qz++) {
          var q = section.questions[qz];
          html += "<div class='quiz-card' data-quiz='" + qz + "'>";
          html += "<div class='question'>" + q.q + "</div>";
          html += "<div class='quiz-options'>";
          for (var o = 0; o < q.options.length; o++) {
            html += "<div class='quiz-option' data-opt='" + o + "' data-correct='" + (o === q.answer) + "'>" + q.options[o] + "</div>";
          }
          html += "</div><div class='quiz-result'></div></div>";
        }
        break;
        
      case "task":
        html += "<div class='section-title'><span>✅</span>" + (section.title || "任务清单") + "</div>";
        html += "<ul class='task-list'>";
        var dayStatus = this.progress[day] || {};
        var doneTasks = dayStatus[subject] || [];
        var offset = 0;
        for (var sc2 = 0; sc2 < sectionIdx; sc2++) {
          var s = this.getDayData(day);
          if (s && s.subjects[subject].sections[sc2].type === "task") {
            offset += s.subjects[subject].sections[sc2].tasks.length;
          }
        }
        for (var t = 0; t < section.tasks.length; t++) {
          var task = section.tasks[t];
          var isDone = doneTasks.indexOf(offset + t) > -1;
          html += "<li class='task-item" + (isDone ? " done" : "") + "' data-day='" + day + "' data-subject='" + subject + "' data-idx='" + (offset + t) + "'>";
          html += "<div class='task-check'>" + (isDone ? "✓" : "") + "</div>";
          html += "<div class='task-text'><span class='tag tag-" + task.tag + "'>" + this.getTagName(task.tag) + "</span>" + task.text + "</div>";
          html += "</li>";
        }
        html += "</ul>";
        break;
    }
    
    html += "</div>";
    return html;
  },
  
  getTagName: function(tag) {
    var map = {read:"朗读",write:"抄写",copy:"抄写",recite:"背诵",practice:"练习",video:"视频",audio:"音频"};
    return map[tag] || tag;
  },
  
  renderWhiteboard: function(subject) {
    var height = subject === "math" ? "280px" : "200px";
    return "<div class='whiteboard-section content-section'><div class='section-title'><span>✍️</span>手写板（iPad可用笔书写）</div>" +
      "<div class='whiteboard-toolbar'>" +
      "<button class='active' data-color='#2D3748'>⚫黑</button>" +
      "<button data-color='#D94A4A'>🔴红</button>" +
      "<button data-color='#2B6CB0'>🔵蓝</button>" +
      "<button data-color='#38A169'>🟢绿</button>" +
      "<button id='clearBoard'>🗑️清除</button>" +
      "</div>" +
      "<canvas class='whiteboard-canvas' id='whiteboard' style='height:" + height + "'></canvas></div>";
  },
  
  bindSectionEvents: function(day, subject) {
    var self = this;
    
    // 任务点击
    var tasks = document.querySelectorAll(".task-item");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].addEventListener("click", function(e) {
        var d = parseInt(this.getAttribute("data-day"));
        var s = this.getAttribute("data-subject");
        var idx = parseInt(this.getAttribute("data-idx"));
        self.toggleTask(d, s, idx);
      });
    }
    
    // 测验选项点击
    var quizOpts = document.querySelectorAll(".quiz-option");
    for (var j = 0; j < quizOpts.length; j++) {
      quizOpts[j].addEventListener("click", function(e) {
        var parent = this.closest(".quiz-card");
        var result = parent.querySelector(".quiz-result");
        var isCorrect = this.getAttribute("data-correct") === "true";
        // 清除其他选中
        var siblings = parent.querySelectorAll(".quiz-option");
        for (var k = 0; k < siblings.length; k++) {
          siblings[k].className = siblings[k].className.replace(" selected", "");
        }
        this.className += " selected";
        if (isCorrect) {
          this.className += " correct";
          result.className = "quiz-result correct";
          result.textContent = "✅ 正确！";
        } else {
          this.className += " wrong";
          result.className = "quiz-result wrong";
          result.textContent = "❌ 再想想哦~";
          // 显示正确答案
          for (var k2 = 0; k2 < siblings.length; k2++) {
            if (siblings[k2].getAttribute("data-correct") === "true") {
              siblings[k2].className += " correct";
            }
          }
        }
      });
    }
    
    // 手写板
    this.initWhiteboard();
  },
  
  initWhiteboard: function() {
    var canvas = document.getElementById("whiteboard");
    if (!canvas) return;
    
    var ctx = canvas.getContext("2d");
    var drawing = false;
    var color = "#2D3748";
    var lineWidth = 3;
    
    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    }
    resize();
    window.addEventListener("resize", resize);
    
    function getPos(e) {
      var rect = canvas.getBoundingClientRect();
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {x: clientX - rect.left, y: clientY - rect.top};
    }
    
    function startDraw(e) {
      e.preventDefault();
      drawing = true;
      var pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }
    
    function draw(e) {
      e.preventDefault();
      if (!drawing) return;
      var pos = getPos(e);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }
    
    function stopDraw(e) {
      drawing = false;
      ctx.beginPath();
    }
    
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("mouseleave", stopDraw);
    canvas.addEventListener("touchstart", startDraw, {passive: false});
    canvas.addEventListener("touchmove", draw, {passive: false});
    canvas.addEventListener("touchend", stopDraw);
    
    // 颜色切换
    var colorBtns = document.querySelectorAll(".whiteboard-toolbar button[data-color]");
    for (var i = 0; i < colorBtns.length; i++) {
      colorBtns[i].addEventListener("click", function() {
        var siblings = this.parentElement.querySelectorAll("button[data-color]");
        for (var j = 0; j < siblings.length; j++) siblings[j].className = "";
        this.className = "active";
        color = this.getAttribute("data-color");
      });
    }
    
    // 清除
    var clearBtn = document.getElementById("clearBoard");
    if (clearBtn) {
      clearBtn.addEventListener("click", function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }
  },
  
  renderProgress: function() {
    var totalTasks = 0;
    var totalDone = 0;
    var chineseDone = 0, mathDone = 0, englishDone = 0;
    var chineseTotal = 0, mathTotal = 0, englishTotal = 0;
    
    for (var d = 0; d < COURSE_DATA.length; d++) {
      var day = COURSE_DATA[d];
      if (!day) continue;
      var subjects = ["chinese","math","english"];
      for (var s = 0; s < subjects.length; s++) {
        var subj = subjects[s];
        var sections = day.subjects[subj].sections;
        for (var sec = 0; sec < sections.length; sec++) {
          if (sections[sec].type === "task" && sections[sec].tasks) {
            var cnt = sections[sec].tasks.length;
            totalTasks += cnt;
            if (subj === "chinese") chineseTotal += cnt;
            else if (subj === "math") mathTotal += cnt;
            else if (subj === "english") englishTotal += cnt;
          }
        }
      }
      var dayP = this.progress[day.day];
      if (dayP) {
        for (var s2 = 0; s2 < subjects.length; s2++) {
          var subj2 = subjects[s2];
          var done = (dayP[subj2] || []).length;
          totalDone += done;
          if (subj2 === "chinese") chineseDone += done;
          else if (subj2 === "math") mathDone += done;
          else if (subj2 === "english") englishDone += done;
        }
      }
    }
    
    var pct = totalTasks > 0 ? Math.round(totalDone / totalTasks * 100) : 0;
    var chPct = chineseTotal > 0 ? Math.round(chineseDone / chineseTotal * 100) : 0;
    var maPct = mathTotal > 0 ? Math.round(mathDone / mathTotal * 100) : 0;
    var enPct = englishTotal > 0 ? Math.round(englishDone / englishTotal * 100) : 0;
    
    document.getElementById("progressPanel").innerHTML =
      "<h3>📊 总学习进度</h3>" +
      "<div style='margin:6px 0'><div style='display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:2px;'><span>语文</span><span>" + chineseDone + "/" + chineseTotal + "</span></div><div class='progress-bar'><div class='fill chinese' style='width:" + chPct + "%'></div></div></div>" +
      "<div style='margin:6px 0'><div style='display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:2px;'><span>数学</span><span>" + mathDone + "/" + mathTotal + "</span></div><div class='progress-bar'><div class='fill math' style='width:" + maPct + "%'></div></div></div>" +
      "<div style='margin:6px 0'><div style='display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:2px;'><span>英语</span><span>" + englishDone + "/" + englishTotal + "</span></div><div class='progress-bar'><div class='fill english' style='width:" + enPct + "%'></div></div></div>" +
      "<div class='progress-stats'>总进度：" + totalDone + "/" + totalTasks + "（" + pct + "%）</div>";
  },
  
  switchSubject: function(subject) {
    this.currentSubject = subject;
    var dayData = this.getDayData(this.currentDay);
    if (dayData) {
      this.renderSubjectTabs(dayData);
      this.renderSubjectContent(dayData, subject);
    }
  },
  
  goToDay: function(day) {
    if (day < 1 || day > 30) return;
    this.currentDay = day;
    this.renderDay(day);
    this.renderDaySelector();
  },
  
  bindEvents: function() {
    var self = this;
    
    // 日期选择器点击（事件委托）
    document.getElementById("daySelector").addEventListener("click", function(e) {
      var dot = e.target.closest(".day-dot");
      if (dot) {
        var day = parseInt(dot.getAttribute("data-day"));
        self.goToDay(day);
      }
    });
    
    // 科目标签点击（事件委托）
    document.getElementById("subjectTabs").addEventListener("click", function(e) {
      var tab = e.target.closest(".subject-tab");
      if (tab) {
        self.switchSubject(tab.getAttribute("data-subject"));
      }
    });
    
    // 前一天
    document.getElementById("prevDay").addEventListener("click", function() {
      self.goToDay(self.currentDay - 1);
    });
    
    // 后一天
    document.getElementById("nextDay").addEventListener("click", function() {
      self.goToDay(self.currentDay + 1);
    });
    
    // 进度面板
    document.getElementById("showProgress").addEventListener("click", function() {
      var modal = document.getElementById("progressModal");
      modal.className = "modal-overlay show";
    });
    
    // 关闭模态框
    document.getElementById("progressModal").addEventListener("click", function(e) {
      if (e.target === this) this.className = "modal-overlay";
    });
  }
};

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", function() {
  App.init();
});

