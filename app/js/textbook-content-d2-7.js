/* ========================================
   Day 2-7 完整课文内容 + 教师批注
   ======================================== */
(function(g) {
  var T = g.TEXTBOOK_DATA;

  // ========== DAY 2 ==========
  T["2_chinese"] = {
    title: "春（第二课时）· 段落精读",
    author: "朱自清",
    overview: "今天继续学习《春》。昨天我们读了全文，今天重点分析文章的结构和修辞手法。\n\n" +
      "🎯 学习目标：掌握'盼春→绘春→赞春'三段结构、学会赏析比喻拟人排比\n\n" +
      "⏰ 建议用时：30分钟",
    paragraphs: [
      {text:"《春》全文可以分为三大部分：\n\n第一部分（第1段）：盼春——'盼望着，盼望着，东风来了，春天的脚步近了。'\n\n第二部分（第2-7段）：绘春——春草图、春花图、春风图、春雨图、迎春图\n\n第三部分（第8-10段）：赞春——三个比喻总结全文",
       difficulty:"easy",keyPoints:[{label:"文章结构",type:"grammar"}],
       annotations:[{type:"teacher",text:"<strong>★ 必考！</strong> 文章结构题：'请概括《春》的结构'。\n记住三个字：<strong>盼→绘→赞</strong>"}]},
      {text:"春草图（第2段）：'小草偷偷地从土里钻出来，嫩嫩的，绿绿的。'\n\n赏析：'偷偷地'用拟人手法写小草，'钻'字写出了春草冲破土层的生命力。'嫩嫩的，绿绿的'用叠词增强节奏感。",
       difficulty:"medium",keyPoints:[{label:"春草图",type:"rhetoric"},{label:"拟人",type:"rhetoric"}],
       annotations:[{type:"teacher",text:"拟人手法的效果：把'物'当'人'来写，让事物更生动。'钻'字不仅写动作，更写出了'生命力'。"}]},
      {text:"春花图（第3段）：'红的像火，粉的像霞，白的像雪。'\n\n赏析：三个比喻连用（排比），从不同颜色写春花。'闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿'——由实到虚，展开想象。",
       difficulty:"medium",keyPoints:[{label:"春花图",type:"rhetoric"},{label:"比喻+排比",type:"rhetoric"}],
       annotations:[{type:"key",text:"'红的像火，粉的像霞，白的像雪'——这是比喻+排比的结合。三个比喻句式相同，增强了语势。考试常考赏析！"}]},
      {text:"春风图（第4段）：'吹面不寒杨柳风'，不错的，像母亲的手抚摸着你。\n\n赏析：引用古诗 + 比喻。'像母亲的手'写出了春风的温暖、轻柔。",
       difficulty:"medium",keyPoints:[{label:"春风图",type:"rhetoric"},{label:"引用",type:"grammar"}]},
      {text:"春雨图（第5段）：'像牛毛，像花针，像细丝'——三个比喻写出了春雨的细密。",
       difficulty:"easy",keyPoints:[{label:"春雨图",type:"rhetoric"}]},
      {text:"赞春（第8-10段）：'春天像刚落地的娃娃……像小姑娘……像健壮的青年'\n\n三个比喻分别象征：新→美→力，层层递进。",
       difficulty:"hard",keyPoints:[{label:"赞春",type:"rhetoric"},{label:"三重喻",type:"rhetoric"}],
       annotations:[{type:"teacher",text:"<strong>★ 考试必考题：</strong>三个比喻的顺序能调换吗？\n答案：不能。因为'新→美→力'是层层递进的关系——从新生到美丽再到力量，代表了春天的发展过程。"}]}
    ],
    summary:"🌟 本课重点：文章三段式结构（盼→绘→赞）、五幅春景图、三种修辞（比喻/拟人/排比）"
  };

  T["2_math"] = {
    title: "§1.2.1 数轴",
    author: "七年级数学 · 人教版",
    overview:"数轴是'数形结合'思想的第一个工具——把抽象的数变成看得见的点。\n\n🎯 学习目标：掌握数轴三要素、能标数和比较大小",
    paragraphs:[
      {text:"数轴的定义：规定了原点、正方向和单位长度的直线叫做数轴。\n\n三要素（缺一不可）：\n① 原点——用0表示\n② 正方向——通常向右（箭头表示）\n③ 单位长度——等距的刻度",
       difficulty:"easy",keyPoints:[{label:"三要素",type:"formula"}],
       annotations:[{type:"teacher",text:"<strong>记忆口诀：</strong>'数轴三要素，原正方长度，缺一不可哦！'\n\n画数轴时，先画一条直线→定原点0→画箭头→等距标数。"}]},
      {text:"数轴的规则：\n• 正数在原点的右边，负数在原点的左边\n• 每个数在数轴上对应唯一的一个点\n• 越往右数越大，越往左数越小",
       difficulty:"easy",keyPoints:[{label:"数轴规则",type:"formula"}],
       annotations:[{type:"key",text:"<strong>★ 重要性质：</strong>数轴上，右边的数总比左边的数大。这是比较有理数大小的根本方法！"}]},
      {text:"例题：在数轴上表示下列各数：3, −2, 0, −4, 1.5\n\n解法：1. 画数轴（定原点→正方向→单位长度）\n2. 正数在原点右边（3在0右边3格，1.5在0右边1.5格）\n3. 负数在原点左边（−2在0左边2格，−4在0左边4格）",
       difficulty:"medium",keyPoints:[{label:"数轴标数",type:"formula"}],
       annotations:[{type:"teacher",text:"<strong>两种画法都行：</strong>\n方法一：先标整数点，再把小数插进去\n方法二：从0开始，正数往右数，负数往左数"}]}
    ],
    extensions:[{type:"multi-solution",title:"数轴的两个用途",
     solutions:[{label:"用途1：标数",text:"把抽象的数变成看得见的点"},{label:"用途2：比大小",text:"左边<右边，一眼看出大小关系"}]}],
    summary:"🌟 数轴是初中数学第一个'数形结合'工具，学会它后面的坐标、函数都不怕！"
  };

  T["2_english"] = {
    title: "Starter Unit 1 · 问候语 + 拼读规律",
    author: "英语七年级上册",
    overview:"🎯 学会日常问候语 + 理解英语句子'公式'",
    paragraphs:[
      {text:"核心对话：\nA: Good morning! 早上好！\nB: Good morning! I'm Alice. 我是爱丽丝。\nA: Nice to meet you! 很高兴认识你！\nB: Nice to meet you, too. 我也很高兴。",
       difficulty:"easy",keyPoints:[{label:"问候语",type:"grammar"}],
       annotations:[{type:"teacher",text:"注意：'Nice to meet you' 是在第一次见面时用的。如果已经认识了，应该说 'Good to see you again!'"}]},
      {text:"英语句子=公式+替换词\n\n公式1：I am + 名字 → I am Tom.\n公式2：My name is + 名字 → My name is Tom.\n公式3：What is + 你的名字? → What is your name?",
       difficulty:"medium",keyPoints:[{label:"句子公式",type:"grammar"}],
       annotations:[{type:"teacher",text:"<strong>英语比中文简单的地方：</strong>英语句子有固定结构，像套公式一样。而中文没有'be动词'这个概念。所以'My name Tom'是错的——少了is！"}]},
      {text:"be动词三兄弟：\n• am → 跟I（I am）\n• is → 跟单数（He/She/It is, My name is）\n• are → 跟复数/You（You are, We are）",
       difficulty:"medium",keyPoints:[{label:"be动词",type:"grammar"}],
       annotations:[{type:"key",text:"<strong>★ 必背！</strong> be动词的搭配：I用am，you用are，is跟着他她它！"}]}
    ],
    summary:"🌟 掌握三个句型 + be动词的用法，你就能做自我介绍了！"
  };

  // ========== DAY 3 ==========
  T["3_chinese"] = {
    title:"第2课《济南的冬天》",
    author:"老舍",
    overview:"老舍把济南的冬天写得'温晴'可爱。为什么济南的冬天这么特别？读完你就知道了！\n\n🎯 学习目标：了解老舍、掌握对比手法、体会'温晴'特点",
    paragraphs:[
      {text:"老舍（1899-1966），原名舒庆春，代表作《骆驼祥子》《四世同堂》《茶馆》。他的语言京味十足，幽默风趣。",
       difficulty:"easy",keyPoints:[{label:"老舍简介",type:"grammar"}],
       annotations:[{type:"teacher",text:"<strong>考点：</strong>老舍的代表作——《骆驼祥子》《四世同堂》《茶馆》。他是'人民艺术家'。"}]},
      {text:"'对于一个在北平住惯的人，像我，冬天要是不刮大风，便是奇迹；济南的冬天是没有风声的。'\n\n第一句就用对比——北平vs济南，突出济南冬天'没有风声'的特点。",
       difficulty:"medium",keyPoints:[{label:"对比手法",type:"rhetoric"}],
       highlights:[{word:"对比",color:"yellow",note:"对比是把两个事物放在一起比较，突出其中一个的特点。"}]},
      {text:"'一个老城，有山有水，全在天底下晒着阳光，暖和安适地睡着。'\n\n'晒着阳光''暖和安适地睡着'——拟人手法，把老城写成一个人。",
       difficulty:"medium",keyPoints:[{label:"拟人",type:"rhetoric"}],
       annotations:[{type:"teacher",text:"老舍笔下的济南不是'寒冷'的，而是'暖和安适'的。这就是他独特的感受——用情感去写城市。"}]},
      {text:"'最妙的是下点小雪呀。看吧，山上的矮松越发的青黑，树尖上顶着一髻儿白花，好像日本看护妇。'",
       difficulty:"medium",keyPoints:[{label:"雪景描写",type:"rhetoric"}],
       annotations:[{type:"teacher",text:"'一髻儿白花'——比喻，把树尖的积雪比作护士帽。"}]}
    ],
    summary:"🌟 重点：对比手法（北平vs伦敦vs热带vs济南）、拟人、'温晴'特点"
  };

  T["3_math"] = {
    title:"§1.2.2 相反数",
    author:"七年级数学",
    overview:"🎯 学习目标：理解相反数的概念和性质，能在数轴上找到相反数",
    paragraphs:[
      {text:"相反数的定义：只有符号不同的两个数互为相反数。\n\n• 3的相反数是−3，−3的相反数是3\n• 0的相反数是0（唯一例外！）",
       difficulty:"easy",keyPoints:[{label:"相反数定义",type:"formula"}],
       annotations:[{type:"key",text:"<strong>★ 必背！</strong> 0的相反数是0——这是最特殊的！"}]},
      {text:"几何意义：在数轴上，互为相反数的两个点到原点的距离相等。\n\n• 3和−3到0的距离都是3\n• 5和−5到0的距离都是5",
       difficulty:"medium",keyPoints:[{label:"几何意义",type:"formula"}],
       annotations:[{type:"teacher",text:"<strong>理解方法：</strong>相反数就像'照镜子'——3的镜像是−3，它们离镜子（原点）一样远。"}]},
      {text:"例题：-(−3) = ？\n\n解法：−3的相反数是3，所以−(−3)=3。'负负得正'！",
       difficulty:"hard",
       annotations:[{type:"teacher",text:"<strong>注意：</strong>−(−3)读作'负3的相反数'，就是3。这个以后学减法很有用！"}]}
    ],
    summary:"🌟 相反数：只有符号不同 + 0的相反数是0 + 数轴上到原点距离相等"
  };

  T["3_english"] = {
    title:"Starter Unit 2 · 字母Ii-Rr",
    author:"英语七年级上册",
    overview:"🎯 字母Ii-Rr + 爆破音（p/b, t/d, k/g）",
    paragraphs:[
      {text:"字母Ii-Rr的书写：大写I像数字1，大写L是直角，P和Q要注意区分。\n\nRr的发音比较特殊，音标是/ɑːr/，舌头要卷起来。",
       difficulty:"easy",keyPoints:[{label:"字母书写",type:"phonetic"}]},
      {text:"爆破音：声音像'爆炸'一样冲出来。\n/p/ /b/ — 双唇爆破（pen, big）\n/t/ /d/ — 舌尖爆破（tea, dog）\n/k/ /ɡ/ — 舌根爆破（cat, go）",
       difficulty:"medium",keyPoints:[{label:"爆破音",type:"phonetic"}],
       annotations:[{type:"teacher",text:"<strong>和拼音对比：</strong>/p/≈p（泼）、/b/≈b（波）、/t/≈t（特）、/d/≈d（得）、/k/≈k（科）、/ɡ/≈g（哥）\n发音位置几乎一样！"}]}
    ],
    summary:"🌟 掌握Ii-Rr字母书写 + 6个爆破音的发音"
  };

  // ========== DAY 4 ==========
  T["4_chinese"] = {
    title:"第2课《济南的冬天》· 写作手法",
    author:"老舍",
    overview:"🎯 深度赏析对比手法和拟人手法",
    paragraphs:[
      {text:"三组对比：\n1. 济南vs北平——'没有风声' vs '刮大风'\n2. 济南vs伦敦——'响晴' vs '雾蒙蒙'\n3. 济南vs热带——'温晴' vs '毒辣辣的日头'",
       difficulty:"medium",keyPoints:[{label:"三组对比",type:"rhetoric"}],
       annotations:[{type:"teacher",text:"<strong>对比的作用：</strong>通过对比，突出济南冬天'温晴'的独特特点。写作文时，想突出一个人/物的特点，用对比最有效！"}]},
      {text:"'那水呢，不但不结冰，倒反在绿萍上冒着点热气，水藻真绿，把终年贮蓄的绿色全拿出来了。'\n\n'把绿色全拿出来'——拟人，把水藻写成一个大方的人。",
       difficulty:"medium",keyPoints:[{label:"拟人赏析",type:"rhetoric"}]},
      {text:"'看吧，由澄清的河水慢慢往上看吧，空中，半空中，天上，自上而下全是那么清亮，那么蓝汪汪的，整个的是块空灵的蓝水晶。'\n\n用'蓝水晶'比喻济南的冬天。",
       difficulty:"hard",keyPoints:[{label:"比喻赏析",type:"rhetoric"}],
       annotations:[{type:"teacher",text:"'蓝水晶'这个比喻特别巧妙——水晶是透明的，说明济南的冬天清澈透亮！"}]}
    ],
    summary:"🌟 对比三组 + 拟人 + 比喻 = 老舍的语言魅力"
  };

  T["4_math"] = {
    title:"§1.2.3 绝对值",
    author:"七年级数学",
    overview:"🎯 绝对值的概念、几何意义和三条性质",
    paragraphs:[
      {text:"绝对值的定义：一个数a在数轴上对应的点到原点的距离，叫做a的绝对值，记作|a|。\n\n• |5| = 5，|−5| = 5（距离都是5）\n• |0| = 0",
       difficulty:"easy",keyPoints:[{label:"绝对值定义",type:"formula"}],
       annotations:[{type:"teacher",text:"<strong>关键理解：</strong>绝对值是'距离'——距离没有正负之分，永远是正数或0！"}]},
      {text:"绝对值的三条性质（必背！）：\n① 非负性：|a| ≥ 0（任何数的绝对值都不是负数）\n② 互为相反数的绝对值相等：|a| = |−a|\n③ 绝对值最小的数是0",
       difficulty:"medium",keyPoints:[{label:"三条性质",type:"formula"}],
       annotations:[{type:"key",text:"<strong>★ 必背！</strong> 三条性质都要记住，特别是'绝对值最小的数是0'！"}]},
      {text:"例题：若|x| = 5，求x的值。\n\n解：到原点距离等于5的点有两个——5和−5。所以x=5或x=−5。",
       difficulty:"medium",
       annotations:[{type:"teacher",text:"<strong>★ 考试常考！</strong> |x|=a（a>0），x有两个值：a和−a。很多同学只写一个！"}]}
    ],
    summary:"🌟 绝对值=距离 + 三条性质 + |x|=a有两个解"
  };

  T["4_english"] = {
    title:"Starter Unit 2 · 颜色词汇",
    author:"英语七年级上册",
    overview:"🎯 8个颜色词 + What color句型",
    paragraphs:[
      {text:"颜色词汇：\nred 红色 / green 绿色 / yellow 黄色 / blue 蓝色\nblack 黑色 / white 白色 / orange 橙色 / brown 棕色",
       difficulty:"easy",keyPoints:[{label:"颜色词",type:"phonetic"}],
       annotations:[{type:"teacher",text:"记忆技巧：orange既是'橙子'也是'橙色'——看到橙子就想到橙色！"}]},
      {text:"句型：\n— What color is it? 它是什么颜色的？\n— It's red. 它是红色的。",
       difficulty:"easy",keyPoints:[{label:"What color",type:"grammar"}],
       annotations:[{type:"teacher",text:"注意：回答颜色时要用'It's + 颜色'，不能只说一个颜色词。"}]}
    ],
    summary:"🌟 8个颜色词 + What color问句"
  };

  // ========== DAY 5 ==========
  T["5_chinese"] = {
    title:"第3课《雨的四季》",
    author:"刘湛秋",
    overview:"🎯 描写四季雨的不同特点 + 通感修辞",
    paragraphs:[
      {text:"刘湛秋用'通感'的手法，把雨写成了有灵魂的东西：\n• 春雨：清新、温柔\n• 夏雨：热烈、粗犷\n• 秋雨：沉静、端庄\n• 冬雨：自然、平静",
       difficulty:"medium",keyPoints:[{label:"四季雨的特点",type:"rhetoric"},{label:"通感",type:"rhetoric"}],
       annotations:[{type:"teacher",text:"<strong>通感：</strong>把一种感官的感觉移到另一种感官上。比如把雨声写成'像小提琴'——把听觉变成视觉。"}]}
    ],
    summary:"🌟 通感——打通五感的写作技巧"
  };

  T["5_math"] = {
    title:"§1.3.1 有理数的加法",
    author:"七年级数学",
    overview:"🎯 有理数加法法则——初中数学第一个计算关",
    paragraphs:[
      {text:"有理数加法法则（三种情况）：\n\n① 同号相加：取相同符号，绝对值相加\n例：(+5)+(+3)=+8  (−5)+(−3)=−8\n\n② 异号相加：取绝对值大的符号，大减小\n例：(+5)+(−3)=+2  (−5)+(+3)=−2\n\n③ 与0相加：仍得这个数",
       difficulty:"medium",keyPoints:[{label:"加法法则",type:"formula"}],
       annotations:[{type:"teacher",text:"<strong>记忆口诀：</strong>'同号相加符号不变，绝对值相加；异号相加减，符号随大数。'"]}]},
    {text:"计算：(−12)+(+7)+(−5)+(+10)\n\n解法一（从左到右）：\n=−5+(−5)+(+10)=−10+(+10)=0\n\n解法二（凑整法）：\n=(−12)+(−5)+(+7)+(+10)=−17+17=0",
     difficulty:"hard",keyPoints:[{label:"多步加法",type:"formula"}],
     annotations:[{type:"teacher",text:"<strong>两种方法都可以！</strong> 方法一按顺序，方法二先把同号放一起。哪种顺手用哪种！"}]}
    ],
    extensions:[{type:"multi-solution",title:"两种解题思路",
     solutions:[{label:"顺序法",text:"从左到右一步一步算"},{label:"凑整法",text:"把正数和正数加、负数和负数加，最后再加"}]}],
    summary:"🌟 同号相加 + 异号相加 + 0不变"
  };

  T["5_english"] = {
    title:"Starter Unit 3 · 字母Ss-Zz + 预备篇总结",
    author:"英语七年级上册",
    overview:"🎯 完成26个字母 + 预备篇总复习",
    paragraphs:[
      {text:"最后一批字母：S T U V W X Y Z\n\n特别关注：\n• Uu是最后一个元音字母（Aa Ee Ii Oo Uu）\n• Vv汉语拼音没有这个音，上齿咬下唇\n• Ww=double U（两个U），来源很有趣",
       difficulty:"easy",keyPoints:[{label:"字母Ss-Zz",type:"phonetic"}]},
      {text:"26个字母分类：\n元音字母（5个）：A E I O U\n辅音字母（21个）：其余都是",
       difficulty:"easy",keyPoints:[{label:"字母分类",type:"phonetic"}],
       annotations:[{type:"key",text:"<strong>★ 必考题：</strong> 请写出5个元音字母。答案：Aa Ee Ii Oo Uu"}]}
    ],
    summary:"🌟 预备篇学完，你已掌握26个字母、基本问候语、颜色词汇！"
  };

  // ========== DAY 6 ==========
  T["6_chinese"] = {
    title:"第4课《古代诗歌四首》(上)",
    author:"曹操、李白",
    overview:"🎯 学习《观沧海》和《闻王昌龄左迁龙标遥有此寄》",
    paragraphs:[
      {text:"《观沧海》曹操（东汉末年）\n\n东临碣石，以观沧海。\n水何澹澹，山岛竦峙。\n树木丛生，百草丰茂。\n秋风萧瑟，洪波涌起。\n日月之行，若出其中；\n星汉灿烂，若出其里。\n\n赏析：整首诗气势磅礴，'日月之行，若出其中'写出了大海的壮阔和诗人博大的胸襟。",
       difficulty:"medium",keyPoints:[{label:"观沧海",type:"grammar"},{label:"曹操",type:"grammar"}],
       annotations:[{type:"teacher",text:"<strong>背景知识：</strong>曹操写这首诗时刚打败了袁绍，正是意气风发的时候。'日月之行，若出其中'——太阳和月亮好像从大海里升起，想象力极其丰富！"}]},
      {text:"《闻王昌龄左迁龙标遥有此寄》李白\n\n杨花落尽子规啼，闻道龙标过五溪。\n我寄愁心与明月，随君直到夜郎西。\n\n赏析：李白把'愁心'寄托给明月，让月亮陪着朋友。拟人手法，真挚感人。",
       difficulty:"medium",keyPoints:[{label:"闻王昌龄",type:"grammar"},{label:"李白",type:"grammar"}],
       annotations:[{type:"teacher",text:"<strong>考点：</strong>'左迁'是什么意思？（降职）'我寄愁心与明月'用了什么修辞？（拟人）"}]}
    ],
    summary:"🌟 《观沧海》—曹操的壮阔胸怀、《闻王昌龄》—李白的真挚友谊"
  };

  T["6_math"] = {
    title:"§1.3.2 有理数的减法",
    author:"七年级数学",
    overview:"🎯 减法=加法+相反数",
    paragraphs:[
      {text:"有理数减法法则：减去一个数，等于加上这个数的相反数。\n\na − b = a + (−b)\n\n举例：\n5 − 3 = 5 + (−3) = 2\n5 − (−3) = 5 + 3 = 8\n(−5) − 3 = (−5) + (−3) = −8\n(−5) − (−3) = (−5) + 3 = −2",
       difficulty:"medium",keyPoints:[{label:"减法法则",type:"formula"}],
       annotations:[{type:"teacher",text:"<strong>记忆：</strong>'减变加，减数变相反数'。两个变化同时做！\n特别注意：减负=加正！"}]},
      {text:"珠穆朗玛峰海拔8848米，吐鲁番盆地海拔−155米，两地相差多少米？\n\n解：8848 − (−155) = 8848 + 155 = 9003米",
       difficulty:"medium",
       annotations:[{type:"teacher",text:"生活应用：求'温差'、'海拔差'等都用减法。记住：大−小=差，但如果有负数要转化成加法！"}]}
    ],
    summary:"🌟 减法=加法+相反数，减负=加正"
  };

  T["6_english"] = {
    title:"预备篇综合复习 + 小测验",
    author:"英语七年级上册",
    overview:"🎯 复习26个字母、问候语、颜色，查漏补缺",
    paragraphs:[
      {text:"预备篇知识点回顾：\n\n字母：26个字母，5个元音（A E I O U）\n\n句型：\n• Good morning/afternoon/evening!\n• — How are you? — I'm fine, thanks.\n• — What color is it? — It's red.\n• — What's this? — It's a pen.",
       difficulty:"easy",keyPoints:[{label:"预备篇复习",type:"grammar"}],
       annotations:[{type:"teacher",text:"<strong>复习方法：</strong>把每个句型大声读3遍，然后遮住英文说中文，再遮住中文说英文。"}]}
    ],
    summary:"🌟 预备篇是初中英语的基础，务必掌握扎实！"
  };

  // ========== DAY 7 ==========
  T["7_chinese"] = {
    title:"第4课《古代诗歌四首》(下)",
    author:"王湾、马致远",
    overview:"🎯 学习《次北固山下》和《天净沙·秋思》",
    paragraphs:[
      {text:"《次北固山下》王湾（唐代）\n\n客路青山外，行舟绿水前。\n潮平两岸阔，风正一帆悬。\n海日生残夜，江春入旧年。\n乡书何处达？归雁洛阳边。\n\n千古名句：'海日生残夜，江春入旧年'——新事物从旧事物中诞生，蕴含哲理。",
       difficulty:"hard",keyPoints:[{label:"次北固山下",type:"grammar"},{label:"千古名句",type:"grammar"}],
       annotations:[{type:"teacher",text:"<strong>★ 必考古诗赏析！</strong>'海日生残夜，江春入旧年'——红日从残夜中升起，春天在旧年中到来。这告诉我们：新事物必将取代旧事物！"}]},
      {text:"《天净沙·秋思》马致远（元代）\n\n枯藤老树昏鸦，小桥流水人家，\n古道西风瘦马。夕阳西下，断肠人在天涯。\n\n全曲28字，10个名词。前三个（枯藤/老树/昏鸦）写悲凉，中间（小桥/流水/人家）写温暖，以乐景写哀情。",
       difficulty:"hard",keyPoints:[{label:"天净沙·秋思",type:"grammar"},{label:"以乐景写哀情",type:"rhetoric"}],
       annotations:[{type:"teacher",text:"<strong>'秋思之祖'！</strong>这首元曲的特点是：名词叠加，没有动词。'枯藤老树昏鸦'——三个名词就组成了一幅画面。这种手法叫'列锦'。"}]}
    ],
    summary:"🌟 两首经典：'海日生残夜'的哲理 + '断肠人在天涯'的乡愁"
  };

  T["7_math"] = {
    title:"§1.4.1 有理数的乘法",
    author:"七年级数学",
    overview:"🎯 乘法法则：同号得正、异号得负",
    paragraphs:[
      {text:"乘法法则：两数相乘，同号得正，异号得负，绝对值相乘。\n\n• (+5)×(+3)=15  （正正得正）\n• (−5)×(−3)=15  （负负得正）\n• (+5)×(−3)=−15 （正负得负）\n• (−5)×(+3)=−15 （负正得负）",
       difficulty:"medium",keyPoints:[{label:"乘法法则",type:"formula"}],
       annotations:[{type:"teacher",text:"<strong>记忆口诀：</strong>'正正得正，负负得正，正负得负，负正得负。'只看负号个数，奇数个→负，偶数个→正！"}]},
      {text:"多个数相乘：(−2)×(−3)×(−4)\n\n解法：先数负号——有3个（奇数）→结果为负\n再算绝对值：2×3×4=24\n结果：−24",
       difficulty:"medium",keyPoints:[{label:"奇负偶正",type:"formula"}],
       annotations:[{type:"key",text:"<strong>★ 奇负偶正：</strong>多个数相乘，先看负号个数。奇数个→结果为负；偶数个→结果为正！"}]}
    ],
    summary:"🌟 乘法口诀：同号得正异号得负 + 奇负偶正"
  };

  T["7_english"] = {
    title:"Unit 1 · My name's Gina.",
    author:"英语七年级上册",
    overview:"🎯 第一个正式单元：自我介绍 + be动词",
    paragraphs:[
      {text:"核心句型：\n— What's your name? 你叫什么名字？\n— My name is Gina. / I'm Gina.\n— Nice to meet you! 很高兴认识你！",
       difficulty:"easy",keyPoints:[{label:"自我介绍",type:"grammar"}],
       annotations:[{type:"teacher",text:"注意：不能说'My name Gina.'——缺少动词is！英语句子必须有动词。"}]},
      {text:"be动词总结：\nI am (I'm) — 我\nYou are (You're) — 你/你们\nHe/She/It is (He's/She's/It's) — 他/她/它",
       difficulty:"easy",keyPoints:[{label:"be动词",type:"grammar"}],
       annotations:[{type:"key",text:"<strong>★ 必背口诀：</strong>'I用am，you用are，is连着他她它，复数全都用are！'"}]},
      {text:"词根延伸：tele-\n• telephone = tele(远)+phone(声音)=电话\n• television = tele(远)+vision(看)=电视\n• telescope = tele(远)+scope(看)=望远镜",
       difficulty:"medium",keyPoints:[{label:"词根tele",type:"phonetic"}],
       annotations:[{type:"teacher",text:"记一个tele，记住三个单词！这就是词根法的威力！"}]}
    ],
    summary:"🌟 Unit 1重点：自我介绍 + be动词三兄弟 + 词根tele-"
  };

})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
