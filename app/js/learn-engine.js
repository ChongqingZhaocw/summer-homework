/* ========================================
   交互学习引擎 v4.0
   功能：填空答题·语音识别·手写批改·自动评分
   设计：Google Material Design 风格 · iPad触控优化
   ======================================== */

var LearnEngine = {
  // ==========================================
  // 1. 交互式填空答题系统
  // ==========================================
  
  // 创建填空答题区
  createFillBlank: function(container, questions) {
    if (!container) return;
    var html = "<div class='learn-exercise'>";
    html += "<div class='section-title'><span>✍️</span>互动答题</div>";
    
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      html += "<div class='fill-card' data-qidx='" + i + "' style='background:white;border:2px solid var(--border);border-radius:12px;padding:14px;margin-bottom:10px;transition:all 0.3s;'>";
      html += "<div style='font-size:0.88rem;font-weight:600;margin-bottom:8px;line-height:1.6;'>" + q.question + "</div>";
      
      // 根据不同题型渲染不同的输入方式
      if (q.type === "text" || !q.type) {
        // 文本输入
        html += "<div style='display:flex;gap:8px;align-items:center;'>";
        html += "<input class='fill-input' data-qidx='" + i + "' type='text' placeholder='在此输入答案...' style='flex:1;padding:10px 14px;border:2px solid var(--border);border-radius:8px;font-size:0.9rem;outline:none;-webkit-appearance:none;background:white;' autocomplete='off'>";
        html += "<button class='check-btn' data-qidx='" + i + "' style='padding:10px 18px;border:none;border-radius:8px;background:var(--primary);color:white;font-size:0.82rem;cursor:pointer;font-weight:600;'>检查</button>";
        html += "</div>";
      } else if (q.type === "choice") {
        // 选择题
        html += "<div style='display:flex;flex-direction:column;gap:6px;'>";
        for (var o = 0; o < q.options.length; o++) {
          html += "<div class='choice-opt' data-qidx='" + i + "' data-opt='" + o + "' style='padding:10px 14px;border:2px solid var(--border);border-radius:8px;font-size:0.85rem;cursor:pointer;transition:all 0.2s;'>" + q.options[o] + "</div>";
        }
        html += "</div>";
      } else if (q.type === "write") {
        // 手写区域（iPad用笔写）
        html += "<div class='fill-canvas-wrap' style='border:2px dashed var(--border);border-radius:8px;position:relative;min-height:80px;'>";
        html += "<canvas class='fill-canvas' data-qidx='" + i + "' style='width:100%;height:80px;touch-action:none;'></canvas>";
        html += "<div class='canvas-hint' style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:0.78rem;color:var(--text-light);pointer-events:none;'>✍️ 用手写笔在此书写答案</div>";
        html += "</div>";
        html += "<div style='display:flex;gap:8px;margin-top:6px;'>";
        html += "<button class='clear-canvas-btn' data-qidx='" + i + "' style='padding:6px 12px;border:1px solid var(--border);border-radius:6px;background:white;font-size:0.75rem;cursor:pointer;'>🗑️ 清除</button>";
        html += "<button class='check-btn' data-qidx='" + i + "' style='padding:6px 14px;border:none;border-radius:6px;background:var(--primary);color:white;font-size:0.78rem;cursor:pointer;'>检查</button>";
        html += "</div>";
      }
      
      // 结果反馈区
      html += "<div class='fill-feedback' data-qidx='" + i + "' style='margin-top:8px;min-height:30px;'></div>";
      html += "</div>";
    }
    
    html += "</div>";
    container.insertAdjacentHTML("beforeend", html);
    
    // 绑定事件
    this.bindFillEvents(questions);
  },
  
  // 绑定填空事件
  bindFillEvents: function(questions) {
    var self = this;
    
    // 文本输入检查
    document.querySelectorAll(".check-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var idx = parseInt(this.getAttribute("data-qidx"));
        var q = questions[idx];
        if (!q) return;
        
        var input = document.querySelector(".fill-input[data-qidx='" + idx + "']");
        var feedback = document.querySelector(".fill-feedback[data-qidx='" + idx + "']");
        var card = document.querySelector(".fill-card[data-qidx='" + idx + "']");
        
        if (input) {
          var answer = input.value.trim();
          self.checkTextAnswer(answer, q, feedback, card);
        }
      });
    });
    
    // 选择题点击
    document.querySelectorAll(".choice-opt").forEach(function(opt) {
      opt.addEventListener("click", function() {
        var idx = parseInt(this.getAttribute("data-qidx"));
        var optIdx = parseInt(this.getAttribute("data-opt"));
        var q = questions[idx];
        if (!q) return;
        
        var feedback = document.querySelector(".fill-feedback[data-qidx='" + idx + "']");
        var card = document.querySelector(".fill-card[data-qidx='" + idx + "']");
        
        // 清除其他选中状态
        document.querySelectorAll(".choice-opt[data-qidx='" + idx + "']").forEach(function(o) {
          o.style.borderColor = "var(--border)";
          o.style.background = "white";
        });
        
        this.style.borderColor = "#4A90D9";
        this.style.background = "#E8F0FE";
        
        self.checkChoiceAnswer(optIdx, q, feedback, card, this);
      });
    });
    
    // 手写板清除
    document.querySelectorAll(".clear-canvas-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var idx = parseInt(this.getAttribute("data-qidx"));
        var canvas = document.querySelector(".fill-canvas[data-qidx='" + idx + "']");
        if (canvas) {
          var ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      });
    });
    
    // 手写板初始化
    document.querySelectorAll(".fill-canvas").forEach(function(canvas) {
      self.initFillCanvas(canvas);
    });
    
    // 输入框回车提交
    document.querySelectorAll(".fill-input").forEach(function(input) {
      input.addEventListener("keypress", function(e) {
        if (e.key === "Enter" || e.keyCode === 13) {
          var idx = parseInt(this.getAttribute("data-qidx"));
          var checkBtn = document.querySelector(".check-btn[data-qidx='" + idx + "']");
          if (checkBtn) checkBtn.click();
        }
      });
    });
  },
  
  // 检查文本答案
  checkTextAnswer: function(answer, q, feedback, card) {
    if (!answer) {
      feedback.innerHTML = "<span style='color:var(--warning);font-size:0.8rem;'>💡 请先输入答案再检查</span>";
      return;
    }
    
    var correct = q.answer || "";
    var isCorrect = false;
    
    // 宽松比较：去除空格、标点，忽略大小写
    var cleanAnswer = answer.replace(/[\s，。、！？；：""''（）《》\.,!?;:\'\"()\[\]{}]/g, "").toLowerCase();
    var cleanCorrect = correct.replace(/[\s，。、！？；：""''（）《》\.,!?;:\'\"()\[\]{}]/g, "").toLowerCase();
    
    // 支持多个正确答案
    var correctAnswers = q.answers || [correct];
    for (var i = 0; i < correctAnswers.length; i++) {
      var cleanCA = correctAnswers[i].replace(/[\s，。、！？；：""''（）《》\.,!?;:\'\"()\[\]{}]/g, "").toLowerCase();
      if (cleanAnswer === cleanCA) {
        isCorrect = true;
        break;
      }
    }
    
    // 也支持关键词匹配
    if (!isCorrect && q.keywords) {
      for (var k = 0; k < q.keywords.length; k++) {
        if (cleanAnswer.indexOf(q.keywords[k].replace(/[\s]/g,"").toLowerCase()) > -1) {
          isCorrect = true;
          break;
        }
      }
    }
    
    card.style.borderColor = isCorrect ? "#52C41A" : "#FF4D4F";
    
    if (isCorrect) {
      feedback.innerHTML = "<div style='display:flex;align-items:center;gap:6px;color:#52C41A;font-weight:600;font-size:0.85rem;'><span>✅</span> 正确！" + this.getEncouragement() + "</div>";
    } else {
      feedback.innerHTML = "<div style='display:flex;align-items:center;gap:6px;color:#FF4D4F;font-size:0.85rem;'>" +
        "<span>❌</span> 再想想~ 正确答案是：<span style='font-weight:600;color:var(--success);padding:2px 8px;background:#F6FFED;border-radius:4px;'>" + correct + "</span>" +
        "</div>" +
        "<div style='margin-top:4px;font-size:0.78rem;color:#975A16;background:#FFFBE6;padding:6px 10px;border-radius:6px;'>" +
        this.getErrorTip(q.subject || "") + "</div>";
    }
    
    // 记录答题结果
    this.recordAnswer(q, isCorrect);
  },
  
  // 检查选择题
  checkChoiceAnswer: function(selectedIdx, q, feedback, card, optEl) {
    var isCorrect = selectedIdx === q.answer;
    card.style.borderColor = isCorrect ? "#52C41A" : "#FF4D4F";
    
    if (isCorrect) {
      optEl.style.borderColor = "#52C41A";
      optEl.style.background = "#F6FFED";
      feedback.innerHTML = "<div style='color:#52C41A;font-weight:600;font-size:0.85rem;'>✅ 正确！" + this.getEncouragement() + "</div>";
    } else {
      optEl.style.borderColor = "#FF4D4F";
      optEl.style.background = "#FFF2F0";
      // 显示正确答案
      var correctOpt = document.querySelector(".choice-opt[data-qidx='" + selectedIdx + "'][data-opt='" + q.answer + "']");
      if (correctOpt) {
        correctOpt.style.borderColor = "#52C41A";
        correctOpt.style.background = "#F6FFED";
      }
      feedback.innerHTML = "<div style='color:#FF4D4F;font-size:0.85rem;'>❌ 选错了~ " +
        "<span style='color:var(--success);font-weight:600;'>正确答案是选项 " + (q.answer + 1) + "</span></div>" +
        "<div style='margin-top:4px;font-size:0.78rem;color:#975A16;background:#FFFBE6;padding:6px 10px;border-radius:6px;'>" +
        this.getErrorTip(q.subject || "") + "</div>";
    }
    
    this.recordAnswer(q, isCorrect);
  },
  
  // 记录答案
  recordAnswer: function(q, isCorrect) {
    if (!this.answerLog) this.answerLog = [];
    this.answerLog.push({
      question: q.question,
      correct: isCorrect,
      time: new Date().toISOString()
    });
    try {
      localStorage.setItem("learnAnswerLog", JSON.stringify(this.answerLog));
    } catch(e) {}
  },
  
  // 鼓励语
  getEncouragement: function() {
    var msgs = ["继续加油！", "太棒了！", "你真厉害！", "完美过关！", "好样的！", "学霸就是你！", "越来越棒了！"];
    return msgs[Math.floor(Math.random() * msgs.length)];
  },
  
  // 错误提示
  getErrorTip: function(subject) {
    var tips = {
      chinese: ["语文需要多读多写，把错题记下来多看几遍哦~", "理解文章内容后再答题，效果会更好！"],
      math: ["数学要一步一步算，别跳步！", "检查一下符号，正负号最容易出错~"],
      english: ["英语要靠规律记忆，想想词根和拼读规律！", "大声读出来，语感好了自然就会了~"]
    };
    var subjectTips = tips[subject] || tips["chinese"];
    return subjectTips[Math.floor(Math.random() * subjectTips.length)];
  },
  
  // ==========================================
  // 2. 语音识别朗读系统
  // ==========================================
  
  // 创建朗读识别区
  createSpeechSection: function(container, text, title, lang) {
    if (!container) return;
    lang = lang || "zh-CN";
    
    var html = "<div class='speech-section' style='background:white;border:2px solid #C6F6D5;border-radius:12px;padding:14px;margin:10px 0;'>";
    html += "<div class='section-title' style='margin-bottom:8px;'><span>🎤</span>" + (title || "朗读练习") + "</div>";
    html += "<div class='speech-text' style='font-size:1rem;line-height:1.8;padding:10px;background:#FFFAF0;border-radius:8px;margin-bottom:10px;border-left:4px solid #ED8936;'>" + text + "</div>";
    
    html += "<div style='display:flex;gap:8px;margin-bottom:8px;'>";
    html += "<button class='speech-start-btn' style='flex:1;padding:12px;border:none;border-radius:8px;background:var(--english);color:white;font-size:0.9rem;font-weight:600;cursor:pointer;transition:all 0.3s;'>🎤 点击开始朗读</button>";
    html += "<button class='speech-listen-btn' style='padding:12px 16px;border:1px solid var(--border);border-radius:8px;background:white;font-size:0.85rem;cursor:pointer;'>🔊 听原文</button>";
    html += "</div>";
    
    html += "<div class='speech-status' style='font-size:0.82rem;color:var(--text-light);text-align:center;min-height:24px;'>👆 点击按钮开始朗读</div>";
    html += "<div class='speech-result' style='margin-top:8px;display:none;'></div>";
    html += "</div>";
    
    container.insertAdjacentHTML("beforeend", html);
    
    // 绑定语音事件
    this.bindSpeechEvents(container, text, lang);
  },
  
  // 绑定语音事件
  bindSpeechEvents: function(container, expectedText, lang) {
    var self = this;
    var startBtn = container.querySelector(".speech-start-btn");
    var listenBtn = container.querySelector(".speech-listen-btn");
    var statusDiv = container.querySelector(".speech-status");
    var resultDiv = container.querySelector(".speech-result");
    
    var isRecording = false;
    var recognition = null;
    
    // 开始/停止录音
    startBtn.addEventListener("click", function() {
      if (isRecording) {
        // 停止
        if (recognition) {
          recognition.stop();
        }
        isRecording = false;
        this.textContent = "🎤 点击开始朗读";
        this.style.background = "var(--english)";
        statusDiv.textContent = "⏹ 已停止，正在分析...";
        return;
      }
      
      // 检查浏览器支持
      if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
        statusDiv.innerHTML = "<span style='color:var(--danger);'>❌ 您的浏览器不支持语音识别，请使用Chrome或Safari</span>";
        return;
      }
      
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.lang = lang;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 3;
      
      isRecording = true;
      this.textContent = "⏹ 点击停止";
      this.style.background = "#FF4D4F";
      statusDiv.innerHTML = "<span style='color:var(--english);'>🎤 正在录音，请朗读上面的内容...</span>";
      
      var finalTranscript = "";
      
      recognition.onresult = function(event) {
        var interimTranscript = "";
        for (var i = event.resultIndex; i < event.results.length; i++) {
          var transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        statusDiv.innerHTML = "<span style='color:var(--english);'>🎤 " + (finalTranscript || interimTranscript) + "</span>";
      };
      
      recognition.onerror = function(event) {
        console.log("Speech error:", event.error);
        isRecording = false;
        startBtn.textContent = "🎤 点击开始朗读";
        startBtn.style.background = "var(--english)";
        
        if (event.error === "no-speech") {
          statusDiv.innerHTML = "<span style='color:var(--warning);'>⏰ 没有检测到声音，请靠近麦克风再试</span>";
        } else if (event.error === "audio-capture") {
          statusDiv.innerHTML = "<span style='color:var(--danger);'>❌ 无法访问麦克风，请在浏览器设置中允许</span>";
        } else if (event.error === "not-allowed") {
          statusDiv.innerHTML = "<span style='color:var(--danger);'>❌ 麦克风权限被拒绝，请在Safari设置中允许</span>";
        } else {
          statusDiv.innerHTML = "<span style='color:var(--warning);'>⚠️ 识别出错：" + event.error + "，请重试</span>";
        }
      };
      
      recognition.onend = function() {
        isRecording = false;
        startBtn.textContent = "🎤 点击开始朗读";
        startBtn.style.background = "var(--english)";
        
        if (finalTranscript) {
          self.evaluateSpeech(finalTranscript, expectedText, resultDiv, statusDiv, lang);
        } else {
          statusDiv.innerHTML = "<span style='color:var(--warning);'>⏰ 没有检测到语音，请靠近麦克风再试一次</span>";
        }
      };
      
      recognition.start();
    });
    
    // 听原文（TTS）
    listenBtn.addEventListener("click", function() {
      if (!window.speechSynthesis) {
        statusDiv.innerHTML = "<span style='color:var(--danger);'>❌ 浏览器不支持语音合成</span>";
        return;
      }
      window.speechSynthesis.cancel();
      var utter = new SpeechSynthesisUtterance(expectedText);
      utter.lang = lang;
      utter.rate = 0.8;
      window.speechSynthesis.speak(utter);
      statusDiv.innerHTML = "<span style='color:var(--primary);'>🔊 正在播放原文...</span>";
      setTimeout(function() {
        statusDiv.innerHTML = "👆 点击按钮开始朗读";
      }, 3000);
    });
  },
  
  // 评估朗读结果
  evaluateSpeech: function(transcript, expected, resultDiv, statusDiv, lang) {
    // 清理文本
    var cleanTranscript = transcript.replace(/[，。！？、；：""''（）《》\s]/g, "").toLowerCase();
    var cleanExpected = expected.replace(/[，。！？、；：""''（）《》\s]/g, "").toLowerCase();
    
    // 如果是英文，按单词比较
    var accuracy = 0;
    var details = "";
    
    if (lang === "en-US") {
      var words = cleanExpected.split(/\s+/);
      var spokenWords = cleanTranscript.split(/\s+/);
      var correctWords = 0;
      for (var i = 0; i < words.length; i++) {
        if (spokenWords[i] && spokenWords[i].toLowerCase() === words[i].toLowerCase()) {
          correctWords++;
        }
      }
      accuracy = Math.round(correctWords / words.length * 100);
      details = "正确 " + correctWords + "/" + words.length + " 个单词";
    } else {
      // 中文：按字符比较
      var totalChars = cleanExpected.length;
      var correctChars = 0;
      var wrongPositions = [];
      for (var c = 0; c < Math.min(cleanExpected.length, cleanTranscript.length); c++) {
        if (cleanExpected[c] === cleanTranscript[c]) {
          correctChars++;
        } else {
          wrongPositions.push(c);
        }
      }
      accuracy = Math.round(correctChars / totalChars * 100);
      details = "正确 " + correctChars + "/" + totalChars + " 个字";
    }
    
    // 显示结果
    resultDiv.style.display = "block";
    
    var grade = accuracy >= 90 ? "🌟 优秀" : (accuracy >= 70 ? "👍 良好" : (accuracy >= 50 ? "💪 需要练习" : "📚 多读几遍"));
    var gradeColor = accuracy >= 90 ? "#52C41A" : (accuracy >= 70 ? "#1890FF" : (accuracy >= 50 ? "#FAAD14" : "#FF4D4F"));
    
    resultDiv.innerHTML = "<div style='background:white;border:2px solid " + gradeColor + ";border-radius:10px;padding:12px;'>" +
      "<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;'>" +
      "<span style='font-weight:700;font-size:0.95rem;color:" + gradeColor + ";'>" + grade + "</span>" +
      "<span style='font-size:1.2rem;font-weight:800;color:" + gradeColor + ";'>" + accuracy + "%</span>" +
      "</div>" +
      "<div style='height:8px;background:#E2E8F0;border-radius:4px;overflow:hidden;margin-bottom:8px;'>" +
      "<div style='height:100%;width:" + accuracy + "%;background:" + gradeColor + ";border-radius:4px;transition:width 0.5s;'></div></div>" +
      "<div style='font-size:0.82rem;color:var(--text-light);'>" + details + "</div>" +
      "<div style='margin-top:6px;font-size:0.78rem;color:var(--text);background:#FAFAFA;padding:6px 10px;border-radius:6px;'><span style='color:var(--text-light);'>你说的是：</span>" + transcript + "</div>" +
      "<div style='margin-top:4px;font-size:0.82rem;font-weight:600;color:" + gradeColor + ";'>" +
      this.getSpeechFeedback(accuracy) + "</div></div>";
    
    statusDiv.innerHTML = "✅ 朗读评估完成";
    
    // 记录
    try {
      var log = JSON.parse(localStorage.getItem("speechLog") || "[]");
      log.push({text: expected, accuracy: accuracy, time: new Date().toISOString()});
      localStorage.setItem("speechLog", JSON.stringify(log));
    } catch(e) {}
  },
  
  getSpeechFeedback: function(accuracy) {
    if (accuracy >= 95) return "🎉 太棒了！朗读非常准确！";
    if (accuracy >= 85) return "🌟 很不错！继续加油！";
    if (accuracy >= 70) return "👍 基本正确，多读几遍会更流畅！";
    if (accuracy >= 50) return "💪 部分正确，建议跟着原文再多读几次！";
    return "📚 别灰心，放慢速度一个字一个字地读清楚！";
  },
  
  // ==========================================
  // 3. 手写练习（增强版）
  // ==========================================
  
  initFillCanvas: function(canvas) {
    var ctx = canvas.getContext("2d");
    var drawing = false;
    var color = "#2D3748";
    var lineWidth = 3;
    
    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    }
    resize();
    
    function getPos(e) {
      var rect = canvas.getBoundingClientRect();
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {x: clientX - rect.left, y: clientY - rect.top};
    }
    
    function startDraw(e) {
      e.preventDefault();
      drawing = true;
      var pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }
    
    function draw(e) {
      e.preventDefault();
      if (!drawing) return;
      var pos = getPos(e);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }
    
    function stopDraw(e) {
      drawing = false;
      ctx.beginPath();
    }
    
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("mouseleave", stopDraw);
    canvas.addEventListener("touchstart", startDraw, {passive: false});
    canvas.addEventListener("touchmove", draw, {passive: false});
    canvas.addEventListener("touchend", stopDraw);
    
    // 隐藏提示
    canvas.addEventListener("touchstart", function() {
      var hint = canvas.parentElement.querySelector(".canvas-hint");
      if (hint) hint.style.display = "none";
    }, {once: true});
    canvas.addEventListener("mousedown", function() {
      var hint = canvas.parentElement.querySelector(".canvas-hint");
      if (hint) hint.style.display = "none";
    }, {once: true});
  },
  
  // ==========================================
  // 4. 各科专属交互练习
  // ==========================================
  
  // 为语文创建交互练习
  createChineseExercise: function(container, day) {
    var exercises = {
      1: [
        {question:"朱自清的《春》写于哪一年？", type:"choice", options:["A. 1931年","B. 1933年","C. 1935年","D. 1937年"], answer:1},
        {question:"《春》中朱自清把春天比喻成什么？（说出一个即可）", type:"text", answers:["刚落地的娃娃","小姑娘","健壮的青年"], keywords:["娃娃","姑娘","青年"]},
        {question:"请朗读下列段落（点击录音按钮）：盼望着，盼望着，东风来了，春天的脚步近了。", type:"speech"}
      ],
      2: [
        {question:"《春》的结构可以分为哪三部分？", type:"text", answers:["盼春、绘春、赞春","盼春绘春赞春","盼春,绘春,赞春"], keywords:["盼春","绘春","赞春"]},
        {question:"'红的像火，粉的像霞，白的像雪'用了什么修辞手法？", type:"choice", options:["A. 拟人","B. 比喻+排比","C. 夸张","D. 对偶"], answer:1}
      ]
    };
    var dayExercises = exercises[day] || exercises[1];
    if (dayExercises.length > 0) this.createFillBlank(container, dayExercises);
    
    // 添加朗读练习
    var speechTexts = {
      1: "盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。",
      2: "吹面不寒杨柳风，不错的，像母亲的手抚摸着你。风里带来些新翻的泥土的气息，混着青草味儿，还有各种花的香，都在微微润湿的空气里酝酿。"
    };
    if (speechTexts[day]) {
      this.createSpeechSection(container, speechTexts[day], "📖 课文朗读练习", "zh-CN");
    }
  },
  
  // 为数学创建交互练习
  createMathExercise: function(container, day) {
    var exercises = {
      1: [
        {question:"海平面以上100米记作+100米，海平面以下50米记作______", type:"text", answers:["-50米","-50","−50"]},
        {question:"下列哪个数既不是正数也不是负数？", type:"choice", options:["A. +5","B. 0","C. -3","D. ½"], answer:1},
        {question:"−5是正数还是负数？", type:"text", answers:["负数","负"], keywords:["负"]}
      ],
      2: [
        {question:"数轴的三要素是什么？", type:"text", answers:["原点正方向单位长度","原点、正方向、单位长度"], keywords:["原点","正方向","单位长度"]},
        {question:"数轴上，−3在−1的哪一边？", type:"choice", options:["A. 左边","B. 右边","C. 上面","D. 下面"], answer:0},
        {question:"数轴上表示−2的点到原点的距离是几个单位？", type:"text", answers:["2","两个","2个"], keywords:["2"]}
      ]
    };
    var dayExercises = exercises[day] || exercises[1];
    this.createFillBlank(container, dayExercises);
  },
  
  // 为英语创建交互练习
  createEnglishExercise: function(container, day) {
    // 口语练习
    var speechTexts = {
      1: "Good morning! Nice to meet you!",
      2: "Good morning! I'm Alice. Nice to meet you!"
    };
    if (speechTexts[day]) {
      this.createSpeechSection(container, speechTexts[day], "🗣️ 英文口语练习", "en-US");
    }
    
    var exercises = {
      1: [
        {question:"'早上好'的英文是______", type:"text", answers:["Good morning","good morning"], keywords:["good morning"]},
        {question:"26个字母中有几个元音字母？", type:"text", answers:["5","五个"], keywords:["5","五"]}
      ],
      2: [
        {question:"'Nice to meet you' 的中文意思是______", type:"text", answers:["很高兴认识你","认识你很高兴"], keywords:["认识你","高兴"]},
        {question:"I ____ a student. （填写be动词）", type:"text", answers:["am"], keywords:["am"]}
      ]
    };
    var dayExercises = exercises[day] || exercises[1];
    if (dayExercises.length > 0) this.createFillBlank(container, dayExercises);
  },
  
  // ==========================================
  // 5. 注入到课程内容
  // ==========================================
  
  injectToSubject: function(day, subject) {
    var content = document.getElementById("dayContent");
    if (!content) return;
    
    // 在内容最后添加交互练习
    var self = this;
    setTimeout(function() {
      if (subject === "chinese") {
        self.createChineseExercise(content, day);
      } else if (subject === "math") {
        self.createMathExercise(content, day);
      } else if (subject === "english") {
        self.createEnglishExercise(content, day);
      }
    }, 200);
  }
};

// 注入到App的renderSubjectContent中
App.renderSubjectContentOrig3 = App.renderSubjectContent;
App.renderSubjectContent = function(dayData, subject) {
  this.renderSubjectContentOrig3(dayData, subject);
  LearnEngine.injectToSubject(dayData.day, subject);
};
