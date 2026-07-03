/* ========================================
   学习方法系统 v1.0
   10种高效学习法 + 每日学习建议
   ======================================== */
(function() {
  "use strict";

  // ===== 10种学习方法数据 =====
  var methods = [
    {
      id: "feynman",
      icon: "👨‍🏫",
      title: "费曼学习法",
      subtitle: "最好的学习方法就是教给别人",
      color: "#3182CE",
      bg: "#EBF8FF",
      overview: "物理学家费曼发现：如果你不能简单地解释一件事，说明你还没真正理解它。",
      steps: [
        {num:"❶", text:"学一遍：先认真学一个知识点", detail:"比如学完《春》的拟人手法"},
        {num:"❷", text:"假装讲：合上书，假装给同学讲一遍", detail:"用最简单的语言说出来"},
        {num:"❸", text:"找漏洞：讲不下去的地方就是没懂", detail:"标记出来，翻书再看"},
        {num:"❹", text:"再简化：用更简单的比喻重新解释", detail:"直到能用一句话说清楚"}
      ],
      example: "学完正负数：假装给同桌讲什么是负数。如果你说'负数是比0小的数'，对方能懂→你学会了。如果对方问'那0是什么'你答不上来→回去复习！",
      tip: "每天学完一科，花3分钟用费曼法检验自己。能讲出来=真的会了！"
    },
    {
      id: "pomodoro",
      icon: "🍅",
      title: "番茄工作法",
      subtitle: "25分钟专注 + 5分钟休息 = 高效学习",
      color: "#E53E3E",
      bg: "#FFF5F5",
      overview: "人的注意力只能高度集中20-30分钟。番茄钟帮你利用这个规律。",
      steps: [
        {num:"❶", text:"定任务：确定今天要学什么", detail:"比如'学完《济南的冬天》生字词'"},
        {num:"❷", text:"设闹钟：25分钟", detail:"这25分钟只看书/做题，不看手机"},
        {num:"❸", text:"专注学：25分钟不间断", detail:"有杂念就写下来，之后再说"},
        {num:"❹", text:"休息5分钟：站起来走走", detail:"喝水、伸懒腰、看窗外"},
        {num:"❺", text:"重复：4个番茄钟后休息15-30分钟", detail:"每完成4个钟，奖励自己一个长时间休息"}
      ],
      example: "今天的数学作业要2个番茄钟（50分钟学+10分钟休息）。第1个钟学概念，第2个钟做题。中间休息时站起来走走。",
      tip: "iPad上设25分钟倒计时。钟响之前不许做任何别的事！"
    },
    {
      id: "cornell",
      icon: "📓",
      title: "康奈尔笔记法",
      subtitle: "一页纸分三块——笔记变复习资料",
      color: "#38A169",
      bg: "#F0FFF4",
      overview: "康奈尔大学发明的笔记方法，让笔记不只是记录，更是复习的好工具。",
      steps: [
        {num:"❶", text:"右栏（主栏）：上课/自学时记主要内容", detail:"用短句、关键词、符号，不要抄整段"},
        {num:"❷", text:"左栏（副栏）：课后提炼关键词/问题", detail:"把右栏内容概括成几个关键词或问题"},
        {num:"❸", text:"底栏（总结）：用自己的话总结", detail:"一两句话概括这页的核心内容"}
      ],
      example: "学《从百草园到三味书屋》：右栏记'不必说句式、对比手法'；左栏写'什么是对比？'；底栏写'本文用百草园和三味书屋的对比表达对童年的怀念'",
      tip: "每天的笔记都用康奈尔格式。复习时只看左栏和底栏就够了！"
    },
    {
      id: "sq3r",
      icon: "📖",
      title: "SQ3R阅读法",
      subtitle: "五步读课文——读一遍顶三遍",
      color: "#D69E2E",
      bg: "#FFFAF0",
      overview: "专门用于阅读课文和教材的五步法。不是傻傻地读，而是带着问题读。",
      steps: [
        {num:"S", text:"Survey（浏览）", detail:"先扫读标题、小标题、插图、首尾段——大概知道讲什么"},
        {num:"Q", text:"Question（提问）", detail:"把标题变成问题。如'春→春天是什么样的？作者怎么写的？'"},
        {num:"R", text:"Read（阅读）", detail:"带着问题读课文，边读边找答案"},
        {num:"R", text:"Recite（复述）", detail:"读完一段，合上书用自己的话说出来"},
        {num:"R", text:"Review（复习）", detail:"整篇读完，回顾所有问题和答案"}
      ],
      example: "读《济南的冬天》前先问自己：'济南的冬天和重庆的冬天有什么不同？'带着这个问题读，你会有目标感。",
      tip: "每次读课文前花1分钟做S和Q两步，阅读效率翻倍！"
    },
    {
      id: "mindmap",
      icon: "🧠",
      title: "思维导图",
      subtitle: "把知识画出来——一看就懂",
      color: "#805AD5",
      bg: "#FAF5FF",
      overview: "用图画和线条把知识点连起来。右脑看图，左脑记字——全脑学习！",
      steps: [
        {num:"❶", text:"中心写主题", detail:"比如'正数和负数'"},
        {num:"❷", text:"画分支：主要知识点", detail:"正数/负数/0/数轴/相反数/绝对值"},
        {num:"❸", text:"加细节：关键词+例子", detail:"正数→大于0→+5, +3.5；负数→小于0→-3, -2.7"},
        {num:"❹", text:"用颜色和图画", detail:"正数用绿色，负数用红色——好看又好记"}
      ],
      example: "学完第一章有理数，画一张思维导图：中心写'有理数'，分支为'正数、负数、0、数轴、相反数、绝对值'，每个分支再写定义和例子。",
      tip: "每学完一个单元画一张思维导图。考试前看导图就够了！"
    },
    {
      id: "recall",
      icon: "🔍",
      title: "主动回忆法",
      subtitle: "不看书先回忆——效果最好的复习方法",
      color: "#DD6B20",
      bg: "#FFF5F5",
      overview: "研究发现：反复阅读课本的效果远不如合上书自己回忆。主动回忆能让记忆效果提升10倍以上！",
      steps: [
        {num:"❶", text:"学完后合上书", detail:"不看任何笔记"},
        {num:"❷", text:"问自己：刚才学了什么？", detail:"在脑子里过一遍，或者写下来"},
        {num:"❸", text:"卡住的地方标记", detail:"这就是你没掌握的知识点"},
        {num:"❹", text:"翻书确认", detail:"只看卡住的部分，其他不用看"}
      ],
      example: "学完《再塑生命的人》，合上书问自己：'这篇文章讲了什么？海伦怎么学会认字的？莎莉文老师做了什么？'答不上来的就是需要复习的地方。",
      tip: "每学完一节课，花2分钟主动回忆。比读10遍还有效！"
    },
    {
      id: "errorbook",
      icon: "❌",
      title: "错题本法",
      subtitle: "错题是宝贝——每道错题都是提分机会",
      color: "#C53030",
      bg: "#FFF5F5",
      overview: "学霸和普通学生的最大区别不是智商，而是怎么对待错题。",
      steps: [
        {num:"❶", text:"原题：抄下或剪下错题", detail:"不要马上写答案"},
        {num:"❷", text:"分析原因：为什么错了？", detail:"①粗心②概念不清③方法不会"},
        {num:"❸", text:"正确解法：重新做一遍", detail:"写出完整过程"},
        {num:"❹", text:"同类题：找一道类似的题再做", detail:"确认真的会了"}
      ],
      example: "数学题做错了：抄题→写'原因：去括号没变号'→重新做→找课本同类题再做一遍。",
      tip: "错题本不是抄完了事！关键是每周翻看一遍，挡住答案自己做。"
    },
    {
      id: "palace",
      icon: "🏛️",
      title: "记忆宫殿法",
      subtitle: "把要背的内容'放'在熟悉的地方",
      color: "#2B6CB0",
      bg: "#EBF8FF",
      overview: "古代希腊人发明的方法：把你家客厅里的东西和要背的内容联系起来。",
      steps: [
        {num:"❶", text:"选一个熟悉的地方", detail:"你家客厅、卧室、从家到学校的路"},
        {num:"❷", text:"选几个'位置'", detail:"沙发、电视、茶几、窗户、门——按顺序"},
        {num:"❸", text:"把要记的内容和位置关联", detail:"越夸张越好！"},
        {num:"❹", text:"在脑子里走一遍", detail:"从进门开始，按顺序回忆每个位置上的信息"}
      ],
      example: "背《论语》六章→沙发=学而时习之（想象沙发上有个人在学习），电视=温故而知新（电视在放旧节目）……走过一遍就能记住！",
      tip: "适合背语文古诗、英语单词、历史年代——越夸张的联想越容易记！"
    },
    {
      id: "twominute",
      icon: "⏱️",
      title: "两分钟法则",
      subtitle: "不想学习？先做2分钟试试",
      color: "#38A169",
      bg: "#F0FFF4",
      overview: "拖延的最大敌人不是懒，是'开始'。只要开始了，你就停不下来。",
      steps: [
        {num:"❶", text:"告诉自己：只做2分钟", detail:"2分钟后不想学了就可以停"},
        {num:"❷", text:"开始做：打开书、读第一段、写第一题", detail:"降低开始的难度"},
        {num:"❸", text:"2分钟后：你大概率会继续", detail:"因为最难的是'开始'那一关"}
      ],
      example: "不想做数学作业？告诉自己'只做2分钟，做不完就算了'。结果一旦动笔，你会发现2分钟后你已经在认真做题了。",
      tip: "每次都告诉自己只做2分钟——骗过大脑的抗拒心理！"
    },
    {
      id: "feynman-pomodoro",
      icon: "⚡",
      title: "番茄费曼组合拳",
      subtitle: "最强学习方法组合——专注学+检验懂",
      color: "#D53F8C",
      bg: "#FFF5F7",
      overview: "番茄钟让你专注，费曼法检验你是否真懂。两个方法配合使用，效果1+1>3！",
      steps: [
        {num:"❶", text:"定番茄钟（25分钟）", detail:"专注学习新知识"},
        {num:"❷", text:"钟响后做3分钟费曼", detail:"合上书，假装讲给同学听"},
        {num:"❸", text:"没讲明白的地方标记", detail:"下个番茄钟专门攻克这些"},
        {num:"❹", text:"休息5分钟", detail:"巩固记忆"},
        {num:"❺", text:"重复：学→检验→补漏→休息", detail:"每天2-4轮就够了"}
      ],
      example: "学数学：第1个番茄钟学'绝对值'概念→钟响后费曼法讲一遍→没讲清的地方记下来→休息→第2个番茄钟专攻没讲清的部分。",
      tip: "这是最推荐的每日学习流程！每天至少做2轮。"
    }
  ];

  // ===== 今日推荐学习方法 =====
  function getDailyMethod(day) {
    // 根据天数轮换推荐
    var idx = (day - 1) % methods.length;
    return methods[idx];
  }

  // ===== 渲染学习方法页面 =====
  function renderMethodsPage() {
    var html = '<div class="content-section">';
    html += '<div class="section-title"><span>📚</span>学习方法大全</div>';
    html += '<div style="font-size:0.85rem;color:#4A5568;margin-bottom:14px;">方法比努力更重要！掌握这10种学习方法，让你学30天顶别人学100天。</div>';

    for (var m = 0; m < methods.length; m++) {
      var method = methods[m];
      html += '<div class="method-card" style="background:' + method.bg + ';border-left:4px solid ' + method.color + ';">';
      html += '<div class="method-header"><span class="method-icon">' + method.icon + '</span>';
      html += '<div><div class="method-title">' + method.title + '</div>';
      html += '<div class="method-subtitle">' + method.subtitle + '</div></div></div>';

      html += '<details class="method-details">';
      html += '<summary class="method-summary" style="color:' + method.color + ';">💡 点击展开详解</summary>';

      html += '<div class="method-body">';
      html += '<div class="method-overview">' + method.overview + '</div>';

      html += '<div class="method-steps-title">📋 操作步骤：</div>';
      for (var s = 0; s < method.steps.length; s++) {
        var step = method.steps[s];
        html += '<div class="method-step"><span class="step-num">' + step.num + '</span><span class="step-text"><strong>' + step.text + '</strong><br><span class="step-detail">' + step.detail + '</span></span></div>';
      }

      html += '<div class="method-example"><div class="example-label">📝 具体例子：</div>' + method.example + '</div>';
      html += '<div class="method-tip"><div class="tip-label">💎 每日实践建议：</div>' + method.tip + '</div>';
      html += '</div></details></div>';
    }

    // 每日建议
    var today = new Date();
    var daySuggestion = "学习没有捷径，但有方法。今天从「番茄工作法」开始——设一个25分钟的闹钟，专注学完一节课，然后休息5分钟。";
    html += '<div class="daily-suggestion">';
    html += '<div class="suggestion-header">🌟 今日学习建议</div>';
    html += '<div class="suggestion-text">' + daySuggestion + '</div>';
    html += '</div>';

    html += '</div>';
    return html;
  }

  // ===== 样式注入 =====
  var style = document.createElement("style");
  style.textContent = `
    .method-card {
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 10px;
    }
    .method-header {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .method-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }
    .method-title {
      font-size: 1rem;
      font-weight: 700;
    }
    .method-subtitle {
      font-size: 0.78rem;
      color: #4A5568;
    }
    .method-details {
      margin-top: 8px;
    }
    .method-summary {
      cursor: pointer;
      font-size: 0.82rem;
      font-weight: 600;
      padding: 4px 0;
    }
    .method-body {
      padding: 10px 0;
      font-size: 0.85rem;
      line-height: 1.7;
    }
    .method-overview {
      background: white;
      border-radius: 8px;
      padding: 10px 12px;
      margin-bottom: 8px;
    }
    .method-steps-title {
      font-weight: 600;
      margin: 8px 0 4px;
    }
    .method-step {
      display: flex;
      gap: 8px;
      padding: 6px 0;
      border-bottom: 1px solid rgba(0,0,0,0.04);
    }
    .step-num {
      font-size: 1rem;
      font-weight: 700;
      flex-shrink: 0;
      width: 24px;
    }
    .step-text {
      flex: 1;
    }
    .step-detail {
      font-size: 0.78rem;
      color: #718096;
    }
    .method-example {
      background: white;
      border-radius: 8px;
      padding: 10px 12px;
      margin: 8px 0;
      font-size: 0.82rem;
    }
    .example-label {
      font-weight: 600;
      color: #DD6B20;
      margin-bottom: 2px;
    }
    .method-tip {
      background: #FFFAF0;
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 0.82rem;
    }
    .tip-label {
      font-weight: 600;
      color: #D69E2E;
      margin-bottom: 2px;
    }
    .daily-suggestion {
      background: linear-gradient(135deg, #EBF8FF, #F0FFF4);
      border-radius: 14px;
      padding: 16px;
      margin-top: 14px;
      border: 2px solid #BEE3F8;
    }
    .suggestion-header {
      font-size: 1rem;
      font-weight: 700;
      color: #2B6CB0;
      margin-bottom: 6px;
    }
    .suggestion-text {
      font-size: 0.88rem;
      line-height: 1.6;
      color: #4A5568;
    }
  `;
  document.head.appendChild(style);

  // ===== 挂载到科目标签 =====
  function addMethodsTab() {
    var interval = setInterval(function() {
      var tabs = document.getElementById("subjectTabs");
      if (tabs) {
        clearInterval(interval);
        var btn = document.createElement("button");
        btn.className = "subject-tab methods-tab";
        btn.innerHTML = "📚 学习方法";
        btn.style.cssText = "background:linear-gradient(135deg,#FAF5FF,#EBF4FF);border-color:#805AD5;color:#553C9A;";
        btn.onclick = function() {
          var contentArea = document.getElementById("dayContent");
          if (contentArea) {
            contentArea.innerHTML = renderMethodsPage();
            document.getElementById("dayContent").className = "day-content active";
          }
        };
        tabs.appendChild(btn);
      }
    }, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addMethodsTab);
  } else {
    addMethodsTab();
  }

  // ===== 暴露方法数据供其他模块使用 =====
  window.LearningMethods = {
    getAll: function() { return methods; },
    getDailyMethod: getDailyMethod,
    render: renderMethodsPage
  };

  console.log("📚 学习方法系统已加载（10种方法）");
})();
