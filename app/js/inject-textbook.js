/* ========================================
   注入课文内容到课程数据
   ======================================== */
(function(g) {
  if (!g.TEXTBOOK_DATA) return;
  
  var injected = 0;
  for (var key in g.TEXTBOOK_DATA) {
    var parts = key.split("_");
    var day = parseInt(parts[0]);
    var subject = parts[1];
    
    // 找到对应课程数据
    for (var d = 0; d < g.COURSE_DATA.length; d++) {
      if (g.COURSE_DATA[d].day === day) {
        var subjectData = g.COURSE_DATA[d].subjects[subject];
        if (subjectData) {
          // 课文放在页面最后（方便自学时查阅原文）
          var insertIdx = subjectData.sections.length;
          subjectData.sections.splice(insertIdx, 0, {
            type: "textbook",
            data: g.TEXTBOOK_DATA[key]
          });
          injected++;
        }
        break;
      }
    }
  }
  
  if (typeof console !== "undefined") {
    console.log("📖 已注入 " + injected + " 篇完整课文");
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
