/* ========================================
   自习追踪系统 v2.0
   功能：三阶段打卡、录音、错题本、报告
   ======================================== */
var StudyTracker = {
  // 数据存储键
  STORAGE_KEY: "summerStudyTracker",
  
  // 初始化
  init: function() {
    this.load();
    this.recordingData = {}; // 临时存储录音blob
    this.mediaRecorder = null;
    this.recordingStream = null;
    return this;
  },
  
  // 加载数据
  load: function() {
    try {
      var raw = localStorage.getItem(this.STORAGE_KEY);
      this.data = raw ? JSON.parse(raw) : {};
    } catch(e) {
      this.data = {};
    }
    // 确保结构完整
    if (!this.data.tasks) this.data.tasks = {};
    if (!this.data.errors) this.data.errors = {};
    if (!this.data.quizResults) this.data.quizResults = {};
    if (!this.data.sessions) this.data.sessions = {};
    if (!this.data.recordings) this.data.recordings = {};
  },
  
  // 保存数据
  save: function() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch(e) {
      console.warn("存储失败:", e);
    }
  },
  
  // ========== 三阶段任务追踪 ==========
  
  // 获取任务的三阶段状态
  getTaskStage: function(day, subject, taskIdx) {
    var key = day + "_" + subject + "_" + taskIdx;
    return (this.data.tasks[key]) || {review:false, learn:false, practice:false, time:{}};
  },
  
  // 切换某个阶段的状态
  toggleStage: function(day, subject, taskIdx, stage) {
    var key = day + "_" + subject + "_" + taskIdx;
    if (!this.data.tasks[key]) {
      this.data.tasks[key] = {review:false, learn:false, practice:false, time:{}};
    }
    this.data.tasks[key][stage] = !this.data.tasks[key][stage];
    this.data.tasks[key].time[stage] = this.data.tasks[key][stage] ? new Date().toISOString() : null;
    this.save();
    return this.data.tasks[key][stage];
  },
  
  // 检查任务是否全部完成
  isTaskComplete: function(day, subject, taskIdx) {
    var t = this.getTaskStage(day, subject, taskIdx);
    return t.review && t.learn && t.practice;
  },
  
  // 获取某天某科的任务进度
  getSubjectProgress: function(day, subject, totalTasks) {
    var done = 0;
    for (var i = 0; i < totalTasks; i++) {
      if (this.isTaskComplete(day, subject, i)) done++;
    }
    return done;
  },
  
  // ========== 录音功能 ==========
  
  // 开始录音
  startRecording: function(type, taskKey, callback) {
    var self = this;
    var constraints = type === "video" 
      ? {audio: true, video: {facingMode: "user", width: {ideal: 320}, height: {ideal: 240}}}
      : {audio: true};
    
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
      self.recordingStream = stream;
      var options = type === "video" ? {mimeType: 'video/webm'} : {mimeType: 'audio/webm'};
      // 兼容不同浏览器
      try {
        self.mediaRecorder = new MediaRecorder(stream, options);
      } catch(e) {
        self.mediaRecorder = new MediaRecorder(stream);
      }
      
      var chunks = [];
      self.mediaRecorder.ondataavailable = function(e) {
        if (e.data.size > 0) chunks.push(e.data);
      };
      self.mediaRecorder.onstop = function() {
        var blob = new Blob(chunks, {type: type === "video" ? 'video/webm' : 'audio/webm'});
        var url = URL.createObjectURL(blob);
        if (!self.recordingData[taskKey]) self.recordingData[taskKey] = {};
        self.recordingData[taskKey][type] = {blob: blob, url: url, time: new Date().toISOString()};
        // 记录到data
        if (!self.data.recordings[taskKey]) self.data.recordings[taskKey] = {};
        self.data.recordings[taskKey][type] = {time: new Date().toISOString(), size: blob.size};
        self.save();
        // 停止所有轨道
        stream.getTracks().forEach(function(t) { t.stop(); });
        if (callback) callback(url, blob);
      };
      
      self.mediaRecorder.start();
      // 每3秒保存一次片段（防止丢失）
      self.mediaRecorder.timer = setInterval(function() {
        if (self.mediaRecorder && self.mediaRecorder.state === "recording") {
          self.mediaRecorder.requestData();
        }
      }, 3000);
      
    }).catch(function(err) {
      alert("无法访问麦克风/摄像头：" + err.message + "\n请在浏览器设置中允许访问。");
      if (callback) callback(null, null);
    });
  },
  
  // 停止录音
  stopRecording: function() {
    if (this.mediaRecorder && this.mediaRecorder.state === "recording") {
      clearInterval(this.mediaRecorder.timer);
      this.mediaRecorder.stop();
    }
    // 确保流被关闭
    if (this.recordingStream) {
      this.recordingStream.getTracks().forEach(function(t) { t.stop(); });
      this.recordingStream = null;
    }
  },
  
  // 检查是否在录音中
  isRecording: function() {
    return this.mediaRecorder && this.mediaRecorder.state === "recording";
  },
  
  // 获取录音URL
  getRecordingUrl: function(taskKey, type) {
    if (this.recordingData[taskKey] && this.recordingData[taskKey][type]) {
      return this.recordingData[taskKey][type].url;
    }
    return null;
  },
  
  // ========== 错题追踪 ==========
  
  // 记录错题
  recordError: function(day, subject, quizIdx, question, wrongAnswer, correctAnswer) {
    var key = day + "_" + subject;
    if (!this.data.errors[key]) this.data.errors[key] = [];
    this.data.errors[key].push({
      quizIdx: quizIdx,
      question: question,
      wrongAnswer: wrongAnswer,
      correctAnswer: correctAnswer,
      time: new Date().toISOString(),
      reviewed: false
    });
    this.save();
  },
  
  // 获取某天某科的错题
  getErrors: function(day, subject) {
    var key = day + "_" + subject;
    return this.data.errors[key] || [];
  },
  
  // 标记错题已复习
  markErrorReviewed: function(day, subject, errorIdx) {
    var key = day + "_" + subject;
    if (this.data.errors[key] && this.data.errors[key][errorIdx]) {
      this.data.errors[key][errorIdx].reviewed = true;
      this.save();
    }
  },
  
  // ========== 学习报告 ==========
  
  // 生成单日报告
  generateDayReport: function(day) {
    var dayData = App.getDayData(day);
    if (!dayData) return null;
    
    var report = {
      day: day,
      date: dayData.date,
      difficulty: dayData.difficulty,
      focus: dayData.focus,
      subjects: {},
      totalTasks: 0,
      completedTasks: 0,
      totalErrors: 0,
      reviewedErrors: 0,
      recordings: 0,
      studyTime: 0
    };
    
    var subs = ["chinese","math","english"];
    var subjNames = {chinese:"语文", math:"数学", english:"英语"};
    
    for (var s = 0; s < subs.length; s++) {
      var subj = subs[s];
      var sections = dayData.subjects[subj].sections;
      var taskCount = 0;
      var stages = {review:0, learn:0, practice:0};
      var completed = 0;
      
      // 计算任务
      for (var sec = 0; sec < sections.length; sec++) {
        if (sections[sec].type === "task" && sections[sec].tasks) {
          for (var t = 0; t < sections[sec].tasks.length; t++) {
            var idx = this.getGlobalTaskIndex(day, sections, sec, t);
            var stage = this.getTaskStage(day, subj, idx);
            if (stage.review) stages.review++;
            if (stage.learn) stages.learn++;
            if (stage.practice) stages.practice++;
            if (this.isTaskComplete(day, subj, idx)) completed++;
            taskCount++;
          }
        }
      }
      
      report.totalTasks += taskCount;
      report.completedTasks += completed;
      
      // 错题
      var errors = this.getErrors(day, subj);
      report.totalErrors += errors.length;
      for (var e = 0; e < errors.length; e++) {
        if (errors[e].reviewed) report.reviewedErrors++;
      }
      
      // 录音
      for (var sec2 = 0; sec2 < sections.length; sec2++) {
        if (sections[sec2].type === "task" && sections[sec2].tasks) {
          for (var t2 = 0; t2 < sections[sec2].tasks.length; t2++) {
            var idx2 = this.getGlobalTaskIndex(day, sections, sec2, t2);
            var rKey = day + "_" + subj + "_" + idx2;
            if (this.data.recordings[rKey]) {
              report.recordings += Object.keys(this.data.recordings[rKey]).length;
            }
          }
        }
      }
      
      report.subjects[subj] = {
        name: subjNames[subj],
        tasks: taskCount,
        completed: completed,
        stages: stages,
        errors: errors.length,
        reviewedErrors: errors.filter(function(e){return e.reviewed}).length
      };
    }
    
    return report;
  },
  
  // 获取全局任务索引
  getGlobalTaskIndex: function(day, sections, sectionIdx, taskIdx) {
    var offset = 0;
    for (var i = 0; i < sectionIdx; i++) {
      if (sections[i].type === "task" && sections[i].tasks) {
        offset += sections[i].tasks.length;
      }
    }
    return offset + taskIdx;
  },
  
  // ========== 统计方法 ==========
  
  getOverallStats: function() {
    var stats = {daysDone:0, totalTasks:0, completedTasks:0, errors:0, reviewedErrors:0, recordings:0};
    
    for (var d = 0; d < COURSE_DATA.length; d++) {
      var day = COURSE_DATA[d];
      if (!day) continue;
      var report = this.generateDayReport(day.day);
      if (report) {
        stats.totalTasks += report.totalTasks;
        stats.completedTasks += report.completedTasks;
        stats.errors += report.totalErrors;
        stats.reviewedErrors += report.reviewedErrors;
        stats.recordings += report.recordings;
        if (report.completedTasks >= report.totalTasks && report.totalTasks > 0) {
          stats.daysDone++;
        }
      }
    }
    return stats;
  }
};

// 初始化
StudyTracker.init();
