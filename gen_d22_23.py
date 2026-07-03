import sys, os
sys.stdout.reconfigure(encoding="utf-8")

path = r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html"
with open(path, "r", encoding="utf-8-sig") as f:
    content = f.read()

insert_point = 173832

blocks = []

# Day 22
blocks.append(r"""
COURSE_DATA.push({
  day:22,date:"7月23日",weekday:"周四",difficulty:"中等",focus:"《植树的牧羊人》·几何图形初步·Unit 8 Section A",
  subjects:{
    chinese:{title:"第12课《植树的牧羊人》·让·乔诺",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🌲",label:"默读课文，理解牧羊人形象",desc:"找出牧羊人的品质"},
        {icon:"✍️",label:"学习对比手法",desc:"荒原→绿洲的变化"}
      ]},
      {type:"knowledge",title:"👤 作者与背景",body:`
        <p><strong>让·乔诺</strong>（1895-1970）：法国著名作家。</p>
        <p>本文讲述了一个牧羊人几十年如一日在荒原上种树，最终把荒原变成绿洲的故事。</p>
        <p>💡 <strong>为什么学这篇？</strong>它告诉我们：坚持做一件小事，也能创造奇迹！</p>
      `},
      {type:"vocabulary",title:"📝 重点字词",words:[
        {word:"坍塌",pinyin:"tān tā",meaning:"倒塌"},
        {word:"慷慨",pinyin:"kāng kǎi",meaning:"大方、不吝啬"},
        {word:"干涸",pinyin:"gān hé",meaning:"（河道）干枯"},
        {word:"废墟",pinyin:"fèi xū",meaning:"城市/村庄被毁后的遗迹"},
        {word:"刨根问底",pinyin:"páo gēn wèn dǐ",meaning:"追究底细"}
      ]},
      {type:"knowledge",title:"📖 课文结构",body:`
        <p>以<strong>时间顺序</strong>展开，1913年→1920年→1945年：</p>
        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
          <tr style="background:#E8F0FE;"><th style="padding:4px;border:1px solid #ddd;">时间</th><th style="padding:4px;border:1px solid #ddd;">环境</th><th style="padding:4px;border:1px solid #ddd;">牧羊人的行动</th></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">1913年</td><td style="padding:4px;border:1px solid #ddd;">荒原、废墟</td><td style="padding:4px;border:1px solid #ddd;">开始种树</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">1920年</td><td style="padding:4px;border:1px solid #ddd;">出现绿意</td><td style="padding:4px;border:1px solid #ddd;">坚持种了7年</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">1945年</td><td style="padding:4px;border:1px solid #ddd;">绿洲、生机</td><td style="padding:4px;border:1px solid #ddd;">荒地变森林</td></tr>
        </table>
        <p>牧羊人品质：<strong>毅力、无私、热爱自然、不求回报</strong></p>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 牧羊人种树坚持了多少年？",options:["A. 10多年","B. 30多年","C. 50多年","D. 一辈子"],answer:1},
        {q:"2. 课文最突出的写作手法是？",options:["A. 比喻","B. 对比（环境变化）","C. 拟人","D. 排比"],answer:1},
        {q:"3. 牧羊人的品质不包括？",options:["A. 坚持","B. 无私","C. 贪财","D. 热爱自然"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"默读课文1遍",tag:"read"},
        {text:"抄写重点字词",tag:"write"},
        {text:"画出环境变化的对比表",tag:"practice"},
        {text:"思考：你坚持做最久的一件事是什么？",tag:"practice"}
      ]}
    ]},
    math:{title:"第四章·几何图形初步—立体图形与平面图形",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🔷",label:"区分立体图形和平面图形",desc:"柱体、锥体、球体"},
        {icon:"📐",label:"学会从不同方向看立体图形",desc:"三视图初步"},
        {icon:"✂️",label:"展开图",desc:"正方体的11种展开图"}
      ]},
      {type:"knowledge",title:"📐 几何图形分类",body:`
        <div style="background:#F0FFF4;padding:12px;border-radius:8px;">
          <p style="font-weight:bold;">① 平面图形：在同一个平面内</p>
          <p style="margin-left:20px;">线段、角、三角形、长方形、圆...</p>
          <p style="margin-top:8px;font-weight:bold;">② 立体图形：不在同一个平面内</p>
          <p style="margin-left:20px;">• 柱体：圆柱、棱柱（三棱柱、四棱柱...）</p>
          <p style="margin-left:20px;">• 锥体：圆锥、棱锥</p>
          <p style="margin-left:20px;">• 球体</p>
        </div>
        <p>💡 <strong>三视图：</strong>从正面看（主视图）、从左面看（左视图）、从上面看（俯视图）</p>
      `},
      {type:"knowledge",title:"📝 正方体展开图（重点！）",body:`
        <p>正方体有 <strong>11种</strong> 不同的展开图！</p>
        <p>记忆口诀：<strong>"141型"有6种，"231型"有3种，"222型"有1种，"33型"有1种</strong></p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p>❌ <strong>不能围成正方体的：</strong></p>
          <p>• 出现"田"字形 ❌</p>
          <p>• 出现"凹"字形 ❌</p>
          <p>• 出现"L"型过长 ❌</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 下列哪个是立体图形？",options:["A. 圆","B. 正方形","C. 球","D. 三角形"],answer:2},
        {q:"2. 圆柱体从正面看是什么形状？",options:["A. 圆","B. 长方形","C. 三角形","D. 梯形"],answer:1},
        {q:"3. 正方体的展开图有几种？",options:["A. 6","B. 8","C. 11","D. 12"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"观察身边的立体图形（至少10个）",tag:"read"},
        {text:"画一个正方体展开图",tag:"practice"},
        {text:"完成课本练习题",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 8 When is your birthday? Section A",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🎂",label:"掌握月份和序数词",desc:"January到December"},
        {icon:"📅",label:"学会问生日",desc:"When is your birthday?"},
        {icon:"🔊",label:"音标：/θ/ /ð/",desc:"咬舌音要诀"}
      ]},
      {type:"knowledge",title:"🔊 音标·/θ/和/ð/",body:`
        <p>这两个是英语的<strong>特色音</strong>，中文里没有！</p>
        <p style="color:#D94A4A;">关键：舌尖轻咬上下齿之间，送气发出</p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p><strong>/θ/</strong> 清辅音（声带不振动）</p>
          <p style="font-size:1.1rem;">three /θriː/ · think /θɪŋk/ · birthday /ˈbɜːθdeɪ/</p>
          <p style="margin-top:6px;"><strong>/ð/</strong> 浊辅音（声带振动）</p>
          <p style="font-size:1.1rem;">this /ðɪs/ · that /ðæt/ · mother /ˈmʌðə/</p>
        </div>
        <p>💡 和中文拼音的"z/c/s"对比练习</p>
      `},
      {type:"vocabulary",title:"📝 月份和序数词",words:[
        {word:"January",phonetic:"/ˈdʒænjuəri/",meaning:"一月"},
        {word:"February",phonetic:"/ˈfebruəri/",meaning:"二月"},
        {word:"March",phonetic:"/mɑːtʃ/",meaning:"三月"},
        {word:"April",phonetic:"/ˈeɪprəl/",meaning:"四月"},
        {word:"first",phonetic:"/fɜːst/",meaning:"第一"},
        {word:"second",phonetic:"/ˈsekənd/",meaning:"第二"},
        {word:"third",phonetic:"/θɜːd/",meaning:"第三"}
      ]},
      {type:"knowledge",title:"💡 问生日",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p>📌 <strong>When is your birthday?</strong></p>
          <p>My birthday is on <strong>May 1st</strong>.</p>
          <p>📌 <strong>When is his/her birthday?</strong></p>
          <p>His birthday is on <strong>June 2nd</strong>.</p>
          <p>💡 <strong>注意：</strong>日期前用 <strong>on</strong>！月份前用 <strong>in</strong>！</p>
          <p>on May 1st ✓ · in May ✓</p>
        </div>
      `},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"跟读月份和序数词（每个3遍）",tag:"audio"},
        {text:"抄写12个月份单词",tag:"write"},
        {text:"用When问家人生日并记录",tag:"practice"},
        {text:"练习/θ/和/ð/音各10遍",tag:"audio"}
      ]}
    ]}
  }
})
""")
print(f"Day 22: {len(blocks[-1])} chars")

