/* ========================================
   追踪UI v2.0 - 三阶段打卡、录音、错题本、报告
   ======================================== */

// ---------- 增强任务渲染 ----------
// 替换App.renderSection中的task类型渲染
App.renderTaskEnhanced = function(section, day, subject, sectionIdx) {
  var offset = 0;
  var dayData = App.getDayData(day);
  if (!dayData) return "";
  var sections = dayData.subjects[subject].sections;
  for (var i = 0; i < sectionIdx; i++) {
    if (sections[i].type === "task" && sections[i].tasks) {
      offset += sections[i].tasks.length;
    }
  }
  
  var html = "<div class='content-section'>";
  html += "<div class='section-title'><span>✅</span>" + (section.title || "任务清单") + "</div>";
  
  // 阶段说明
  html += "<div style='display:flex;gap:6px;margin-bottom:8px;font-size:0.72rem;color:var(--text-light);'>" +
    "<span style='background:#E8F0FE;padding:2px 8px;border-radius:8px;'>📖 温习</span>" +
    "<span style='background:#FEF0F0;padding:2px 8px;border-radius:8px;'>✏️ 学习</span>" +
    "<span style='background:#F6FFED;padding:2px 8px;border-radius:8px;'>✅ 练习</span>" +
    "<span style='background:#F0F0FF;padding:2px 8px;border-radius:8px;'>🎤 录音</span>" +
    "</div>";
  
  html += "<ul class='task-list'>";
  
  for (var t = 0; t < section.tasks.length; t++) {
    var task = section.tasks[t];
    var taskIdx = offset + t;
    var stage = StudyTracker.getTaskStage(day, subject, taskIdx);
    var isComplete = StudyTracker.isTaskComplete(day, subject, taskIdx);
    
    html += "<li class='task-item-enhanced' style='background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:8px;'>";
    
    // 任务文本
    html += "<div style='display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;'>";
    html += "<span class='tag tag-" + task.tag + "' style='flex-shrink:0;'>" + App.getTagName(task.tag) + "</span>";
    html += "<span style='font-size:0.88rem;line-height:1.5;flex:1;'>" + task.text + "</span>";
    if (isComplete) html += "<span style='color:var(--success);font-size:0.8rem;flex-shrink:0;'>✅</span>";
    html += "</div>";
    
    // 三阶段按钮
    html += "<div style='display:flex;gap:4px;flex-wrap:wrap;'>";
    
    // 温习阶段
    html += "<button class='stage-btn " + (stage.review ? "done" : "") + "' data-day='" + day + "' data-subject='" + subject + "' data-idx='" + taskIdx + "' data-stage='review' style='" + this.stageBtnStyle(stage.review, "#E8F0FE","#4A90D9") + "'>📖 温习" + (stage.review ? " ✓" : "") + "</button>";
    
    // 学习阶段
    html += "<button class='stage-btn " + (stage.learn ? "done" : "") + "' data-day='" + day + "' data-subject='" + subject + "' data-idx='" + taskIdx + "' data-stage='learn' style='" + this.stageBtnStyle(stage.learn, "#FEF0F0","#D94A4A") + "'>✏️ 学习" + (stage.learn ? " ✓" : "") + "</button>";
    
    // 练习阶段
    html += "<button class='stage-btn " + (stage.practice ? "done" : "") + "' data-day='" + day + "' data-subject='" + subject + "' data-idx='" + taskIdx + "' data-stage='practice' style='" + this.stageBtnStyle(stage.practice, "#F6FFED","#52C41A") + "'>✅ 练习" + (stage.practice ? " ✓" : "") + "</button>";
    
    // 录音按钮（针对朗读/背诵/音频任务）
    if (task.tag === "audio" || task.tag === "recite" || task.tag === "read") {
      var rKey = day + "_" + subject + "_" + taskIdx;
      var hasRecord = StudyTracker.getRecordingUrl(rKey, "audio");
      html += "<button class='record-btn-sm " + (hasRecord ? "has-record" : "") + "' data-taskkey='" + rKey + "' data-type='audio' style='padding:6px 10px;border:none;border-radius:8px;background:" + (hasRecord ? "#F6FFED" : "#FFF0F0") + ";color:" + (hasRecord ? "#52C41A" : "#FF4D4F") + ";font-size:0.78rem;cursor:pointer;'>🎤 " + (hasRecord ? "已录音" : "录音") + "</button>";
    }
    
    html += "</div></li>";
  }
  
  html += "</ul></div>";
  return html;
};

