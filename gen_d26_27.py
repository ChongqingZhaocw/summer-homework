import sys, os
sys.stdout.reconfigure(encoding="utf-8")

path = r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html"
with open(path, "r", encoding="utf-8-sig") as f:
    content = f.read()

insert_point = 217735  # after Day 25 closing })

blocks = []

# Day 26
blocks.append(r"""
COURSE_DATA.push({
  day:26,date:"7月27日",weekday:"周一",difficulty:"中等",focus:"《猫》·余角补角·U1-6总复习",
  subjects:{
    chinese:{title:"第15课《猫》·郑振铎",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🐱",label:"理解三只猫的不同命运",desc:"每只猫的特点和结局"},
        {icon:"💡",label:"体会'我'的自省精神",desc:"为什么冤枉第三只猫后最难过"}
      ]},
      {type:"knowledge",title:"👤 作者与背景",body:`
        <p><strong>郑振铎</strong>（1898-1958）：中国现代作家、学者。</p>
        <p>本文通过写三次养猫的经历，表达了作者对生命的尊重和对自己的反省。</p>
        <p>💡 <strong>核心思想：</strong>不要凭主观臆断下结论，要尊重每一个生命。</p>
      `},
      {type:"vocabulary",title:"📝 重点字词",words:[
        {word:"蜷伏",pinyin:"quán fú",meaning:"弯曲身体躺着"},
        {word:"叮嘱",pinyin:"dīng zhǔ",meaning:"反复嘱咐"},
        {word:"惩戒",pinyin:"chéng jiè",meaning:"惩罚以示警戒"},
        {word:"畏罪潜逃",pinyin:"wèi zuì qián táo",meaning:"犯了罪怕受惩罚而逃跑"}
      ]},
      {type:"knowledge",title:"📖 三只猫对比",body:`
        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
          <tr style="background:#E8F0FE;"><th style="padding:4px;border:1px solid #ddd;"></th><th style="padding:4px;border:1px solid #ddd;">第一只</th><th style="padding:4px;border:1px solid #ddd;">第二只</th><th style="padding:4px;border:1px solid #ddd;">第三只</th></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">来源</td><td style="padding:4px;border:1px solid #ddd;">隔壁要的</td><td style="padding:4px;border:1px solid #ddd;">舅舅家给的</td><td style="padding:4px;border:1px solid #ddd;">捡来的</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">外貌</td><td style="padding:4px;border:1px solid #ddd;">黄色可爱</td><td style="padding:4px;border:1px solid #ddd;">黄色有趣</td><td style="padding:4px;border:1px solid #ddd;">难看忧郁</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">结局</td><td style="padding:4px;border:1px solid #ddd;">病死</td><td style="padding:4px;border:1px solid #ddd;">被过路人捉走</td><td style="padding:4px;border:1px solid #ddd;">被'我'打后死在邻居家</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">'我'的心情</td><td style="padding:4px;border:1px solid #ddd;">难过</td><td style="padding:4px;border:1px solid #ddd;">怅然</td><td style="padding:4px;border:1px solid #ddd;">难过+愧疚+自责</td></tr>
        </table>
        <p style="margin-top:6px;">💡 <strong>重点：</strong>作者对第三只猫的愧疚最深，因为它是被冤枉的！</p>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 作者对哪只猫的愧疚最深？",options:["A. 第一只","B. 第二只","C. 第三只","D. 一样"],answer:2},
        {q:"2. 第三只猫被冤枉的根本原因是什么？",options:["A. 它确实吃了鸟","B. 因为它不讨人喜欢就凭主观判断","C. 作者不喜欢猫","D. 猫自己承认了"],answer:1},
        {q:"3. 本文的主旨是？",options:["A. 猫很可爱","B. 要养猫","C. 不要主观臆断，尊重生命","D. 猫会吃鸟"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"默读课文1遍",tag:"read"},
        {text:"画出三只猫的对比表",tag:"write"},
        {text:"写一段200字的读后感",tag:"practice"}
      ]}
    ]},
    math:{title:"第四章·余角补角综合+几何复习",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📐",label:"巩固余角和补角",desc:"求一个角的余角和补角"},
        {icon:"🧠",label:"用思维导图总结第四章",desc:"几何图形→直线射线线段→角"}
      ]},
      {type:"knowledge",title:"📐 余角补角专题",body:`
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p><strong>核心公式：</strong></p>
          <p>∠A的余角 = 90° - ∠A</p>
          <p>∠A的补角 = 180° - ∠A</p>
          <p style="margin-top:6px;"><strong>重要性质：</strong></p>
          <p>① 同角（等角）的余角相等</p>
          <p>② 同角（等角）的补角相等</p>
        </div>
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>例题：</strong>一个角的补角是这个角的3倍，求这个角。</p>
          <p>设这个角为x</p>
          <p>补角 = 180° - x</p>
          <p>列方程：180 - x = 3x</p>
          <p>180 = 4x</p>
          <p>x = 45° ✅</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 一个角是50°，它的补角是？",options:["A. 40°","B. 130°","C. 50°","D. 180°"],answer:1},
        {q:"2. 一个角的补角是120°，这个角是？",options:["A. 30°","B. 60°","C. 90°","D. 120°"],answer:1},
        {q:"3. 两个角互补且相等，每个角是？",options:["A. 45°","B. 60°","C. 90°","D. 180°"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"背熟余角补角公式",tag:"recite"},
        {text:"完成几何综合练习题",tag:"practice"},
        {text:"画第四章思维导图",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 1-6 综合复习",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🔄",label:"复习Unit 1-6核心词汇",desc:"重点单词回顾"},
        {icon:"📝",label:"巩固一般现在时",desc:"Do/Does 句型"}
      ]},
      {type:"knowledge",title:"📚 U1-6 核心语法对比",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>Unit 1-3：</strong>be动词（am/is/are）</p>
          <p>I am... / You are... / He/She/It is...</p>
          <p style="margin-top:6px;"><strong>Unit 4：</strong>There be + 方位介词</p>
          <p>There is/are + 某物 + 某地</p>
          <p style="margin-top:6px;"><strong>Unit 5-6：</strong>Do/Does 实义动词</p>
          <p>Do you like...? / Does he like...?</p>
        </div>
        <p>💡 <strong>规律：</strong>be动词和实义动词不能同时在一个句子里作谓语！</p>
        <p>❌ I am like bananas.</p>
        <p>✅ I like bananas. 或 I am a student.</p>
      `},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"复习U1-6所有单词表",tag:"read"},
        {text:"做一般现在时练习题",tag:"practice"},
        {text:"主动回忆法：遮住中文说英文单词",tag:"recite"},
        {text:"背诵Unit 5-6对话",tag:"recite"}
      ]}
    ]}
  }
}
""")
print(f"Day 26: {len(blocks[-1])} chars")

