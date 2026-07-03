import sys, os
sys.stdout.reconfigure(encoding="utf-8")

path = r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html"
with open(path, "r", encoding="utf-8-sig") as f:
    content = f.read()

insert_point = 161053  # after Day 19 closing

blocks = []

# Day 20
blocks.append(r"""
COURSE_DATA.push({
  day:20,date:"7月21日",weekday:"周二",difficulty:"中等",focus:"第三单元复习·方程应用(一)·Unit 7 Section A",
  subjects:{
    chinese:{title:"第三单元综合复习",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📖",label:"复习《从百草园》《再塑生命》《论语》",desc:"梳理三篇课文的重点"},
        {icon:"✍️",label:"掌握文言文实词和虚词",desc:"之、其、而等常见虚词用法"}
      ]},
      {type:"knowledge",title:"📖 单元知识导图",body:`
        <div style="background:#F0FFF4;padding:12px;border-radius:8px;">
          <p style="font-weight:bold;text-align:center;">🧠 第三单元知识结构</p>
          <p>├─ 《从百草园到三味书屋》 — 对比童年与求学</p>
          <p>│  ├ 叙事手法·景物描写·过渡段</p>
          <p>├─ 《再塑生命的人》 — 感恩老师</p>
          <p>│  ├ 对比手法·心理描写·"水"的转折</p>
          <p>├─ 《论语》十二章 — 学习方法和态度</p>
          <p>│  ├ 通假字·一词多义·名句默写</p>
        </div>
      `},
      {type:"knowledge",title:"📝 文言文虚词归纳",body:`
        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
          <tr style="background:#E8F0FE;"><th style="padding:4px;border:1px solid #ddd;">虚词</th><th style="padding:4px;border:1px solid #ddd;">用法</th><th style="padding:4px;border:1px solid #ddd;">例句</th></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">之</td><td style="padding:4px;border:1px solid #ddd;">代词/助词"的"</td><td style="padding:4px;border:1px solid #ddd;">学而时习之（代词）</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">其</td><td style="padding:4px;border:1px solid #ddd;">代词"他的/它的"</td><td style="padding:4px;border:1px solid #ddd;">择其善者而从之</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">而</td><td style="padding:4px;border:1px solid #ddd;">表转折/顺承</td><td style="padding:4px;border:1px solid #ddd;">学而不思则罔（转折）</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">于</td><td style="padding:4px;border:1px solid #ddd;">介词"在/从"</td><td style="padding:4px;border:1px solid #ddd;">吾十有五而志于学</td></tr>
        </table>
      `},
      {type:"practice",title:"📝 综合练习",questions:[
        {q:"1. 《从百草园》中'不必说…也不必说…单是…'是什么句式？",options:["A. 排比","B. 递进","C. 对比","D. 比喻"],answer:1},
        {q:"2. '择其善者而从之'中'其'的意思是？",options:["A. 其中","B. 他的","C. 大概","D. 难道"],answer:1},
        {q:"3. 《再塑生命》中海伦的转折点是？",options:["A. 老师送娃娃","B. 理解'水'","C. 学说话","D. 学写字"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"复习三篇课文笔记",tag:"read"},
        {text:"默写《论语》名句（重点10句）",tag:"recite"},
        {text:"完成单元练习题",tag:"practice"}
      ]}
    ]},
    math:{title:"第三章·3.4 实际问题与一元一次方程(一)",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📝",label:"学会列方程解应用题",desc:"三步法：审题→列方程→求解"},
        {icon:"🔢",label:"掌握和差倍分问题",desc:"找出等量关系是关键"}
      ]},
      {type:"knowledge",title:"📐 列方程解应用题三步法",body:`
        <div style="background:#FFF7E6;padding:12px;border-radius:8px;">
          <p><strong>① 审题：</strong>找出已知量和未知量，明确问题要求什么</p>
          <p><strong>② 找等量关系：</strong>这是最关键的一步！根据题意找出"相等"的关系</p>
          <p><strong>③ 列方程求解：</strong>设未知数→根据等量关系列方程→解方程→写答案</p>
        </div>
        <p>💡 <strong>等量关系常见类型：</strong></p>
        <p>• 总量 = 各部分之和</p>
        <p>• 大数 - 小数 = 差</p>
        <p>• 速度 × 时间 = 路程</p>
      `},
      {type:"knowledge",title:"📝 例题讲解",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>例题1：</strong>小明有x本书，小红比小明多5本，两人共有25本。问小明有多少本？</p>
          <p>等量关系：小明 + 小红 = 25</p>
          <p>列方程：x + (x+5) = 25</p>
          <p>解：2x + 5 = 25 → 2x = 20 → x = 10</p>
          <p style="color:#52C41A;">答：小明有10本 ✅</p>
        </div>
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>例题2：</strong>一盒彩笔的价格是一支铅笔的4倍，买一盒彩笔和3支铅笔共付21元。求铅笔单价？</p>
          <p>设铅笔x元，则彩笔4x元</p>
          <p>等量关系：彩笔 + 3支铅笔 = 21</p>
          <p>列方程：4x + 3x = 21 → 7x = 21 → x = 3</p>
          <p style="color:#52C41A;">答：铅笔3元/支 ✅</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 设x为未知数，'甲比乙多8'用方程表示？",options:["A. 甲+乙=8","B. 甲-乙=8","C. 甲=8乙","D. 甲÷乙=8"],answer:1},
        {q:"2. 练习本每本2元，笔记本每本5元，买了x本练习本和3本笔记本共花了19元。方程是？",options:["A. 2x+15=19","B. 2x+5=19","C. 5x+6=19","D. 2x+3=19"],answer:0},
        {q:"3. 弟弟x岁，哥哥比弟弟大4岁，两人年龄和是20。x=？",options:["A. 6","B. 7","C. 8","D. 9"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"理解应用题三步法",tag:"read"},
        {text:"完成课本练习题（至少4道）",tag:"practice"},
        {text:"画思维导图总结单元知识点",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 7 How much are these socks? Section A",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"💰",label:"掌握购物相关词汇",desc:"dollar, price, how much"},
        {icon:"🛒",label:"学会询问价格",desc:"How much is/are...?"},
        {icon:"🔊",label:"音标：/uː/ /ʊ/",desc:"长/短元音对比"}
      ]},
      {type:"knowledge",title:"🔊 音标小课堂·/uː/和/ʊ/",body:`
        <p><strong>/uː/</strong> 长音 — 类似中文"乌"但更长</p>
        <p style="font-size:1.1rem;">shoe /ʃuː/ · blue /bluː/ · school /skuːl/ · ruler /ˈruːlə/</p>
        <p><strong>/ʊ/</strong> 短音 — 类似中文"乌"但短促</p>
        <p style="font-size:1.1rem;">book /bʊk/ · look /lʊk/ · good /ɡʊd/ · foot /fʊt/</p>
        <p>💡 对比：<strong>shoe</strong> /ʃuː/ VS <strong>should</strong> /ʃʊd/</p>
      `},
      {type:"vocabulary",title:"📝 核心词汇",words:[
        {word:"sock",phonetic:"/sɒk/",meaning:"袜子"},
        {word:"shirt",phonetic:"/ʃɜːt/",meaning:"衬衫"},
        {word:"shorts",phonetic:"/ʃɔːts/",meaning:"短裤"},
        {word:"sweater",phonetic:"/ˈswetə/",meaning:"毛衣"},
        {word:"trousers",phonetic:"/ˈtraʊzəz/",meaning:"裤子"},
        {word:"dollar",phonetic:"/ˈdɒlə/",meaning:"美元"}
      ]},
      {type:"knowledge",title:"💡 How much 问价格",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>How much is + 单数名词？</strong></p>
          <p>How much <strong>is</strong> this sweater? — It's 20 dollars.</p>
          <p style="margin-top:6px;"><strong>How much are + 复数名词？</strong></p>
          <p>How much <strong>are</strong> these socks? — They're 5 dollars.</p>
          <p style="margin-top:6px;color:#D94A4A;">⚠️ 单数用is，复数用are！</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. How much ___ this T-shirt?",options:["A. is","B. are","C. am","D. be"],answer:0},
        {q:"2. How much ___ the shoes?",options:["A. is","B. are","C. am","D. be"],answer:1},
        {q:"3. These shorts ___ 15 dollars.",options:["A. is","B. are","C. am","D. be"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"跟读/uː/和/ʊ/各10遍",tag:"audio"},
        {text:"抄写服装类词汇（每个3遍）",tag:"write"},
        {text:"用How much造3组问答句",tag:"practice"},
        {text:"复习Day 19论语后6章背诵",tag:"recite"}
      ]}
    ]}
  }
})
""")
print(f"Day 20: {len(blocks[-1])} chars")