// 阶段按钮样式
App.stageBtnStyle = function(done, bg, color) {
  return "padding:5px 10px;border:" + (done ? "1px solid " + color : "1px solid #E2E8F0") + ";border-radius:8px;background:" + (done ? bg : "white") + ";color:" + (done ? color : "#718096") + ";font-size:0.75rem;cursor:pointer;transition:all 0.2s;";
};

// ---------- 覆盖原任务渲染 ----------
App.renderSectionOriginal2 = App.renderSection;
App.renderSection = function(section, day, subject, sectionIdx) {
  if (section.type === "task") {
    return this.renderTaskEnhanced(section, day, subject, sectionIdx);
  }
  // 检查增强类型
  if (typeof App.renderEnhancedSection === 'function') {
    var enhancedTypes = ["timeline","visual-context","video","bar-chart","donut-chart",
                         "number-line","abs-demo","step-reveal","phonetic-enhanced",
                         "phonetic-compare","word-tree","mnemonic","fun-fact","speak-panel","flip-card"];
    if (enhancedTypes.indexOf(section.type) > -1) {
      return App.renderEnhancedSection(section);
    }
  }
  return this.renderSectionOriginal2(section, day, subject, sectionIdx);
};

// ---------- 绑定三阶段事件 ----------
App.bindTrackerEvents = function(day, subject) {
  var self = this;
  
  // 阶段按钮
  var stageBtns = document.querySelectorAll(".stage-btn");
  for (var i = 0; i < stageBtns.length; i++) {
    (function(btn) {
      btn.addEventListener("click", function(e) {
        e.stopPropagation();
        var d = parseInt(this.getAttribute("data-day"));
        var s = this.getAttribute("data-subject");
        var idx = parseInt(this.getAttribute("data-idx"));
        var stage = this.getAttribute("data-stage");
        var done = StudyTracker.toggleStage(d, s, idx, stage);
        // 更新样式
        var colors = {review:{bg:"#E8F0FE",c:"#4A90D9"}, learn:{bg:"#FEF0F0",c:"#D94A4A"}, practice:{bg:"#F6FFED",c:"#52C41A"}};
        var clr = colors[stage];
        this.style.cssText = App.stageBtnStyle(done, clr.bg, clr.c);
        this.textContent = (stage === "review" ? "📖 温习" : stage === "learn" ? "✏️ 学习" : "✅ 练习") + (done ? " ✓" : "");
        this.className = "stage-btn" + (done ? " done" : "");
        // 刷新进度
        App.renderSummary(App.getDayData(App.currentDay));
        App.renderProgress();
        App.renderDaySelector();
      });
    })(stageBtns[i]);
  }
  
  // 录音按钮
  var recordBtns = document.querySelectorAll(".record-btn-sm");
  for (var j = 0; j < recordBtns.length; j++) {
    (function(btn) {
      btn.addEventListener("click", function(e) {
        e.stopPropagation();
        var taskKey = this.getAttribute("data-taskkey");
        var type = this.getAttribute("data-type");
        
        if (StudyTracker.isRecording()) {
          StudyTracker.stopRecording();
          this.textContent = "🎤 录音";
          this.style.background = "#FFF0F0";
          this.style.color = "#FF4D4F";
          return;
        }
        
        // 检查是否有已有录音
        var hasUrl = StudyTracker.getRecordingUrl(taskKey, type);
        if (hasUrl) {
          // 播放或重新录制
          if (confirm("已有录音记录，点击确定重新录制，取消播放已有录音？")) {
            // 重新录制
            this.textContent = "⏹ 停止";
            this.style.background = "#FF4D4F";
            this.style.color = "white";
            var self2 = this;
            StudyTracker.startRecording(type, taskKey, function(url, blob) {
              self2.textContent = "🎤 已录音 ✓";
              self2.style.background = "#F6FFED";
              self2.style.color = "#52C41A";
              alert("✅ 录音成功！可继续完成其他任务。");
            });
          } else {
            // 播放已有录音
            var audio = new Audio(hasUrl);
            audio.play();
          }
          return;
        }
        
        // 开始录音
        this.textContent = "⏹ 停止录音";
        this.style.background = "#FF4D4F";
        this.style.color = "white";
        var self3 = this;
        
        StudyTracker.startRecording(type, taskKey, function(url, blob) {
          if (url) {
            self3.textContent = "🎤 已录音 ✓";
            self3.style.background = "#F6FFED";
            self3.style.color = "#52C41A";
            alert("✅ 录音成功！背诵/朗读已保存。");
          }
        });
      });
    })(recordBtns[j]);
  }
};

