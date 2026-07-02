/* ========================================
   掌握度评估UI - 自评卡片 + 复习队列 + 家长看板
   ======================================== */

// ---------- 自评卡片（放在每科内容底部） ----------
App.MasteryUI = {
  // 插入自评卡片
  addAssessment: function(day, subject) {
    var content = document.getElementById("dayContent");
    if (!content) return;
    
    // 避免重复添加
    var existing = document.getElementById("mastery-card-" + subject);
    if (existing) existing.remove();
    
    var mastery = MasterySystem.getMastery(day, subject);
    var points = MasterySystem.knowledgePoints[subject] && MasterySystem.knowledgePoints[subject][day];
    
    var html = "<div id='mastery-card-" + subject + "' class='content-section'>";
    html += "<div class='section-title'><span>📊</span>自我评估：今天掌握了吗？</div>";
    html += "<div style='background:white;border:1px solid var(--border);border-radius:12px;padding:14px;'>";
    
    // 评级（星星）
    html += "<div style='margin-bottom:10px;'>";
    html += "<div style='font-size:0.82rem;font-weight:600;margin-bottom:6px;'>⭐ 掌握程度（点击星星自评）</div>";
    html += "<div style='display:flex;gap:4px;' id='rating-stars-" + subject + "'>";
    for (var i = 1; i <= 5; i++) {
      var filled = i <= mastery.rating;
      html += "<span class='rating-star' data-rating='" + i + "' data-subject='" + subject + "' style='font-size:1.6rem;cursor:pointer;transition:all 0.2s;" + (filled ? "color:#F6AD55;" : "color:#E2E8F0;") + "'>★</span>";
    }
    html += "</div>";
    if (mastery.rating > 0) {
      var labels = ["","需要努力","有点难","基本掌握","熟练掌握","完全掌握"];
      html += "<div style='font-size:0.78rem;color:var(--text-light);margin-top:2px;'>" + labels[mastery.rating] + "</div>";
    }
    html += "</div>";
    
    // 薄弱点选择
    if (points && points.length > 0) {
      html += "<div style='margin-bottom:10px;'>";
      html += "<div style='font-size:0.82rem;font-weight:600;margin-bottom:6px;'>🎯 哪些地方还有困难？（可多选）</div>";
      html += "<div style='display:flex;flex-wrap:wrap;gap:6px;' id='weak-tags-" + subject + "'>";
      for (var p = 0; p < points.length; p++) {
        var selected = mastery.weakTags && mastery.weakTags.indexOf(points[p]) > -1;
        html += "<span class='weak-tag' data-tag='" + points[p] + "' data-subject='" + subject + "' style='padding:4px 12px;border-radius:16px;font-size:0.78rem;cursor:pointer;transition:all 0.2s;background:" + (selected ? "#FEF0F0" : "#F7FAFC") + ";color:" + (selected ? "#D94A4A" : "#718096") + ";border:1px solid " + (selected ? "#FED7D7" : "#E2E8F0") + ";'>" + points[p] + "</span>";
      }
      html += "</div></div>";
    }
    
    // 提交按钮
    var hasRating = mastery.rating > 0;
    html += "<button class='submit-mastery' data-subject='" + subject + "' style='padding:8px 20px;border:none;border-radius:8px;background:" + (hasRating ? "var(--success)" : "var(--primary)") + ";color:white;font-size:0.82rem;font-weight:600;cursor:pointer;width:100%;'>" + (hasRating ? "✅ 已评估（点击更新）" : "📝 提交评估") + "</button>";
    
    html += "</div></div>";
    content.appendChild(this.createDummyElement(html));
    
    // 绑定事件
    this.bindStarEvents(day, subject);
    this.bindTagEvents(day, subject);
    this.bindSubmitEvent(day, subject);
  },
  
  createDummyElement: function(html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.firstElementChild;
  },
  
  // 绑定星星事件
  bindStarEvents: function(day, subject) {
    var stars = document.querySelectorAll("#rating-stars-" + subject + " .rating-star");
    for (var i = 0; i < stars.length; i++) {
      stars[i].addEventListener("click", function() {
        var rating = parseInt(this.getAttribute("data-rating"));
        var subj = this.getAttribute("data-subject");
        var allStars = document.querySelectorAll("#rating-stars-" + subj + " .rating-star");
        for (var s = 0; s < allStars.length; s++) {
          var r = parseInt(allStars[s].getAttribute("data-rating"));
          allStars[s].style.color = r <= rating ? "#F6AD55" : "#E2E8F0";
        }
        // 暂存评分
        this.closest(".content-section").setAttribute("data-temp-rating", rating);
      });
    }
  },
  
  // 绑定标签事件
  bindTagEvents: function(day, subject) {
    var tags = document.querySelectorAll("#weak-tags-" + subject + " .weak-tag");
    for (var i = 0; i < tags.length; i++) {
      tags[i].addEventListener("click", function() {
        var isSelected = this.style.background === "rgb(254, 240, 240)" || this.style.background === "#FEF0F0";
        if (isSelected) {
          this.style.background = "#F7FAFC";
          this.style.color = "#718096";
          this.style.borderColor = "#E2E8F0";
        } else {
          this.style.background = "#FEF0F0";
          this.style.color = "#D94A4A";
          this.style.borderColor = "#FED7D7";
        }
      });
    }
  },
  
  // 绑定提交事件
  bindSubmitEvent: function(day, subject) {
    var btn = document.querySelector(".submit-mastery[data-subject='" + subject + "']");
    if (!btn) return;
    btn.addEventListener("click", function() {
      var subj = this.getAttribute("data-subject");
      
      // 获取评分
      var card = this.closest(".content-section");
      var tempRating = card.getAttribute("data-temp-rating");
      var rating = tempRating ? parseInt(tempRating) : 0;
      
      // 如果没有评分，默认可选
      if (rating === 0) {
        // 检查是否有已选的星星
        var selectedStars = document.querySelectorAll("#rating-stars-" + subj + " .rating-star[style*='#F6AD55']");
        if (selectedStars.length > 0) {
          rating = selectedStars.length;
        }
      }
      
      if (rating === 0) {
        alert("请先点击星星选择掌握程度哦~");
        return;
      }
      
      // 获取选中的薄弱点
      var weakTags = [];
      var tags = document.querySelectorAll("#weak-tags-" + subj + " .weak-tag");
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].style.background === "#FEF0F0" || tags[i].style.background === "rgb(254, 240, 240)") {
          weakTags.push(tags[i].getAttribute("data-tag"));
        }
      }
      
      // 提交到系统
      MasterySystem.submitRating(day, subj, rating, weakTags);
      
      // 反馈
      var labels = ["","💪 没关系，明天再复习！","📚 再加把劲！","👍 基本掌握，再巩固一下！","🌟 掌握得不错！","🎉 完全掌握！太棒了！"];
      var feedback = labels[rating] || "已记录！";
      var needsReview = rating < 3 ? "\n⚠️ 系统已安排明天自动复习薄弱点" : (weakTags.length > 0 ? "\n📝 薄弱点已记录，明天会安排复习" : "");
      
      this.textContent = "✅ 已评估" + (rating >= 4 ? " 🎉" : " 💪");
      this.style.background = "var(--success)";
      
      alert(feedback + needsReview);
      
      // 刷新进度和报告
      App.renderSummary(App.getDayData(day));
      App.renderProgress();
    });
  }
};

