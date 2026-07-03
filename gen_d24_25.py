import sys, os
sys.stdout.reconfigure(encoding="utf-8")

path = r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html"
with open(path, "r", encoding="utf-8-sig") as f:
    content = f.read()

insert_point = 185609

blocks = []

# Day 24
blocks.append(r"""
COURSE_DATA.push({
  day:24,date:"7月25日",weekday:"周六",difficulty:"中等",focus:"《走一步，再走一步》·角·Unit 9 Section A",
  subjects:{
    chinese:{title:"第13课《走一步，再走一步》·莫顿·亨特",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"👣",label:"理解'化整为零'的智慧",desc:"大困难分解成小步骤"},
        {icon:"💡",label:"学习心理描写",desc:"恐惧→信心转变"}
      ]},
      {type:"knowledge",title:"👤 作者与背景",body:`
        <p><strong>莫顿·亨特</strong>（1920-2016）：美国作家、心理学家。</p>
        <p>本文是一个真实的故事。亨特小时候是个体弱多病的孩子，一次意外被困悬崖上，在父亲"走一步，再走一步"的引导下成功脱险。</p>
        <p>这次经历让他明白了一个影响一生的道理：<strong>任何困难都可以分解成小步骤去解决</strong>。</p>
        <p>💡 <strong>核心思想：</strong>"走一步，再走一步"——遇到困难不要怕，一步一步来！</p>
      `},
      {type:"vocabulary",title:"📝 重点字词",words:[
        {word:"灼热",pinyin:"zhuó rè",meaning:"像火烧一样热"},
        {word:"酷热",pinyin:"kù rè",meaning:"非常热"},
        {word:"厌倦",pinyin:"yàn juàn",meaning:"厌烦、疲倦"},
        {word:"附和",pinyin:"fù hè",meaning:"跟随别人说"},
        {word:"恍惚",pinyin:"huǎng hū",meaning:"神志不清"},
        {word:"小心翼翼",pinyin:"xiǎo xīn yì yì",meaning:"非常小心"}
      ]},
      {type:"knowledge",title:"📖 心理描写分析",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>心理变化线：</strong></p>
          <p>好奇（跟去玩）→ 恐惧（被困悬崖）→ 绝望（想哭）→ 信心（听父亲引导）→ 成功（安全着陆）→ 自豪（获得经验）</p>
        </div>
        <p>文中用了大量心理描写来展现主人公的恐惧。比如"我往下看，吓得几乎要晕倒"——这就是<strong>直接心理描写</strong>。</p>
        <p>💡 写作技巧：用心理变化推动情节发展！</p>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 父亲为什么不让'我'跳下来？",options:["A. 太高了","B. 让'我'学会自己走","C. 他抱不动","D. 吓唬'我'"],answer:1},
        {q:"2. '走一步，再走一步'的含义是？",options:["A. 走路要一步一步","B. 把大困难分解成小步骤","C. 不要着急","D. 要慢慢走"],answer:1},
        {q:"3. 文中'我'的心理变化是？",options:["A. 恐惧→平静","B. 好奇→恐惧→信心","C. 开心→难过","D. 愤怒→释然"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"朗读课文1遍",tag:"read"},
        {text:"画出'我'的心理变化曲线图",tag:"write"},
        {text:"写一段自己克服困难的经历",tag:"practice"}
      ]}
    ]},
    math:{title:"第四章·4.3 角",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📐",label:"理解角的定义",desc:"有公共端点的两条射线"},
        {icon:"🔄",label:"学会角的度量",desc:"度分秒的换算"},
        {icon:"✏️",label:"会比较角的大小",desc:"用量角器"}
      ]},
      {type:"knowledge",title:"📐 角的定义和度量",body:`
        <p><strong>角：</strong>有公共端点的两条射线组成的图形。</p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p><strong>角的度量单位：</strong></p>
          <p>1° = 60'（1度 = 60分）</p>
          <p>1' = 60"（1分 = 60秒）</p>
          <p style="margin-top:6px;font-size:1.05rem;">💡 和时间的"时分秒"完全一样！</p>
          <p>1小时 = 60分 · 1分 = 60秒</p>
          <p>1度 = 60分 · 1分 = 60秒</p>
        </div>
        <p><strong>角的分类：</strong></p>
        <p>• 锐角：0° < 角 < 90°</p>
        <p>• 直角：90°</p>
        <p>• 钝角：90° < 角 < 180°</p>
        <p>• 平角：180° · 周角：360°</p>
      `},
      {type:"knowledge",title:"📝 度分秒换算",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>例题1：</strong>30°15' = ?度</p>
          <p>15' = 15÷60 = 0.25°</p>
          <p>30°15' = 30.25° ✅</p>
          <p style="margin-top:6px;"><strong>例题2：</strong>35.5° = ?度?分</p>
          <p>0.5° = 0.5×60 = 30'</p>
          <p>35.5° = 35°30' ✅</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 直角等于多少度？",options:["A. 45°","B. 60°","C. 90°","D. 180°"],answer:2},
        {q:"2. 30°30' = ?度",options:["A. 30.3°","B. 30.5°","C. 30.03°","D. 30.05°"],answer:1},
        {q:"3. 45.5° = ?度?分",options:["A. 45°5'","B. 45°30'","C. 45°50'","D. 45°55'"],answer:1},
        {q:"4. 以下哪个是钝角？",options:["A. 30°","B. 90°","C. 120°","D. 180°"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"记住角的分类（锐、直、钝、平、周）",tag:"recite"},
        {text:"练习度分秒换算（至少5道）",tag:"practice"},
        {text:"用量角器量身边的角",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 9 My favorite subject is science. Section A",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📚",label:"掌握学科类词汇",desc:"math, science, history, music"},
        {icon:"💬",label:"学会表达喜好和原因",desc:"because, interesting, fun"}
      ]},
      {type:"vocabulary",title:"📝 学科词汇",words:[
        {word:"subject",phonetic:"/ˈsʌbdʒɪkt/",meaning:"科目、学科"},
        {word:"science",phonetic:"/ˈsaɪəns/",meaning:"科学"},
        {word:"history",phonetic:"/ˈhɪstri/",meaning:"历史"},
        {word:"biology",phonetic:"/baɪˈɒlədʒi/",meaning:"生物"},
        {word:"geography",phonetic:"/dʒiˈɒɡrəfi/",meaning:"地理"}
      ]},
      {type:"knowledge",title:"💡 为什么学这门课？",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>关键词：why - because</strong></p>
          <p>A: What's your favorite subject?</p>
          <p>B: My favorite subject is <strong>science</strong>.</p>
          <p>A: <strong>Why</strong> do you like science?</p>
          <p>B: <strong>Because</strong> it's interesting.</p>
        </div>
        <p>💡 <strong>单词延伸技巧：</strong></p>
        <p><strong>interesting</strong>（有趣的）→ <strong>interested</strong>（感兴趣的）→ <strong>interest</strong>（兴趣）</p>
        <p>看到<strong>-ing</strong>结尾表示"令人..."，看到<strong>-ed</strong>结尾表示"感到..."</p>
        <p>This book is <strong>interesting</strong>.（这本书有趣）</p>
        <p>I am <strong>interested</strong> in this book.（我对这本书感兴趣）</p>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. -ing结尾的形容词表示？",options:["A. 感到...","B. 令人...","C. 被...","D. 已经..."],answer:1},
        {q:"2. — Why do you like music? — ___ it's fun.",options:["A. So","B. And","C. Because","D. But"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"抄写学科词汇（每个2遍）",tag:"write"},
        {text:"用Why-because编对话",tag:"practice"},
        {text:"学习-ing和-ed的区分",tag:"read"},
        {text:"复习Day 22-23单词",tag:"recite"}
      ]}
    ]}
  }
}
""")
print(f"Day 24: {len(blocks[-1])} chars")

