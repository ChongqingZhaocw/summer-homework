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
          // 在最前面插入课文（在opening之后，但在其他内容之前）
          var insertIdx = 0;
          // 如果第一个是opening类型，则在它之后插入
          if (subjectData.sections[0] && subjectData.sections[0].type === "opening") {
            insertIdx = 1;
          }
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
