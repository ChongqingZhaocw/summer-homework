/* ========================================
   学习方法集成系统 v1.0
   自动根据每天内容推荐学习方法
   ======================================== */
(function() {
  "use strict";

  // ===== 方法-内容匹配规则 =====
  var methodRules = [
    {match:["chinese"], method:"sq3r", label:"📖 今天读课文，试试SQ3R阅读法！", desc:"浏览→提问→阅读→复述→复习，读一遍顶三遍"},
    {match:["math"], method:"feynman", label:"👨‍🏫 今天学数学公式，试试费曼学习法！", desc:"学完后假装给同学讲一遍——能讲清楚才是真懂"},
    {match:["english"], method:"palace", label:"🏛️ 今天背单词，试试记忆宫殿法！", desc:"把单词放在熟悉的地方，过一遍就记住"},
    {match:["chinese","math"], method:"pomodoro", label:"🍅 今天语文+数学，试试番茄工作法！", desc:"25分钟学语文→休息5分钟→25分钟学数学"},
    {match:["chinese","math","english"], method:"feynman-pomodoro", label:"⚡ 今天三科都有，试试番茄费曼组合拳！", desc:"番茄钟专注学→费曼法检验→休息巩固"},
    {match:["math","english"], method:"cornell", label:"📓 今天记笔记，试试康奈尔笔记法！", desc:"右栏记内容→左栏写关键词→底栏做总结"}
  ];

  // ===== 为每天推荐学习方法 =====
  function getMethodForDay(dayData) {
    if (!dayData || !dayData.subjects) return null;
    var subjects = Object.keys(dayData.subjects);
    if (subjects.length === 0) return null;

    // 找最匹配的规则
    for (var r = 0; r < methodRules.length; r++) {
      var rule = methodRules[r];
      var matchAll = true;
      for (var s = 0; s < rule.match.length; s++) {
        if (subjects.indexOf(rule.match[s]) === -1) {
          matchAll = false;
          break;
        }
      }
      if (matchAll) {
        // Check all subjects matched
        if (rule.match.length === subjects.length || rule.match.length >= 2) {
          return rule;
        }
      }
    }

    // 默认推荐：根据主要科目
    if (subjects.indexOf("chinese") > -1) return methodRules[0];
    if (subjects.indexOf("math") > -1) return methodRules[1];
    if (subjects.indexOf("english") > -1) return methodRules[2];
    return methodRules[3];
  }

  // ===== 渲染方法推荐卡片 =====
  function renderMethodTip(dayNum) {
    var dayData = null;
    for (var i = 0; i < COURSE_DATA.length; i++) {
      if (COURSE_DATA[i].day === dayNum) {
        dayData = COURSE_DATA[i];
        break;
      }
    }
    if (!dayData) return "";

    var rule = getMethodForDay(dayData);
    if (!rule) return "";
    var method = null;
    var allMethods = window.LearningMethods ? window.LearningMethods.getAll() : [];
    for (var m = 0; m < allMethods.length; m++) {
      if (allMethods[m].id === rule.method) {
        method = allMethods[m];
        break;
      }
    }

    var html = '<div class="method-tip-card" onclick="document.querySelector(\'.methods-tab\') && document.querySelector(\'.methods-tab\').click()">';
    html += '<div class="method-tip-icon">' + (method ? method.icon : "💡") + '</div>';
    html += '<div class="method-tip-body">';
    html += '<div class="method-tip-title">' + rule.label + '</div>';
    html += '<div class="method-tip-desc">' + rule.desc + '</div>';
    html += '</div>';
    html += '<div class="method-tip-arrow">👉</div>';
    html += '</div>';
    return html;
  }

  // ===== 样式 =====
  var style = document.createElement("style");
  style.textContent = `
    .method-tip-card {
      display: flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #FAF5FF, #EBF4FF);
      border: 1px solid #D6BCFA;
      border-radius: 12px;
      padding: 10px 14px;
      margin: 8px 0;
      cursor: pointer;
      transition: all 0.2s;
    }
    .method-tip-card:hover {
      border-color: #805AD5;
      transform: translateY(-1px);
    }
    .method-tip-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }
    .method-tip-body {
      flex: 1;
    }
    .method-tip-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: #553C9A;
    }
    .method-tip-desc {
      font-size: 0.75rem;
      color: #718096;
      margin-top: 2px;
    }
    .method-tip-arrow {
      font-size: 1rem;
      color: #805AD5;
    }
  `;
  document.head.appendChild(style);

  // ===== 挂载到渲染流程 =====
  var origRenderSubjectContent = App.renderSubjectContent;
  App.renderSubjectContent = function(dayData, subject) {
    origRenderSubjectContent.call(this, dayData, subject);

    // 在content的第一个子元素之前插入方法推荐
    var contentEl = document.getElementById("dayContent");
    if (contentEl && contentEl.firstChild) {
      var tip = renderMethodTip(dayData.day);
      if (tip) {
        contentEl.insertAdjacentHTML("afterbegin", tip);
      }
    }
  };

  console.log("💡 学习方法集成系统已加载");
})();
