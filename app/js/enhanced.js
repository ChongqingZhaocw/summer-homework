/* ========================================
   增强渲染器：时间线、图表、音标动画、语音
   ======================================== */

// 扩展App的渲染方法
App.renderEnhanced = function() {};

// --- Web Speech API 文本朗读 ---
App.speak = function(text, rate) {
  if (!window.speechSynthesis) {
    alert("您的浏览器不支持语音功能，请使用Chrome或Safari");
    return;
  }
  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = rate || 0.85;
  utter.pitch = 1;
  window.speechSynthesis.speak(utter);
};

// --- 朗读中文 ---
App.speakChinese = function(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(text);
  utter.lang = "zh-CN";
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
};

// --- 增强渲染函数 ---
App.renderEnhancedSection = function(section) {
  var html = "<div class='content-section enhanced-section'>";
  
  switch(section.type) {
    
    // 历史时间线
    case "timeline":
      html += "<div class='section-title'><span>📅</span>" + (section.title || "历史时间线") + "</div>";
      html += "<div class='timeline'>";
      for (var i = 0; i < section.items.length; i++) {
        html += "<div class='timeline-item'><div class='year'>" + section.items[i].year + "</div><div class='desc'>" + section.items[i].desc + "</div></div>";
      }
      html += "</div>";
      break;
    
    // 知识图文
    case "visual-context":
      html += "<div class='visual-context'>";
      html += "<div class='banner' style='background:" + (section.bg || "linear-gradient(135deg,#667eea,#764ba2)") + "'><div class='overlay-text'>" + section.bannerText + "</div></div>";
      html += "<div class='context-body'>";
      if (section.era) html += "<div class='era'>" + section.era + "</div>";
      html += section.body;
      html += "</div></div>";
      break;
    
    // 视频嵌入提示
    case "video":
      html += "<div class='section-title'><span>🎬</span>" + (section.title || "视频讲解") + "</div>";
      html += "<div class='video-embed'>";
      html += "<div class='video-placeholder' onclick=\"App.showVideoInfo('" + (section.url || "") + "','" + (section.search || "") + "')\">";
      html += "<div class='play-icon'>▶</div>";
      html += "<div class='title'>" + section.label + "</div>";
      html += "<div class='subtitle'>" + (section.hint || "点击了解如何观看") + "</div>";
      html += "</div>";
      if (section.description) html += "<div style='padding:8px 12px;background:#2D3748;border-top:1px solid #4A5568;font-size:0.75rem;color:#A0AEC0;'>" + section.description + "</div>";
      html += "</div>";
      break;
    
    // 柱状图
    case "bar-chart":
      html += "<div class='section-title'><span>📊</span>" + (section.title || "数据图示") + "</div>";
      html += "<div class='chart-container'><div class='chart-title'>" + section.chartTitle + "</div>";
      html += "<div class='bar-chart'>";
      var maxVal = 0;
      for (var i = 0; i < section.data.length; i++) {
        if (section.data[i].value > maxVal) maxVal = section.data[i].value;
      }
      for (var i = 0; i < section.data.length; i++) {
        var d = section.data[i];
        var h = maxVal > 0 ? Math.round(d.value / maxVal * 100) : 0;
        html += "<div class='bar-item'><div class='bar' style='height:" + h + "px;background:" + (d.color || "#4A90D9") + "'><div class='val'>" + d.value + "</div></div><div class='label'>" + d.label + "</div></div>";
      }
      html += "</div></div>";
      break;
    
    // 圆环图
    case "donut-chart":
      html += "<div class='section-title'><span>📊</span>" + (section.title || "数据图示") + "</div>";
      html += "<div class='chart-container'><div class='chart-title'>" + section.chartTitle + "</div>";
      html += "<div class='donut-container'>";
      var total = 0;
      for (var i = 0; i < section.data.length; i++) total += section.data[i].value;
      var acc = 0;
      html += '<svg width="140" height="140" viewBox="0 0 140 140">';
      for (var i = 0; i < section.data.length; i++) {
        var pct = section.data[i].value / total;
        var angle = pct * 360;
        var startAngle = acc * 360;
        acc += pct;
        // Simple arc approximation
        var r = 55, cx = 70, cy = 70;
        var sRad = (startAngle - 90) * Math.PI / 180;
        var eRad = (startAngle + angle - 90) * Math.PI / 180;
        var x1 = cx + r * Math.cos(sRad);
        var y1 = cy + r * Math.sin(sRad);
        var x2 = cx + r * Math.cos(eRad);
        var y2 = cy + r * Math.sin(eRad);
        var large = angle > 180 ? 1 : 0;
        // Inner circle to create donut
        var innerR = 30;
        var ix1 = cx + innerR * Math.cos(eRad);
        var iy1 = cy + innerR * Math.sin(eRad);
        var ix2 = cx + innerR * Math.cos(sRad);
        var iy2 = cy + innerR * Math.sin(sRad);
        var path = "M " + x1 + " " + y1 + " A " + r + " " + r + " 0 " + large + " 1 " + x2 + " " + y2 +
                   " L " + ix1 + " " + iy1 + " A " + innerR + " " + innerR + " 0 " + large + " 0 " + ix2 + " " + iy2 + " Z";
        html += '<path d="' + path + '" fill="' + (section.data[i].color || "#4A90D9") + '" opacity="0.9"><animate attributeName="opacity" from="0" to="0.9" dur="0.5s" begin="' + (i * 0.15) + 's"/></path>';
      }
      html += '</svg>';
      html += "<div class='center-text'>" + (section.centerText || "") + "</div></div>";
      html += "<div style='display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:8px;font-size:0.75rem;'>";
      for (var i = 0; i < section.data.length; i++) {
        html += "<span><span style='display:inline-block;width:10px;height:10px;border-radius:2px;background:" + section.data[i].color + ";margin-right:4px;'></span>" + section.data[i].label + "</span>";
      }
      html += "</div></div>";
      break;
    
    // 数轴动画
    case "number-line":
      html += "<div class='section-title'><span>📏</span>" + (section.title || "数轴演示") + "</div>";
      html += "<div class='number-line-container'><div class='number-line'>";
      var min = section.min || -5;
      var max = section.max || 5;
      var step = section.step || 1;
      var range = max - min;
      for (var v = min; v <= max; v += step) {
        var pct = ((v - min) / range) * 100;
        html += "<div class='tick' style='left:" + pct + "%'></div>";
        html += "<div class='tick-label' style='left:" + pct + "%'>" + v + "</div>";
      }
      if (section.animate !== false) {
        html += "<div class='moving-dot' style='animation-duration:" + (section.duration || 4) + "s'></div>";
        html += "<div class='dot-glow'></div>";
      }
      html += "</div><div style='text-align:center;font-size:0.7rem;color:var(--text-light);margin-top:24px;'>" + (section.caption || "← 负数 | 正数 →") + "</div></div>";
      break;

    // 绝对值动画
    case "abs-demo":
      html += "<div class='section-title'><span>📏</span>" + (section.title || "绝对值演示") + "</div>";
      html += "<div class='abs-demo'><div class='line'></div>";
      html += "<div class='point pos'>" + (section.pos || "5") + "</div>";
      html += "<div class='point zero'>0</div>";
      html += "<div class='point neg'>" + (section.neg || "-5") + "</div>";
      html += "<div class='arrow-line left'></div><div class='arrow-line right'></div>";
      html += "<div class='dist-label' style='left:38%;color:var(--danger);'>距离=" + (Math.abs(section.neg) || "5") + "</div>";
      html += "<div class='dist-label' style='right:38%;color:var(--math);'>距离=" + (section.pos || "5") + "</div>";
      html += "<div style='position:absolute;bottom:0;font-size:0.75rem;color:var(--text-light);text-align:center;width:100%;'>|" + (section.neg || "-5") + "| = |" + (section.pos || "5") + "| = " + (Math.abs(section.pos) || "5") + "</div>";
      html += "</div>";
      break;
    
    // 解答步骤
    case "step-reveal":
      html += "<div class='section-title'><span>📝</span>" + (section.title || "解题步骤") + "</div>";
      html += "<div class='step-reveal'>";
      if (section.question) html += "<div style='font-weight:700;font-size:0.9rem;margin-bottom:8px;'>" + section.question + "</div>";
      for (var i = 0; i < section.steps.length; i++) {
        html += "<div class='step'><span class='step-num'>" + (i+1) + "</span><span class='step-text'>" + section.steps[i].text + "</span>";
        if (section.steps[i].result) html += "<div class='step-result'>→ " + section.steps[i].result + "</div>";
        html += "</div>";
      }
      html += "</div>";
      break;
    
    // 英语音标增强卡片
    case "phonetic-enhanced":
      html += "<div class='section-title'><span>🎵</span>" + (section.title || "音标学习") + "</div>";
      html += "<div class='phonetic-enhanced'>";
      for (var i = 0; i < section.items.length; i++) {
        var item = section.items[i];
        html += "<div class='phonetic-card-enhanced' onclick=\"App.speak('" + item.example.split('/')[1] + "',0.8)\">";
        html += "<span class='symbol'>" + item.symbol + "</span>";
        html += "<div class='example'>" + item.example + "</div>";
        if (item.pinyin) html += "<div class='pinyin-compare'>🔊 " + item.pinyin + "</div>";
        html += "<div class='play-hint'>👆 点击听发音</div>";
        html += "</div>";
      }
      html += "</div>";
      break;
    
    // 音标对比表（英语 vs 拼音）
    case "phonetic-compare":
      html += "<div class='section-title'><span>🔤</span>" + (section.title || "音标 vs 拼音") + "</div>";
      html += "<table class='phonetic-compare-table'>";
      html += "<tr><th>英语音标</th><th>发音</th><th>≈ 汉语拼音</th><th>播放</th></tr>";
      for (var i = 0; i < section.items.length; i++) {
        var item = section.items[i];
        html += "<tr><td class='en-symbol'>" + item.symbol + "</td>";
        html += "<td style='font-size:0.8rem;'>" + item.example + "</td>";
        html += "<td class='cn-symbol'>" + (item.pinyin || "—") + "</td>";
        html += "<td><button class='play-btn-sm' onclick=\"App.speak('" + item.example.split('/')[1].split('/')[0] + "',0.8)\">▶</button></td></tr>";
      }
      html += "</table>";
      html += "<div style='font-size:0.75rem;color:var(--text-light);text-align:center;margin-top:4px;'>💡 英语音标和汉语拼音的发音位置几乎一样，用拼音的方法读音标就能快速掌握！</div>";
      break;
    
    // 词根联想网络
    case "word-tree":
      html += "<div class='section-title'><span>🌳</span>" + (section.title || "词根联想网络") + "</div>";
      html += "<div class='word-tree'>";
      html += "<div class='root'>" + section.root + "</div>";
      html += "<div style='font-size:0.8rem;color:#38A169;font-weight:600;'>→ " + (section.rootMeaning || "") + " ←</div>";
      html += "<div class='branches'>";
      for (var i = 0; i < section.branches.length; i++) {
        var b = section.branches[i];
        html += "<div class='branch-card' onclick=\"App.speak('" + b.word + "',0.85)\">";
        html += "<div class='word'>" + b.word + "</div>";
        html += "<div class='meaning'>" + b.meaning + "</div>";
        html += "<div class='connector'>" + b.connection + "</div>";
        html += "</div>";
      }
      html += "</div></div>";
      break;
    
    // 记忆口诀
    case "mnemonic":
      html += "<div class='section-title'><span>💡</span>" + (section.title || "记忆口诀") + "</div>";
      html += "<div class='mnemonic-card'><div class='title'>" + section.label + "</div>";
      html += "<div class='rhyme'>" + section.rhyme + "</div></div>";
      break;
    
    // 趣味知识
    case "fun-fact":
      html += "<div class='fun-fact'><div class='icon'>" + (section.icon || "💡") + "</div>";
      html += "<div class='content'>" + (section.label ? "<strong>" + section.label + "</strong><br>" : "") + section.body + "</div></div>";
      break;
    
    // 口语练习面板
    case "speak-panel":
      html += "<div class='section-title'><span>🗣️</span>" + (section.title || "口语练习") + "</div>";
      html += "<div class='speak-panel'>";
      html += "<div class='phrase'>" + section.phrase + "</div>";
      if (section.pinyinLike) html += "<div class='pinyin-like'>" + section.pinyinLike + "</div>";
      html += "<button class='play-big' onclick=\"App.speak('" + section.phrase + "'," + (section.rate || "0.85") + ")\">▶</button>";
      if (section.tip) html += "<div class='tip'>" + section.tip + "</div>";
      html += "</div>";
      break;
    
    // 翻转卡片
    case "flip-card":
      html += "<div class='section-title'><span>🃏</span>" + (section.title || "互动记忆") + "</div>";
      html += "<div class='flip-card' onclick=\"this.classList.toggle('flipped')\"><div class='flip-card-inner'>";
      html += "<div class='flip-card-front'><div style='font-size:1rem;font-weight:600;'>" + section.front + "</div><div class='hint-text'>👆 点击翻转</div></div>";
      html += "<div class='flip-card-back'><div class='answer-text'>" + section.back + "</div>";
      if (section.backDetail) html += "<div style='font-size:0.8rem;margin-top:4px;'>" + section.backDetail + "</div>";
      html += "</div></div></div>";
      break;
  }
  
  html += "</div>";
  return html;
};

// --- 注入到主渲染流程 ---
App.renderSectionOriginal = App.renderSection;
App.renderSection = function(section, day, subject, sectionIdx) {
  // 检查是否是增强类型
  var enhancedTypes = ["timeline","visual-context","video","bar-chart","donut-chart",
                       "number-line","abs-demo","step-reveal","phonetic-enhanced",
                       "phonetic-compare","word-tree","mnemonic","fun-fact","speak-panel","flip-card"];
  if (enhancedTypes.indexOf(section.type) > -1) {
    return this.renderEnhancedSection(section);
  }
  return this.renderSectionOriginal(section, day, subject, sectionIdx);
};

// --- 视频信息提示 ---
App.showVideoInfo = function(url, search) {
  var msg = "🎬 推荐搜索内容\n\n";
  if (search) msg += "建议在B站/YouTube搜索：\n【" + search + "】\n\n";
  if (url) msg += "推荐链接：\n" + url + "\n\n";
  msg += "💡 提示：可以请家长协助在平板上搜索相关学习视频，边看边在App上完成学习任务。";
  alert(msg);
};
