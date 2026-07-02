/* ========================================
   课本批注系统 v5.0
   功能：课文全文 + 教师旁注 + 重难点 + 思维延伸
   ======================================== */

// ========== CSS样式注入 ==========
(function() {
  var style = document.createElement("style");
  style.textContent = `
    /* 课本区域 */
    .textbook-section { margin: 12px 0; }
    
    /* 段落卡片 */
    .tb-paragraph {
      position: relative;
      padding: 14px 16px;
      margin-bottom: 8px;
      border-radius: 12px;
      border-left: 4px solid transparent;
      transition: all 0.2s;
    }
    .tb-paragraph:hover { background: #FAFAFA; }
    .tb-paragraph .para-text {
      font-size: 1rem;
      line-height: 1.9;
      color: var(--text);
    }
    .tb-paragraph .para-text .highlight-yellow {
      background: #FEFCBF;
      padding: 1px 4px;
      border-radius: 3px;
      cursor: pointer;
    }
    .tb-paragraph .para-text .highlight-green {
      background: #C6F6D5;
      padding: 1px 4px;
      border-radius: 3px;
      cursor: pointer;
    }
    .tb-paragraph .para-text .highlight-red {
      background: #FED7D7;
      padding: 1px 4px;
      border-radius: 3px;
      cursor: pointer;
    }
    .tb-paragraph .para-text .keyword {
      font-weight: 700;
      color: var(--primary-dark);
    }
    
    /* 旁注标记 */
    .tb-paragraph .para-marker {
      position: absolute;
      left: -6px;
      top: 14px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 1px 3px rgba(0,0,0,0.15);
    }
    
    /* 批注气泡 */
    .tb-annotation {
      margin-top: 8px;
      padding: 10px 12px;
      border-radius: 8px;
      font-size: 0.82rem;
      line-height: 1.6;
      display: flex;
      gap: 8px;
      align-items: flex-start;
    }
    .tb-annotation .icon { font-size: 1rem; flex-shrink: 0; margin-top: 2px; }
    .tb-annotation.teacher-says {
      background: #EBF8FF;
      border-left: 3px solid #3182CE;
    }
    .tb-annotation.key-point {
      background: #FFFAF0;
      border-left: 3px solid #ED8936;
    }
    .tb-annotation.thinking {
      background: #F0FFF4;
      border-left: 3px solid #38A169;
    }
    .tb-annotation.difficulty {
      background: #FFF5F5;
      border-left: 3px solid #E53E3E;
    }
    .tb-annotation.tip {
      background: #FAF5FF;
      border-left: 3px solid #805AD5;
    }
    
    /* 多解法区域 */
    .multi-solution {
      background: linear-gradient(135deg, #EBF8FF, #E0E7FF);
      border-radius: 10px;
      padding: 14px;
      margin: 10px 0;
      border: 1px solid #C3D9FF;
    }
    .multi-solution .sol-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: #2B6CB0;
      margin-bottom: 8px;
    }
    .multi-solution .sol-item {
      background: white;
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 6px;
      border: 1px solid #E2E8F0;
    }
    .multi-solution .sol-item .sol-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #4A90D9;
      margin-bottom: 4px;
    }
    .multi-solution .sol-item .sol-text {
      font-size: 0.85rem;
      line-height: 1.6;
    }
    
    /* 课文标题 */
    .tb-title {
      font-size: 1.2rem;
      font-weight: 700;
      text-align: center;
      padding: 16px;
      margin-bottom: 12px;
      border-bottom: 2px solid var(--border);
    }
    .tb-title .author {
      font-size: 0.85rem;
      font-weight: 400;
      color: var(--text-light);
      display: block;
      margin-top: 4px;
    }
    
    /* 难度标签 */
    .diff-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 2px 10px;
      border-radius: 10px;
      margin-right: 4px;
    }
    .diff-tag.easy { background: #C6F6D5; color: #276749; }
    .diff-tag.medium { background: #FEFCBF; color: #975A16; }
    .diff-tag.hard { background: #FED7D7; color: #9B2C2C; }
    
    /* 知识点标签 */
    .kp-tag {
      display: inline-block;
      font-size: 0.7rem;
      padding: 2px 10px;
      border-radius: 10px;
      margin-right: 4px;
      margin-bottom: 4px;
      font-weight: 600;
    }
    .kp-tag.grammar { background: #EBF8FF; color: #2B6CB0; }
    .kp-tag.rhetoric { background: #FFF5F5; color: #D94A4A; }
    .kp-tag.vocab { background: #FFFAF0; color: #DD6B20; }
    .kp-tag.formula { background: #F0FFF4; color: #38A169; }
    .kp-tag.phonetic { background: #FAF5FF; color: #805AD5; }
    
    /* 思维泡泡 */
    .think-bubble {
      background: #F0FFF4;
      border-radius: 12px;
      padding: 14px;
      margin: 10px 0;
      border: 2px solid #C6F6D5;
      position: relative;
    }
    .think-bubble::before {
      content: "💡";
      position: absolute;
      top: -10px;
      left: 14px;
      font-size: 1.2rem;
      background: white;
      padding: 0 4px;
    }
    .think-bubble .think-title {
      font-weight: 700;
      font-size: 0.85rem;
      color: #276749;
      margin-bottom: 6px;
    }
    .think-bubble .think-body {
      font-size: 0.85rem;
      line-height: 1.7;
    }
    
    /* 课文旁注（移动端的折叠交互） */
    @media (max-width: 600px) {
      .tb-paragraph { padding: 12px; }
      .tb-annotation { font-size: 0.8rem; }
    }
  `;
  document.head.appendChild(style);
})();

