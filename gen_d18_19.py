import sys, re, os
sys.stdout.reconfigure(encoding="utf-8")

path = r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html"
with open(path, "r", encoding="utf-8-sig") as f:
    content = f.read()

insert_point = 145391  # after Day 17 closing })

# ===== Generate Days 18-30 =====
blocks = []

# Day 18
blocks.append(r"""
COURSE_DATA.push({
  day:18,date:"7月19日",weekday:"周日",difficulty:"中等",focus:"《论语》十二章(上)·解方程去括号·Unit 6 Do you like bananas",
  subjects:{
    chinese:{title:"第9课《论语》十二章(上)·孔子",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📖",label:"朗读并背诵前6章",desc:"注意节奏和停顿"},
        {icon:"💡",label:"理解孔子核心思想",desc:"仁、学、思"}
      ]},
      {type:"knowledge",title:"👤 孔子与《论语》",body:`
        <p><strong>孔子</strong>（前551-前479）：名丘，字仲尼，春秋时期鲁国人。</p>
        <p>他是中国古代最伟大的<strong>思想家、教育家</strong>，儒家学派的创始人。</p>
        <p><strong>什么叫《论语》？</strong>"论"是编纂的意思，"语"是言论。《论语》就是孔子和他的弟子们言行的记录，由孔子的弟子和再传弟子编纂而成。</p>
        <p>📌 现存共20篇，492章。宋代宰相赵普说："半部《论语》治天下"——可见这本书有多重要！</p>
      `},
      {type:"vocabulary",title:"📝 重点字词",words:[
        {word:"说",pinyin:"yuè",meaning:"同'悦'，愉快"},
        {word:"愠",pinyin:"yùn",meaning:"生气、怨恨"},
        {word:"罔",pinyin:"wǎng",meaning:"迷惑"},
        {word:"殆",pinyin:"dài",meaning:"有害、危险"},
        {word:"逾",pinyin:"yú",meaning:"越过"},
        {word:"箪",pinyin:"dān",meaning:"古代盛饭的竹器"}
      ]},
      {type:"knowledge",title:"📖 前6章原文与译文",body:`
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;margin-bottom:8px;">
          <p><strong>第一章：</strong>学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？</p>
          <p style="color:#666;font-size:0.9rem;">译文：学了又经常温习，不是很愉快吗？有志同道合的人从远方来，不是很令人高兴吗？别人不了解我，我却不生气，不也是君子吗？</p>
        </div>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;margin-bottom:8px;">
          <p><strong>第二章：</strong>吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？</p>
          <p style="color:#666;font-size:0.9rem;">译文：我每天多次反省自己：替人办事是否尽心？同朋友交往是否诚信？老师传授的知识是否复习了？</p>
        </div>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;margin-bottom:8px;">
          <p><strong>第三章：</strong>吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩。</p>
          <p style="color:#666;font-size:0.9rem;">译文：我十五岁立志学习，三十岁能自立，四十岁能不被外界迷惑，五十岁能知天命，六十岁能听进逆耳之言，七十岁能随心所欲而不越出规矩。</p>
          <p style="color:#D94A4A;font-weight:bold;">必考：孔子人生阶段的划分！常考填空题</p>
        </div>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;margin-bottom:8px;">
          <p><strong>第四章：</strong>温故而知新，可以为师矣。</p>
          <p style="color:#666;font-size:0.9rem;">译文：温习旧知识能有新体会，就可以当老师了。</p>
        </div>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;margin-bottom:8px;">
          <p><strong>第五章：</strong>学而不思则罔，思而不学则殆。</p>
          <p style="color:#D94A4A;font-weight:bold;">必考名句！常考默写和翻译</p>
          <p style="color:#666;font-size:0.9rem;">译文：只学习不思考就会迷惑，只思考不学习就会有害。</p>
        </div>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p><strong>第六章：</strong>贤哉，回也！一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉，回也！</p>
          <p style="color:#666;font-size:0.9rem;">译文：颜回真贤德啊！一竹筐饭，一瓢水，住在简陋的巷子里，别人都受不了那种穷苦，颜回却不改变他的快乐。</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. '学而时习之'中的'说'正确读音和意思是？",options:["A. shuō，说话","B. yuè，愉快","C. shuì，劝说","D. tuō，脱"],answer:1},
        {q:"2. '温故而知新'告诉我们什么道理？",options:["A. 要多读新书","B. 要温习旧知识获得新理解","C. 要忘记旧知识","D. 要教别人"],answer:1},
        {q:"3. '三十而立'的'立'是指？",options:["A. 站立","B. 建立功业","C. 自立、有所成就","D. 立刻"],answer:2},
        {q:"4. 第五章'学而不思则罔，思而不学则殆'强调了什么？",options:["A. 学习比思考重要","B. 思考比学习重要","C. 学习与思考要结合","D. 不要学习也不要思考"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"朗读前6章（每章3遍）",tag:"read"},
        {text:"背诵前6章并录音",tag:"recite"},
        {text:"默写前6章（对照批改）",tag:"write"},
        {text:"主动回忆法：遮住译文说原文",tag:"recite"}
      ]}
    ]},
    math:{title:"第三章·3.3 解一元一次方程(二)—去括号",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🔓",label:"掌握去括号法则",desc:"括号前是+/-时怎么去括号"},
        {icon:"📝",label:"用去括号法解方程",desc:"三步法：去括号→移项→合并"}
      ]},
      {type:"knowledge",title:"📐 去括号法则",body:`
        <p><strong>去括号是解方程的重要一步！</strong></p>
        <div style="background:#FFF7E6;padding:12px;border-radius:8px;">
          <p style="font-size:1.05rem;">① <strong>括号前是"+"号：</strong>直接去掉括号，里面的项不变号</p>
          <p style="font-size:0.9rem;margin-left:20px;">例：+(3x+5) = 3x+5 ✅</p>
          <p style="font-size:1.05rem;margin-top:8px;">② <strong>括号前是"-"号：</strong>去掉括号，里面的项全变号</p>
          <p style="font-size:0.9rem;margin-left:20px;">例：-(3x+5) = -3x-5 ✅</p>
          <p style="font-size:1.05rem;margin-top:8px;">③ <strong>括号前有系数：</strong>系数乘进去再处理</p>
          <p style="font-size:0.9rem;margin-left:20px;">例：2(3x+5) = 6x+10</p>
          <p style="font-size:0.9rem;margin-left:20px;">例：-2(3x+5) = -6x-10</p>
        </div>
        <p style="margin-top:8px;">💡 <strong>记忆口诀：</strong>"加不变，减全变，系数乘进去"</p>
      `},
      {type:"knowledge",title:"📝 例题讲解",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>例题1：</strong>2(x+3) = 10</p>
          <p>去括号 → 2x + 6 = 10</p>
          <p>移项 → 2x = 10 - 6</p>
          <p>合并 → 2x = 4</p>
          <p>系数化1 → x = 2 ✅</p>
        </div>
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>例题2：</strong>3(x-2) + 4 = 2x + 1</p>
          <p>去括号 → 3x - 6 + 4 = 2x + 1</p>
          <p>合并左边 → 3x - 2 = 2x + 1</p>
          <p>移项 → 3x - 2x = 1 + 2</p>
          <p>合并 → x = 3 ✅</p>
        </div>
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>例题3（难点）：</strong>4 - 2(x-1) = 8</p>
          <p style="color:#D94A4A;">⚠️ 注意：括号前是"-2"！</p>
          <p>去括号 → 4 - 2x + 2 = 8</p>
          <p>合并左边 → 6 - 2x = 8</p>
          <p>移项 → -2x = 8 - 6</p>
          <p>合并 → -2x = 2</p>
          <p>系数化1 → x = -1 ✅</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 去掉括号：-(2x-3) = ?",options:["A. 2x-3","B. -2x-3","C. -2x+3","D. 2x+3"],answer:2},
        {q:"2. 去掉括号：3(x-4) = ?",options:["A. 3x-4","B. 3x-12","C. 3x+12","D. x-12"],answer:1},
        {q:"3. 解方程：2(x+1)=8",options:["A. 2","B. 3","C. 4","D. 5"],answer:1},
        {q:"4. 解方程：3(x-1)+2=11",options:["A. 2","B. 3","C. 4","D. 5"],answer:2},
        {q:"5. 解方程：5-2(x+1)=1",options:["A. 0","B. 1","C. 2","D. 3"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"背下去括号法则口诀",tag:"recite"},
        {text:"完成练习题（至少5道）",tag:"practice"},
        {text:"用费曼学习法：给同学讲去括号",tag:"recite"}
      ]}
    ]},
    english:{title:"Unit 6 Do you like bananas? Section A",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🍎",label:"掌握食物类词汇",desc:"banana, apple, orange, milk, rice"},
        {icon:"❓",label:"学会一般疑问句",desc:"Do you like...? 的肯定/否定回答"},
        {icon:"🔊",label:"音标：/i:/ /ɪ/",desc:"长短音对比"}
      ]},
      {type:"knowledge",title:"🔊 音标小课堂·/i:/和/ɪ/",body:`
        <p><strong>/i:/</strong> 长音 — 类似中文"衣"，但更长</p>
        <p style="font-size:1.1rem;">eat /iːt/ · see /siː/ · green /ɡriːn/ · teacher /ˈtiːtʃə/</p>
        <p><strong>/ɪ/</strong> 短音 — 类似中文"衣"但短促</p>
        <p style="font-size:1.1rem;">it /ɪt/ · big /bɪɡ/ · milk /mɪlk/ · chicken /ˈtʃɪkɪn/</p>
        <div style="background:#FFF7E6;padding:8px;border-radius:8px;margin-top:6px;">
          <p>💡 <strong>区分技巧：</strong>长音/i:/像拉长的"衣——"，短音/ɪ/像快速说"衣"就停</p>
          <p>对比：<strong>eat</strong> /iːt/ VS <strong>it</strong> /ɪt/ — 一个长一个短！</p>
        </div>
      `},
      {type:"vocabulary",title:"📝 核心词汇",words:[
        {word:"banana",phonetic:"/bəˈnɑːnə/",meaning:"香蕉"},
        {word:"apple",phonetic:"/ˈæpl/",meaning:"苹果"},
        {word:"orange",phonetic:"/ˈɒrɪndʒ/",meaning:"橙子"},
        {word:"milk",phonetic:"/mɪlk/",meaning:"牛奶"},
        {word:"rice",phonetic:"/raɪs/",meaning:"米饭"},
        {word:"chicken",phonetic:"/ˈtʃɪkɪn/",meaning:"鸡肉"},
        {word:"hamburger",phonetic:"/ˈhæmbɜːɡə/",meaning:"汉堡"}
      ]},
      {type:"knowledge",title:"💡 一般疑问句·Do/Does",body:`
        <p><strong>一般疑问句</strong>就是问"是/否"的问题，用Yes/No回答。</p>
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>结构：</strong>Do/Does + 主语 + 动词原形 + ...?</p>
          <p style="margin-top:6px;">📌 <strong>Do</strong> you like bananas?</p>
          <p style="margin-left:20px;">Yes, I do. / No, I don't.</p>
          <p style="margin-top:4px;">📌 <strong>Does</strong> he like milk?</p>
          <p style="margin-left:20px;">Yes, he does. / No, he doesn't.</p>
        </div>
        <p style="margin-top:6px;">💡 <strong>规律：</strong>主语是I/you/we/they用Do，he/she/it用Does</p>
        <p style="color:#D94A4A;">⚠️ 注意：用了Does后，动词要还原！不说"Does he likes"而是"Does he like"</p>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. ___ you like oranges?",options:["A. Do","B. Does","C. Are","D. Is"],answer:0},
        {q:"2. Does she ___ milk?",options:["A. likes","B. like","C. liked","D. liking"],answer:1},
        {q:"3. /ɪ/ 和 /i:/ 的主要区别是？",options:["A. 一个圆唇一个扁唇","B. 一个长一个短","C. 一个鼻音一个口音","D. 没区别"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"跟读/i:/和/ɪ/各10遍",tag:"audio"},
        {text:"抄写本课生词（每个3遍）",tag:"write"},
        {text:"用Do/Does造5个问答句",tag:"practice"},
        {text:"主动回忆法：遮住英文说中文意思",tag:"recite"}
      ]}
    ]}
  }
})
""")