# Day 25
blocks.append(r"""
COURSE_DATA.push({
  day:25,date:"7月26日",weekday:"周日",difficulty:"中等",focus:"第四单元复习·角的比较·Unit 9 Section B",
  subjects:{
    chinese:{title:"第四单元综合复习",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📖",label:"复习《纪念白求恩》《植树的牧羊人》《走一步》",desc:"三篇文章的对比阅读"},
        {icon:"✍️",label:"理解不同文体特点",desc:"议论文、小说、记叙文"}
      ]},
      {type:"knowledge",title:"📖 单元总结",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>本单元三篇文章的共同点：</strong>都告诉我们人生的道理</p>
          <p>📌 《纪念白求恩》— 无私奉献的精神</p>
          <p>📌 《植树的牧羊人》— 坚持的力量</p>
          <p>📌 《走一步，再走一步》— 化解困难的智慧</p>
        </div>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>文体对比：</strong></p>
          <p>• 《纪念白求恩》— 议论文（论点+论据+论证）</p>
          <p>• 《植树的牧羊人》— 小说（人物+环境+情节）</p>
          <p>• 《走一步，再走一步》— 记叙文（六要素）</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 下列哪篇是议论文？",options:["A. 植树的牧羊人","B. 纪念白求恩","C. 走一步","D. 春"],answer:1},
        {q:"2. 《植树的牧羊人》的主人公品质是？",options:["A. 聪明","B. 坚持","C. 帅气","D. 有钱"],answer:1},
        {q:"3. '走一步，再走一步'的意思是？",options:["A. 走路方法","B. 分解困难","C. 慢慢走","D. 不要急躁"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"复习第四单元三篇课文笔记",tag:"read"},
        {text:"写一段文字对比三篇文章",tag:"write"},
        {text:"完成单元练习题",tag:"practice"}
      ]}
    ]},
    math:{title:"第四章·4.3 角的比较与运算",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📐",label:"会比较角的大小",desc:"度量法和叠合法"},
        {icon:"➕",label:"学会角的和差计算",desc:"加减度分秒"},
        {icon:"🧭",label:"理解余角和补角",desc:"互余和互补"}
      ]},
      {type:"knowledge",title:"📐 余角和补角",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>余角：</strong>两个角的和 = 90°，则它们互为余角</p>
          <p style="margin-left:20px;">如：30°和60°互为余角</p>
          <p style="margin-top:6px;"><strong>补角：</strong>两个角的和 = 180°，则它们互为补角</p>
          <p style="margin-left:20px;">如：30°和150°互为补角</p>
        </div>
        <p style="margin-top:6px;">💡 <strong>求法：</strong></p>
        <p>∠A的余角 = 90° - ∠A</p>
        <p>∠A的补角 = 180° - ∠A</p>
        <p style="margin-top:6px;color:#D94A4A;">重点：同角的余角相等，同角的补角相等！</p>
      `},
      {type:"knowledge",title:"📝 角的加减",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>例题：</strong>30°25' + 45°40' = ?</p>
          <p>30° + 45° = 75°</p>
          <p>25' + 40' = 65' = 1°5'</p>
          <p>合计：75° + 1°5' = <strong>76°5'</strong> ✅</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 30°的余角是多少？",options:["A. 30°","B. 60°","C. 90°","D. 150°"],answer:1},
        {q:"2. 45°的补角是多少？",options:["A. 45°","B. 90°","C. 135°","D. 180°"],answer:2},
        {q:"3. 两个角互余，它们的和是？",options:["A. 90°","B. 180°","C. 270°","D. 360°"],answer:0},
        {q:"4. 20°15' + 30°50' = ?",options:["A. 50°5'","B. 51°5'","C. 50°65'","D. 51°15'"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"记住余角补角定义",tag:"recite"},
        {text:"做角度的加法和减法各3道",tag:"practice"},
        {text:"画思维导图总结第四章",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 9 My favorite subject is science. Section B",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📝",label:"学会描述一天安排",desc:"时间+课程+感受"},
        {icon:"✍️",label:"巩固because从句",desc:"I like... because..."}
      ]},
      {type:"vocabulary",title:"📝 形容词总结",words:[
        {word:"boring",phonetic:"/ˈbɔːrɪŋ/",meaning:"无聊的"},
        {word:"difficult",phonetic:"/ˈdɪfɪkəlt/",meaning:"困难的"},
        {word:"relaxing",phonetic:"/rɪˈlæksɪŋ/",meaning:"令人放松的"},
        {word:"useful",phonetic:"/ˈjuːsfəl/",meaning:"有用的"},
        {word:"exciting",phonetic:"/ɪkˈsaɪtɪŋ/",meaning:"令人兴奋的"}
      ]},
      {type:"knowledge",title:"💡 构词法·-ful和-less",body:`
        <p><strong>英语词汇延伸技巧：</strong>学会词根+后缀，一个变多个！</p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p>📌 <strong>-ful</strong> = "充满..." → use（使用）+ ful = useful（有用的）</p>
          <p>📌 <strong>-less</strong> = "没有..." → use（使用）+ less = useless（没用的）</p>
          <p style="margin-top:6px;">更多例子：</p>
          <p>care + ful = careful（小心的）</p>
          <p>care + less = careless（粗心的）</p>
          <p>hope + ful = hopeful（有希望的）</p>
          <p>hope + less = hopeless（没希望的）</p>
        </div>
        <p>💡 <strong>记一个词根就能记住2-3个词！</strong></p>
      `},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"抄写本课形容词",tag:"write"},
        {text:"用because造句（5个）",tag:"practice"},
        {text:"用-ful和-less各造2个新词",tag:"practice"},
        {text:"主动回忆法：复习Unit 7-9词汇",tag:"recite"}
      ]}
    ]}
  }
}
""")
print(f"Day 24-25: {sum(len(b) for b in blocks)} chars")

new_content = content[:insert_point] + "\n".join(blocks) + content[insert_point:]
backup = path + ".bak5"
os.rename(path, backup)
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)
print(f"Written {len(new_content)} bytes. Days 24-25 added.")