# Day 21
blocks.append(r"""
COURSE_DATA.push({
  day:21,date:"7月22日",weekday:"周三",difficulty:"中等偏难",focus:"《纪念白求恩》·方程应用(二)·Unit 7 Section B",
  subjects:{
    chinese:{title:"第11课《纪念白求恩》·毛泽东",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📖",label:"朗读课文，理解白求恩精神",desc:"找出课文中对白求恩的评价"},
        {icon:"💡",label:"学习议论文的论证方法",desc:"对比论证的作用"}
      ]},
      {type:"knowledge",title:"👤 白求恩与作者背景",body:`
        <p><strong>诺尔曼·白求恩</strong>（1890-1939）：加拿大共产党员，著名胸外科医生。</p>
        <p>1938年，他不远万里来到中国抗日战争前线，组建战地医疗队，在救治伤员时因感染败血症牺牲。</p>
        <p><strong>毛泽东</strong>在1939年12月21日写了这篇文章来纪念他。</p>
        <p>💡 <strong>为什么纪念他？</strong>因为白求恩是"一个高尚的人，一个纯粹的人，一个有道德的人，一个脱离了低级趣味的人，一个有益于人民的人"。</p>
      `},
      {type:"vocabulary",title:"📝 重点字词",words:[
        {word:"派遣",pinyin:"pài qiǎn",meaning:"派人到某处工作"},
        {word:"殉职",pinyin:"xùn zhí",meaning:"为公务而牺牲"},
        {word:"狭隘",pinyin:"xiá ài",meaning:"心胸狭窄"},
        {word:"热忱",pinyin:"rè chén",meaning:"热情"},
        {word:"鄙薄",pinyin:"bǐ bó",meaning:"轻视、看不起"},
        {word:"精益求精",pinyin:"jīng yì qiú jīng",meaning:"好了还求更好"}
      ]},
      {type:"knowledge",title:"📖 课文结构与论证方法",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>全文结构：</strong></p>
          <p>① 介绍白求恩（第1段）— 不远万里来中国</p>
          <p>② 赞扬白求恩精神（第2-3段）— 国际主义、毫不利己</p>
          <p>③ 号召学习（第4段）— 做五种人</p>
        </div>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>论证方法：对比论证</strong></p>
          <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
            <tr style="background:#E8F0FE;"><th style="padding:4px;border:1px solid #ddd;">对比</th><th style="padding:4px;border:1px solid #ddd;">白求恩</th><th style="padding:4px;border:1px solid #ddd;">有些人</th></tr>
            <tr><td style="padding:4px;border:1px solid #ddd;">对工作</td><td style="padding:4px;border:1px solid #ddd;">极端负责任</td><td style="padding:4px;border:1px solid #ddd;">不负责任</td></tr>
            <tr><td style="padding:4px;border:1px solid #ddd;">对同志</td><td style="padding:4px;border:1px solid #ddd;">极端热忱</td><td style="padding:4px;border:1px solid #ddd;">冷冷清清</td></tr>
          </table>
          <p>通过对比，突出了白求恩精神的崇高！</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 白求恩是哪国人？",options:["A. 美国人","B. 英国人","C. 加拿大人","D. 澳大利亚人"],answer:2},
        {q:"2. 文中主要用了什么论证方法？",options:["A. 比喻论证","B. 对比论证","C. 举例论证","D. 引用论证"],answer:1},
        {q:"3. '精益求精'的意思是？",options:["A. 已经很好了","B. 好了还要更好","C. 只求精确","D. 做到最好"],answer:1}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"朗读课文1遍",tag:"read"},
        {text:"抄写重点字词（每个2遍）",tag:"write"},
        {text:"找出文中的对比句",tag:"practice"},
        {text:"背诵最后一段（五种人）",tag:"recite"}
      ]}
    ]},
    math:{title:"第三章·3.4 实际问题与方程(二)—行程问题",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🚗",label:"掌握行程问题",desc:"路程=速度×时间"},
        {icon:"🤝",label:"相遇和追及问题",desc:"画线段图分析"}
      ]},
      {type:"knowledge",title:"📐 行程问题公式",body:`
        <p><strong>核心公式：路程 = 速度 × 时间</strong></p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p style="font-weight:bold;">相遇问题：</p>
          <p>甲走的路程 + 乙走的路程 = 总路程</p>
          <p>（甲速+乙速）× 时间 = 总路程</p>
          <p style="margin-top:6px;font-weight:bold;">追及问题：</p>
          <p>快者路程 - 慢者路程 = 初始差距</p>
          <p>（快速-慢速）× 时间 = 初始差距</p>
        </div>
      `},
      {type:"knowledge",title:"📝 例题",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>例题：</strong>甲乙从相距300km的两地同时出发相向而行，甲速度60km/h，乙速度40km/h，几小时后相遇？</p>
          <p>设x小时后相遇</p>
          <p>60x + 40x = 300</p>
          <p>100x = 300</p>
          <p>x = 3</p>
          <p style="color:#52C41A;">答：3小时后相遇 ✅</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 小明速度5km/h，小华速度4km/h，相向而行，相距18km。几小时相遇？",options:["A. 1","B. 2","C. 3","D. 4"],answer:1},
        {q:"2. 追及问题中快车追慢车，等量关系是？",options:["A. 快-慢=距离","B. 快+慢=距离","C. 快×慢=距离","D. 快÷慢=距离"],answer:0}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"记住行程问题公式",tag:"recite"},
        {text:"做相遇和追及各2道题",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 7 How much are these socks? Section B",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🛍️",label:"购物对话完整版",desc:"Can I help you? / I'll take it."},
        {icon:"✍️",label:"形容词顺序",desc:"颜色+大小+名词"},
        {icon:"🔊",label:"音标：/ɔɪ/ /aʊ/",desc:"双元音"}
      ]},
      {type:"knowledge",title:"🔊 音标·/ɔɪ/和/aʊ/",body:`
        <p><strong>/ɔɪ/</strong> — 类似中文"奥一"连读</p>
        <p style="font-size:1.1rem;">boy /bɔɪ/ · toy /tɔɪ/ · voice /vɔɪs/</p>
        <p><strong>/aʊ/</strong> — 类似中文"啊呜"连读</p>
        <p style="font-size:1.1rem;">how /haʊ/ · now /naʊ/ · brown /braʊn/</p>
      `},
      {type:"vocabulary",title:"📝 购物用语",words:[
        {word:"price",phonetic:"/praɪs/",meaning:"价格"},
        {word:"buy",phonetic:"/baɪ/",meaning:"买"},
        {word:"sell",phonetic:"/sel/",meaning:"卖"},
        {word:"cheap",phonetic:"/tʃiːp/",meaning:"便宜的"},
        {word:"nice",phonetic:"/naɪs/",meaning:"好看的"}
      ]},
      {type:"knowledge",title:"💡 购物对话",body:`
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p><strong>店员：</strong>Can I help you?</p>
          <p><strong>顾客：</strong>Yes, please. I want a sweater.</p>
          <p><strong>店员：</strong>What color do you want?</p>
          <p><strong>顾客：</strong>Blue.</p>
          <p><strong>店员：</strong>Here you are.</p>
          <p><strong>顾客：</strong>How much is it?</p>
          <p><strong>店员：</strong>It's 20 dollars.</p>
          <p><strong>顾客：</strong>I'll take it. Thank you!</p>
        </div>
      `},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"跟读购物对话（角色扮演）",tag:"audio"},
        {text:"抄写本课单词",tag:"write"},
        {text:"用学到的句子编一段购物对话",tag:"practice"}
      ]}
    ]}
  }
})
""")
print(f"Day 21: {len(blocks[-1])} chars")

# Insert days 20-21
new_content = content[:insert_point] + "\n".join(blocks) + content[insert_point:]
backup = path + ".bak3"
os.rename(path, backup)
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)
print(f"Written {len(new_content)} bytes. Days 20-21 added.")
