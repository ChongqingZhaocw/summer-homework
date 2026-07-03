import sys, os
sys.stdout.reconfigure(encoding="utf-8")
path = r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html"
c = open(path, "r", encoding="utf-8-sig").read()
insert_point = 205301

blocks = []

# Day 28
blocks.append(r"""
COURSE_DATA.push({
  day:28,date:"7月29日",weekday:"周三",difficulty:"中等",focus:"《皇帝的新装》·第四章几何复习·英语期中复习",
  subjects:{
    chinese:{title:"第19课《皇帝的新装》·安徒生",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"👑",label:"理解童话的讽刺意义",desc:"为什么没人敢说真话"},
        {icon:"💡",label:"学习夸张和反讽手法",desc:"作者如何通过故事讽刺社会"}
      ]},
      {type:"knowledge",title:"👤 作者与背景",body:`
        <p><strong>汉斯·克里斯蒂安·安徒生</strong>（1805-1875）：丹麦著名童话作家。</p>
        <p>安徒生一生写了168篇童话，被翻译成150多种语言。他的童话不仅仅是给孩子看的，更是给大人看的——因为里面藏着<strong>深刻的社会讽刺</strong>。</p>
        <p>💡 <strong>本文背景：</strong>安徒生生活在19世纪初的丹麦，当时社会等级森严，贵族阶层腐败虚荣。皇帝的新装讽刺的就是这种虚伪的社会风气。</p>
      `},
      {type:"knowledge",title:"📖 人物分析",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>主要人物及象征：</strong></p>
          <p>👑 <strong>皇帝</strong> — 象征虚伪、爱慕虚荣的统治者</p>
          <p>🕴️ <strong>大臣</strong> — 象征阿谀奉承、不敢说实话的人</p>
          <p>🧵 <strong>骗子</strong> — 象征利用人性弱点的人</p>
          <p>👦 <strong>小孩</strong> — 象征纯真、敢于说真话的人</p>
        </div>
        <p style="margin-top:6px;">💡 <strong>为什么是小孩说真话？</strong>因为小孩天真无邪，没有成人的顾虑和虚荣心。</p>
      `},
      {type:"vocabulary",title:"📝 重点字词",words:[
        {word:"炫耀",pinyin:"xuàn yào",meaning:"夸耀、显示"},
        {word:"称职",pinyin:"chèn zhí",meaning:"能胜任本职工作"},
        {word:"愚蠢",pinyin:"yú chǔn",meaning:"愚笨、不聪明"},
        {word:"不可救药",pinyin:"bù kě jiù yào",meaning:"病重到无法医治，比喻坏到无法挽救"}
      ]},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 安徒生是哪国人？",options:["A. 德国","B. 丹麦","C. 瑞典","D. 法国"],answer:1},
        {q:"2. 为什么大家都说皇帝穿了新衣服？",options:["A. 皇帝真的穿了","B. 怕被说不称职或愚蠢","C. 他们眼睛有问题","D. 他们喜欢皇帝"],answer:1},
        {q:"3. 最后谁说了真话？",options:["A. 皇帝","B. 大臣","C. 小孩","D. 骗子"],answer:2},
        {q:"4. 这篇童话讽刺的是什么？",options:["A. 衣服不好看","B. 社会的虚伪和虚荣","C. 骗子太聪明","D. 皇帝太穷"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"朗读课文1遍，找出夸张的描写",tag:"read"},
        {text:"抄写重点字词（每个2遍）",tag:"write"},
        {text:"思考：为什么大人不敢说真话？",tag:"practice"}
      ]}
    ]},
    math:{title:"第四章·几何图形初步综合复习",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📐",label:"回顾第四章全章知识点",desc:"立体→平面→线段→角"},
        {icon:"🧠",label:"用思维导图总结",desc:"建立几何知识体系"}
      ]},
      {type:"knowledge",title:"📐 第四章知识导图",body:`
        <div style="background:#F0FFF4;padding:12px;border-radius:8px;">
          <p style="font-weight:bold;text-align:center;">🧠 几何图形初步</p>
          <p>├─ 立体图形 vs 平面图形</p>
          <p>│  ├ 柱体·锥体·球体·正方体展开图</p>
          <p>├─ 直线、射线、线段</p>
          <p>│  ├ 两点确定一条直线</p>
          <p>│  ├ 两点之间线段最短</p>
          <p>│  └ 线段的中点</p>
          <p>└─ 角</p>
          <p>   ├ 角的度量（度分秒）</p>
          <p>   ├ 角的分类（锐·直·钝·平·周）</p>
          <p>   ├ 角的和差计算</p>
          <p>   └ 余角和补角</p>
        </div>
      `},
      {type:"practice",title:"📝 综合练习",questions:[
        {q:"1. 正方形是立体图形吗？",options:["A. 是","B. 不是，是平面图形","C. 既是也是","D. 都不是"],answer:1},
        {q:"2. 60°的余角是？",options:["A. 30°","B. 60°","C. 90°","D. 120°"],answer:0},
        {q:"3. 两点之间的最短距离是？",options:["A. 直线","B. 射线","C. 线段","D. 曲线"],answer:2},
        {q:"4. 正方体展开图共有几种？",options:["A. 6","B. 8","C. 11","D. 12"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"画第四章完整思维导图",tag:"write"},
        {text:"完成单元综合练习题",tag:"practice"},
        {text:"错题本整理",tag:"practice"}
      ]}
    ]},
    english:{title:"Starter Units + Unit 1-4 期中复习",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🔄",label:"复习Starter-U4全部内容",desc:"字母和基础句型"},
        {icon:"📝",label:"巩固be动词用法",desc:"am/is/are 的完整总结"}
      ]},
      {type:"knowledge",title:"📚 be动词总结",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>be动词口诀：</strong></p>
          <p style="font-size:1.05rem;">I用am，you用are，is用于他她它</p>
          <p>单数名词用is，复数名词全用are</p>
        </div>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>注意：</strong>英语中be动词和实义动词不能同时作谓语</p>
          <p>❌ I am like bananas.</p>
          <p>✅ I like bananas.（实义动词）</p>
          <p>✅ I am a student.（be动词）</p>
        </div>
      `},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"复习字母表+音标对照",tag:"read"},
        {text:"做be动词练习题",tag:"practice"},
        {text:"主动回忆法：回忆Starter-U4全部句型",tag:"recite"}
      ]}
    ]}
  }
})
""")
print(f"Day 28: {len(blocks[-1])} chars")