# Day 23
blocks.append(r"""
COURSE_DATA.push({
  day:23,date:"7月24日",weekday:"周五",difficulty:"中等",focus:"植树的牧羊人赏析·直线射线线段·Unit 8 Section B",
  subjects:{
    chinese:{title:"第12课《植树的牧羊人》赏析",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"✍️",label:"深入分析人物形象",desc:"牧羊人的精神品质"},
        {icon:"💡",label:"学习象征手法",desc:"种树象征什么？"}
      ]},
      {type:"knowledge",title:"💡 人物形象分析",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>牧羊人的品质：</strong></p>
          <p>🌲 <strong>坚持不懈：</strong>30多年每天种树，从不间断</p>
          <p>🌲 <strong>无私奉献：</strong>不求回报，只是为了改善环境</p>
          <p>🌲 <strong>热爱自然：</strong>每一棵树都精心照料</p>
          <p>🌲 <strong>内心平静：</strong>独居荒原却从不抱怨</p>
          <p>🌲 <strong>充满希望：</strong>相信荒原能变成绿洲</p>
        </div>
        <p style="margin-top:6px;">💡 <strong>种树的象征意义：</strong>种下的是树，更是<strong>希望</strong>和<strong>信念</strong>。每一棵树都代表着对未来的一份坚持。</p>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 牧羊人最突出的品质是？",options:["A. 聪明","B. 有钱","C. 坚持不懈","D. 强壮"],answer:2},
        {q:"2. 文中'种树'象征什么？",options:["A. 赚钱","B. 希望和坚持","C. 打发时间","D. 锻炼身体"],answer:1},
        {q:"3. 作者写这篇文章想告诉我们什么？",options:["A. 种树很难","B. 坚持做一件事可以改变世界","C. 牧羊人的生活很苦","D. 荒地种不了树"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"复习课文笔记",tag:"read"},
        {text:"写一段100字的人物分析",tag:"write"},
        {text:"思考：你身边有像牧羊人一样的人吗？",tag:"practice"}
      ]}
    ]},
    math:{title:"第四章·4.2 直线、射线、线段",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📏",label:"区分直线、射线、线段",desc:"有无端点、能否度量"},
        {icon:"✏️",label:"掌握线段的中点",desc:"中点的性质"},
        {icon:"📐",label:"会比较线段长短",desc:"叠合法和度量法"}
      ]},
      {type:"knowledge",title:"📐 三种线的区别",body:`
        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
          <tr style="background:#E8F0FE;"><th style="padding:6px;border:1px solid #ddd;">名称</th><th style="padding:6px;border:1px solid #ddd;">端点</th><th style="padding:6px;border:1px solid #ddd;">能否度量</th><th style="padding:6px;border:1px solid #ddd;">画法</th></tr>
          <tr><td style="padding:6px;border:1px solid #ddd;">直线</td><td style="padding:6px;border:1px solid #ddd;">0个</td><td style="padding:6px;border:1px solid #ddd;">不能（无限长）</td><td style="padding:6px;border:1px solid #ddd;">AB 或 直线AB</td></tr>
          <tr><td style="padding:6px;border:1px solid #ddd;">射线</td><td style="padding:6px;border:1px solid #ddd;">1个</td><td style="padding:6px;border:1px solid #ddd;">不能（一端无限）</td><td style="padding:6px;border:1px solid #ddd;">射线AB（A为端点）</td></tr>
          <tr><td style="padding:6px;border:1px solid #ddd;">线段</td><td style="padding:6px;border:1px solid #ddd;">2个</td><td style="padding:6px;border:1px solid #ddd;">能！</td><td style="padding:6px;border:1px solid #ddd;">线段AB</td></tr>
        </table>
        <p style="margin-top:6px;">💡 <strong>最简公理：</strong>两点之间，<strong>线段最短</strong>！</p>
      `},
      {type:"knowledge",title:"📝 中点与计算",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>中点：</strong>把线段分成两段相等的点</p>
          <p>如果C是AB的中点，则：AC = CB = AB/2</p>
          <p style="margin-top:6px;"><strong>例题：</strong>AB=10cm，C是AB的中点，D是AC的中点。求AD。</p>
          <p>AC = 10/2 = 5cm</p>
          <p>AD = 5/2 = 2.5cm ✅</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 有几个端点的线能度量长度？",options:["A. 0个","B. 1个","C. 2个","D. 3个"],answer:2},
        {q:"2. 两点之间什么最短？",options:["A. 直线","B. 射线","C. 线段","D. 曲线"],answer:2},
        {q:"3. AB=8cm，C是AB中点，AC=？",options:["A. 2cm","B. 4cm","C. 6cm","D. 8cm"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"画直线、射线、线段各2条",tag:"write"},
        {text:"牢记'两点间线段最短'",tag:"recite"},
        {text:"完成中点计算练习题",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 8 When is your birthday? Section B",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📅",label:"掌握日期表达法",desc:"月份+序数词"},
        {icon:"🎈",label:"学会邀请和回复",desc:"Let's... / That sounds good."}
      ]},
      {type:"vocabulary",title:"📝 更多日期词汇",words:[
        {word:"party",phonetic:"/ˈpɑːti/",meaning:"派对"},
        {word:"festival",phonetic:"/ˈfestɪvl/",meaning:"节日"},
        {word:"trip",phonetic:"/trɪp/",meaning:"旅行"},
        {word:"test",phonetic:"/test/",meaning:"考试"},
        {word:"school trip",phonetic:"/skuːl trɪp/",meaning:"学校旅行"}
      ]},
      {type:"knowledge",title:"💡 -ing 延伸规则",body:`
        <p><strong>-ing 的规律：</strong>很多动词加-ing变成"做某事"的概念</p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p>📌 动词 + ing = 正在做 / 做某事</p>
          <p>swim → swimming · run → running · play → playing</p>
          <p><strong>记忆延伸：</strong>看到-ing就想到"正在"或"做某事"</p>
          <p>多学一个词就能延伸出更多：</p>
          <p><strong>swim</strong>（游泳）→ <strong>swimming</strong>（游泳运动）→ <strong>swimmer</strong>（游泳者）</p>
          <p><strong>teach</strong>（教）→ <strong>teaching</strong>（教学）→ <strong>teacher</strong>（老师）</p>
        </div>
        <p>💡 <strong>这就是英语的构词法！</strong>学会一个词根就能延伸出多个单词</p>
      `},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"跟读序数词（1-31）",tag:"audio"},
        {text:"写出家人的生日日期",tag:"write"},
        {text:"用Let's造邀请句子",tag:"practice"},
        {text:"找出5个-ing延伸的单词",tag:"practice"}
      ]}
    ]}
  }
})
""")
print(f"Day 23: {len(blocks[-1])} chars")

# Insert days 22-23
new_content = content[:insert_point] + "\n".join(blocks) + content[insert_point:]
backup = path + ".bak4"
os.rename(path, backup)
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)
print(f"Written {len(new_content)} bytes. Days 22-23 added.")