// ---------- 次日复习队列 ----------
App.showReviewQueue = function(day) {
  var queue = MasterySystem.getReviewQueue(day);
  if (queue.length === 0) return null;
  
  var subjNames = {chinese:"语文", math:"数学", english:"英语"};
  
  var html = "<div class='content-section' style='background:linear-gradient(135deg,#FFF5F5,#FFFAF0);border-radius:12px;padding:14px;margin-bottom:12px;border:1px solid #FED7D7;'>";
  html += "<div style='display:flex;align-items:center;gap:8px;margin-bottom:8px;'>";
  html += "<span style='font-size:1.2rem;'>🔄</span>";
  html += "<span style='font-weight:700;font-size:0.9rem;color:#C53030;'>需要先复习前面的薄弱内容</span>";
  html += "</div>";
  
  for (var i = 0; i < queue.length; i++) {
    var item = queue[i];
    var dayData = App.getDayData(item.day);
    var subjectTitle = dayData ? dayData.subjects[item.subject].title : (subjNames[item.subject] || item.subject);
    var weakTags = item.mastery.weakTags || [];
    
    html += "<div style='display:flex;align-items:center;gap:8px;padding:8px;background:white;border-radius:8px;margin-bottom:6px;border:1px solid #FED7D7;'>";
    html += "<span style='font-size:0.7rem;background:#FEF0F0;color:#D94A4A;padding:2px 8px;border-radius:8px;font-weight:600;flex-shrink:0;'>第" + item.day + "天</span>";
    html += "<div style='flex:1;'>";
    html += "<div style='font-size:0.82rem;font-weight:600;color:var(--text);'>" + subjNames[item.subject] + "：" + subjectTitle.substring(0,20) + "</div>";
    if (weakTags.length > 0) {
      html += "<div style='display:flex;gap:4px;flex-wrap:wrap;margin-top:4px;'>";
      for (var t = 0; t < weakTags.length; t++) {
        html += "<span style='font-size:0.7rem;background:#FFF5F5;color:#D94A4A;padding:1px 8px;border-radius:6px;'>" + weakTags[t] + "</span>";
      }
      html += "</div>";
    }
    html += "</div>";
    html += "<button onclick=\"App.goToDay(" + item.day + ")\" style='padding:6px 14px;border:1px solid var(--primary);border-radius:8px;background:white;color:var(--primary);font-size:0.75rem;cursor:pointer;flex-shrink:0;'>去复习</button>";
    html += "</div>";
  }
  
  html += "<div style='font-size:0.75rem;color:var(--text-light);margin-top:6px;text-align:center;'>💡 先复习再学新内容，学习效果更好哦！</div>";
  html += "</div>";
  
  return html;
};

