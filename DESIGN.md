---
version: alpha
name: "暑期预习计划 · 小升初学习系统"
description: "重庆市两江巴蜀中学七年级暑期预习的iPad交互学习系统，面向12-13岁学生，以自学为主、评估为辅"

colors:
  # --- 品牌主色 -- 代表"成长与知识"
  primary: "#4A90D9"              # 知识蓝
  on-primary: "#FFFFFF"
  primary-container: "#E8F0FE"
  on-primary-container: "#1A365D"

  # --- 三科主题色 ---
  subject-chinese: "#D94A4A"      # 语文 - 人文红
  subject-math: "#2B6CB0"         # 数学 - 理性蓝  
  subject-english: "#38A169"      # 英语 - 活力绿

  # --- 辅助色 ---
  secondary: "#718096"
  on-secondary: "#FFFFFF"
  secondary-container: "#EDF2F7"

  # --- 强调色（学习激励）---
  success: "#52C41A"              # 掌握/正确
  warning: "#FAAD14"              # 需复习
  error: "#FF4D4F"                # 错误/薄弱

  # --- 中性色 ---
  neutral: "#F5F7FA"
  surface: "#FFFFFF"
  surface-variant: "#FAFAFA"
  outline: "#E2E8F0"

  # --- 文字色 ---  
  on-surface: "#2D3748"
  on-surface-variant: "#718096"

typography:
  display-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.3

  headline-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4

  headline-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4

  body-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7

  body-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6

  body-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5

  label-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4

  label-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4

  # iPad特殊字体
  ipad:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif"
    bodySize: 17px
    touchTarget: 44px

rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 16px
  xl: 20px
  full: 9999px

spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 48px
  container-padding: 16px
  card-gap: 12px
  touch-target: 44px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    minHeight: 44px

  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    minHeight: 44px
    borderColor: "{colors.outline}"

  card-default:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    shadow: "0 1px 3px rgba(0,0,0,0.06)"

  speech-button:
    backgroundColor: "{colors.subject-english}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    minHeight: 48px

  badge-subject:
    rounded: "{rounded.full}"
    padding: "2px 10px"
    typography: "{typography.label-sm}"

  fill-canvas:
    minHeight: 80px
    rounded: "{rounded.md}"
    borderColor: "{colors.outline}"
    touchAction: "none"

---

## Brand & Style

**小升初暑期预习计划** 是一个面向12-13岁初中新生的自学预习系统。
设计风格定位为「**亲切的学习伙伴**」——专业但不严肃，活泼但不花哨。

设计语言核心：
- **大圆角 + 柔和阴影** → 降低学生对学习的心理压力
- **科目色彩区分** → 红(语文)/蓝(数学)/绿(英语) 一目了然
- **大触控目标(44px+) ** → 完全适配iPad手指和Apple Pencil操作
- **即时正面反馈** → 每步操作都有鼓励性反馈，建立学习信心

## Colors

色彩策略围绕 **三科主题色 + 功能色** 展开：

- **primary（知识蓝）**：整体界面主色，导航/按钮/进度指示
- **subject-chinese（语文红）**：语文相关的所有元素
- **subject-math（理性蓝）**：数学相关的所有元素
- **subject-english（活力绿）**：英语相关的所有元素
- **success/warning/error**：掌握度三色信号灯

> 每屏最多使用1个主题色+1个功能色，避免视觉混乱

## Typography

使用系统字体 PingFang SC（中文）+ SF Pro（英文），
iPad原生字体渲染最佳选择。

- **正文 17px**：iPad上最舒适的阅读字号
- **触控目标 44px**：Apple HIG 推荐的最小触控区域
- **标题用字重区分**：700标题 / 600副标题 / 400正文

## Layout & Spacing

基于 **4px 网格**，适配iPad屏幕：

- **竖屏iPad**：内容区宽约 680px，水平居中
- **横屏iPad**：内容区最大 800px
- **所有可点击元素最小 44×44px**
- **底部导航固定**，确保始终可访问

## Components

### 填空答题卡
白色卡片 + 2px 边框 + 10px 圆角。
输入框focus时边框变主题色 + 外发光。
提交答案后边框变绿(正确)/红(错误)。

### 语音朗读面板
绿色主题 + 大录音按钮(48px) + 结果分析进度条。
使用Web Speech API进行语音识别和评估。

### 手写板
虚线边框 + 触控笔优化 + 一键清除。
iPad Pencil书写时自动隐藏提示文字。

### 三阶段任务按钮
分别对应温习(蓝)/学习(红)/练习(绿)。
完成态渐变填充，三阶段全部完成才计为任务完成。

## Do\'s and Don\'ts

- ✅ Do 所有交互元素最小44px触控目标
- ✅ Do 提交答案后立刻给出反馈（正确/错误+解释）
- ✅ Do 使用鼓励性语言，错误时给出学习建议而非批评
- ❌ Don\'t 使用悬停效果（iPad无鼠标悬停）
- ✅ Do 每步操作都有视觉反馈（颜色变化/动画）
- ❌ Don\'t 在考核模式中使用红色作为主色（红色代表错误，引起焦虑）
- ✅ Do 自动保存所有学习记录，一次登录终生使用
