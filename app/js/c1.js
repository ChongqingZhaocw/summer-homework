COURSE_DATA.push({
  day: 1, date: "7月2日", weekday: "周四",
  difficulty: "★★☆ 中等", focus: "建立初中学习节奏 · 正负数入门 · 字母+音标",
  subjects: {
    // ==================== 语文 ====================
    chinese: {
      title: "第一单元·第1课《春》(上) — 感受文字之美",
      preview: "朱自清先生用最美的中文写出了春天的样子。读完你会发现：原来写作文可以这么美！",
      sections: [
        // 1. 今日目标
        {type:"objectives",title:"🎯 今天要学什么？",items:[
          {icon:"📖",label:"有感情地朗读课文",desc:"读3遍，感受春天的气息和作者的情感"},
          {icon:"✏️",label:"掌握5个易错字词",desc:"酝酿、应和、蓑笠、抖擞——这些都是考点"},
          {icon:"🔍",label:"理解散文'形散神聚'的特点",desc:"文章写了很多画面，但都围绕'春'这个主题"},
          {icon:"💡",label:"学习比喻和拟人修辞",desc:"这是初中阅读理解的必考题型！"}
        ],why:"为什么要学这篇课文？\n《春》是初中语文的第一课，它教会你两件事：第一，学会观察生活——朱自清能把普通的春天写得这么美；第二，学会用文字表达感受——这是写作的基本功。很多同学觉得写作文难，就是因为不会观察生活。学完这篇，你会发现自己也能写出好句子！"},
        
        // 2. 作者与背景（按课文注入的textbook会出现在这里）
        {type:"knowledge",title:"📖 作者与写作背景",body:`
          <div style="background:#EBF8FF;border-radius:12px;padding:14px;margin-bottom:10px;">
            <div style="display:flex;gap:12px;align-items:center;">
              <div style="font-size:2.5rem;">👨‍🏫</div>
              <div>
                <strong style="font-size:1.1rem;">朱自清</strong>（1898-1948）
                <div style="font-size:0.82rem;color:#4A5568;">现代著名散文家、诗人、学者</div>
              </div>
            </div>
          </div>
          <p><strong>📝 写作背景（1933年）：</strong></p>
          <p>朱自清刚从欧洲游学回国，担任清华大学中文系主任。此时的他对新生活充满希望，于是写下了这篇充满生机与活力的《春》。</p>
          <p>有趣的是：朱自清写这篇文章时已经35岁了，但他笔下的春天就像一个孩子一样天真、活泼。这说明——<strong>好的作家永远保持一颗童心</strong>。</p>
          <div style="background:#FFFAF0;border-left:4px solid #ED8936;padding:10px 14px;border-radius:8px;margin:10px 0;font-size:0.85rem;">
            📌 <strong>两江巴蜀考点提示：</strong>
            <br>• 常考第1段"盼望着"的<strong>反复</strong>修辞手法
            <br>• 第5-7段比喻、拟人句的赏析（期中必考！）
            <br>• 散文的特点是"<strong>形散神聚</strong>"——记住这4个字！
          </div>
          <details style="margin-top:8px;">
            <summary style="cursor:pointer;color:#3182CE;font-weight:600;font-size:0.85rem;">💭 拓展思考（点击展开）</summary>
            <div style="padding:8px;font-size:0.82rem;color:#4A5568;border:1px solid #E2E8F0;border-radius:8px;margin-top:6px;">
              <p>你觉得朱自清为什么要用"春"来比喻希望？如果让你用一个季节来比喻"希望"，你会选哪个？为什么？</p>
              <p style="color:#718096;">（答案没有对错——关键是思考的过程！）</p>
            </div>
          </details>
        `},
        
        // 3. 生字词
        {type:"knowledge",title:"📝 生字词学习（必掌握！）",body:`
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:#FFF5F5;border-radius:10px;padding:10px;border:1px solid #FED7D7;">
              <div style="font-size:0.75rem;color:#E53E3E;font-weight:600;">⚠️ 易错字</div>
              <div style="font-size:0.9rem;margin-top:4px;"><strong>酝酿</strong> yùn niàng</div>
              <div style="font-size:0.75rem;color:#718096;">不要写成"蕴酿"！</div>
            </div>
            <div style="background:#FFF5F5;border-radius:10px;padding:10px;border:1px solid #FED7D7;">
              <div style="font-size:0.75rem;color:#E53E3E;font-weight:600;">⚠️ 易错字</div>
              <div style="font-size:0.9rem;margin-top:4px;"><strong>应和</strong> yìng hè</div>
              <div style="font-size:0.75rem;color:#718096;">"和"读第四声！</div>
            </div>
            <div style="background:#FFF5F5;border-radius:10px;padding:10px;border:1px solid #FED7D7;">
              <div style="font-size:0.75rem;color:#E53E3E;font-weight:600;">⚠️ 易错字</div>
              <div style="font-size:0.9rem;margin-top:4px;"><strong>蓑笠</strong> suō lì</div>
              <div style="font-size:0.75rem;color:#718096;">指雨具，蓑衣+斗笠</div>
            </div>
            <div style="background:#FFF5F5;border-radius:10px;padding:10px;border:1px solid #FED7D7;">
              <div style="font-size:0.75rem;color:#E53E3E;font-weight:600;">⚠️ 易错字</div>
              <div style="font-size:0.9rem;margin-top:4px;"><strong>抖擞</strong> dǒu sǒu</div>
              <div style="font-size:0.75rem;color:#718096;">振作精神的意思</div>
            </div>
          </div>
          <div style="background:#F0FFF4;border-radius:10px;padding:10px;margin-top:8px;border:1px solid #C6F6D5;">
            <div style="font-size:0.75rem;color:#38A169;font-weight:600;">📚 重点词语</div>
            <div style="font-size:0.85rem;margin-top:4px;">
              • <strong>欣欣然</strong>：欢欢喜喜的样子（欣=快乐）<br>
              • <strong>朗润</strong>：明亮润泽（朗=明亮，润=滋润）<br>
              • <strong>赶趟儿</strong>：争着做某事（口语化表达）<br>
              • <strong>花枝招展</strong>：形容女子打扮得漂亮（这里比喻春天）
            </div>
          </div>
        `},
        
        // 4. 课文精讲
        {type:"knowledge",title:"📖 课文结构分析",body:`
          <p>《春》全文可以分成<strong>三大部分</strong>，就像一部小电影：</p>
          <div style="background:#EBF8FF;border-radius:12px;padding:14px;margin:10px 0;">
            <div style="display:flex;gap:10px;margin-bottom:10px;align-items:center;">
              <div style="background:#3182CE;color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">1</div>
              <div><strong>盼春</strong>（第1段）</div>
            </div>
            <div style="background:#3182CE;color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">2</div>
            <div><strong>绘春</strong>（第2-7段）—— 重点！</div>
          </div>
          <div style="padding-left:38px;margin-bottom:8px;">
            <div style="font-size:0.85rem;">• 春草图（第2段）→ 春花的图（第3段）→ 春风图（第4段）→ 春雨图（第5段）→ 迎春图（第6-7段）</div>
          </div>
          <div style="background:#EBF8FF;border-radius:12px;padding:14px;">
            <div style="display:flex;gap:10px;align-items:center;">
              <div style="background:#3182CE;color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">3</div>
              <div><strong>赞春</strong>（第8-10段）—— 三个比喻：娃娃→小姑娘→青年</div>
            </div>
          </div>
          <div style="background:#FFFAF0;border-left:4px solid #ED8936;padding:10px 14px;border-radius:8px;margin:10px 0;font-size:0.85rem;">
            📌 <strong>必考知识点：</strong>文章结尾三个比喻句分别说明了春天的什么特点？
            <br>① 像娃娃——<strong>新</strong>（生命力） 
            <br>② 像小姑娘——<strong>美</strong>（美丽多彩）
            <br>③ 像青年——<strong>力</strong>（充满力量）
          </div>
        `},
        
        // 5. 修辞手法学习
        {type:"knowledge",title:"💡 修辞手法：比喻和拟人",body:`
          <p><strong>比喻</strong>（打比方）：把A比作B，让描写更生动</p>
          <div style="background:#FAF5FF;border-radius:10px;padding:12px;margin:8px 0;">
            <div style="font-size:0.85rem;">例句：<em>"红的像火，粉的像霞，白的像雪"</em></div>
            <div style="font-size:0.82rem;color:#4A5568;margin-top:4px;">把花比作火、霞、雪，让你一眼就看到花的颜色！</div>
            <div style="font-size:0.82rem;color:#718096;margin-top:4px;">💡 <strong>记忆口诀：</strong>比喻就像"像、如、若、似、仿佛"——看到这些字就是比喻！</div>
          </div>
          <p><strong>拟人</strong>（当人来写）：把物当作人来写，让事物有人的情感</p>
          <div style="background:#FAF5FF;border-radius:10px;padding:12px;margin:8px 0;">
            <div style="font-size:0.85rem;">例句：<em>"东风来了，春天的脚步近了"</em></div>
            <div style="font-size:0.82rem;color:#4A5568;margin-top:4px;">春天哪有脚？但这样一写，春天就像一个人走向我们，亲切又有趣！</div>
            <div style="font-size:0.82rem;color:#718096;margin-top:4px;">💡 <strong>记忆口诀：</strong>拟人就是让物"活"起来——会笑、会走、会说话！</div>
          </div>
          <div style="background:#FFF5F5;border:1px solid #FED7D7;border-radius:8px;padding:10px;font-size:0.85rem;">
            ⚠️ <strong>考试陷阱：</strong>比喻和拟人有时候很像！记住——<br>
            • 比喻：一定有两个事物（A像B）<br>
            • 拟人：让物有了人的动作/情感（没有"像"字）
          </div>
        `},
        
        // 6. 练习
        {type:"practice",title:"✏️ 课堂练习（检验一下）",questions:[
          {q:"1. 《春》的作者是谁？他的代表作还有哪些？",answer:"朱自清。代表作《背影》《荷塘月色》《匆匆》",hint:"想想初中必读名著"},
          {q:"2. '盼望着，盼望着，东风来了，春天的脚步近了'用了什么修辞？",answer:"反复+拟人",hint:"注意'盼望着'重复了两次"},
          {q:"3. '像牛毛，像花针，像细丝'用了什么修辞？描写的是什么？",answer:"比喻+排比，描写春雨",hint:"三个'像'连用——既是比喻也是排比"},
          {q:"4. 文章结尾的三个比喻分别象征春天的什么特点？",answer:"娃娃→新，小姑娘→美，青年→力",hint:"想想娃娃、小姑娘、青年分别有什么特点"},
          {q:"5. '酝酿'的正确读音是什么？","answer":"yùn niàng（不是yùn ràng）",hint:"这个字很多大人都读错！"}
        ]},
        
        // 7. 任务清单
        {type:"task",title:"✅ 今日任务",tasks:[
          {text:"朗读课文《春》第1遍（注意字音和停顿）",tag:"read"},
          {text:"朗读课文《春》第2遍（感受作者情感）",tag:"read"},
          {text:"朗读课文《春》第3遍（带着批注理解）",tag:"read"},
          {text:"抄写易错字词：酝酿、应和、蓑笠、抖擞 各3遍",tag:"write"},
          {text:"标注全文10个自然段的序号",tag:"read"},
          {text:"思考：文章描绘了春天的哪些画面？写一段50字感受",tag:"write"},
          {text:"背诵：比喻和拟人的区别（用笔记本记下）",tag:"recite"}
        ]}
      ]
    },
    
    // ==================== 数学 ====================
    math: {
      title: "第一章 §1.1 正数和负数 — 认识数的大家庭",
      preview: "一、二、三…你以为只有这些数？还有比0更小的数！学了今天的内容，你会重新认识这个数字世界。",
      sections: [
        // 1. 今日目标
        {type:"objectives",title:"🎯 今天要学什么？",items:[
          {icon:"🔢",label:"理解正数和负数的概念",desc:"知道什么是正数、负数、以及0的特殊身份"},
          {icon:"🌡️",label:"会用正负数表示生活中的量",desc:"温度、收支、海拔—这些都是中考应用题"},
          {icon:"📊",label:"掌握正负数的分类方法",desc:"给一组数能快速分出正数集合和负数集合"},
          {icon:"🧮",label:"理解0为什么既不是正数也不是负数",desc:"这是考试第一道陷阱题！"}
        ],why:"为什么要学正负数？\n想象一下：如果没有负数，冬天零下5℃怎么表示？欠别人100块钱怎么记账？海平面以下的山脉怎么测量高度？\n\n负数的发明让数学从"看得见"（数东西）变成了"想得到"（抽象概念）——这是数学思维的一大步！\n\n而且——两江巴蜀中学的第一次月考，正负数分类必考10分以上！"},
        
        // 2. 核心概念
        {type:"knowledge",title:"🔑 核心概念（先理解再记忆）",body:`
          <div style="background:#EBF8FF;border-radius:12px;padding:14px;margin-bottom:10px;">
            <div style="font-size:0.75rem;color:#2B6CB0;font-weight:600;margin-bottom:8px;">📌 数的分类（一目了然）</div>
            <div style="display:flex;justify-content:space-around;text-align:center;">
              <div style="background:white;border-radius:10px;padding:12px;flex:1;margin:0 4px;border:2px solid #38A169;">
                <div style="font-size:1.3rem;font-weight:700;color:#38A169;">正数</div>
                <div style="font-size:0.82rem;color:#4A5568;">大于0</div>
                <div style="font-size:1rem;">+3, 5, 2.7, ½</div>
              </div>
              <div style="background:white;border-radius:10px;padding:12px;flex:1;margin:0 4px;border:2px solid #3182CE;">
                <div style="font-size:1.3rem;font-weight:700;color:#3182CE;">0</div>
                <div style="font-size:0.82rem;color:#4A5568;">分界点</div>
                <div style="font-size:1rem;">0</div>
              </div>
              <div style="background:white;border-radius:10px;padding:12px;flex:1;margin:0 4px;border:2px solid #E53E3E;">
                <div style="font-size:1.3rem;font-weight:700;color:#E53E3E;">负数</div>
                <div style="font-size:0.82rem;color:#4A5568;">小于0</div>
                <div style="font-size:1rem;">−3, −5.5, −½</div>
              </div>
            </div>
          </div>
          <p><strong>🔑 三个必须记住的要点：</strong></p>
          <div style="background:#F0FFF4;border-radius:8px;padding:10px;margin:6px 0;font-size:0.85rem;">
            ✅ 正数的"+"号可以省略不写（+3=3，+5=5）
          </div>
          <div style="background:#F0FFF4;border-radius:8px;padding:10px;margin:6px 0;font-size:0.85rem;">
            ✅ 负数的"−"号<strong>绝对不能省略</strong>（−3写成3就变成正数了！）
          </div>
          <div style="background:#FFF5F5;border-radius:8px;padding:10px;margin:6px 0;font-size:0.85rem;">
            ⚠️ <strong>0的特殊身份：</strong>0既不是正数也不是负数——它是正负数的分界点。<br>
            <span style="color:#718096;">💡 想象数轴：0就像一把尺子的0刻度线，左边是负数，右边是正数。</span>
          </div>
          <div style="background:#FFFAF0;border-left:4px solid #ED8936;padding:10px 14px;border-radius:8px;margin:10px 0;font-size:0.85rem;">
            📌 <strong>两江巴蜀考试常考题型：</strong><br>
            "把下列各数填入相应的集合：+5, −3, 0, ½, −2.7, 100"<br>
            → 正数集合：{+5, ½, 100}  <span style="color:#38A169;">✅</span><br>
            → 负数集合：{−3, −2.7}      <span style="color:#38A169;">✅</span><br>
            → <strong>注意：0不属于任何一个集合！</strong> <span style="color:#E53E3E;">⚠️</span>
          </div>
        `},
        
        // 3. 公式
        {type:"math-formula",title:"📌 核心法则（背下来！）",formula:"正数 > 0 > 负数",explain:"任何正数都大于0，任何负数都小于0。记住这个不等式，能解决大多数选择题。"},
        
        // 4. 生活应用
        {type:"knowledge",title:"🌍 生活中的正负数（打开你的眼界）",body:`
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:#EBF8FF;border-radius:10px;padding:12px;">
              <div style="font-size:1.2rem;text-align:center;">🌡️</div>
              <div style="font-size:0.85rem;text-align:center;"><strong>温度</strong></div>
              <div style="font-size:0.78rem;color:#4A5568;text-align:center;">零上5℃ → +5℃<br>零下5℃ → −5℃</div>
            </div>
            <div style="background:#EBF8FF;border-radius:10px;padding:12px;">
              <div style="font-size:1.2rem;text-align:center;">💰</div>
              <div style="font-size:0.85rem;text-align:center;"><strong>收支</strong></div>
              <div style="font-size:0.78rem;color:#4A5568;text-align:center;">收入200元 → +200<br>支出150元 → −150</div>
            </div>
            <div style="background:#EBF8FF;border-radius:10px;padding:12px;">
              <div style="font-size:1.2rem;text-align:center;">🏔️</div>
              <div style="font-size:0.85rem;text-align:center;"><strong>海拔</strong></div>
              <div style="font-size:0.78rem;color:#4A5568;text-align:center;">海平面以上100m → +100<br>海平面以下50m → −50</div>
            </div>
            <div style="background:#EBF8FF;border-radius:10px;padding:12px;">
              <div style="font-size:1.2rem;text-align:center;">📈</div>
              <div style="font-size:0.85rem;text-align:center;"><strong>增长率</strong></div>
              <div style="font-size:0.78rem;color:#4A5568;text-align:center;">增长10% → +10%<br>下降5% → −5%</div>
            </div>
          </div>
          <div style="background:#FAF5FF;border-radius:8px;padding:10px;margin-top:8px;font-size:0.82rem;">
            💡 <strong>记忆技巧：</strong>正负数就像"借和还"<br>
            • 你得到东西 → 正数（+）<br>
            • 你付出东西 → 负数（−）<br>
            • 0就是"刚刚好"——不欠也不多！
          </div>
        `},
        
        // 5. 练习
        {type:"practice",title:"✏️ 课堂练习（先自己试，再对答案）",questions:[
          {q:"1️⃣ 把下列各数分类：+5, −3, 0, ½, −2.7, 100, −½, 3.14",hint:"先找0，0是分界线。比0大的→正数集合，比0小的→负数集合",answer:"正数集合：{+5, ½, 100, 3.14}；负数集合：{−3, −2.7, −½}"},
          {q:"2️⃣ 收入50元记作+50，那么支出30元记作______",answer:"−30",hint:"收入和支出是相反意义的量"},
          {q:"3️⃣ 某地最高气温+8℃，最低气温−2℃，这一天温差是多少？",hint:"温差 = 最高温 − 最低温 = 8 − (−2) = 8 + 2 = 10",answer:"10℃"},
          {q:"4️⃣ 下列说法正确的是（ ）<br>A. 0是正数<br>B. 0是负数<br>C. 0既不是正数也不是负数<br>D. 0既是正数也是负数",answer:"C",hint:"0是正负数的分界点"},
          {q:"5️⃣ 如果+20米表示向东走20米，那么−30米表示______",answer:"向西走30米",hint:"先确定+的含义，−就是相反方向"},
          {q:"6️⃣ 海平面记作0m，珠穆朗玛峰海拔+8848.86m，马里亚纳海沟海拔−11034m。珠峰比海沟高多少米？",hint:"8848.86 − (−11034) = 8848.86 + 11034",answer:"19882.86米"}
        ]},
        
        // 6. 任务
        {type:"task",title:"✅ 课后任务",tasks:[
          {text:"背诵：正数、负数、0的定义（用自己的话说一遍）",tag:"recite"},
          {text:"完成课本P3'练习'第1-3题（在练习本上写过程）",tag:"practice"},
          {text:"想一个生活中用负数的例子，写下来",tag:"write"},
          {text:"💡 思考：0为什么既不是正数也不是负数？",tag:"read"}
        ]}
      ]
    },
    
    // ==================== 英语 ====================
    english: {
      title: "Starter Unit 1 · 字母A-H + 音标入门",
      preview: "英语其实和中文拼音很像！掌握了音标，你就能自己拼读任何单词。先学8个字母和5个短元音。",
      sections: [
        // 1. 今日目标
        {type:"objectives",title:"🎯 今天要学什么？",items:[
          {icon:"🔤",label:"掌握字母Aa-Hh的规范书写",desc:"大写占上两格，小写a c e占中间一格"},
          {icon:"🎵",label:"学会5个短元音音标",desc:"/æ/ /e/ /ɪ/ /ɒ/ /ʌ/ — 和拼音超级像！"},
          {icon:"📖",label:"掌握词根-ild",desc:"记住build/child/mild/wild，举一反三"},
          {icon:"💡",label:"理解英语是'拼读语言'",desc:"不是死记硬背，而是像拼音一样拼出来！"}
        ],why:"为什么要学音标？\n很多同学觉得英语难，是因为死记硬背单词。其实英语和中文一样——先学'拼音'（音标），再学'汉字'（单词）！\n\n音标的作用：看到生词→查音标→自己拼出来→记住它。不需要老师教，自己就能读！\n\n而且，两江巴蜀中学初一上学期考试，字母规范书写占10分！一年级就练好，白捡10分！"},
        
        // 2. 音标的核心认识
        {type:"knowledge",title:"🔊 音标 = 英语的拼音（这个类比最重要）",body:`
          <div style="background:#F0FFF4;border-radius:14px;padding:16px;border:2px solid #C6F6D5;">
            <div style="font-size:1rem;font-weight:700;color:#38A169;margin-bottom:8px;">🎯 音标和拼音对比表</div>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
              <tr style="background:#E2E8F0;">
                <th style="padding:6px;border:1px solid #CBD5E0;">特征</th>
                <th style="padding:6px;border:1px solid #CBD5E0;">中文拼音</th>
                <th style="padding:6px;border:1px solid #CBD5E0;">英语音标</th>
              </tr>
              <tr>
                <td style="padding:6px;border:1px solid #CBD5E0;"><strong>声母/辅音</strong></td>
                <td style="padding:6px;border:1px solid #CBD5E0;">b p m f d t n l</td>
                <td style="padding:6px;border:1px solid #CBD5E0;">/b/ /p/ /m/ /f/ /d/ /t/ /n/ /l/</td>
              </tr>
              <tr style="background:#FAFAFA;">
                <td style="padding:6px;border:1px solid #CBD5E0;"><strong>韵母/元音</strong></td>
                <td style="padding:6px;border:1px solid #CBD5E0;">a o e i u ü</td>
                <td style="padding:6px;border:1px solid #CBD5E0;">/æ/ /ɒ/ /e/ /ɪ/ /ʌ/ /uː/</td>
              </tr>
              <tr>
                <td style="padding:6px;border:1px solid #CBD5E0;"><strong>拼读方式</strong></td>
                <td style="padding:6px;border:1px solid #CBD5E0;">b + a = ba（波啊→八）</td>
                <td style="padding:6px;border:1px solid #CBD5E0;">/b/ + /æ/ = /bæt/（bad）</td>
              </tr>
            </table>
            <div style="background:#FFFAF0;border-radius:8px;padding:10px;margin-top:8px;font-size:0.85rem;">
              💡 <strong>记住这个口诀：</strong><br>
              "拼音拼出中国话，音标拼出英国话<br>
              方法原来是一家，从此英语不怕它！"
            </div>
          </div>
        `},
        
        // 3. 字母A-H
        {type:"knowledge",title:"🔤 字母学习 Aa-Hh（规范书写很重要！）",body:`
          <div style="background:#EBF8FF;border-radius:12px;padding:14px;">
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;text-align:center;">
              <div style="background:white;border-radius:8px;padding:8px;">
                <div style="font-size:1.5rem;">A<small style="font-size:0.7rem;color:#718096;"> a</small></div>
                <div style="font-size:0.7rem;color:#E53E3E;">/eɪ/</div>
              </div>
              <div style="background:white;border-radius:8px;padding:8px;">
                <div style="font-size:1.5rem;">B<small style="font-size:0.7rem;color:#718096;"> b</small></div>
                <div style="font-size:0.7rem;color:#E53E3E;">/biː/</div>
              </div>
              <div style="background:white;border-radius:8px;padding:8px;">
                <div style="font-size:1.5rem;">C<small style="font-size:0.7rem;color:#718096;"> c</small></div>
                <div style="font-size:0.7rem;color:#E53E3E;">/siː/</div>
              </div>
              <div style="background:white;border-radius:8px;padding:8px;">
                <div style="font-size:1.5rem;">D<small style="font-size:0.7rem;color:#718096;"> d</small></div>
                <div style="font-size:0.7rem;color:#E53E3E;">/diː/</div>
              </div>
              <div style="background:white;border-radius:8px;padding:8px;">
                <div style="font-size:1.5rem;">E<small style="font-size:0.7rem;color:#718096;"> e</small></div>
                <div style="font-size:0.7rem;color:#E53E3E;">/iː/</div>
              </div>
              <div style="background:white;border-radius:8px;padding:8px;">
                <div style="font-size:1.5rem;">F<small style="font-size:0.7rem;color:#718096;"> f</small></div>
                <div style="font-size:0.7rem;color:#E53E3E;">/ef/</div>
              </div>
              <div style="background:white;border-radius:8px;padding:8px;">
                <div style="font-size:1.5rem;">G<small style="font-size:0.7rem;color:#718096;"> g</small></div>
                <div style="font-size:0.7rem;color:#E53E3E;">/dʒiː/</div>
              </div>
              <div style="background:white;border-radius:8px;padding:8px;">
                <div style="font-size:1.5rem;">H<small style="font-size:0.7rem;color:#718096;"> h</small></div>
                <div style="font-size:0.7rem;color:#E53E3E;">/eɪtʃ/</div>
              </div>
            </div>
            <div style="background:#FFFAF0;border-radius:8px;padding:10px;margin-top:8px;font-size:0.82rem;">
              📌 <strong>两江巴蜀考点：</strong>字母规范书写占10分！注意：<br>
              • 大写字母A-H都占<strong>上两格</strong><br>
              • 小写字母a c e占<strong>中间一格</strong><br>
              • 小写字母b d f h占<strong>上两格</strong>（比大写多一个'肚子'）
            </div>
          </div>
        `},
        
        // 4. 音标教学
        {type:"phonetic",title:"🎵 短元音入门（和拼音一一对应！）",items:[
          {symbol:"/æ/",example:"cat /kæt/",compare:"类似拼音 a 但嘴巴更大——'爱'的a短促"},
          {symbol:"/e/",example:"bed /bed/",compare:"类似拼音 ê——'哎'但更短"},
          {symbol:"/ɪ/",example:"sit /sɪt/",compare:"类似拼音 i 但更短促——'一'短读"},
          {symbol:"/ɒ/",example:"hot /hɒt/",compare:"类似拼音 o——'奥'短读"},
          {symbol:"/ʌ/",example:"cup /kʌp/",compare:"类似拼音 e——'阿'短读"}
        ]},
        
        // 5. 词根-ild
        {type:"knowledge",title:"🌟 词根-ild（举一反三的秘密武器）",body:`
          <div style="background:#FAF5FF;border-radius:14px;padding:14px;border:2px solid #E9D8FD;">
            <div style="font-size:0.85rem;font-weight:700;color:#6B46C1;margin-bottom:8px;">🔑 为什么词根这么重要？</div>
            <div style="font-size:0.85rem;">
              中文的"氵"（三点水）→ 江、河、湖、海 — 都和水有关
              <br><strong>英语也一样！</strong>一个词根 + 不同前缀/后缀 = 不同单词
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;">
            <div style="background:white;border-radius:10px;padding:12px;border:1px solid #E9D8FD;">
              <div style="font-size:1rem;font-weight:700;color:#6B46C1;">build</div>
              <div style="font-size:0.82rem;color:#4A5568;">/bɪld/ 建造</div>
              <div style="font-size:0.75rem;color:#718096;">builder = 建筑工人</div>
              <div style="font-size:0.75rem;color:#718096;">building = 建筑物</div>
            </div>
            <div style="background:white;border-radius:10px;padding:12px;border:1px solid #E9D8FD;">
              <div style="font-size:1rem;font-weight:700;color:#6B46C1;">child</div>
              <div style="font-size:0.82rem;color:#4A5568;">/tʃaɪld/ 孩子</div>
              <div style="font-size:0.75rem;color:#718096;">children = 孩子们</div>
              <div style="font-size:0.75rem;color:#718096;">childhood = 童年</div>
            </div>
            <div style="background:white;border-radius:10px;padding:12px;border:1px solid #E9D8FD;">
              <div style="font-size:1rem;font-weight:700;color:#6B46C1;">mild</div>
              <div style="font-size:0.82rem;color:#4A5568;">/maɪld/ 温和的</div>
              <div style="font-size:0.75rem;color:#718096;">mild weather = 温和天气</div>
              <div style="font-size:0.75rem;color:#718096;">mild = 不辣（火锅）</div>
            </div>
            <div style="background:white;border-radius:10px;padding:12px;border:1px solid #E9D8FD;">
              <div style="font-size:1rem;font-weight:700;color:#6B46C1;">wild</div>
              <div style="font-size:0.82rem;color:#4A5568;">/waɪld/ 野生的</div>
              <div style="font-size:0.75rem;color:#718096;">wild animal = 野生动物</div>
              <div style="font-size:0.75rem;color:#718096;">wild = 狂野的</div>
            </div>
          </div>
          <div style="background:#FFFAF0;border-radius:8px;padding:10px;margin-top:8px;font-size:0.85rem;">
            📌 <strong>记忆口诀（自己念一遍）：</strong><br>
            "build建造用体力，child孩子要管理<br>
            mild温和脾气好，wild野生大自然！"
          </div>
        `},
        
        // 6. 练习
        {type:"practice",title:"✏️ 课堂练习",questions:[
          {q:"1️⃣ 写出下列字母对应的大小写：A___, B___, C___, D___",answer:"a, b, c, d",hint:"注意书写格式"},
          {q:"2️⃣ 音标/æ/对应拼音的哪个音？在cat这个单词中怎么读？",answer:"类似'爱'的a短促，读/kæt/",hint:"想想'cat'的中文音译'凯特'——就是/æ/的音"},
          {q:"3️⃣ -ild词根中，'建造'是哪个单词？",answer:"build",hint:"b+ild"},
          {q:"4️⃣ 下面哪个单词是'孩子'的意思？A. build B. child C. mild D. wild",answer:"B",hint:"childhood = 童年"},
          {q:"5️⃣ 音标和拼音的拼读方式有什么相同之处？",answer:"都是：辅音+元音拼在一起读",hint:"b+ā = bā，b+/æ/ = /bæ/"}
        ]},
        
        // 7. 任务
        {type:"task",title:"✅ 今日任务",tasks:[
          {text:"书写字母Aa-Hh 大小写各2遍（注意占格！）",tag:"write"},
          {text:"朗读5个短元音：/æ/ /e/ /ɪ/ /ɒ/ /ʌ/ 各读5遍",tag:"read"},
          {text:"用音标拼读：cat /kæt/, bed /bed/, sit /sɪt/, hot /hɒt/",tag:"read"},
          {text:"抄写词根-ild的4个单词+中文意思",tag:"write"},
          {text:"💡 思考：英语和拼音还有什么相似之处？",tag:"read"}
        ]}
      ]
    }
  }
});