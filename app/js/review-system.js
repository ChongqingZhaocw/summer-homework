/* ========================================
   艾宾浩斯复习提醒系统 v1.0
   功能：自动追踪背诵任务 → 在第2天和第3天提醒复习
   ======================================== */
(function() {
  "use strict";

  // ===== 从课程数据中提取所有背诵任务 =====
  function getReciteTasks() {
    var reciteMap = {};
    for (var d = 0; d < COURSE_DATA.length; d++) {
      var day = COURSE_DATA[d];
      if (!day) continue;
      var dayRecites = [];
      var subjects = ["chinese", "math", "english"];
      var subjectNames = {chinese:"语文", math:"数学", english:"英语"};
      for (var s = 0; s < subjects.length; s++) {
        var subj = subjects[s];
        var subjData = day.subjects[subj];
        if (!subjData || !subjData.sections) continue;
        for (var sec = 0; sec < subjData.sections.length; sec++) {
          var section = subjData.sections[sec];
          if (section.type === "task" && section.tasks) {
            for (var t = 0; t < section.tasks.length; t++) {
              if (section.tasks[t].tag === "recite") {
                dayRecites.push({
                  subject: subjectNames[subj],
                  text: section.tasks[t].text,
                  day: day.day
                });
              }
            }
          }
        }
      }
      if (dayRecites.length > 0) {
        reciteMap[day.day] = dayRecites;
      }
    }
    return reciteMap;
  }

  // ===== 获取当前天的需要复习的内容 =====
  function getDueReviews(currentDay) {
    var reciteMap = getReciteTasks();
    var dueItems = [];
    // 前两天和前三天
    var reviewDays = [currentDay - 1, currentDay - 2];
    for (var i = 0; i < reviewDays.length; i++) {
      var d = reviewDays[i];
      if (d >= 1 && reciteMap[d]) {
        dueItems.push({
          fromDay: d,
          items: reciteMap[d],
          label: d === currentDay - 1 ? "🔔 昨日背诵复习" : "📌 前日背诵复习"
        });
      }
    }
    return dueItems;
  }

  // ===== 渲染复习提醒 =====
  function renderReviewReminders(currentDay) {
    var due = getDueReviews(currentDay);
    if (due.length === 0) return "";

    var html = '<div class="review-reminder">';
    html += '<div class="review-header">🧠 <strong>艾宾浩斯记忆提醒</strong> · 今天需要复习的背诵内容</div>';

    for (var d = 0; d < due.length; d++) {
      var group = due[d];
      html += '<div class="review-group">';
      html += '<div class="review-group-label">' + group.label + '（第' + group.fromDay + '天）</div>';
      html += '<div class="review-items">';
      for (var i = 0; i < group.items.length; i++) {
        var item = group.items[i];
        html += '<div class="review-item">';
        html += '<div class="review-check" data-review="' + group.fromDay + "_" + i + '"></div>';
        html += '<div class="review-text"><span class="review-subject-tag">' + item.subject + '</span>';
        html += item.text + '</div></div>';
      }
      html += '</div></div>';
    }
    html += '<div style="margin-top:8px;display:flex;gap:8px;">';
    html += '<button class="review-btn" onclick="this.parentElement.parentElement.querySelectorAll(\'.review-check\').forEach(function(e){e.classList.add(\'done\');e.textContent=\'✓\';});updateReviewProgress();">✅ 全部已复习</button>';
    html += '<span style="font-size:0.75rem;color:#718096;align-self:center;">点击标记已复习</span>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  // ===== 保存复习进度 =====
  window.updateReviewProgress = function() {
    try {
      var progress = JSON.parse(localStorage.getItem("summerReviewProgress")) || {};
      var today = new Date().toDateString();
      if (!progress[today]) progress[today] = {};
      // 获取当前页面的day
      var dayEl = document.getElementById("dayNum");
      if (dayEl) {
        var dayMatch = dayEl.textContent.match(/\d+/);
        if (dayMatch) {
          var day = parseInt(dayMatch[0]);
          if (!progress[today][day]) progress[today][day] = true;
        }
      }
      localStorage.setItem("summerReviewProgress", JSON.stringify(progress));
    } catch(e) {}
  };

  // ===== 复习提醒样式注入 =====
  var style = document.createElement("style");
  style.textContent = `
    .review-reminder {
      background: linear-gradient(135deg, #FFFBEB, #FEF3C7);
      border: 2px solid #F59E0B;
      border-radius: 14px;
      padding: 14px 16px;
      margin: 10px 0 16px 0;
    }
    .review-header {
      font-size: 0.95rem;
      color: #92400E;
      margin-bottom: 10px;
    }
    .review-group {
      margin-bottom: 8px;
    }
    .review-group-label {
      font-size: 0.82rem;
      font-weight: 600;
      color: #B45309;
      margin-bottom: 4px;
    }
    .review-items {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .review-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      background: white;
      border-radius: 8px;
      font-size: 0.85rem;
      border: 1px solid #FDE68A;
    }
    .review-check {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #D97706;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
      color: white;
      cursor: pointer;
      transition: all 0.2s;
    }
    .review-check.done {
      background: #D97706;
      border-color: #D97706;
    }
    .review-subject-tag {
      display: inline-block;
      font-size: 0.65rem;
      background: #FEF3C7;
      color: #92400E;
      padding: 1px 6px;
      border-radius: 4px;
      margin-right: 4px;
      font-weight: 600;
    }
    .review-btn {
      padding: 6px 14px;
      background: #D97706;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
    }
    .review-btn:hover {
      background: #B45309;
    }
  `;
  document.head.appendChild(style);

  // ===== 挂载到App渲染流程 =====
  var origRenderDay = App.renderDay;
  App.renderDay = function(dayNum) {
    origRenderDay.call(this, dayNum);
    // 在内容顶部插入复习提醒
    var contentEl = document.getElementById("dayContent");
    if (contentEl) {
      var reminder = renderReviewReminders(dayNum);
      if (reminder) {
        // 在第一个子元素之前插入
        contentEl.insertAdjacentHTML("afterbegin", reminder);
      }
    }
  };

  console.log("🧠 复习提醒系统已加载");
})();