print(f"Day 18: {len(blocks[-1])} chars")

# Day 19
blocks.append(r"""
COURSE_DATA.push({
  day:19,date:"7月20日",weekday:"周一",difficulty:"中等偏难",focus:"《论语》十二章(下)·解方程去分母·Unit 6 Section B",
  subjects:{
    chinese:{title:"第9课《论语》十二章(下)",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📖",label:"学习后6章并背诵",desc:"重点理解'三人行'等名句"},
        {icon:"✍️",label:"掌握通假字和一词多义",desc:"如'说'通'悦'"}
      ]},
      {type:"knowledge",title:"📖 后6章原文与译文",body:`
        <div style="background:#FFF7E6;padding:8px;border-radius:8px;margin-bottom:6px;">
          <p><strong>第七章：</strong>知之者不如好之者，好之者不如乐之者。</p>
          <p style="color:#666;font-size:0.85rem;">译文：知道它的人不如喜欢它的人，喜欢它的人不如以它为乐的人。</p>
          <p style="color:#D94A4A;font-size:0.85rem;">📌 学习的三个境界：知→好→乐</p>
        </div>
        <div style="background:#FFF7E6;padding:8px;border-radius:8px;margin-bottom:6px;">
          <p><strong>第八章：</strong>三人行，必有我师焉。择其善者而从之，其不善者而改之。</p>
          <p style="color:#666;font-size:0.85rem;">译文：几个人一起走，其中一定有可以做我老师的人。选择优点学习，发现缺点反省自己。</p>
          <p style="color:#D94A4A;font-size:0.85rem;">📌 说明要虚心向所有人学习</p>
        </div>
        <div style="background:#FFF7E6;padding:8px;border-radius:8px;margin-bottom:6px;">
          <p><strong>第九章：</strong>逝者如斯夫，不舍昼夜。</p>
          <p style="color:#666;font-size:0.85rem;">译文：时间像这流水一样，日夜不停地流去。</p>
        </div>
        <div style="background:#FFF7E6;padding:8px;border-radius:8px;margin-bottom:6px;">
          <p><strong>第十章：</strong>三军可夺帅也，匹夫不可夺志也。</p>
          <p style="color:#666;font-size:0.85rem;">译文：军队可以失去主帅，一个人不能失去志向。</p>
        </div>
        <div style="background:#FFF7E6;padding:8px;border-radius:8px;margin-bottom:6px;">
          <p><strong>第十一章：</strong>博学而笃志，切问而近思，仁在其中矣。</p>
          <p style="color:#666;font-size:0.85rem;">译文：广泛学习坚守志向，恳切提问思考当前——仁就在其中。</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. '知之者不如好之者'说明什么？",options:["A. 知道就好","B. 兴趣是最好的老师","C. 要死记硬背","D. 不要学习"],answer:1},
        {q:"2. '三人行必有我师'告诉我们？",options:["A. 三个人中有一个老师","B. 要虚心向他人学习","C. 老师很重要","D. 不要和别人一起走"],answer:1},
        {q:"3. '逝者如斯夫'感叹的是什么？",options:["A. 河水很急","B. 时间飞逝","C. 人生苦短","D. 要珍惜水资源"],answer:1},
        {q:"4. '匹夫不可夺志'强调什么？",options:["A. 志向很重要","B. 不要打仗","C. 身体重要","D. 金钱重要"],answer:0}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"朗读后6章（每章3遍）",tag:"read"},
        {text:"背诵全部12章（分段录音）",tag:"recite"},
        {text:"默写名句（学而不思、三人行等）",tag:"write"},
        {text:"主动回忆法：先背→再对照批改",tag:"recite"}
      ]}
    ]},
    math:{title:"第三章·3.3 解一元一次方程(三)—去分母",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🔢",label:"理解去分母的原理",desc:"等式两边同乘分母的最小公倍数"},
        {icon:"📝",label:"掌握完整解法步骤",desc:"去分母→去括号→移项→合并→化1"}
      ]},
      {type:"knowledge",title:"📐 去分母法则",body:`
        <p><strong>为什么要去分母？</strong>因为含分母的方程很难算，乘以公倍数把分母消掉就简单了！</p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p><strong>步骤：</strong>两边同时乘以<strong>所有分母的最小公倍数</strong></p>
          <p style="font-size:1.1rem;">x/2 + 3 = 5 → 两边×2 → x + 6 = 10</p>
          <p style="margin-top:6px;color:#D94A4A;">⚠️ <strong>易错提醒：</strong>每一项都要乘！常数也要乘！</p>
          <p style="font-size:0.9rem;">错误：x/2 + 3 = 5 → ×2 → x + 3 = 10 ❌（没乘3）</p>
          <p style="font-size:0.9rem;">正确：x/2 + 3 = 5 → ×2 → x + 6 = 10 ✅（每项都乘）</p>
        </div>
        <p>💡 分母有多个时，找它们的<strong>最小公倍数(LCM)</strong></p>
      `},
      {type:"knowledge",title:"📝 完整例题",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>例题1：</strong>x/3 + 2 = 4</p>
          <p>去分母（×3）→ x + 6 = 12</p>
          <p>移项 → x = 12 - 6</p>
          <p>合并 → x = 6 ✅</p>
        </div>
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>例题2：</strong>(x+1)/2 - (x-2)/3 = 1</p>
          <p>去分母（×6）→ 3(x+1) - 2(x-2) = 6</p>
          <p>去括号 → 3x + 3 - 2x + 4 = 6</p>
          <p>合并 → x + 7 = 6</p>
          <p>移项 → x = -1 ✅</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 去分母：x/4 + 3 = 5（两边×4）",options:["A. x+3=5","B. x+12=20","C. x+12=5","D. x+3=20"],answer:1},
        {q:"2. 解方程：x/2 - 1 = 3",options:["A. 4","B. 6","C. 8","D. 10"],answer:2},
        {q:"3. 解方程：(x+1)/3 = 2",options:["A. 3","B. 4","C. 5","D. 6"],answer:2},
        {q:"4. 分母2和3的最小公倍数是？",options:["A. 3","B. 4","C. 5","D. 6"],answer:3}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"理解去分母的原理（看例题）",tag:"read"},
        {text:"完成练习题（至少4道）",tag:"practice"},
        {text:"用思维导图整理解方程的完整步骤",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 6 Do you like bananas? Section B",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🍽️",label:"可数/不可数名词",desc:"区分哪些名词可以数"},
        {icon:"✍️",label:"学会like的第三人称",desc:"he/she likes... / Does he like...?"},
        {icon:"🔊",label:"音标：/ʌ/ /ɑː/",desc:"短元音和长元音对比"}
      ]},
      {type:"knowledge",title:"📚 可数名词 VS 不可数名词",body:`
        <p><strong>可数名词</strong>就是能数的东西，有单复数形式。</p>
        <p style="margin-left:20px;">📌 banana → bananas, apple → apples</p>
        <p><strong>不可数名词</strong>不能数，没有复数形式。</p>
        <p style="margin-left:20px;">📌 milk ✓ 不能说 milks ✗</p>
        <p style="margin-left:20px;">📌 rice, water, chicken, bread</p>
        <div style="background:#FFF7E6;padding:8px;border-radius:8px;margin-top:6px;">
          <p>💡 <strong>联想记忆：</strong>能用手一个一个数的是可数（苹果、鸡蛋），液体和粉末是不可数（牛奶、大米）</p>
          <p>不可数名词表示"一些"用：<strong>some</strong> milk / a glass of milk</p>
        </div>
      `},
      {type:"vocabulary",title:"📝 更多食物词汇",words:[
        {word:"bread",phonetic:"/bred/",meaning:"面包（不可数）"},
        {word:"egg",phonetic:"/eɡ/",meaning:"鸡蛋（可数）"},
        {word:"rice",phonetic:"/raɪs/",meaning:"米饭（不可数）"},
        {word:"chicken",phonetic:"/ˈtʃɪkɪn/",meaning:"鸡肉（不可数）"},
        {word:"carrot",phonetic:"/ˈkærət/",meaning:"胡萝卜（可数）"}
      ]},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 下列哪个是不可数名词？",options:["A. apple","B. banana","C. milk","D. egg"],answer:2},
        {q:"2. He ___ bananas.",options:["A. like","B. likes","C. liking","D. liked"],answer:1},
        {q:"3. I have some ___ .",options:["A. milks","B. milk","C. milkes","D. milked"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"跟读食物词汇（每个3遍）",tag:"audio"},
        {text:"分类整理可数/不可数名词",tag:"write"},
        {text:"用like造5个句子",tag:"practice"},
        {text:"复习Day 18背诵的论语前6章",tag:"recite"}
      ]}
    ]}
  }
})
""")

print(f"Day 19: {len(blocks[-1])} chars")

# Insert all new days
new_content = content[:insert_point] + "\n".join(blocks) + content[insert_point:]
backup = path + ".bak2"
os.rename(path, backup)
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)
print(f"Written {len(new_content)} bytes (was {len(content)})")
print(f"Added {sum(len(b) for b in blocks)} chars for Days 18-19")
print(f"Days remaining to add: 20-30")