// ---------- 在renderSubjectContent中注入自评卡片 ----------
App.renderSubjectContentOrig2 = App.renderSubjectContent;
App.renderSubjectContent = function(dayData, subject) {
  this.renderSubjectContentOrig2(dayData, subject);
  
  var day = dayData.day;
  
  // 延迟添加自评卡片（等DOM渲染完成）
  var self = this;
  setTimeout(function() {
    // 添加复习队列（只在打开新一天的内容时显示）
    if (subject === self.currentSubject) {
      var reviewHTML = App.showReviewQueue(day);
      if (reviewHTML) {
        var content = document.getElementById("dayContent");
        if (content && !document.getElementById("review-queue")) {
          var reviewDiv = document.createElement("div");
          reviewDiv.id = "review-queue";
          reviewDiv.innerHTML = reviewHTML;
          content.insertBefore(reviewDiv, content.firstChild);
        }
      }
    }
    
    // 添加自评卡片
    App.MasteryUI.addAssessment(day, subject);
  }, 100);
};

// ---------- 家长看板 ----------
App.showParentDashboard = function() {
  var stats = MasterySystem.getOverallStats();
  var trackStats = StudyTracker.getOverallStats();
  
  // 获取复习队列
  var allWeak = MasterySystem.getAllWeakPoints();
  var subjNames = {chinese:"语文", math:"数学", english:"英语"};
  
  var html = "<div class='modal-handle'></div>";
  html += "<div class='modal-title'>👨‍👩‍👧 家长学习看板</div>";
  
  // 总体概况卡片
  html += "<div style='display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;'>";
  html += "<div style='background:#EBF8FF;border-radius:8px;padding:12px;text-align:center;'><div style='font-size:1.5rem;font-weight:800;color:#2B6CB0;'>" + trackStats.daysDone + "</div><div style='font-size:0.75rem;color:var(--text-light);'>已完成天数</div></div>";
  html += "<div style='background:#F6FFED;border-radius:8px;padding:12px;text-align:center;'><div style='font-size:1.5rem;font-weight:800;color:#52C41A;'>" + trackStats.completedTasks + "</div><div style='font-size:0.75rem;color:var(--text-light);'>已完成任务</div></div>";
  html += "<div style='background:#FFFAF0;border-radius:8px;padding:12px;text-align:center;'><div style='font-size:1.5rem;font-weight:800;color:#DD6B20;'>" + stats.avgRating + "</div><div style='font-size:0.75rem;color:var(--text-light);'>平均掌握度(/5)</div></div>";
  html += "<div style='background:#FFF5F5;border-radius:8px;padding:12px;text-align:center;'><div style='font-size:1.5rem;font-weight:800;color:#E53E3E;'>" + stats.totalWeakTags + "</div><div style='font-size:0.75rem;color:var(--text-light);'>薄弱知识点</div></div>";
  html += "</div>";
  
  // 掌握度分布
  html += "<div style='margin-bottom:12px;'>";
  html += "<div style='font-size:0.82rem;font-weight:600;margin-bottom:6px;'>📈 掌握度分布</div>";
  var masteredPct = stats.total > 0 ? Math.round(stats.mastered / stats.total * 100) : 0;
  var weakPct = stats.total > 0 ? Math.round(stats.weak / stats.total * 100) : 0;
  var learningPct = stats.total > 0 ? Math.round((stats.total - stats.mastered - stats.weak) / stats.total * 100) : 0;
  
  html += "<div style='display:flex;height:12px;border-radius:6px;overflow:hidden;margin-bottom:6px;'>";
  html += "<div style='flex:" + masteredPct + ";background:#52C41A;transition:flex 0.5s;'></div>";
  html += "<div style='flex:" + learningPct + ";background:#F6AD55;transition:flex 0.5s;'></div>";
  html += "<div style='flex:" + weakPct + ";background:#FC8181;transition:flex 0.5s;'></div>";
  html += "</div>";
  html += "<div style='display:flex;gap:12px;font-size:0.72rem;color:var(--text-light);'>";
  html += "<span><span style='display:inline-block;width:8px;height:8px;border-radius:2px;background:#52C41A;'></span> 已掌握 " + stats.mastered + "</span>";
  html += "<span><span style='display:inline-block;width:8px;height:8px;border-radius:2px;background:#F6AD55;'></span> 学习中 " + (stats.total - stats.mastered - stats.weak) + "</span>";
  html += "<span><span style='display:inline-block;width:8px;height:8px;border-radius:2px;background:#FC8181;'></span> 需加强 " + stats.weak + "</span>";
  html += "</div></div>";
  
  // 薄弱知识点清单
  if (allWeak.length > 0) {
    html += "<div style='margin-bottom:12px;'>";
    html += "<div style='font-size:0.82rem;font-weight:600;margin-bottom:6px;'>⚠️ 薄弱知识点清单（需重点关注）</div>";
    for (var i = 0; i < allWeak.length; i++) {
      var w = allWeak[i];
      html += "<div style='background:#FFF5F5;border-radius:8px;padding:8px 12px;margin-bottom:6px;border-left:3px solid #FC8181;'>";
      html += "<div style='display:flex;justify-content:space-between;font-size:0.8rem;'>";
      html += "<span style='font-weight:600;'>第" + w.day + "天 " + subjNames[w.subject] + "</span>";
      html += "<span>掌握度：" + w.rating + "/5</span>";
      html += "</div>";
      html += "<div style='display:flex;gap:4px;flex-wrap:wrap;margin-top:4px;'>";
      for (var t = 0; t < w.tags.length; t++) {
        html += "<span style='font-size:0.7rem;background:#FEF0F0;color:#D94A4A;padding:1px 8px;border-radius:6px;'>" + w.tags[t] + "</span>";
      }
      html += "</div></div>";
    }
    html += "</div>";
  } else {
    html += "<div style='background:#F6FFED;border-radius:8px;padding:10px;text-align:center;font-size:0.82rem;color:#52C41A;margin-bottom:12px;'>🎉 目前没有薄弱知识点，继续保持！</div>";
  }
  
  // 明日学习建议
  var tomorrow = App.currentDay + 1;
  html += "<div style='background:#EBF8FF;border-radius:8px;padding:12px;margin-bottom:12px;'>";
  html += "<div style='font-size:0.82rem;font-weight:600;margin-bottom:4px;'>📋 明日学习建议（第" + tomorrow + "天）</div>";
  
  // 计算明天有多少复习项
  var tomorrowReviews = MasterySystem.getReviewQueue(tomorrow);
  if (tomorrowReviews.length > 0) {
    html += "<div style='font-size:0.8rem;color:var(--text);'>🔁 有 " + tomorrowReviews.length + " 项需要先复习再学新内容</div>";
  }
  html += "<div style='font-size:0.8rem;color:var(--text-light);margin-top:4px;'>📖 建议学习时间：语文40分钟 + 数学40分钟 + 英语40分钟</div>";
  html += "</div>";
  
  // 学习建议
  var advice = "";
  if (stats.weakRate > 30) {
    advice = "⚠️ 薄弱点较多，建议放慢进度，多花时间复习已学内容。学习不在于快，在于扎实。";
  } else if (stats.avgRating >= 4) {
    advice = "🌟 孩子掌握情况很好！可以适当增加拓展学习，比如看推荐的视频、做更多练习题。";
  } else if (stats.avgRating >= 3) {
    advice = "👍 整体进度正常。关注薄弱点的复习，每天花10分钟回顾前一天的内容。";
  } else {
    advice = "💪 刚开始学习遇到困难是正常的！鼓励孩子不要灰心，薄弱点标记后系统会自动安排复习。";
  }
  html += "<div style='background:#FFFAF0;border-radius:8px;padding:10px;font-size:0.82rem;line-height:1.6;margin-bottom:12px;color:#975A16;'>💡 " + advice + "</div>";
  
  html += "<button onclick=\"var m=document.getElementById('reportModal');if(m)m.className='modal-overlay';\" style='padding:10px 24px;border:none;border-radius:8px;background:var(--primary);color:white;font-size:0.85rem;cursor:pointer;display:block;margin:0 auto;'>关闭看板</button>";
  
  // 显示
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

// 添加家长看板按钮到底部导航
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 添加家长看板按钮
    var bottomNav = document.querySelector(".bottom-nav");
    if (bottomNav) {
      // 检查是否已有
      if (!document.querySelector("[data-parent-dashboard]")) {
        var btn = document.createElement("button");
        btn.setAttribute("data-parent-dashboard", "true");
        btn.innerHTML = "<span class='icon'>👨‍👩‍👧</span><span>家长看板</span>";
        btn.addEventListener("click", function() {
          if (typeof App.showParentDashboard === "function") {
            App.showParentDashboard();
          }
        });
        bottomNav.appendChild(btn);
      }
    }
  });
})();

