/* ========================================
   开篇故事系统 - 每课的学习动机导入
   ======================================== */

// ---------- 开篇故事渲染器 ----------
App.renderOpeningStory = function(section) {
  var bg = section.bg || "linear-gradient(135deg,#667eea,#764ba2)";
  var emoji = section.emoji || "📖";
  
  var html = "<div class='content-section opening-story'>";
  
  // 顶部横幅
  html += "<div style='border-radius:12px;overflow:hidden;margin-bottom:14px;'>";
  html += "<div style='background:" + bg + ";padding:18px 16px;color:white;'>";
  html += "<div style='font-size:0.7rem;opacity:0.8;margin-bottom:4px;'>" + (section.badge || "🎯 今日学习导航") + "</div>";
  html += "<div style='font-size:1.1rem;font-weight:700;'>" + emoji + " " + section.title + "</div>";
  if (section.subtitle) html += "<div style='font-size:0.85rem;opacity:0.9;margin-top:4px;'>" + section.subtitle + "</div>";
  html += "</div>";
  
  // 为什么学
  if (section.why) {
    html += "<div style='background:#FFFAF0;padding:14px;border-left:4px solid #ED8936;'>";
    html += "<div style='font-size:0.78rem;font-weight:700;color:#ED8936;margin-bottom:4px;'>❓ 为什么学这个？</div>";
    html += "<div style='font-size:0.85rem;line-height:1.7;color:var(--text);'>" + section.why + "</div>";
    html += "</div>";
  }
  
  // 能学到什么
  if (section.what) {
    html += "<div style='background:#EBF8FF;padding:14px;border-left:4px solid #3182CE;'>";
    html += "<div style='font-size:0.78rem;font-weight:700;color:#3182CE;margin-bottom:4px;'>🎯 今天能学到什么？</div>";
    html += "<div style='font-size:0.85rem;line-height:1.7;color:var(--text);'>" + section.what + "</div>";
    html += "</div>";
  }
  
  // 趣味故事/背景
  if (section.story) {
    html += "<div style='background:#FFF5F5;padding:14px;border-left:4px solid #D53F8C;'>";
    html += "<div style='font-size:0.78rem;font-weight:700;color:#D53F8C;margin-bottom:4px;'>📜 趣味背景</div>";
    html += "<div style='font-size:0.85rem;line-height:1.7;color:var(--text);'>" + section.story + "</div>";
    html += "</div>";
  }
  
  // 视频推荐
  if (section.video) {
    html += "<div style='background:#1A202C;padding:14px;color:white;'>";
    html += "<div style='font-size:0.78rem;font-weight:700;color:#F6E05E;margin-bottom:6px;'>🎬 推荐观看（在B站/抖音搜索）</div>";
    html += "<div style='display:flex;gap:8px;flex-wrap:wrap;'>";
    for (var i = 0; i < section.video.length; i++) {
      html += "<span style='background:rgba(255,255,255,0.15);padding:4px 12px;border-radius:16px;font-size:0.78rem;'>🔍 " + section.video[i] + "</span>";
    }
    html += "</div>";
    if (section.videoTip) html += "<div style='font-size:0.72rem;opacity:0.7;margin-top:6px;'>" + section.videoTip + "</div>";
    html += "</div>";
  }
  
  // 思维拓展
  if (section.think) {
    html += "<div style='background:#F0FFF4;padding:14px;border-left:4px solid #38A169;'>";
    html += "<div style='font-size:0.78rem;font-weight:700;color:#38A169;margin-bottom:4px;'>💡 思维拓展</div>";
    html += "<div style='font-size:0.85rem;line-height:1.7;color:var(--text);'>" + section.think + "</div>";
    html += "</div>";
  }
  
  html += "</div>";
  return html;
};

// ---------- 注册到渲染系统中 ----------
// 保存原始renderSection方法
App.renderSectionOrig3 = App.renderSection;

// 重写renderSection支持opening类型
App.renderSection = function(section, day, subject, sectionIdx) {
  if (section.type === "opening") {
    return this.renderOpeningStory(section);
  }
  if (section.type === "task") {
    return this.renderTaskEnhanced(section, day, subject, sectionIdx);
  }
  // 检查增强类型
  if (typeof this.renderEnhancedSection === 'function') {
    var enhancedTypes = ["timeline","visual-context","video","bar-chart","donut-chart",
                         "number-line","abs-demo","step-reveal","phonetic-enhanced",
                         "phonetic-compare","word-tree","mnemonic","fun-fact","speak-panel","flip-card"];
    if (enhancedTypes.indexOf(section.type) > -1) {
      return this.renderEnhancedSection(section);
    }
  }
  return this.renderSectionOrig3(section, day, subject, sectionIdx);
};