# Day 29
blocks.append(r"""
COURSE_DATA.push({
  day:29,date:"7月30日",weekday:"周四",difficulty:"中等偏难",focus:"《天上的街市》·全册数学总复习·英语总复习(上)",
  subjects:{
    chinese:{title:"第20课《天上的街市》·郭沫若+《女娲造人》",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🌟",label:"理解现代诗的意象",desc:"天上的街市象征什么"},
        {icon:"📖",label:"了解联想和想象",desc:"诗人如何从街灯联想到天上"}
      ]},
      {type:"knowledge",title:"👤 作者与背景",body:`
        <p><strong>郭沫若</strong>（1892-1978）：中国现代著名诗人、历史学家。</p>
        <p>《天上的街市》写于1921年，当时中国社会黑暗动荡，诗人通过想象一个美好的天上世界来表达对光明的向往。</p>
        <p>💡 诗人看到地上的<strong>街灯</strong>，联想到天上的<strong>明星</strong>，再想象出天上的街市——这就是<strong>联想和想象</strong>的写作手法。</p>
      `},
      {type:"knowledge",title:"💡 联想与想象的区别",body:`
        <p><strong>联想：</strong>由一事物想到另一事物（两者之间有联系）</p>
        <p>街灯 ↔ 明星（都是发光体）</p>
        <p><strong>想象：</strong>创造出新的事物或场景</p>
        <p>想象出天上有街市、牛郎织女在天街闲游</p>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. '天上的街市'表达了诗人什么情感？",options:["A. 对黑暗现实的不满和对光明的向往","B. 想去天上玩","C. 喜欢逛街","D. 想变成星星"],answer:0},
        {q:"2. '街灯'和'明星'之间的联系是？",options:["A. 形状相似","B. 都会发光","C. 颜色相同","D. 位置相同"],answer:1},
        {q:"3. 联想和想象的区别是？",options:["A. 一样","B. 联想基于现实联系，想象创造新事物","C. 联想更难","D. 想象更简单"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"朗读并背诵全诗",tag:"recite"},
        {text:"抄写全诗并批改",tag:"write"},
        {text:"用联想写一段话（如：看到下雨想到什么）",tag:"practice"}
      ]}
    ]},
    math:{title:"七年级上册·数学全册综合复习(上)",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📚",label:"回顾第一二章",desc:"有理数+整式的加减"},
        {icon:"🧠",label:"用大思维导图构建知识体系",desc:"找出关联"}
      ]},
      {type:"knowledge",title:"📐 全册知识框架",body:`
        <div style="background:#F0FFF4;padding:12px;border-radius:8px;">
          <p style="font-weight:bold;text-align:center;">🧠 七年级上册数学</p>
          <p>第一章 <strong>有理数</strong></p>
          <p>├ 正负数·数轴·相反数·绝对值</p>
          <p>├ 加减乘除乘方·科学记数法</p>
          <p>└ 混合运算</p>
          <p>第二章 <strong>整式的加减</strong></p>
          <p>├ 单项式·多项式·同类项</p>
          <p>├ 合并同类项·去括号</p>
          <p>└ 整式的加减运算</p>
          <p>第三章 <strong>一元一次方程</strong></p>
          <p>├ 解法五步·应用题</p>
          <p>第四章 <strong>几何图形初步</strong></p>
          <p>├ 线·角·余角补角</p>
        </div>
      `},
      {type:"practice",title:"📝 综合练习",questions:[
        {q:"1. |-5| = ?",options:["A. -5","B. 0","C. 5","D. 10"],answer:2},
        {q:"2. -(-3)+(-5) = ?",options:["A. -8","B. -2","C. 2","D. 8"],answer:1},
        {q:"3. 2(a-3)+4 = ?去括号后＝",options:["A. 2a-6+4","B. 2a-3+4","C. 2a+6+4","D. 2a-6-4"],answer:0}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"画全册知识框架图",tag:"write"},
        {text:"做综合练习题（各章选3道）",tag:"practice"},
        {text:"整理错题本",tag:"practice"}
      ]}
    ]},
    english:{title:"七年级上册·英语总复习(上) — 预备篇+U1-4",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🔄",label:"总复习Starter-U4",desc:"字母、问候、be动词"},
        {icon:"✍️",label:"重点句型归纳",desc:"This/That/These/Those"}
      ]},
      {type:"knowledge",title:"📚 重点句型归纳",body:`
        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
          <tr style="background:#E8F0FE;"><th style="padding:4px;border:1px solid #ddd;">句型</th><th style="padding:4px;border:1px solid #ddd;">例句</th></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">问候</td><td style="padding:4px;border:1px solid #ddd;">Good morning! / How are you?</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">介绍</td><td style="padding:4px;border:1px solid #ddd;">This is my sister. / These are my parents.</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">所属</td><td style="padding:4px;border:1px solid #ddd;">Is this your pencil? / It's mine.</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">方位</td><td style="padding:4px;border:1px solid #ddd;">Where's my schoolbag? It's on the desk.</td></tr>
        </table>
      `},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"复习Starter-U4单词和句型",tag:"read"},
        {text:"做总复习练习题",tag:"practice"},
        {text:"背诵重点句型",tag:"recite"}
      ]}
    ]}
  }
}
""")
print(f"Day 29: {len(blocks[-1])} chars")