// ========== 批注渲染引擎 ==========
App.TextbookRenderer = {
  
  // 渲染完整课文
  render: function(container, textbookData) {
    if (!container || !textbookData) return;
    
    var html = "<div class='textbook-section'>";
    
    // 课文标题
    html += "<div class='tb-title'>" + textbookData.title + 
      (textbookData.author ? "<span class='author'>" + textbookData.author + "</span>" : "") +
      "</div>";
    
    // 如果有课文概述（教师备课说明）
    if (textbookData.overview) {
      html += "<div style='background:linear-gradient(135deg,#FFFAF0,#FFF5F5);border-radius:10px;padding:14px;margin-bottom:12px;border:1px solid #FED7D7;'>";
      html += "<div style='font-size:0.78rem;font-weight:700;color:#C53030;margin-bottom:4px;'>👩‍🏫 教师备课笔记</div>";
      html += "<div style='font-size:0.85rem;line-height:1.7;'>" + textbookData.overview + "</div>";
      html += "</div>";
    }
    
    // 课文段落
    if (textbookData.paragraphs) {
      for (var p = 0; p < textbookData.paragraphs.length; p++) {
        html += this.renderParagraph(textbookData.paragraphs[p], p);
      }
    }
    
    // 多解法/思维延伸（在课文最后）
    if (textbookData.extensions) {
      html += "<div style='margin-top:16px;padding-top:16px;border-top:2px dashed var(--border);'>";
      for (var e = 0; e < textbookData.extensions.length; e++) {
        html += this.renderExtension(textbookData.extensions[e]);
      }
      html += "</div>";
    }
    
    // 课后总结（教师归纳）
    if (textbookData.summary) {
      html += "<div style='margin-top:16px;background:linear-gradient(135deg,#EBF8FF,#E8F0FE);border-radius:10px;padding:14px;border:1px solid #C3D9FF;'>";
      html += "<div style='font-size:0.78rem;font-weight:700;color:var(--primary);margin-bottom:4px;'>📝 教师总结</div>";
      html += "<div style='font-size:0.85rem;line-height:1.7;'>" + textbookData.summary + "</div>";
      html += "</div>";
    }
    
    html += "</div>";
    container.insertAdjacentHTML("beforeend", html);
  },
  
  // 渲染单个段落
  renderParagraph: function(para, index) {
    var html = "<div class='tb-paragraph' style='border-left-color:" + this.getDiffColor(para.difficulty) + ";'>";
    
    // 段落标记（难度色点）
    html += "<div class='para-marker' style='background:" + this.getDiffColor(para.difficulty) + ";'></div>";
    
    // 难度标签 + 知识点标签
    if (para.difficulty || para.keyPoints) {
      html += "<div style='margin-bottom:6px;'>";
      if (para.difficulty) {
        var diffNames = {easy:"易", medium:"中", hard:"难"};
        html += "<span class='diff-tag " + para.difficulty + "'>" + diffNames[para.difficulty] + "</span>";
      }
      if (para.keyPoints) {
        for (var k = 0; k < para.keyPoints.length; k++) {
          var kp = para.keyPoints[k];
          html += "<span class='kp-tag " + (kp.type || "grammar") + "'>" + kp.label + "</span>";
        }
      }
      html += "</div>";
    }
    
    // 课文正文（带高亮标记）
    html += "<div class='para-text'>" + this.processText(para.text, para.highlights) + "</div>";
    
    // 教师批注
    if (para.annotations) {
      for (var a = 0; a < para.annotations.length; a++) {
        html += this.renderAnnotation(para.annotations[a]);
      }
    }
    
    // 思维延伸
    if (para.thinking) {
      html += this.renderThinking(para.thinking);
    }
    
    html += "</div>";
    return html;
  },
  
  // 处理文本中的高亮和关键词
  processText: function(text, highlights) {
    if (!highlights) return text;
    var result = text;
    for (var h = 0; h < highlights.length; h++) {
      var hl = highlights[h];
      var cls = "highlight-" + (hl.color || "yellow");
      var replacement = "<span class='" + cls + "' onclick=\"App.TextbookRenderer.showNote('" + hl.note.replace(/'/g, "\\'") + "')\">" + hl.word + "</span><span class='annotation-indicator' style='font-size:0.65rem;color:var(--primary);cursor:pointer;vertical-align:super;' onclick=\"App.TextbookRenderer.showNote('" + hl.note.replace(/'/g, "\\'") + "')\">ⓘ</span>";
      result = result.split(hl.word).join(replacement);
    }
    return result;
  },
  
  // 显示批注弹窗
  showNote: function(note) {
    alert("📝 注解：\n" + note);
  },
  
  // 渲染批注
  renderAnnotation: function(ann) {
    if (ann.type === "hidden" || (ann.condition && !ann.condition)) return "";
    var icons = {"teacher":"👩‍🏫","key":"📌","think":"💭","tip":"💡","difficulty":"⚠️","example":"📝"};
    var icon = icons[ann.type] || "📌";
    var typeClass = ann.type === "teacher" ? "teacher-says" : 
                    ann.type === "key" ? "key-point" :
                    ann.type === "think" ? "thinking" :
                    ann.type === "difficulty" ? "difficulty" : "tip";
    
    return "<div class='tb-annotation " + typeClass + "'>" +
      "<span class='icon'>" + icon + "</span>" +
      "<div>" + ann.text + "</div></div>";
  },
  
  // 渲染思维延伸
  renderThinking: function(think) {
    var html = "<div class='think-bubble'>";
    html += "<div class='think-title'>" + (think.title || "💭 换个角度想") + "</div>";
    html += "<div class='think-body'>" + think.body + "</div>";
    html += "</div>";
    return html;
  },
  
  // 渲染多解法
  renderExtension: function(ext) {
    if (ext.type === "multi-solution") {
      var html = "<div class='multi-solution'>";
      html += "<div class='sol-title'>🧮 " + (ext.title || "多种解法") + "</div>";
      html += "<div style='font-size:0.82rem;color:var(--text-light);margin-bottom:8px;'>" + ext.description + "</div>";
      for (var i = 0; i < ext.solutions.length; i++) {
        html += "<div class='sol-item'><div class='sol-label'>解法" + (i+1) + "：" + ext.solutions[i].label + "</div><div class='sol-text'>" + ext.solutions[i].text + "</div></div>";
      }
      html += "</div>";
      return html;
    }
    return "";
  },
  
  // 难度颜色
  getDiffColor: function(diff) {
    var colors = {easy:"#52C41A", medium:"#F6AD55", hard:"#FC8181"};
    return colors[diff] || "#E2E8F0";
  }
};

// ========== 注入到课程内容 ==========
// 自动将textbook类型的内容渲染到页面
App.renderSectionOrig4 = App.renderSection;
App.renderSection = function(section, day, subject, sectionIdx) {
  if (section.type === "textbook") {
    // 用setTimeout确保容器已存在
    var self = this;
    setTimeout(function() {
      var container = document.getElementById("dayContent");
      if (container) App.TextbookRenderer.render(container, section.data);
    }, 50);
    return ""; // 返回空，因为我们单独渲染
  }
  return this.renderSectionOrig4(section, day, subject, sectionIdx);
};