// ---------- 生成每日学习报告 ----------
App.showDayReport = function(day) {
  var report = StudyTracker.generateDayReport(day);
  if (!report) {
    alert("暂无数据");
    return;
  }
  
  var pct = report.totalTasks > 0 ? Math.round(report.completedTasks / report.totalTasks * 100) : 0;
  var pctColor = pct >= 80 ? "#52C41A" : (pct >= 50 ? "#FAAD14" : "#FF4D4F");
  var pctEmoji = pct >= 80 ? "🌟" : (pct >= 50 ? "💪" : "📚");
  
  var html = "<div class='modal-handle'></div>";
  html += "<div class='modal-title'>" + pctEmoji + " 第" + day + "天学习报告</div>";
  
  // 总体进度
  html += "<div style='text-align:center;margin-bottom:16px;'>";
  html += "<div style='font-size:2rem;font-weight:800;color:" + pctColor + ";'>" + pct + "%</div>";
  html += "<div style='font-size:0.85rem;color:var(--text-light);'>完成度</div>";
  html += "<div class='progress-bar' style='margin:8px 0;'><div class='fill' style='width:" + pct + "%;background:" + pctColor + ";'></div></div>";
  html += "<div style='font-size:0.78rem;color:var(--text-light);'>";
  html += "任务：" + report.completedTasks + "/" + report.totalTasks + "项";
  if (report.recordings > 0) html += " · 🎤录音：" + report.recordings + "条";
  if (report.totalErrors > 0) html += " · ❌错题：" + report.totalErrors + "题（已复习" + report.reviewedErrors + "题）";
  html += "</div></div>";
  
  // 各科详情
  html += "<div style='margin-bottom:12px;'>";
  var subs = ["chinese","math","english"];
  var subjColors = {chinese:"#D94A4A", math:"#2B6CB0", english:"#38A169"};
  for (var s = 0; s < subs.length; s++) {
    var sub = report.subjects[subs[s]];
    if (!sub) continue;
    var subPct = sub.tasks > 0 ? Math.round(sub.completed / sub.tasks * 100) : 0;
    html += "<div style='margin:6px 0;padding:8px 12px;background:#FAFAFA;border-radius:8px;'>";
    html += "<div style='display:flex;justify-content:space-between;font-size:0.82rem;'>";
    html += "<span style='font-weight:600;color:" + subjColors[subs[s]] + ";'>" + sub.name + "</span>";
    html += "<span>" + sub.completed + "/" + sub.tasks + "（" + subPct + "%）</span>";
    html += "</div>";
    // 三阶段进度
    html += "<div style='display:flex;gap:4px;margin-top:4px;font-size:0.7rem;color:var(--text-light);'>";
    html += "<span>📖温习" + sub.stages.review + "</span>";
    html += "<span>✏️学习" + sub.stages.learn + "</span>";
    html += "<span>✅练习" + sub.stages.practice + "</span>";
    if (sub.errors > 0) html += "<span style='color:var(--danger);'>❌错" + sub.errors + "</span>";
    html += "</div></div>";
  }
  html += "</div>";
  
  // 错题本
  if (report.totalErrors > 0) {
    html += "<div style='margin-bottom:12px;'>";
    html += "<div style='font-size:0.9rem;font-weight:700;margin-bottom:6px;'>❌ 错题本（点击可标记已复习）</div>";
    for (var s = 0; s < subs.length; s++) {
      var errors = StudyTracker.getErrors(day, subs[s]);
      for (var e = 0; e < errors.length; e++) {
        var err = errors[e];
        html += "<div class='error-card' data-day='" + day + "' data-subject='" + subs[s] + "' data-idx='" + e + "' style='padding:10px;margin:6px 0;background:" + (err.reviewed ? "#F6FFED" : "#FFF2F0") + ";border-radius:8px;border-left:3px solid " + (err.reviewed ? "#52C41A" : "#FF4D4F") + ";cursor:pointer;'>";
        html += "<div style='font-size:0.82rem;'>" + err.question + "</div>";
        html += "<div style='display:flex;gap:12px;font-size:0.78rem;margin-top:4px;'>";
        html += "<span style='color:var(--danger);'>你的答案：" + err.wrongAnswer + "</span>";
        html += "<span style='color:var(--success);'>正确答案：" + err.correctAnswer + "</span>";
        if (err.reviewed) html += "<span style='color:var(--success);'>✅ 已复习</span>";
        else html += "<span style='color:var(--warning);'>⏳ 待复习</span>";
        html += "</div></div>";
      }
    }
    html += "</div>";
  }
  
  // 错题点击复习
  html += "<div style='text-align:center;'>";
  html += "<button onclick=\"var m=document.getElementById('reportModal');if(m)m.className='modal-overlay';\" style='padding:10px 24px;border:none;border-radius:8px;background:var(--primary);color:white;font-size:0.85rem;cursor:pointer;'>关闭报告</button>";
  html += "</div>";
  
  // 显示到模态框
  var modal = document.getElementById("reportModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "reportModal";
    modal.className = "modal-overlay";
    modal.innerHTML = "<div class='modal-content' id='reportContent'>" + html + "</div>";
    document.body.appendChild(modal);
  } else {
    document.getElementById("reportContent").innerHTML = html;
  }
  modal.className = "modal-overlay show";
  
  // 绑定错题点击事件
  setTimeout(function() {
    var errorCards = document.querySelectorAll(".error-card");
    for (var i = 0; i < errorCards.length; i++) {
      errorCards[i].addEventListener("click", function() {
        var d = parseInt(this.getAttribute("data-day"));
        var s = this.getAttribute("data-subject");
        var idx = parseInt(this.getAttribute("data-idx"));
        StudyTracker.markErrorReviewed(d, s, idx);
        this.style.background = "#F6FFED";
        this.style.borderLeftColor = "#52C41A";
        var spans = this.querySelectorAll("span");
        for (var k = 0; k < spans.length; k++) {
          if (spans[k].textContent.indexOf("待复习") > -1) spans[k].textContent = "✅ 已复习";
        }
        // 增加趣味反馈
        var feedbacks = ["👍 继续加油！", "🎉 你又进步了！", "💪 离学霸又近一步！", "🌟 错题不可怕，怕的是不改！"];
        var fb = feedbacks[Math.floor(Math.random() * feedbacks.length)];
        var tip = document.createElement("div");
        tip.style.cssText = "text-align:center;font-size:0.8rem;color:var(--success);margin-top:4px;animation:popIn 0.3s ease;";
        tip.textContent = fb;
        this.appendChild(tip);
        setTimeout(function() { tip.remove(); }, 2000);
      });
    }
  }, 100);
};

