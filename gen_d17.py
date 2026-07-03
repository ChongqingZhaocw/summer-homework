import sys, re, os
sys.stdout.reconfigure(encoding="utf-8")

path = r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html"
with open(path, "r", encoding="utf-8-sig") as f:
    content = f.read()

insert_point = 137996

# Generate days 17-30
new_days = []

# Day 17
d17 = """
COURSE_DATA.push({
  day:17,date:"7月18日",weekday:"周六",difficulty:"中等",focus:"《再塑生命的人》·解一元一次方程(一)·Unit 5 Section B",
  subjects:{
    chinese:{title:"第8课《再塑生命的人》·海伦·凯勒",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"📖",label:"默读课文，把握人物形象",desc:"找出莎莉文老师到来前后海伦的变化"},
        {icon:"💡",label:"理解'再塑生命'的含义",desc:"为什么说莎莉文老师'再塑'了海伦的生命"}
      ]},
      {type:"knowledge",title:"👤 作者与背景",body:`
        <p><strong>海伦·凯勒</strong>（1880-1968）：美国著名作家、教育家和社会活动家。</p>
        <p>她19个月大时因病失去视力和听力，7岁时安妮·莎莉文老师来到她身边，用手触摸教她认识世界。</p>
        <p><strong>什么叫"再塑生命"？</strong>海伦原本生活在无声黑暗中，莎莉文老师帮她打开了认识世界的大门——重新给了她一次生命。</p>
      `},
      {type:"vocabulary",title:"📝 重点字词",words:[
        {word:"感慨",pinyin:"gǎn kǎi",meaning:"有所感触而慨叹"},
        {word:"搓捻",pinyin:"cuō niǎn",meaning:"揉搓"},
        {word:"恍然大悟",pinyin:"huǎng rán dà wù",meaning:"形容忽然醒悟"},
        {word:"花团锦簇",pinyin:"huā tuán jǐn cù",meaning:"形容色彩缤纷、绚丽"}
      ]},
      {type:"knowledge",title:"📖 课文结构",body:`
        <p>本文以<strong>时间顺序</strong>展开：</p>
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <div>① <strong>莎莉文老师到来之前</strong>（1-3段）：海伦在黑暗中的焦虑</div>
          <div style="margin:6px 0;">↓</div>
          <div>② <strong>莎莉文老师到来</strong>（4-8段）：教海伦认识具体事物</div>
          <div style="margin:6px 0;">↓</div>
          <div>③ <strong>生命觉醒</strong>（9-13段）：理解"水"的含义后对世界充满好奇</div>
        </div>
        <p><strong>必考：</strong>"水"的感悟是全文转折点</p>
      `},
      {type:"knowledge",title:"💡 对比手法",body:`
        <p>最大写作特色——<strong>对比</strong>：</p>
        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
          <tr style="background:#E8F0FE;"><th style="padding:4px;border:1px solid #ddd;">对比点</th><th style="padding:4px;border:1px solid #ddd;">之前</th><th style="padding:4px;border:1px solid #ddd;">之后</th></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">对世界的感受</td><td style="padding:4px;border:1px solid #ddd;">黑暗、寂静</td><td style="padding:4px;border:1px solid #ddd;">光明、希望</td></tr>
          <tr><td style="padding:4px;border:1px solid #ddd;">心理状态</td><td style="padding:4px;border:1px solid #ddd;">焦虑、愤怒</td><td style="padding:4px;border:1px solid #ddd;">平静、喜悦</td></tr>
        </table>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. '再塑生命'的含义是？",options:["A. 重新塑造一个生命","B. 帮海伦从黑暗走向光明","C. 教海伦说话","D. 换了个名字"],answer:1},
        {q:"2. 文中转折点是？",options:["A. 老师送娃娃","B. 学会拼写","C. 理解'水'的含义","D. 学会说话"],answer:2},
        {q:"3. 本文主要手法是？",options:["A. 比喻","B. 拟人","C. 对比","D. 排比"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"默读课文1遍，找前后变化",tag:"read"},
        {text:"抄写重点字词（每个2遍）",tag:"write"},
        {text:"回答课后思考题",tag:"practice"},
        {text:"背诵最感动句子并录音",tag:"audio"}
      ]}
    ]},
    math:{title:"第三章·3.2 解一元一次方程(一)—合并同类项与移项",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🔢",label:"理解合并同类项",desc:"将同类项合并简化方程"},
        {icon:"🔄",label:"掌握移项法则",desc:"移项要变号！+变-，-变+"},
        {icon:"✅",label:"会用两步法解方程",desc:"移项→合并→系数化1"}
      ]},
      {type:"knowledge",title:"📐 为什么要学方程？",body:`
        <p>方程是解决"未知数"问题的工具。想象天平⚖️，左右平衡时——方程就是天平的数学模型。</p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p><strong>合并同类项：</strong>把同类项合并，就像整理书包📚</p>
          <p style="font-size:1.1rem;">2x + 3x = 5 → <span style="color:#D94A4A;">5x = 5</span></p>
          <p style="margin-top:6px;"><strong>移项法则：</strong>从一边移到另一边——<span style="color:#D94A4A;">过河要变号！</span></p>
          <p style="font-size:1.1rem;">2x + 3 = 7 → 2x = 7 - 3 → <span style="color:#D94A4A;">2x = 4</span></p>
        </div>
      `},
      {type:"knowledge",title:"📝 解题三步",body:`
        <div style="background:#F0FFF4;padding:10px;border-radius:8px;">
          <p><strong>① 移项：</strong>含x的项移到左边，常数移到右边（变号！）</p>
          <p><strong>② 合并同类项：</strong>左边合并系数，右边合并常数</p>
          <p><strong>③ 系数化1：</strong>两边同时除以x的系数</p>
        </div>
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;margin-top:6px;">
          <p><strong>例题1：</strong>3x + 5 = 14</p>
          <p>移项 → 3x = 14 - 5 → 3x = 9 → x = 3 ✅</p>
        </div>
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;margin-top:4px;">
          <p><strong>例题2：</strong>5x - 8 = 2x + 7</p>
          <p>移项 → 5x - 2x = 7 + 8 → 3x = 15 → x = 5 ✅</p>
          <p style="color:#D94A4A;">⚠️ 2x右移左变-2x，-8左移右变+8</p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. 解方程：2x+7=15",options:["A. 3","B. 4","C. 5","D. 6"],answer:1},
        {q:"2. 解方程：3x-5=x+3",options:["A. 2","B. 3","C. 4","D. 5"],answer:2},
        {q:"3. 移项时+3变成什么？",options:["A. +3","B. -3","C. ×3","D. ÷3"],answer:1},
        {q:"4. 解方程：4x+2=2x+10",options:["A. 2","B. 3","C. 4","D. 5"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"熟记'移项要变号'",tag:"recite"},
        {text:"完成练习题（至少5道）",tag:"practice"},
        {text:"自己编一道方程题并解答",tag:"practice"}
      ]}
    ]},
    english:{title:"Unit 5 Do you have a soccer ball? Section B",
    sections:[
      {type:"objectives",title:"🎯 今天要学什么？",items:[
        {icon:"🏀",label:"掌握运动类词汇",desc:"soccer, basketball, volleyball"},
        {icon:"✍️",label:"学会There be句型",desc:"描述某处有某物"},
        {icon:"🔊",label:"音标：/əʊ/ /aɪ/ /eə/",desc:"双元音发音技巧"}
      ]},
      {type:"knowledge",title:"🔊 音标小课堂·双元音",body:`
        <p><strong>双元音</strong>就是两个元音快速连读，像中文"爱"(ài)从a滑到i。</p>
        <div style="background:#FFF7E6;padding:10px;border-radius:8px;">
          <p><strong>/əʊ/</strong> ≈ "欧" — go, no, home, phone</p>
          <p><strong>/aɪ/</strong> ≈ "爱" — like, time, bike, nice</p>
          <p><strong>/eə/</strong> ≈ "诶啊"连读 — where, there, hair, care</p>
        </div>
        <p>💡 关键：嘴巴从第一位置<strong>滑动</strong>到第二位置！</p>
      `},
      {type:"vocabulary",title:"📝 核心词汇",words:[
        {word:"soccer",phonetic:"/ˈsɒkə/",meaning:"足球"},
        {word:"basketball",phonetic:"/ˈbɑːskɪtbɔːl/",meaning:"篮球"},
        {word:"volleyball",phonetic:"/ˈvɒlibɔːl/",meaning:"排球"},
        {word:"interesting",phonetic:"/ˈɪntrəstɪŋ/",meaning:"有趣的"},
        {word:"difficult",phonetic:"/ˈdɪfɪkəlt/",meaning:"困难的"}
      ]},
      {type:"knowledge",title:"💡 There be 句型",body:`
        <p><strong>There be</strong> = "某处有某物"</p>
        <div style="background:#E8F0FE;padding:10px;border-radius:8px;">
          <p>单数 → There <strong>is</strong> a book on the desk.</p>
          <p>复数 → There <strong>are</strong> two books on the desk.</p>
          <p style="margin-top:4px;color:#D94A4A;">⚠️ There be VS have：</p>
          <p>There be = 存在（某处有）<br>have = 拥有（某人有）</p>
          <p><em>There is a ball under the desk.（存在）</em><br><em>I have a ball.（拥有）</em></p>
        </div>
      `},
      {type:"practice",title:"📝 练习",questions:[
        {q:"1. ___ a basketball under the chair.",options:["A. There is","B. There are","C. It is","D. They are"],answer:0},
        {q:"2. /\u00f0eə/ 对应单词是？",options:["A. here","B. where","C. there","D. care"],answer:2},
        {q:"3. 'play soccer'中文是？",options:["A. 打篮球","B. 游泳","C. 踢足球","D. 打排球"],answer:2}
      ]},
      {type:"task",title:"📋 今日任务",tasks:[
        {text:"跟读双元音各5遍",tag:"audio"},
        {text:"抄写生词（每个3遍）",tag:"write"},
        {text:"用There be造3个句子",tag:"practice"},
        {text:"主动回忆法：遮住中文说英文",tag:"recite"}
      ]}
    ]}
  }
})
"""

new_days.append(d17)
print(f"Day 17: {len(d17)} chars")

# Write output
new_content = content[:insert_point] + "\n".join(new_days) + content[insert_point:]
backup = path + ".bak"
os.rename(path, backup)
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)
print(f"Written {len(new_content)} bytes (was {len(content)})")
print("BACKUP saved at:", backup)
