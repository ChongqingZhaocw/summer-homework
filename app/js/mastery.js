/* ========================================
   掌握度评估系统 v3.0
   功能：自评评级、薄弱点追踪、次日强化、家长看板
   ======================================== */
var MasterySystem = {
  STORAGE_KEY: "summerMastery",
  
  // 知识点标签库（每课的核心知识点）
  knowledgePoints: {
    "chinese": {
      "1": ["朱自清背景","生字词(酝酿/应和/蓑笠)","散文特点","朗读技巧"],
      "2": ["文章结构(盼春绘春赞春)","比喻/拟人修辞","段落赏析"],
      "3": ["老舍背景","济南地理特点","生字词(髻/镶/着落)"],
      "4": ["对比手法","拟人赏析","重点句子理解"],
      "5": ["刘湛秋","四季雨的特点","通感手法"],
      "6": ["《观沧海》曹操","《闻王昌龄》李白","古诗赏析"],
      "7": ["《次北固山下》","《天净沙·秋思》","诗歌情感比较"],
      "8": ["第一单元复习","写景作文","五感描写"],
      "9": ["史铁生背景","《秋天的怀念》","好好儿活"],
      "10": ["三次看花","细节描写","亲情主题"],
      "11": ["莫怀戚《散步》","以小见大","尊老爱幼"],
      "12": ["泰戈尔《金色花》","冰心《荷叶母亲》","散文诗特点"],
      "13": ["《世说新语》","咏雪","陈太丘与友期","古今异义"],
      "14": ["第二单元复习","记事作文","真情实感"],
      "15": ["鲁迅《从百草园到三味书屋》","对比手法","童年主题"]
    },
    "math": {
      "1": ["正数负数概念","0的特殊性","生活中的正负数"],
      "2": ["数轴三要素","数轴标数","数轴比较大小"],
      "3": ["相反数定义","相反数性质","0的相反数"],
      "4": ["绝对值定义","绝对值的几何意义","绝对值的性质"],
      "5": ["正负数分类","有理数概念"],
      "6": ["同号相加","异号相加","加法运算律"],
      "7": ["减法转加法","减负等于加正"],
      "8": ["乘法法则(同号得正异号得负)","奇负偶正"],
      "9": ["除法法则","倒数概念","0不能做除数"],
      "10": ["乘方概念","底数/指数/幂","(−2)²与−2²区别"],
      "11": ["科学记数法","近似数","四舍五入"],
      "12": ["第一章综合复习","易错点汇总"],
      "13": ["单项式","系数","次数"],
      "14": ["多项式","项数","次数"],
      "15": ["整式概念","同类项","合并同类项","去括号"]
    },
    "english": {
      "1": ["字母Aa-Hh书写","26字母顺序","音标入门","短元音/æ//e//ɪ/"],
      "2": ["元音字母规律","词根-ild","build/child/mild/wild"],
      "3": ["Good morning问候","自我介绍","Nice to meet you","be动词"],
      "4": ["辅音音标(b/p/m/f/d/t/n/l)","句子公式","问候对话"],
      "5": ["字母Ii-Rr","爆破音p/b/t/d/k/g","字母起源"],
      "6": ["颜色词汇red/green/blue","What color句型","彩虹标注"],
      "7": ["词根tele-","telephone/telescope","名词复数-s"],
      "8": ["字母Ss-Zz","26字母默写","元音辅音分类"],
      "9": ["预备篇复习","自我介绍","小测验"],
      "10": ["数字0-9","电话号码读法","What's your number"],
      "11": ["家庭成员father/mother","This is/That is","指示代词"],
      "12": ["this/that/these/those","be动词变化","指示代词表"],
      "13": ["学习用品pencil/pen/ruler","一般疑问句Is this","物主代词my/your"],
      "14": ["名词性物主代词mine/yours","物主代词转换"],
      "15": ["位置介词in/on/under","Where句型","房间物品"]
    }
  },
  
  // 初始化
  init: function() {
    this.load();
    return this;
  },
  
  load: function() {
    try {
      var raw = localStorage.getItem(this.STORAGE_KEY);
      this.data = raw ? JSON.parse(raw) : {};
    } catch(e) {
      this.data = {};
    }
  },
  
  save: function() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch(e) {}
  },
  
  // 获取某天某科的掌握度
  getMastery: function(day, subject) {
    var key = day + "_" + subject;
    return this.data[key] || {
      rating: 0,          // 1-5 自评得分
      weakTags: [],       // 薄弱知识点
      status: "new",      // "new" | "learning" | "weak" | "mastered"  
      reviewCount: 0,
      nextReview: null,   // 下次复习在哪一天
      lastReviewTime: null,
      firstReviewed: false
    };
  },
  
  // 提交自评
  submitRating: function(day, subject, rating, weakTags) {
    var key = day + "_" + subject;
    var mastery = this.getMastery(day, subject);
    mastery.rating = rating;
    mastery.weakTags = weakTags || [];
    mastery.lastReviewTime = new Date().toISOString();
    mastery.reviewCount = (mastery.reviewCount || 0) + 1;
    mastery.firstReviewed = true;
    
    // 根据评分确定状态
    if (rating >= 4 && weakTags.length === 0) {
      mastery.status = "mastered";
      mastery.nextReview = null;
    } else if (rating >= 3) {
      mastery.status = "learning";
      mastery.nextReview = day + 1; // 明天再复习一次
    } else {
      mastery.status = "weak";
      mastery.nextReview = day + 1; // 明天必须复习
    }
    
    this.data[key] = mastery;
    this.save();
    return mastery;
  },
  
  // 获取某天需要复习的科目列表
  getReviewQueue: function(day) {
    var queue = [];
    for (var key in this.data) {
      var parts = key.split("_");
      var d = parseInt(parts[0]);
      var subject = parts[1];
      var mastery = this.data[key];
      if (mastery.nextReview && mastery.nextReview <= day && d < day) {
        // 需要复习且不是今天才学的
        if (mastery.status === "weak" || (mastery.status === "learning" && mastery.reviewCount < 2)) {
          queue.push({day: d, subject: subject, mastery: mastery});
        }
      }
    }
    return queue;
  },
  
  // 获取所有薄弱知识点
  getAllWeakPoints: function() {
    var weak = [];
    for (var key in this.data) {
      var parts = key.split("_");
      var d = parseInt(parts[0]);
      var subject = parts[1];
      var mastery = this.data[key];
      if (mastery.weakTags && mastery.weakTags.length > 0) {
        weak.push({
          day: d,
          subject: subject,
          tags: mastery.weakTags,
          rating: mastery.rating
        });
      }
    }
    return weak;
  },
  
  // 获取总体掌握度统计
  getOverallStats: function() {
    var total = 0;
    var mastered = 0;
    var weak = 0;
    var totalRating = 0;
    var totalWeakTags = 0;
    
    for (var key in this.data) {
      if (!this.data[key].firstReviewed) continue;
      total++;
      totalRating += this.data[key].rating;
      if (this.data[key].status === "mastered") mastered++;
      if (this.data[key].status === "weak") weak++;
      if (this.data[key].weakTags) totalWeakTags += this.data[key].weakTags.length;
    }
    
    return {
      total: total,
      mastered: mastered,
      weak: weak,
      avgRating: total > 0 ? (totalRating / total).toFixed(1) : 0,
      totalWeakTags: totalWeakTags,
      weakRate: total > 0 ? Math.round(weak / total * 100) : 0,
      masterRate: total > 0 ? Math.round(mastered / total * 100) : 0
    };
  }
};

MasterySystem.init();