// ---------- 总学习报告 ----------
App.showOverallReport = function() {
  var stats = StudyTracker.getOverallStats();
  var totalDays = COURSE_DATA.length;
  var allPct = stats.totalTasks > 0 ? Math.round(stats.completedTasks / stats.totalTasks * 100) : 0;
  
  var html = "<div class='modal-handle'></div>";
  html += "<div class='modal-title'>📊 总学习报告</div>";
  
  // 统计卡片
  html += "<div style='display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;'>";
  html += "<div style='background:#EBF8FF;padding:12px;border-radius:8px;text-align:center;'><div style='font-size:1.3rem;font-weight:700;color:#2B6CB0;'>" + stats.daysDone + "/" + totalDays + "</div><div style='font-size:0.75rem;color:var(--text-light);'>完成天数</div></div>";
  html += "<div style='background:#F6FFED;padding:12px;border-radius:8px;text-align:center;'><div style='font-size:1.3rem;font-weight:700;color:#52C41A;'>" + allPct + "%</div><div style='font-size:0.75rem;color:var(--text-light);'>总完成度</div></div>";
  html += "<div style='background:#FEF0F0;padding:12px;border-radius:8px;text-align:center;'><div style='font-size:1.3rem;font-weight:700;color:#D94A4A;'>" + stats.errors + "</div><div style='font-size:0.75rem;color:var(--text-light);'>错题数</div></div>";
  html += "<div style='background:#F0FFF4;padding:12px;border-radius:8px;text-align:center;'><div style='font-size:1.3rem;font-weight:700;color:#38A169;'>" + stats.recordings + "</div><div style='font-size:0.75rem;color:var(--text-light);'>录音数</div></div>";
  html += "</div>";
  
  // 总进度条
  html += "<div style='margin-bottom:12px;'><div style='display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px;'><span>总进度</span><span>" + stats.completedTasks + "/" + stats.totalTasks + "</span></div>";
  html += "<div class='progress-bar'><div class='fill' style='width:" + allPct + "%;background:linear-gradient(90deg,#4A90D9,#52C41A);'></div></div></div>";
  
  // 鼓励语
  var msg = "";
  if (allPct >= 90) msg = "🌟 太棒了！你几乎完成了所有任务，新学期一定会突飞猛进！";
  else if (allPct >= 70) msg = "💪 做得很好！继续保持这种学习劲头，你就是学霸！";
  else if (allPct >= 50) msg = "📚 不错的开始！每天进步一点点，30天后你会感谢自己的努力！";
  else msg = "🎯 别灰心！学习是一场马拉松，慢一点没关系，关键是坚持！";
  html += "<div style='padding:12px;background:linear-gradient(135deg,#FFFAF0,#FFF5F5);border-radius:8px;font-size:0.85rem;line-height:1.6;margin-bottom:12px;'>" + msg + "</div>";
  
  html += "<button onclick=\"var m=document.getElementById('reportModal');if(m)m.className='modal-overlay';\" style='padding:10px 24px;border:none;border-radius:8px;background:var(--primary);color:white;font-size:0.85rem;cursor:pointer;display:block;margin:0 auto;'>关闭</button>";
  
  var modal = document.getElementById("reportModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "reportModal";
    modal.className = "modal-overlay";
    modal.innerHTML = "<div class='modal-content' id='reportContent'>" + html + "</div>";
    modal.addEventListener("click", function(e) { if (e.target === this) this.className = "modal-overlay"; });
    document.body.appendChild(modal);
  } else {
    document.getElementById("reportContent").innerHTML = html;
  }
  modal.className = "modal-overlay show";
};