// ---------- 在app-fix中也注册事件 ----------
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    if (typeof App !== "undefined" && typeof MasterySystem !== "undefined") {
      // 刷新进度时加入掌握度信息
      App.renderProgressOriginal2 = App.renderProgress;
      App.renderProgress = function() {
        if (typeof App.renderProgressOriginal2 === "function") {
          App.renderProgressOriginal2();
        }
        // 添加掌握度概览到底部
        var panel = document.getElementById("progressPanel");
        if (panel && !document.getElementById("mastery-overview")) {
          var stats = MasterySystem.getOverallStats();
          if (stats.total > 0) {
            var div = document.createElement("div");
            div.id = "mastery-overview";
            div.style.cssText = "margin-top:8px;padding-top:8px;border-top:1px solid var(--border);";
            div.innerHTML = "<div style='font-size:0.78rem;font-weight:600;margin-bottom:4px;'>📊 掌握度概况</div>" +
              "<div style='display:flex;gap:8px;font-size:0.72rem;color:var(--text-light);'>" +
              "<span>⭐ 平均" + stats.avgRating + "/5</span>" +
              "<span>✅ 已掌握" + stats.masterRate + "%</span>" +
              "<span>⚠️ 薄弱" + stats.weak + "项</span>" +
              "</div>";
            panel.appendChild(div);
          }
        }
      };
    }
  }, 1000);
});