# Day 30
blocks.append(r"""
COURSE_DATA.push({
  day:30,date:"7月31日",weekday:"周五",difficulty:"中等",focus:"第六单元复习·全册总复习·英语总复习(下)+暑期总结",
  subjects:{
    chinese:{title:"第六单元复习 + 暑期总结",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🎉",label:"完成30天暑期学习",desc:"回顾整个暑期学习成果"},
        {icon:"📝",label:"第六单元复习",desc:"童话、现代诗、神话"}
      ]},
      {type:"knowledge",title:"📖 第六单元总结",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>本单元三课：</strong></p>
          <p>👑 《皇帝的新装》— 安徒生童话·讽刺虚伪</p>
          <p>🌟 《天上的街市》— 郭沫若诗歌·向往光明</p>
          <p>🗿 《女娲造人》— 中国古代神话·想象力</p>
        </div>
        <p style="margin-top:8px;">💡 <strong>共同点：</strong>都运用了<strong>丰富的想象力</strong>！</p>
        <p>安徒生想象出骗子的骗局，郭沫若想象出天上的街市，女娲想象出创造人类的方法。</p>
        <p><strong>想象力=创造力！</strong>这个暑假你学会的最重要的能力就是——用想象力去学习和创造！</p>
      `},
      {type:"practice",title:"🎯 暑期总结思考",questions:[
        {q:"1. 这个暑假你最喜欢哪篇课文？",options:["A. 春","B. 论语","C. 皇帝的新装","D. 其他"],answer:3},
        {q:"2. 哪种学习方法你觉得最有用？",options:["A. 费曼学习法","B. 番茄工作法","C. 主动回忆法","D. 所有方法都有用"],answer:3},
        {q:"3. 新学期你最期待学什么？",options:["A. 语文","B. 数学","C. 英语","D. 全部"],answer:3}
      ]},
      {type:"task",title:"📋 暑期总结任务",tasks:[
        {text:"回顾30天学习笔记和错题本",tag:"read"},
        {text:"写一篇300字的暑期学习总结",tag:"write"},
        {text:"给自己定新学期的目标",tag:"practice"},
        {text:"和家长一起看学习报告",tag:"practice"}
      ]}
    ]},
    math:{title:"七年级上册·数学全册综合复习(下)+暑期总结",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📚",label:"回顾第三四章",desc:"一元一次方程+几何初步"},
        {icon:"🏆",label:"完成综合测试",desc:"检验学习成果"}
      ]},
      {type:"knowledge",title:"📐 重点公式卡片",body:`
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
          <div style="background:#E8F0FE;padding:8px;border-radius:8px;font-size:0.85rem;">
            <strong>绝对值</strong><br>|a|≥0<br>|a|=a(a≥0)<br>|a|=-a(a<0)
          </div>
          <div style="background:#FFF7E6;padding:8px;border-radius:8px;font-size:0.85rem;">
            <strong>行程问题</strong><br>路程=速度×时间<br>相遇:(v1+v2)t=s<br>追及:(v1-v2)t=s
          </div>
          <div style="background:#F0FFF4;padding:8px;border-radius:8px;font-size:0.85rem;">
            <strong>移项</strong><br>过河要变号！<br>+变-，-变+
          </div>
          <div style="background:#FEF0F0;padding:8px;border-radius:8px;font-size:0.85rem;">
            <strong>余角补角</strong><br>余角:∠A+∠B=90°<br>补角:∠A+∠B=180°
          </div>
        </div>
      `},
      {type:"practice",title:"📝 暑期数学总结",questions:[
        {q:"1. 暑假你学了几章数学？",options:["A. 2章","B. 3章","C. 4章","D. 5章"],answer:2},
        {q:"2. 你觉得自己哪章掌握得最好？",options:["A. 有理数","B. 整式","C. 方程","D. 几何"],answer:3}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"完成综合测试卷",tag:"practice"},
        {text:"整理错题本并总结",tag:"practice"},
        {text:"画一张给自己鼓励的数学卡片",tag:"practice"}
      ]}
    ]},
    english:{title:"七年级上册·英语总复习(下) + 暑期成果",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🎉",label:"完成英语全部复习",desc:"U5-9重点回顾"},
        {icon:"📝",label:"暑期英语成果总结",desc:"单词/句型/音标进步"}
      ]},
      {type:"knowledge",title:"📚 U5-9 核心句型",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>Unit 5：</strong>Do you have...? / Let's play...</p>
          <p><strong>Unit 6：</strong>Do you like...? / I like... / He likes...</p>
          <p><strong>Unit 7：</strong>How much is/are...? / Can I help you?</p>
          <p><strong>Unit 8：</strong>When is your birthday? / My birthday is on...</p>
          <p><strong>Unit 9：</strong>What's your favorite subject? / Why? / Because...</p>
        </div>
      `},
      {type:"knowledge",title:"💡 音标学习总结",body:`
        <p>这个暑假你学会了<strong>48个国际音标</strong>！</p>
        <p>💡 <strong>学习窍门回顾：</strong></p>
        <p>• 音标像中文拼音——"拼"出来就好了！</p>
        <p>• 长音拉长读，短音短促读</p>
        <p>• 双元音从第一个位置"滑"到第二个</p>
        <p>• /θ/和/ð/要咬舌头——这是英语特色！</p>
        <p>• <strong>-ing延伸法：</strong>记住一个词根，延伸出更多单词</p>
        <p>• <strong>-ful/-less：</strong>加后缀变新词</p>
      `},
      {type:"task",title:"📋 暑期总结任务",tasks:[
        {text:"读一遍暑期所有单词表",tag:"read"},
        {text:"写出暑期学会的30个新单词",tag:"write"},
        {text:"用英语写一段暑期总结（50词）",tag:"practice"},
        {text:"对自己说：You did it! 🎉",tag:"audio"}
      ]}
    ]}
  }
}
""")
print(f"Day 30: {len(blocks[-1])} chars")

# Insert days 28-30
new_content = c[:insert_point] + "\n".join(blocks) + c[insert_point:]
backup = path + ".bak7"
os.rename(path, backup)
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)
print(f"\nWritten {len(new_content)} bytes (was {len(c)})")
print(f"Added {sum(len(b) for b in blocks)} chars")
print(f"All 30 days now complete!")