// ---------- 绑定现有事件 ----------
// 覆盖原有bindSectionEvents以包含追踪事件
App.bindSectionEventsOriginal = App.bindSectionEvents;
App.bindSectionEvents = function(day, subject) {
  this.bindSectionEventsOriginal(day, subject);
  this.bindTrackerEvents(day, subject);
};

// 添加"生成报告"按钮到内容区底部
App.addReportButton = function() {
  var content = document.getElementById("dayContent");
  if (!content) return;
  // 避免重复添加
  if (document.getElementById("reportButton")) return;
  var btn = document.createElement("div");
  btn.id = "reportButton";
  btn.style.cssText = "margin:16px 0;text-align:center;";
  btn.innerHTML = "<button onclick=\"App.showDayReport(App.currentDay)\" style='padding:12px 28px;border:2px solid var(--primary);border-radius:12px;background:white;color:var(--primary);font-size:0.9rem;font-weight:600;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 8px rgba(74,144,217,0.15);'>📊 生成今日学习报告</button>";
  content.appendChild(btn);
};

// 覆盖renderSubjectContent以添加报告按钮
App.renderSubjectContentOriginal = App.renderSubjectContent;
App.renderSubjectContent = function(dayData, subject) {
  this.renderSubjectContentOriginal(dayData, subject);
  // 仅在当前内容的容器添加
  var self = this;
  setTimeout(function() {
    self.addReportButton();
  }, 50);
};

