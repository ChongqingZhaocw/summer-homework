/* ========================================
   app-fix.js 最终版 - 含所有增强事件
   ======================================== */

document.addEventListener("DOMContentLoaded", function() {
  // 进度按钮
  var progressBtn = document.getElementById("showProgress");
  if (progressBtn) {
    progressBtn.addEventListener("click", function() {
      if (typeof App.showProgressModal === "function") {
        App.showProgressModal();
      }
    });
  }
  
  // 总报告按钮
  var overallBtn = document.getElementById("showOverallReport");
  if (overallBtn) {
    overallBtn.addEventListener("click", function() {
      if (typeof App.showOverallReport === "function") {
        App.showOverallReport();
      }
    });
  }
  
  // 家长看板按钮
  var parentBtn = document.getElementById("showParentDash");
  if (parentBtn) {
    parentBtn.addEventListener("click", function() {
      if (typeof App.showParentDashboard === "function") {
        App.showParentDashboard();
      } else {
        alert("家长看板加载中，请先完成一些课程后再查看");
      }
    });
  }
  
  // 掌握度按钮
  var masterBtn = document.getElementById("showMastery");
  if (masterBtn) {
    masterBtn.addEventListener("click", function() {
      // 跳转到当前科目的自评卡片
      var masteryCard = document.getElementById("mastery-card-" + App.currentSubject);
      if (masteryCard) {
        masteryCard.scrollIntoView({behavior: "smooth", block: "center"});
        masteryCard.style.animation = "funPop 0.5s ease";
        setTimeout(function() { masteryCard.style.animation = ""; }, 600);
      } else {
        // 如果没有自评卡片，提示完成学习任务后自评
        alert("💡 完成今天的学习任务后，每科内容底部会出现自评卡片，点击星星评估掌握程度！");
      }
    });
  }
});

// 简化App中的一些方法（减少重复）
if (typeof App !== "undefined") {
  // 确保showParentDashboard存在
  if (!App.showParentDashboard) {
    App.showParentDashboard = function() {
      alert("家长看板功能需要先完成一些学习任务才能生成数据哦~");
    };
  }
}

// 掌握度动画增强
setTimeout(function() {
  // 监听自评提交成功后的刷新
  var style = document.createElement("style");
  style.textContent = "@keyframes funPop { 0%{transform:scale(0.95);opacity:0.6;} 50%{transform:scale(1.02);} 100%{transform:scale(1);opacity:1;} }";
  document.head.appendChild(style);
}, 100);
