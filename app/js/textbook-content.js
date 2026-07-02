/* ========================================
   完整课文内容 + 教师批注
   含《春》全文、正负数讲解、字母音标
   ======================================== */
(function(g) {
  g.TEXTBOOK_DATA = {};

  // ========== Day 1 语文：《春》全文 ==========
  g.TEXTBOOK_DATA["1_chinese"] = {
    title: "春",
    author: "朱自清",
    overview: "这是七年级上册第一课，也是初中生活的第一篇课文。\n\n" +
      "本文写于1933年，朱自清用优美的语言写出了春天的生机与希望。读这篇文章，你不仅能感受到春天的美，还能学到'观察生活、描写景物'的方法。\n\n" +
      "🎯 学习目标：\n" +
      "1. 有感情地朗读课文，体会作者对春天的热爱\n" +
      "2. 学习比喻、拟人、排比三种修辞手法\n" +
      "3. 理解'形散神聚'的散文特点，培养观察力和感受力\n\n" +
      "⏰ 建议用时：40分钟\n" +
      "📖 先朗读一遍全文 → 看批注理解重点 → 再做课后练习",
    
    paragraphs: [
      {
        text: "盼望着，盼望着，东风来了，春天的脚步近了。",
        difficulty: "easy",
        keyPoints: [{label:"反复修辞", type:"rhetoric"}, {label:"拟人", type:"rhetoric"}],
        highlights: [
          {word:"盼望着，盼望着", color:"yellow", note:"反复修辞手法——连用两个'盼望着'，表达了作者对春天急切、强烈的期盼之情。"},
          {word:"春天的脚步近了", color:"green", note:"拟人手法——把春天写成'有脚步的人'，让春天变得生动可感。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>重点赏析：</strong>课文第一句就用了'反复'和'拟人'两种修辞。'盼望着'重复两次，不是啰嗦，而是为了让读者感受到作者'非常非常期盼'春天的到来。你也试试看——用反复的手法写一句话表达你的心情！"},
          {type:"key", text:"<strong>知识点：</strong>反复修辞——为了强调某种感情，故意重复某个词语或句子。作用是'加强语气、突出情感'。"}
        ],
        thinking: {
          title: "💭 思考一下",
          body: "如果让你用'反复'来写'等待放假'的心情，你会怎么写？试试看：'______，______，______终于来了！'"
        }
      },
      {
        text: "一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。",
        difficulty: "easy",
        keyPoints: [{label:"排比", type:"rhetoric"}, {label:"拟人", type:"rhetoric"}],
        highlights: [
          {word:"刚睡醒的样子", color:"green", note:"拟人——把春天比作刚睡醒的人，'欣欣然'是欢欢喜喜的样子。"},
          {word:"山朗润起来了，水涨起来了，太阳的脸红起来了", color:"yellow", note:"排比句——三个'……起来了'句式相同，从山、水、太阳三个角度写春天来临的变化。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>写作技巧：</strong>朱自清从'山、水、太阳'三个角度写春天的变化。这告诉我们：描写一个事物时，不要只写一个方面，要多角度、多感官地去观察和描写！"},
          {type:"tip", text:"<strong>记忆口诀：</strong>'排比句，三句以上，句式相同，气势强！'排比让文章有节奏感，读起来朗朗上口。"}
        ]
      },
      {
        text: "小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草软绵绵的。",
        difficulty: "medium",
        keyPoints: [{label:"春草图", type:"rhetoric"}, {label:"叠词", type:"grammar"}],
        highlights: [
          {word:"偷偷地", color:"green", note:"拟人——用'偷偷地'写小草，就像小朋友悄悄做某事一样可爱。"},
          {word:"嫩嫩的，绿绿的", color:"yellow", note:"叠词——'嫩嫩''绿绿'让描写更生动形象。"},
          {word:"坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏", color:"yellow", note:"短句连用——用简短的动词短语，写出了人们在草地上快乐玩耍的场景。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>朱自清的'接地气'：</strong>著名作家写的文章不一定都高深。你看，'打两个滚、踢几脚球、捉几回迷藏'——就像在写你平时在草地上玩的样子！好的文章就是这样，源于生活。"}
        ]
      },
      {
        text: "桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味儿；闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿！",
        difficulty: "medium",
        keyPoints: [{label:"春花图", type:"rhetoric"}, {label:"比喻", type:"rhetoric"}, {label:"通感", type:"rhetoric"}],
        highlights: [
          {word:"你不让我，我不让你", color:"green", note:"拟人——写成在'争着开花'，非常生动有趣。"},
          {word:"红的像火，粉的像霞，白的像雪", color:"yellow", note:"比喻+排比——用'火、霞、雪'三种颜色写出了花的绚烂多彩。"},
          {word:"花里带着甜味儿", color:"yellow", note:"通感——用'甜'（味觉）写'花'（视觉），打通了感官！"}
        ],
        annotations: [
          {type:"key", text:"<strong>重点：通感修辞</strong>——把一种感官的感觉移到另一种感官上。这里的'甜味儿'不是真的吃起来甜，而是说花香闻起来像糖一样甜！通感让你的文章'活'起来。"},
          {type:"teacher", text:"<strong>写作秘诀：</strong>朱自清写春花，用了视觉（红粉白）、嗅觉（甜味儿）、想象（满是桃儿杏儿梨儿）。写一个景物时用的感官越多，读者就越有身临其境的感觉！"},
          {type:"think", text:"你能用'通感'来描写一下'太阳的味道'吗？比如：'阳光晒过的被子，闻起来是______的味道。'"}
        ]
      },
      {
        text: "'吹面不寒杨柳风'，不错的，像母亲的手抚摸着你。风里带来些新翻的泥土的气息，混着青草味儿，还有各种花的香，都在微微润湿的空气里酝酿。",
        difficulty: "medium",
        keyPoints: [{label:"春风图", type:"rhetoric"}, {label:"引用古诗", type:"grammar"}, {label:"多感官", type:"rhetoric"}],
        highlights: [
          {word:"吹面不寒杨柳风", color:"yellow", note:"引用——引用宋代志南和尚的诗句，增添了文章的文学底蕴。"},
          {word:"像母亲的手抚摸着你", color:"green", note:"比喻——把春风比作'母亲的手'，温暖、轻柔、亲切。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>经典赏析：</strong>'像母亲的手抚摸着你'——这个比喻为什么好？因为'母亲的手'给我们温暖、安全、被爱的感觉。朱自清用这个比喻让'春风'不只是一种自然现象，更是一种情感体验。"},
          {type:"tip", text:"<strong>写作技巧：</strong>写'看不见摸不着'的东西（风、味道、声音）时，用比喻把它变得'可感'。比如风→像母亲的手，声音→像清脆的铃声。"}
        ]
      },
      {
        text: "雨是最寻常的，一下就是三两天。可别恼。看，像牛毛，像花针，像细丝，密密地斜织着，人家屋顶上全笼着一层薄烟。",
        difficulty: "medium",
        keyPoints: [{label:"春雨图", type:"rhetoric"}, {label:"比喻", type:"rhetoric"}],
        highlights: [
          {word:"像牛毛，像花针，像细丝", color:"yellow", note:"三个比喻连用——从不同角度写春雨的细密：'牛毛'形容多、'花针'形容亮、'细丝'形容长。"},
          {word:"全笼着一层薄烟", color:"yellow", note:"比喻——把雨中的屋顶比作笼着'薄烟'，写出了春雨的朦胧美。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>对比赏析：</strong>夏雨是'倾盆大雨'，春雨是'像牛毛像花针'。同样是雨，不同的季节有不同的特点。写作文时，要抓住事物的'特点'来写，不要什么都'很美'！"}
        ]
      },
      {
        text: "春天像刚落地的娃娃，从头到脚都是新的，它生长着。\n春天像小姑娘，花枝招展的，笑着，走着。\n春天像健壮的青年，有铁一般的胳膊和腰脚，它领着我们上前去。",
        difficulty: "hard",
        keyPoints: [{label:"赞春三重喻", type:"rhetoric"}, {label:"文章主旨", type:"grammar"}],
        highlights: [
          {word:"刚落地的娃娃", color:"yellow", note:"比喻春天的'新'——充满希望，一切刚刚开始。"},
          {word:"小姑娘", color:"yellow", note:"比喻春天的'美'——花枝招展，充满活力。"},
          {word:"健壮的青年", color:"yellow", note:"比喻春天的'力'——领着我们向前，充满力量。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>★ 这篇课文最重要的段落！必考！</strong>三个比喻的深意：\n\n① 娃娃（新）→ 春天是一年的开始，一切都充满希望\n② 小姑娘（美）→ 春天是最美的季节，万物复苏\n③ 青年（力）→ 春天带来了前进的动力和勇气\n\n这三个比喻合在一起，表达了作者对春天的'赞美'——因此课文最后一部分叫'赞春'。"},
          {type:"difficulty", text:"<strong>难易点提示：</strong>理解'三个比喻分别代表什么'是考试常考题。记住：新→美→力，三层递进。"},
          {type:"think", text:"<strong>思维延伸：</strong>如果让你用三个比喻写'夏天'，你会怎么写？比如'夏天像______'？不一定要按'新美力'的框架，你可以有自己的理解和创意！"}
        ]
      }
    ],
    
    extensions: [
      {
        type: "multi-solution",
        title: "📝 不止一种写法",
        description: "同样是写'春天的到来'，不同的作家有不同的写法。看看下面几位作家是怎么写的：",
        solutions: [
          {label:"朱自清（本文）", text:"用拟人：'春天的脚步近了'——把春天写成'有脚步的人'"},  
          {label:"老舍", text:"用对比：'济南的冬天是没有风声的'——不说春天好，先说冬天不坏"},
          {label:"古诗", text:"'春色满园关不住，一枝红杏出墙来'——用一个小细节写出整个春天"}
        ]
      }
    ],
    
    summary: "📖 《春》是朱自清的经典散文，全文以'盼春→绘春→赞春'三段式结构组织。\n\n" +
      "🌟 <strong>必须掌握的知识点：</strong>\n" +
      "1. 反复修辞（第一句'盼望着'的效果）\n" +
      "2. 拟人手法（春天的脚步、小草偷偷地）\n" +
      "3. 比喻+排比（红的像火/像娃娃像小姑娘像青年）\n" +
      "4. 通感（花里带着甜味儿）\n" +
      "5. 文章结构：盼春(1)→绘春(2-7)→赞春(8-10)\n\n" +
      "💡 <strong>学习提醒：</strong>朱自清的散文告诉我们——好文章不在于用多华丽的词，而在于用心观察生活，用真情打动读者。"
  };

  // ========== Day 1 数学：正负数 ==========
  g.TEXTBOOK_DATA["1_math"] = {
    title: "第一章 §1.1 正数和负数",
    author: "七年级数学 · 人教版",
    overview: "这是初中数学的第一节课！从今天开始，你认识的'数'不再只有0和正数，还有负数。\n\n" +
      "🎯 学习目标：\n" +
      "1. 理解正数和负数的概念\n" +
      "2. 能判断一个数是正数、负数还是0\n" +
      "3. 能用正负数表示生活中具有相反意义的量\n\n" +
      "⏰ 建议用时：30分钟\n" +
      "📖 理解概念 → 看例题 → 做练习 → 多解法思考",
    
    paragraphs: [
      {
        text: "我们小学学过的数：0, 1, 2, 3, ... 这些数都是大于或等于0的。但生活中，我们还会遇到'比0小的数'。比如：\n\n" +
          "• 冬天温度计显示 −5℃\n" +
          "• 做生意亏了200元\n" +
          "• 海平面以下100米",
        difficulty: "easy",
        keyPoints: [{label:"生活实例", type:"formula"}],
        highlights: [
          {word:"−5℃", color:"yellow", note:"这里的'−'读作'负'，−5℃就是零下5摄氏度。"},
          {word:"比0小的数", color:"green", note:"这就是'负数'——比0还小的数。它们的出现是因为生活中需要'相反的量'。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>生活中为什么要有负数？</strong>\n以一个简单的场景来理解：\n假如你有5元钱，妈妈又给了你3元 → 你有8元（5+3=8）\n假如你有5元钱，买零食花了7元 → 你还欠2元（5−7=−2）\n\n如果没有负数，你只能说'我还有0元'——但实际上你欠了2元！负数就是用来表示'欠'、'不足'、'相反方向'的。"}
        ]
      },
      {
        text: "正数：大于0的数叫做正数。如 +3, 5, 2.7, ½ 等。'+'号可以省略不写。\n\n负数：在正数前面加上负号'−'的数叫做负数。如 −3, −5.5等。\n\n0：0既不是正数，也不是负数。它是正数和负数的分界点。",
        difficulty: "easy",
        keyPoints: [{label:"核心定义", type:"formula"}, {label:"0的特殊性", type:"formula"}],
        highlights: [
          {word:"大于0", color:"green", note:"'大于0'是正数的唯一条件。"},
          {word:"0既不是正数也不是负数", color:"yellow", note:"★ 考试必考！0是非常特殊的一个数，它既不是正的也不是负的。"},
          {word:"分界点", color:"yellow", note:"想象一把尺子——0在中间，右边是正数，左边是负数。"}
        ],
        annotations: [
          {type:"key", text:"<strong>★ 必背概念（考试默写题）：</strong>\n① 正数：大于0的数\n② 负数：在正数前加'−'号的数\n③ 0：既不是正数也不是负数"},
          {type:"teacher", text:"<strong>分类记忆法：</strong>\n正数 → '+号头'（可以省略）\n负数 → '−号头'（不能省略）\n0 → '光头'（没有符号）\n这样记是不是很有趣？"},
          {type:"think", text:"<strong>想一想：</strong>为什么0不是正数也不是负数？\n因为正数和负数是'相反'的一对，而0是它们的'界线'。就像冷和热的分界线——'温水'，它既不算冷也不算热。"}
        ]
      },
      {
        text: "★ 生活中的运用：\n• 温度：零上5℃记作+5℃，零下5℃记作−5℃\n• 收支：收入200元记作+200，支出150元记作−150\n• 海拔：海平面以上100米记作+100米，以下100米记作−100米\n• 楼层：地面以上3层记作+3层，地下2层记作−2层",
        difficulty: "easy",
        keyPoints: [{label:"实际应用", type:"formula"}],
        annotations: [
          {type:"teacher", text:"<strong>记住一个原则：</strong>用正负数表示相反意义的量时，先规定'哪个方向为正'，相反的方向就为负。\n\n比如：规定'收入为正' → 收入记+，支出记−\n规定'向东为正' → 向东走5米记+5米，向西走3米记−3米\n\n<strong>关键是：先定标准，再表示！</strong>"}
        ]
      },
      {
        text: "例题1：把下列各数填入相应的集合里：+5, −3, 0, ½, −2.7, 100, −½, 3.14",
        difficulty: "medium",
        keyPoints: [{label:"分类题", type:"formula"}],
        annotations: [
          {type:"teacher", text:"<strong>解题思路（不止一种方法）：</strong>\n\n<strong>方法一（逐个判断法）：</strong>\n看每个数前面有没有'−'号：\n有'−'号 → 负数：−3, −2.7, −½\n无'−'号且不等于0 → 正数：+5, ½, 100, 3.14\n等于0 → 0：单独一类\n\n<strong>方法二（数轴想象法）：</strong>\n想象一条数轴，0在中间：\n0右边的数（>0）→ 正数\n0左边的数（<0）→ 负数\n0本身 → 既不是正也不是负\n\n<strong>两种方法都可以，找到适合你的！</strong>"},
          {type:"difficulty", text:"<strong>易错点：</strong>0既不是正数也不是负数！很多同学会忘记把0单独拿出来。"}
        ]
      },
      {
        text: "例题2：如果收入50元记作+50，那么：\n（1）支出30元记作______\n（2）收入100元记作______\n（3）不收入也不支出记作______",
        difficulty: "medium",
        keyPoints: [{label:"相反意义的量", type:"formula"}],
        annotations: [
          {type:"teacher", text:"<strong>解题分析：</strong>\n题目规定'收入为正'（+），那么'支出'就是相反的意义→为负（−）\n\n（1）支出30元 → −30\n（2）收入100元 → +100（或直接写100）\n（3）不收入也不支出 → 0\n\n<strong>举一反三：</strong>\n如果规定'支出为正'呢？那上面三个题的答案会变成什么？\n（答案：30, −100, 0——方法一样，只是方向反了！）"},
          {type:"think", text:"<strong>💭 发散思维：</strong>'相反'的概念不仅出现在数学中，生活中到处都是：\n• 东 vs 西\n• 上 vs 下\n• 赚 vs 亏\n• 前进 vs 后退\n\n这种'对立统一'的思想是中国古代哲学的核心——'阴阳平衡'。数学中的正负数，其实就体现了这种哲学思想！"}
        ]
      }
    ],
    
    extensions: [
      {
        type: "multi-solution",
        title: "🧮 例题的多解法",
        description: "同一个题，可以用不同的思路来解——答案可能不同，但思路都是对的！",
        solutions: [
          {label:"思路一：找'相反词'", text:"先想'正方向上'对应的'反方向'是什么。收入↔支出、上升↔下降、增加↔减少。"},
          {label:"思路二：画数轴", text:"画一条数轴，0在中间。'正方向'在右边，'反方向'在左边。有困难时画个数轴就清楚了！"},
          {label:"思路三：代入具体数字", text:"如果还不明白，就代入具体的钱数来想：\"我收入50元→记+50，那支出30元→就是少了30→记−30\""}
        ]
      }
    ],
    
    summary: "📐 <strong>本章核心：</strong>\n\n" +
      "正负数并不难，关键是理解它们'表示相反意义的量'。\n\n" +
      "🌟 <strong>必须掌握：</strong>\n" +
      "1. 正数>0，负数<0，0是分界点\n" +
      "2. '−'号不能省略，'+'号可以省略\n" +
      "3. 0既不是正数也不是负数（！必考！）\n" +
      "4. 用正负数表示生活问题：先规定正方向"
  };

  // ========== Day 1 英语：字母+音标 ==========
  g.TEXTBOOK_DATA["1_english"] = {
    title: "Starter Unit 1 · Good Morning!",
    author: "英语七年级上册 · 人教版",
    overview: "初中英语的第一步！很多同学觉得英语难，其实是因为不了解英语的'规律'。\n\n" +
      "英语和中文最大的不同：<strong>英语是'拼读语言'</strong>——字母拼起来就是读音，不像中文每个字要单独记读音。\n\n" +
      "🎯 学习目标：\n" +
      "1. 掌握字母Aa-Hh的规范书写\n" +
      "2. 学会音标≈拼音的学习方法\n" +
      "3. 能读6个短元音音标\n" +
      "4. 体验'词根延伸记忆法'\n\n" +
      "⏰ 建议用时：35分钟\n" +
      "🔤 学字母 → 🎵 学音标 → 🌳 学词根",
    
    paragraphs: [
      {
        text: "🔤 字母 Aa Bb Cc Dd Ee Ff Gg Hh\n\n英语有26个字母，其中5个是'元音字母'（A E I O U），其余21个是'辅音字母'。\n\n就像中文拼音有'声母和韵母'，英语的音标有'辅音和元音'。元音和辅音拼在一起→单词的读音。",
        difficulty: "easy",
        keyPoints: [{label:"26字母", type:"phonetic"}, {label:"元音/辅音", type:"phonetic"}],
        highlights: [
          {word:"元音字母", color:"green", note:"Aa Ee Ii Oo Uu 这5个字母叫元音字母，它们是英语单词的'灵魂'——几乎每个单词都有元音。"},
          {word:"辅音字母", color:"yellow", note:"除了5个元音，其余21个都是辅音字母。它们相当于中文拼音的'声母'。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>🔑 记忆窍门：</strong>'元音五姐妹，A E I O U，有她们才能读单词！'\n\n英语里几乎每个单词都有元音字母。比如：'cat'里有个'a'，'dog'里有个'o'。没有元音字母的单词极少！"},
          {type:"tip", text:"<strong>🇨🇳 拼音类比法：</strong>\n拼音声母(b p m f) ≈ 英语辅音(/b/ /p/ /m/ /f/)\n拼音韵母(a o e i u) ≈ 英语元音(/æ/ /ɒ/ /e/ /ɪ/ /ʌ/)\n\n是不是很相似？用学拼音的方法学音标，事半功倍！"}
        ]
      },
      {
        text: "🎵 字母的规范书写（两江巴蜀期中考试必考！）：\n\n大写字母：占上两格（上两格）\n小写字母：a c e 占中间一格\nb d h 占上两格\ng p q 尾巴往下拖",
        difficulty: "easy",
        keyPoints: [{label:"书写规范", type:"phonetic"}],
        annotations: [
          {type:"teacher", text:"<strong>★ 考试必考！</strong> 初中的第一次英语考试通常会考'字母规范书写'，占10分左右！\n\n口诀记好了：'大写占两格，小写看尾巴。ace在中间，bdf往上窜，gpq往下拖。'"},
          {type:"key", text:"<strong>特别注意：</strong>\n• Gg——大写G下面一横，不是C加一横\n• Ee——大写E三横一样长\n• Ff——小写f的钩要写出来"}
        ]
      },
      {
        text: "🎵 音标入门：短元音 6 个\n\n/æ/ — 嘴巴张大，舌尖抵下齿，类似中文'爱'的a\n/e/ — 嘴巴半张，类似中文'哎'但更短\n/ɪ/ — 嘴巴微张，类似中文'一'但更短促\n/ɒ/ — 嘴巴圆张，类似中文'奥'但嘴巴更圆\n/ʌ/ — 嘴巴自然张开，类似中文'啊'但短促\n/ə/ — 嘴巴放松，类似中文轻声的'额'",
        difficulty: "medium",
        keyPoints: [{label:"短元音", type:"phonetic"}, {label:"发音方法", type:"phonetic"}],
        highlights: [
          {word:"音标", color:"green", note:"音标就像中文的'拼音'——用来表示单词的读音。/斜线/里的符号就是音标。"}
        ],
        annotations: [
          {type:"teacher", text:"<strong>用中文理解音标：</strong>\n/æ/ = 发'爱'音，但嘴巴要张大！试试看：a-a-æ-æ-æ\n/e/ = 发'诶'音，很短的'诶'！\n/ɪ/ = 发'衣'音，但要更短更轻！如：sit = s-ɪ-t（不是'细特'，是'斯-衣-特'）\n\n<strong>学习方法：先像拼音一样读，再微调嘴型！</strong>"},
          {type:"think", text:"<strong>💭 为什么英语有这么多'短元音'？</strong>\n因为英语单词通常读得很快，元音被'压缩'了。就像中文里'东西'的'西'读得轻而短一样。\n\n你试着快速读：'I am a student.'——这里的'a'就读得像/ə/，而不是/eɪ/！"}
        ]
      },
      {
        text: "🌳 词根延伸法：-ild\n\n英语单词不是孤立的！很多单词共享一个'词根'，就像一棵树长出的不同树枝。\n\n• build /bɪld/ 建造 → 把东西'延伸'起来\n• child /tʃaɪld/ 孩子 → 从婴儿'延伸'长大\n• mild /maɪld/ 温和的 → 性格柔和的'延伸'\n• wild /waɪld/ 野生的 → 大自然'延伸'出来的\n\n这四个词结尾都是-ild，都有'延伸、生长'的意思！",
        difficulty: "medium",
        keyPoints: [{label:"词根延伸法", type:"phonetic"}, {label:"-ild家族", type:"phonetic"}],
        annotations: [
          {type:"teacher", text:"<strong>🌟 这是一项非常重要的英语学习方法！</strong>\n\n英语单词不是一个个孤立的，而是像'家族'一样有'血缘关系'。\n\n<strong>词根法 = 记一个=记一串</strong>\n• tele-（远）+ phone（声音）= telephone 电话\n• tele-（远）+ vision（看）= television 电视\n• tele-（远）+ scope（看）+ telescope 望远镜\n\n记住了一个'tele'，你就同时记住了电话、电视、望远镜！"},
          {type:"tip", text:"<strong>记忆口诀：</strong>\n'build建筑要延伸，child孩子长大啦，\n mild温和脾气好，wild野生大自然！'\n\n读一遍试试，是不是很好记？"}
        ]
      }
    ],
    
    summary: "🌍 <strong>英语学习要点：</strong>\n\n" +
      "🌟 <strong>必须掌握：</strong>\n" +
      "1. 字母Aa-Hh规范书写（两江巴蜀期中必考10分！）\n" +
      "2. 6个短元音音标的读音（/æ/ /e/ /ɪ/ /ɒ/ /ʌ/ /ə/）\n" +
      "3. 词根-ild的四个词汇（build/child/mild/wild）\n" +
      "4. 英语是'拼读语言'——字母对发音有规律\n\n" +
      "💡 <strong>学习方法：</strong>用拼音的思维方式学音标，用词根的思维方式记单词！"
  };

})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