# Day 27
blocks.append(r"""
COURSE_DATA.push({
  day:27,date:"7月28日",weekday:"周二",difficulty:"中等",focus:"《动物笑谈》·第三章综合复习·U7-9复习",
  subjects:{
    chinese:{title:"第16课《动物笑谈》·康拉德·劳伦兹",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🦆",label:"感受科学家的幽默和严谨",desc:"劳伦兹对动物的热爱"},
        {icon:"✍️",label:"学习材料组织方式",desc:"用几件事写一个人"}
      ]},
      {type:"knowledge",title:"👤 作者与内容",body:`
        <p><strong>康拉德·劳伦兹</strong>（1903-1989）：奥地利动物学家，诺贝尔奖得主。</p>
        <p>本文选自他的著作《所罗门王的指环》。文中描写了他与动物之间的趣事，体现了他对动物的热爱和科学研究的严谨态度。</p>
        <p>💡 <strong>"笑谈"的含义：</strong>既指故事的趣味性，也体现科学家在研究中获得的快乐。</p>
      `},
      {type:"vocabulary",title:"📝 重点字词",words:[
        {word:"嗔怪",pinyin:"chēn guài",meaning:"假装生气"},
        {word:"匍匐",pinyin:"pú fú",meaning:"爬行"},
        {word:"怪诞不经",pinyin:"guài dàn bù jīng",meaning:"古怪荒唐"}
      ]},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 本文的文体是？",options:["A. 小说","B. 说明文","C. 科普文章","D. 议论文"],answer:2},
        {q:"2. 文中'笑谈'指的是？",options:["A. 讽刺笑话","B. 有趣的科学研究故事","C. 冷笑话","D. 搞笑视频"],answer:1},
        {q:"3. 劳伦兹对动物的态度是？",options:["A. 冷淡","B. 热爱和研究","C. 害怕","D. 厌恶"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"朗读课文1遍",tag:"read"},
        {text:"抄写重点字词",tag:"write"},
        {text:"整理本单元字词",tag:"practice"}
      ]}
    ]},
    math:{title:"第三章·一元一次方程综合复习",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📝",label:"回顾第三章全章知识点",desc:"方程→解法→应用"},
        {icon:"🧠",label:"用思维导图总结",desc:"建立知识体系"}
      ]},
      {type:"knowledge",title:"📐 第三章知识导图",body:`
        <div style="background:#F0FFF4;padding:12px;border-radius:8px;">
          <p style="font-weight:bold;text-align:center;">🧠 一元一次方程</p>
          <p>├─ 方程的定义：含有未知数的等式</p>
          <p>├─ 解方程的步骤</p>
          <p>│  ├ ① 去分母（两边×LCM）</p>
          <p>│  ├ ② 去括号（注意符号）</p>
          <p>│  ├ ③ 移项（过河要变号）</p>
          <p>│  ├ ④ 合并同类项</p>
          <p>│  └ ⑤ 系数化1</p>
          <p>└─ 应用题</p>
          <p>   ├ 和差倍分问题</p>
          <p>   ├ 行程问题（相遇/追及）</p>
          <p>   └ 工程/利润问题</p>
        </div>
      `},
      {type:"practice",title:"📝 综合练习",questions:[
        {q:"1. 解方程：3(x-2)=2x+5",options:["A. 9","B. 10","C. 11","D. 12"],answer:2},
        {q:"2. 解方程：(x+1)/2 = 3",options:["A. 3","B. 4","C. 5","D. 6"],answer:2},
        {q:"3. 移项时'+5'移到另一边变成？",options:["A. +5","B. -5","C. ×5","D. ÷5"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"画第三章思维导图",tag:"write"},
        {text:"完成10道综合练习题",tag:"practice"},
        {text:"错题整理到错题本",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 7-9 综合复习",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🔄",label:"复习Unit 7-9核心内容",desc:"价格、日期、喜好"},
        {icon:"📝",label:"单元综合练习",desc:"语法+词汇+句型"}
      ]},
      {type:"knowledge",title:"📚 U7-9 综合",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>Unit 7：</strong>How much...? 问价格 + 服饰词汇</p>
          <p><strong>Unit 8：</strong>When is...? 问日期 + 月份序数词</p>
          <p><strong>Unit 9：</strong>What's your favorite...? 问喜好 + 学科词汇</p>
        </div>
        <p>💡 <strong>音标总结（U1-9出现的）：</strong></p>
        <p>/i:/ /ɪ/ /e/ /æ/ /ʌ/ /ɑː/ /ɔ/ /uː/ /ʊ/ /ə/ /ɜː/</p>
        <p>/eɪ/ /aɪ/ /ɔɪ/ /əʊ/ /aʊ/ /ɪə/ /eə/ /ʊə/</p>
        <p>/p/ /b/ /t/ /d/ /k/ /ɡ/ /f/ /v/ /θ/ /ð/ /s/ /z/ /ʃ/ /ʒ/</p>
        <p>/tʃ/ /dʒ/ /tr/ /dr/ /ts/ /dz/ /m/ /n/ /ŋ/ /h/ /l/ /r/ /w/ /j/</p>
      `},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"复习U7-9单词和句型",tag:"read"},
        {text:"做单元综合测试卷",tag:"practice"},
        {text:"整理音标表（读+写）",tag:"recite"}
      ]}
    ]}
  }
}
""")
print(f"Day 27: {len(blocks[-1])} chars")

new_content = content[:insert_point] + "\n".join(blocks) + content[insert_point:]
backup = path + ".bak6"
os.rename(path, backup)
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)
print(f"Written {len(new_content)} bytes. Days 26-27 added.")
