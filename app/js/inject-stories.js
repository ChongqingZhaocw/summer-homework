/* ========================================
   注入开篇故事到课程数据
   ======================================== */
(function(g) {
  if (!g.OPENING_STORIES) return;
  
  var injected = 0;
  for (var d = 0; d < g.COURSE_DATA.length; d++) {
    var day = g.COURSE_DATA[d];
    if (!day) continue;
    var subs = ["chinese","math","english"];
    for (var s = 0; s < subs.length; s++) {
      var subj = subs[s];
      var key = day.day + "_" + subj;
      var story = g.OPENING_STORIES[key];
      if (story && day.subjects[subj]) {
        // 插入到最前面（第一个知识卡片前）
        day.subjects[subj].sections.unshift(story);
        injected++;
      }
    }
  }
})();