// ---------- 错题趣味讲解 ----------
App.funErrorExplanations = {
  "chinese": {
    "default": function(q, wrong, correct) {
      var tips = [
        "🤔 这道题考察的是基础知识哦，回忆一下课文内容就能找到答案~",
        "💡 遇到不会的题，试着用'排除法'——先排除明显错误的选项！",
        "📖 语文学习重在积累，把错题记下来，下次就不会再错啦！"
      ];
      return tips[Math.floor(Math.random() * tips.length)];
    }
  },
  "math": {
    "default": function(q, wrong, correct) {
      var tips = [
        "🧮 注意符号！正负号是数学的'红绿灯'，弄错了整个题就乱了。",
        "📐 试试'代入法'——把答案代回题目验算一下，看对不对？",
        "💡 速算小窍门：先算绝对值，再确定符号，就不容易错了！",
        "🔢 做数学题要一步一步来，跳步最容易出错！"
      ];
      return tips[Math.floor(Math.random() * tips.length)];
    }
  },
  "english": {
    "default": function(q, wrong, correct) {
      var tips = [
        "🔤 英语靠规律！想想今天学到的词根和拼读规律~",
        "🗣️ 英语是'说出来'的语言，把题目读一遍，答案可能就出来了！",
        "💡 遇到语法题，套用'公式'——主语+be动词+其他，缺什么补什么。",
        "🌍 英语单词有'家族'，想想这个词有没有兄弟姐妹？"
      ];
      return tips[Math.floor(Math.random() * tips.length)];
    }
  }
};

// 获取趣味讲解
App.getFunExplanation = function(subject, question, wrong, correct) {
  var subjectTips = App.funErrorExplanations[subject];
  if (subjectTips && subjectTips.default) {
    return subjectTips.default(question, wrong, correct);
  }
  return "💪 别灰心！错误是学习的好老师，记住正确答案，下次就对了！";
};

// 增强quiz渲染以支持错题追踪
// 修改quiz选项点击事件处理（在app-fix中已处理，这里补充错题追踪）
(function() {
  var origClick = null;
  document.addEventListener("click", function(e) {
    var opt = e.target.closest(".quiz-option");
    if (!opt) return;
    if (opt.getAttribute("data-tracked") === "true") return;
    opt.setAttribute("data-tracked", "true");
    
    var card = opt.closest(".quiz-card");
    if (!card) return;
    var resultDiv = card.querySelector(".quiz-result");
    var isCorrect = opt.getAttribute("data-correct") === "true";
    var qText = card.querySelector(".question") ? card.querySelector(".question").textContent : "";
    var correctOpt = card.querySelector(".quiz-option[data-correct='true']");
    var correctText = correctOpt ? correctOpt.textContent : "";
    
    if (!isCorrect) {
      // 记录错题
      var day = App.currentDay;
      var subject = App.currentSubject;
      // 获取quiz索引
      var quizCards = document.querySelectorAll(".quiz-card");
      var quizIdx = -1;
      for (var i = 0; i < quizCards.length; i++) {
        if (quizCards[i] === card) { quizIdx = i; break; }
      }
      
      StudyTracker.recordError(day, subject, quizIdx, qText, opt.textContent, correctText);
      
      // 显示趣味讲解
      var explanation = App.getFunExplanation(subject, qText, opt.textContent, correctText);
      setTimeout(function() {
        if (resultDiv) {
          resultDiv.innerHTML += "<div style='margin-top:6px;padding:8px;background:#FFFBE6;border-radius:6px;font-size:0.8rem;line-height:1.5;color:#975A16;'>" + explanation + "</div>";
        }
      }, 500);
    } else {
      // 正确时给鼓励
      var encouragements = ["🎉 正确！", "🌟 太棒了！", "👏 答对了！", "💪 你真聪明！", "✨ 完美！"];
      var enc = encouragements[Math.floor(Math.random() * encouragements.length)];
      setTimeout(function() {
        if (resultDiv) {
          resultDiv.innerHTML = enc + " 继续加油！";
        }
      }, 300);
    }
  }, true);
})();
