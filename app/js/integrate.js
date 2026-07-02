(function(g) {
  // 替换Day 1英语
  if (g.COURSE_DATA[0] && g.COURSE_DATA[0].subjects.english && g.enhancedEnglishDay1) {
    g.COURSE_DATA[0].subjects.english = g.enhancedEnglishDay1;
  }
  // 替换Day 2英语
  if (g.COURSE_DATA[1] && g.COURSE_DATA[1].subjects.english && g.enhancedEnglishDay2) {
    g.COURSE_DATA[1].subjects.english = g.enhancedEnglishDay2;
  }
  // Day 5添加拼读汇总
  for (var i = 0; i < g.COURSE_DATA.length; i++) {
    if (g.COURSE_DATA[i] && g.COURSE_DATA[i].day === 5) {
      g.COURSE_DATA[i].subjects.english.sections.push({
        type:"knowledge",title:"🔤 自然拼读三大规律汇总",
        body:"<p><strong>① 神奇e：</strong>辅音+元音+辅音+e → 元音发长音。cat(短) vs cake(长)</p><p><strong>② 双元音：</strong>两个元音一起走，第一个说话。ea→/iː/(eat)</p><p><strong>③ 双辅音：</strong>双辅音只读一个，前面元音发短音。ll→/l/(ball)</p>"
      });
      break;
    }
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
