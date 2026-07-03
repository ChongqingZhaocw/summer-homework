/* ========================================
   学习报告系统 v1.0
   功能：生成学习报告 + 导出到微信
   ======================================== */
(function() {
  "use strict";

  // ===== 生成每日报告 =====
  function generateDayReport(dayNum) {
    var dayData = null;
    for (var i = 0; i < COURSE_DATA.length; i++) {
      if (COURSE_DATA[i].day === dayNum) {
        dayData = COURSE_DATA[i];
        break;
      }
    }
    if (!dayData) return null;

    var subjects = ["chinese", "math", "english"];
    var subjectNames = {chinese:"语文", math:"数学", english:"英语"};
    var progress = {};
    try { progress = JSON.parse(localStorage.getItem("summerProgress")) || {}; } catch(e) {}

    var dayProgress = progress[dayNum] || {};
    var totalTasks = 0, completedTasks = 0;

    var subjectReports = [];
    for (var s = 0; s < subjects.length; s++) {
      var subj = subjects[s];
      var subjData = dayData.subjects[subj];
      if (!subjData) continue;

      var taskCount = 0;
      if (subjData.sections) {
        for (var sec = 0; sec < subjData.sections.length; sec++) {
          if (subjData.sections[sec].type === "task" && subjData.sections[sec].tasks) {
            taskCount += subjData.sections[sec].tasks.length;
          }
        }
      }
      totalTasks += taskCount;
      var done = (dayProgress[subj] || []).length;
      completedTasks += done;
      subjectReports.push({
        name: subjectNames[subj],
        total: taskCount,
        done: Math.min(done, taskCount),
        pct: taskCount > 0 ? Math.round(done / taskCount * 100) : 0
      });
    }

    // 掌握度数据
    var masteryData = null;
    try {
      var raw = localStorage.getItem("summerMastery_" + dayNum);
      if (raw) masteryData = JSON.parse(raw);
    } catch(e) {}

    return {
      day: dayNum,
      date: dayData.date,
      weekday: dayData.weekday,
      focus: dayData.focus,
      totalTasks: totalTasks,
      completedTasks: Math.min(completedTasks, totalTasks),
      completionPct: totalTasks > 0 ? Math.round(completedTasks / totalTasks * 100) : 0,
      subjects: subjectReports,
      mastery: masteryData
    };
  }

  // ===== 生成总报告 =====
  function generateFullReport() {
    var days = [];
    var grandTotal = 0, grandDone = 0;
    var daysFullyDone = 0;

    for (var d = 1; d <= 7; d++) {
      var report = generateDayReport(d);
      if (report) {
        days.push(report);
        grandTotal += report.totalTasks;
        grandDone += report.completedTasks;
        if (report.completionPct >= 100) daysFullyDone++;
      }
    }

    // 掌握度统计
    var avgMastery = {chinese:0, math:0, english:0};
    var masteryCount = 0;
    for (var m = 0; m < days.length; m++) {
      if (days[m].mastery) {
        masteryCount++;
        for (var key in avgMastery) {
          if (days[m].mastery[key]) {
            avgMastery[key] += days[m].mastery[key];
          }
        }
      }
    }
    if (masteryCount > 0) {
      for (var key in avgMastery) avgMastery[key] = Math.round(avgMastery[key] / masteryCount);
    }

    // 录音统计
    var recordings = 0;
    try {
      var recData = JSON.parse(localStorage.getItem("summerRecordings")) || {};
      for (var key in recData) recordings += recData[key].length || 0;
    } catch(e) {}

    // 错题统计
    var errors = 0, reviewedErrors = 0;
    try {
      var errData = JSON.parse(localStorage.getItem("summerErrors")) || [];
      errors = errData.length || 0;
      for (var ei = 0; ei < errData.length; ei++) {
        if (errData[ei].reviewed) reviewedErrors++;
      }
    } catch(e) {}

    return {
      generatedAt: new Date().toLocaleString("zh-CN"),
      totalDays: days.length,
      daysFullyDone: daysFullyDone,
      grandTotal: grandTotal,
      grandDone: grandDone,
      grandPct: grandTotal > 0 ? Math.round(grandDone / grandTotal * 100) : 0,
      avgMastery: avgMastery,
      recordings: recordings,
      errors: errors,
      reviewedErrors: reviewedErrors,
      days: days
    };
  }

  // ===== 生成可分享的文本报告 =====
  function generateTextReport() {
    var report = generateFullReport();
    var lines = [];
    lines.push("📚 ===== 暑期作业学习报告 =====");
    lines.push("📅 生成时间：" + report.generatedAt);
    lines.push("");
    lines.push("📊 总体完成情况");
    lines.push("  总任务数：" + report.grandTotal);
    lines.push("  已完成：" + report.grandDone + "（" + report.grandPct + "%）");
    lines.push("  全部完成天数：" + report.daysFullyDone + "/" + report.totalDays);
    lines.push("  录音条数：" + report.recordings);
    lines.push("  错题数：" + report.errors + "（已复习" + report.reviewedErrors + "）");
    lines.push("");
    lines.push("📖 各科掌握度（满分5分）");
    if (report.avgMastery.chinese) lines.push("  语文：" + "⭐".repeat(report.avgMastery.chinese) + " (" + report.avgMastery.chinese + "/5)");
    if (report.avgMastery.math) lines.push("  数学：" + "⭐".repeat(report.avgMastery.math) + " (" + report.avgMastery.math + "/5)");
    if (report.avgMastery.english) lines.push("  英语：" + "⭐".repeat(report.avgMastery.english) + " (" + report.avgMastery.english + "/5)");
    lines.push("");
    lines.push("📅 每日详情");
    for (var d = 0; d < report.days.length; d++) {
      var day = report.days[d];
      var status = day.completionPct >= 100 ? "✅" : (day.completionPct > 0 ? "🔄" : "⭕");
      lines.push("  " + status + " 第" + day.day + "天（" + day.date + " " + day.weekday + "）");
      lines.push("     重点：" + day.focus);
      for (var s = 0; s < day.subjects.length; s++) {
        var sub = day.subjects[s];
        lines.push("     " + sub.name + "：" + sub.done + "/" + sub.total + "（" + sub.pct + "%）");
      }
    }
    lines.push("");
    lines.push("===== 报告结束 =====");
    return lines.join("\n");
  }

  // ===== 渲染家长看板 =====
  function renderParentDashboard() {
    var report = generateFullReport();

    var html = '<div class="content-section">';
    html += '<div class="section-title"><span>📊</span>家长看板 · 学习总报告</div>';
    html += '<div style="font-size:0.82rem;color:#718096;margin-bottom:12px;">生成时间：' + report.generatedAt + '</div>';

    // 总体进度环
    var pct = report.grandPct;
    var color = pct >= 100 ? "#38A169" : (pct >= 50 ? "#D69E2E" : "#E53E3E");
    html += '<div style="text-align:center;padding:20px;background:linear-gradient(135deg,#EBF8FF,#F0FFF4);border-radius:16px;margin-bottom:16px;">';
    html += '<div style="font-size:2.5rem;font-weight:700;color:' + color + ';">' + pct + '%</div>';
    html += '<div style="font-size:0.9rem;color:#4A5568;">总体完成率</div>';
    html += '<div style="display:flex;justify-content:center;gap:20px;margin-top:12px;font-size:0.85rem;">';
    html += '<div><span style="color:#38A169;font-weight:700;">' + report.grandDone + '</span>/' + report.grandTotal + ' 任务</div>';
    html += '<div>✅ ' + report.daysFullyDone + '/' + report.totalDays + ' 天全完成</div>';
    html += '</div></div>';

    // 各科掌握度
    html += '<div style="background:white;border-radius:12px;padding:14px;margin-bottom:12px;border:1px solid #E2E8F0;">';
    html += '<div style="font-weight:600;margin-bottom:10px;">📖 各科平均掌握度（满分5分）</div>';
    var subjects = [
      {key:"chinese", label:"语文", color:"#3182CE"},
      {key:"math", label:"数学", color:"#DD6B20"},
      {key:"english", label:"英语", color:"#38A169"}
    ];
    for (var s = 0; s < subjects.length; s++) {
      var sub = subjects[s];
      var val = report.avgMastery[sub.key] || 0;
      html += '<div style="margin-bottom:6px;">';
      html += '<div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:2px;">';
      html += '<span>' + sub.label + '</span><span>' + val + '/5</span></div>';
      html += '<div style="height:8px;background:#EDF2F7;border-radius:4px;overflow:hidden;">';
      html += '<div style="height:100%;width:' + (val/5*100) + '%;background:' + sub.color + ';border-radius:4px;"></div>';
      html += '</div></div>';
    }
    html += '</div>';

    // 错题和录音
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">';
    html += '<div style="background:white;border-radius:10px;padding:12px;text-align:center;border:1px solid #E2E8F0;">';
    html += '<div style="font-size:1.5rem;">❌</div><div style="font-size:1.2rem;font-weight:700;">' + report.errors + '</div>';
    html += '<div style="font-size:0.78rem;color:#718096;">错题（已复习' + report.reviewedErrors + '）</div></div>';
    html += '<div style="background:white;border-radius:10px;padding:12px;text-align:center;border:1px solid #E2E8F0;">';
    html += '<div style="font-size:1.5rem;">🎤</div><div style="font-size:1.2rem;font-weight:700;">' + report.recordings + '</div>';
    html += '<div style="font-size:0.78rem;color:#718096;">朗读录音</div></div>';
    html += '</div>';

    // 每日完成进度
    html += '<div style="background:white;border-radius:12px;padding:14px;border:1px solid #E2E8F0;">';
    html += '<div style="font-weight:600;margin-bottom:8px;">📅 每日完成进度</div>';
    for (var d = 0; d < report.days.length; d++) {
      var day = report.days[d];
      var icon = day.completionPct >= 100 ? "✅" : (day.completionPct > 0 ? "🔄" : "⭕");
      html += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #F7FAFC;">';
      html += '<div>' + icon + '</div>';
      html += '<div style="flex:1;font-size:0.82rem;">第' + day.day + '天 · ' + day.date + '</div>';
      html += '<div style="font-size:0.82rem;font-weight:600;color:' + (day.completionPct >= 100 ? "#38A169" : "#D69E2E") + ';">' + day.completionPct + '%</div>';
      html += '</div>';
    }
    html += '</div>';

    // 导出按钮
    html += '<div style="margin-top:14px;display:flex;gap:10px;">';
    html += '<button id="copyReportBtn" style="flex:1;padding:12px;background:#3182CE;color:white;border:none;border-radius:10px;font-size:0.9rem;font-weight:600;cursor:pointer;">📋 复制报告到微信</button>';
    html += '<button id="refreshReportBtn" style="padding:12px;background:#EDF2F7;border:none;border-radius:10px;font-size:0.9rem;cursor:pointer;">🔄 刷新</button>';
    html += '</div>';
    html += '<div id="copyResult" style="margin-top:8px;font-size:0.82rem;text-align:center;color:#38A169;display:none;"></div>';

    html += '<div style="margin-top:12px;padding:10px;background:#FFFAF0;border-radius:8px;font-size:0.78rem;color:#718096;line-height:1.6;">';
    html += '💡 点击「复制报告到微信」→ 打开微信发给家长 → 家长粘贴即可查看完整学习报告';
    html += '</div>';

    html += '</div>';
    return html;
  }

  // ===== 导出到window供app.js调用 =====
  window.ReportSystem = {
    generateFullReport: generateFullReport,
    generateTextReport: generateTextReport,
    renderParentDashboard: renderParentDashboard
  };

  // ===== 在科目标签旁添加家长看板按钮 =====
  function addDashboardButton() {
    var interval = setInterval(function() {
      var tabs = document.getElementById("subjectTabs");
      if (tabs) {
        clearInterval(interval);
        var btn = document.createElement("button");
        btn.className = "subject-tab dashboard-tab";
        btn.id = "dashboardTab";
        btn.innerHTML = "👨‍👩‍👦 家长看板";
        btn.style.cssText = "background:linear-gradient(135deg,#FFFAF0,#FEFCBF);border-color:#ECC94B;color:#744210;";
        btn.onclick = function() {
          var contentArea = document.getElementById("dayContent");
          if (contentArea) {
            contentArea.innerHTML = renderParentDashboard();
            document.getElementById("dayContent").className = "day-content active";
            // 绑定事件
            var copyBtn = document.getElementById("copyReportBtn");
            if (copyBtn) {
              copyBtn.onclick = function() {
                var text = generateTextReport();
                // 尝试复制到剪贴板
                if (navigator.clipboard && navigator.clipboard.writeText) {
                  navigator.clipboard.writeText(text).then(function() {
                    var result = document.getElementById("copyResult");
                    result.style.display = "block";
                    result.textContent = "✅ 已复制！切换到微信粘贴发送给家长";
                    result.style.color = "#38A169";
                    setTimeout(function(){ result.style.display = "none"; }, 5000);
                  }).catch(function() {
                    fallbackCopy(text);
                  });
                } else {
                  fallbackCopy(text);
                }
              };
            }
            var refreshBtn = document.getElementById("refreshReportBtn");
            if (refreshBtn) {
              refreshBtn.onclick = function() {
                document.getElementById("dayContent").innerHTML = renderParentDashboard();
              };
            }
          }
        };
        tabs.appendChild(btn);
      }
    }, 1000);
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      var result = document.getElementById("copyResult");
      result.style.display = "block";
      result.textContent = "✅ 已复制！切换到微信粘贴发送给家长";
      result.style.color = "#38A169";
      setTimeout(function(){ result.style.display = "none"; }, 5000);
    } catch(e) {
      // 显示文本让用户手动复制
      showTextForCopy(text);
    }
    document.body.removeChild(ta);
  }

  function showTextForCopy(text) {
    var overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;";
    overlay.innerHTML = '<div style="background:white;border-radius:16px;padding:20px;width:90%;max-width:400px;max-height:80vh;overflow:auto;">' +
      '<div style="font-weight:700;margin-bottom:10px;">📋 请复制下方报告</div>' +
      '<textarea style="width:100%;height:200px;font-size:0.75rem;padding:8px;border:1px solid #E2E8F0;border-radius:8px;" readonly>' + text + '</textarea>' +
      '<button onclick="this.parentElement.parentElement.remove()" style="width:100%;padding:10px;background:#3182CE;color:white;border:none;border-radius:8px;margin-top:8px;font-size:0.9rem;">关闭</button></div>';
    document.body.appendChild(overlay);
    // 自动选中
    var ta = overlay.querySelector("textarea");
    if (ta) { ta.focus(); ta.select(); }
  }

  // 等待DOM加载
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addDashboardButton);
  } else {
    addDashboardButton();
  }
})();
