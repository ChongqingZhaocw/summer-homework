// 兼容浏览器和Node环境的全局变量定义
(function(global) {
  // --- Day 1 英语增强版 ---
  global.enhancedEnglishDay1 = {
    title: "Starter Unit 1 · 字母A-H + 英语特征入门",
    preview: "英语没有你想的那么难！它有很多规律和'公式'，掌握了这些规律，你就能举一反三，快速记住大量单词！",
    sections: [
      {type:"fun-fact",icon:"🌟",label:"学好英语的三大窍门",
       body:"<p><strong>① 英语是'拼读'语言</strong>——看到字母就能拼出发音（不像中文看到字不知道读音）。掌握了字母和音标的对应规律，就能'见词能读'！</p><p><strong>② 英语单词有'家族'</strong>——很多单词共享一个'词根'，像一棵树上的不同树枝。记住一个词根，就能猜出一串词的意思！</p><p><strong>③ 英语有'公式'</strong>——句子结构就像数学公式。主语+动词+宾语，套上不同的词就能造不同的句子。</p>"},
      {type:"phonetic-compare",title:"🔤 音标≈拼音 对照表（点击▶听发音）",
       items:[
         {symbol:"/b/",example:"big /bɪɡ/",pinyin:"b（波）"},
         {symbol:"/p/",example:"pen /pen/",pinyin:"p（泼）"},
         {symbol:"/m/",example:"map /mæp/",pinyin:"m（摸）"},
         {symbol:"/f/",example:"fish /fɪʃ/",pinyin:"f（佛）"},
         {symbol:"/d/",example:"dog /dɒɡ/",pinyin:"d（得）"},
         {symbol:"/t/",example:"tea /tiː/",pinyin:"t（特）"},
         {symbol:"/n/",example:"nose /nəʊz/",pinyin:"n（讷）"},
         {symbol:"/l/",example:"leg /leɡ/",pinyin:"l（勒）"},
         {symbol:"/ɡ/",example:"go /ɡəʊ/",pinyin:"g（哥）"},
         {symbol:"/k/",example:"cat /kæt/",pinyin:"k（科）"}
       ]},
      {type:"knowledge",title:"🔑 英语最大的特征：字母和发音有规律",
       body:"<p><strong>★ 英语和中文的最大区别：</strong></p><p>中文：看到'春'字，你不知道它读chūn——需要死记硬背。</p><p><strong>英语：看到'cat'，你能读出来！</strong>c→/k/, a→/æ/, t→/t/，拼起来就是/kæt/。</p><p>这就是英语的<strong>'自然拼读法'</strong>——60%以上的英语单词都可以'见词能读'！</p><p>————————————————</p><p><strong>★ 元音字母的基本发音规律（第一天先了解）：</strong></p><p>• Aa → 短音 /æ/（cat, map, bag）| 长音 /eɪ/（name, face, cake）</p><p>• Ee → 短音 /e/（bed, red, pen）| 长音 /iː/（he, she, me）</p><p>• Ii → 短音 /ɪ/（sit, big, pig）| 长音 /aɪ/（like, bike, time）</p><p>• Oo → 短音 /ɒ/（hot, dog, box）| 长音 /əʊ/（go, no, home）</p><p>• Uu → 短音 /ʌ/（cup, bus, sun）| 长音 /uː/（ruler, blue, tune）</p><p><strong>规律：</strong>'辅音+元音+辅音（+e）'——有e在末尾时，元音发长音（自己的名字音）！</p>"},
      {type:"word-tree",title:"🌳 词根延伸法：-ild",root:"-ild",rootMeaning:"延伸、建造",
       branches:[
         {word:"build",meaning:"建造",connection:"把东西'延伸'起来"},
         {word:"child",meaning:"孩子",connection:"从婴儿'延伸'长大"},
         {word:"mild",meaning:"温和的",connection:"性格柔和的'延伸'"},
         {word:"wild",meaning:"野生的",connection:"大自然'延伸'出来的"}
       ]},
      {type:"knowledge",title:"✍️ 字母Aa-Hh书写规范",
       body:"<p><strong>★ 英语字母书写口诀：</strong></p><p>'大写字母上两格，小写字母看类型。ace在中间，bdf占两格，gpq尾巴往下拖。'</p><p><strong>两江巴蜀中学注意：</strong>字母规范书写占10分左右，四线三格要遵守！</p>"},
      {type:"task",title:"📋 今日任务（英语）",tasks:[
        {text:"跟读音标-拼音对照表的10个音标，每个读3遍",tag:"audio"},
        {text:"抄写字母Aa-Hh（大小写各3遍，注意书写规范）",tag:"write"},
        {text:"看一遍元音字母规律表，尝试拼读cat/cake等",tag:"read"},
        {text:"背诵单词家族：build, child, mild, wild",tag:"recite"},
        {text:"口语练习：跟读 Good morning! 和 Nice to meet you!",tag:"audio"}
      ]}
    ]
  };

  // --- Day 2 英语增强版 ---
  global.enhancedEnglishDay2 = {
    title: "Starter Unit 1 · 日常问候语 + 拼读规律",
    preview: "今天继续掌握'英语公式'！英语句子是有固定结构的，就像搭积木一样简单。",
    sections: [
      {type:"speak-panel",title:"🗣️ 核心对话",phrase:"Good morning! Nice to meet you!",
       pinyinLike:"古德·毛宁！奈斯·图·米特·尤！",
       tip:"💡 注意：每个单词末尾的辅音要轻读，不要加'e'的音！'Good'不要读成'古德饿'，末尾辅音轻轻带过就好。"},
      {type:"knowledge",title:"🔑 英语句子'公式'——像搭积木",
       body:"<p><strong>★ 英语句子=固定公式+替换词</strong></p><p>就像数学公式 y = kx + b，英语也有固定结构：</p><p><strong>公式1：【主语 + be动词 + 其他】</strong></p><p>• I <strong>am</strong> + 名字 → I am Tom.</p><p>• My name <strong>is</strong> + 名字 → My name is Tom.</p><p><strong>公式2：【What + be动词 + 主语?】</strong></p><p>• What is your name? 你的名字是什么？</p><p>• What color is it? 它是什么颜色的？</p>"},
      {type:"fun-fact",icon:"🔄",label:"英语规律：名词变复数",
       body:"<p>英语名词变复数就像中文说'们'——不过规则更复杂一点：</p><p>• 大部分直接加 <strong>-s</strong>：cat → cats</p><p>• 以s,x,ch,sh结尾加 <strong>-es</strong>：box → boxes</p><p>• 辅音+y结尾→变y为i加<strong>-es</strong>：baby → babies</p><p><strong>记忆口诀：</strong>'名变复，加s，s x ch sh加es，辅y变i加es'！</p>"},
      {type:"word-tree",title:"🌳 词根延伸法：tele-",root:"tele-",rootMeaning:"远的（来自希腊语）",
       branches:[
         {word:"telephone",meaning:"电话",connection:"tele(远)+phone(声音)=让远方声音传过来"},
         {word:"television",meaning:"电视",connection:"tele(远)+vision(看)=看远方传来的画面"},
         {word:"telegram",meaning:"电报",connection:"tele(远)+gram(写)=远方写来的信息"},
         {word:"telescope",meaning:"望远镜",connection:"tele(远)+scope(看)=看远方的东西"}
       ]},
      {type:"phonetic-enhanced",title:"🎵 辅音音标（点击听发音）",
       items:[
         {symbol:"/b/",example:"big /bɪɡ/",pinyin:"b（波）"},
         {symbol:"/p/",example:"pen /pen/",pinyin:"p（泼）"},
         {symbol:"/m/",example:"map /mæp/",pinyin:"m（摸）"},
         {symbol:"/f/",example:"fish /fɪʃ/",pinyin:"f（佛）"},
         {symbol:"/d/",example:"dog /dɒɡ/",pinyin:"d（得）"},
         {symbol:"/t/",example:"ten /ten/",pinyin:"t（特）"},
         {symbol:"/k/",example:"cat /kæt/",pinyin:"k（科）"},
         {symbol:"/ɡ/",example:"go /ɡəʊ/",pinyin:"g（哥）"}
       ]},
      {type:"flip-card",title:"🃏 互动记忆",front:"Good afternoon 是什么意思？",back:"下午好！",
       backDetail:"afternoon = after(在…之后)+noon(正午)→正午之后→下午"},
      {type:"task",title:"📋 今日任务（英语）",tasks:[
        {text:"跟读Good morning! / Nice to meet you! 各5遍",tag:"audio"},
        {text:"抄写：'Good morning! I'm... Nice to meet you!'",tag:"write"},
        {text:"背诵词根 tele- 的4个单词（记一个=记四个）",tag:"recite"},
        {text:"跟读辅音音标 /b/ /p/ /m/ /f/ /d/ /t/ /k/ /ɡ/",tag:"audio"},
        {text:"完成课本S2练习对话部分",tag:"practice"}
      ]}
    ]
  };

  // --- 词根延伸库 ---
  global.WORD_FAMILIES = {
    "tion": {root:"-tion",meaning:"动词→名词",
     examples:[{word:"action",meaning:"行动",from:"act(行动)+tion"},{word:"education",meaning:"教育",from:"educate→删除e+tion"}],
     tip:"-tion是最常见的名词后缀，相当于'……性、……化'"},
    "ing": {root:"-ing",meaning:"正在做……",
     examples:[{word:"reading",meaning:"阅读",from:"read+ing"},{word:"building",meaning:"建筑",from:"build+ing→正在建造的东西"}],
     tip:"-ing是最活跃的后缀，加在动词后表示'正在做某事'"},
    "ly": {root:"-ly",meaning:"形容词→副词",
     examples:[{word:"quickly",meaning:"快速地",from:"quick+ly"},{word:"carefully",meaning:"仔细地",from:"careful+ly"}],
     tip:"-ly相当于'……地'，看到形容词+ly就是副词"},
    "re": {root:"re-",meaning:"再次、又",
     examples:[{word:"return",meaning:"返回",from:"re(回)+turn(转)"},{word:"review",meaning:"复习",from:"re(再)+view(看)"}],
     tip:"re-相当于'重新'、'再'"},
    "un": {root:"un-",meaning:"不、非",
     examples:[{word:"unhappy",meaning:"不开心",from:"un(不)+happy(开心)"},{word:"unfair",meaning:"不公平",from:"un(不)+fair(公平)"}],
     tip:"un-=不，记住就能看懂大批反义词！"},
    "able": {root:"-able",meaning:"能……的",
     examples:[{word:"readable",meaning:"可读的",from:"read+able"},{word:"washable",meaning:"可洗的",from:"wash+able"}],
     tip:"-able='可……的'，readable=可读的，很直观"}
  };

  // --- 自然拼读规律库（简化版）---
  global.PHONICS_RULES = [
    {name:"元音+辅音+e（神奇e）",
     rule:"以'元音+辅音+e'结尾时，元音发长音，末尾e不发音。",
     examples:[{pattern:"a_e→/eɪ/",words:"cake, name"},{pattern:"i_e→/aɪ/",words:"like, bike"},{pattern:"o_e→/əʊ/",words:"home, nose"}],
     chineseAnalogy:"字母e像'小开关'，按一下元音就发长音！"},
    {name:"两个元音一起走",
     rule:"两个元音并排时，第一个发长音，第二个不发音。",
     examples:[{pattern:"ea→/iː/",words:"eat, tea"},{pattern:"ai→/eɪ/",words:"rain"},{pattern:"ee→/iː/",words:"bee, tree"}],
     chineseAnalogy:"像夫妻——丈夫说话，妻子不说话。"},
    {name:"双辅音规律",
     rule:"两个相同辅音并排时，只读一个音，前面元音发短音。",
     examples:[{pattern:"ll→/l/",words:"ball, tell"},{pattern:"ss→/s/",words:"class"},{pattern:"tt→/t/",words:"little"}],
     chineseAnalogy:"像中文重叠字——写两次但读音不变长。"}
  ];
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
