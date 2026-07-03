# ========================================
# 暑期作业打包脚本 - 生成单文件HTML
# ========================================
$baseDir = "C:\Users\zcw76\Documents\小升初暑期作业安排"
$appDir = Join-Path $baseDir "app"

# 读取HTML模板
$html = Get-Content (Join-Path $appDir "index.html") -Encoding UTF8 -Raw

# CSS文件列表（按顺序）
$cssFiles = @("style.css","enhanced.css","learn.css")

# JS文件列表（按加载顺序）
$jsFiles = @(
  "init.js","c1.js","c2.js","day3-4.js","c3.js","c4.js","c5.js",
  "app.js","app-fix.js","enhanced.js","opening.js",
  "tracker.js","tracker-ui.js","mastery.js","mastery-ui.js",
  "learn-engine.js","english-enhanced.js","integrate.js",
  "textbook.js","textbook-content.js","textbook-content-d2-7.js","inject-textbook.js",
  "stories.js","inject-stories.js","report-system.js"
)

Write-Host "🚀 开始打包暑期作业..."

# 1. 替换CSS引用为内联
foreach ($cssFile in $cssFiles) {
  $cssPath = Join-Path (Join-Path $appDir "css") $cssFile
  if (Test-Path $cssPath) {
    $cssContent = Get-Content $cssPath -Encoding UTF8 -Raw
    $linkTag = '<link rel="stylesheet" href="css/' + $cssFile + '">'
    $styleTag = "<style>`n" + $cssContent + "`n</style>"
    $html = $html -replace [regex]::Escape($linkTag), $styleTag
    Write-Host " ✅ 内联CSS: $cssFile ($(($cssContent | Measure-Object -Character).Characters) chars)"
  }
}

# 2. 替换JS引用为内联
foreach ($jsFile in $jsFiles) {
  $jsPath = Join-Path (Join-Path $appDir "js") $jsFile
  if (Test-Path $jsPath) {
    $jsContent = Get-Content $jsPath -Encoding UTF8 -Raw
    $scriptTag = '<script src="js/' + $jsFile + '"></script>'
    $inlineScript = "<script>`n" + $jsContent + "`n</script>"
    $html = $html -replace [regex]::Escape($scriptTag), $inlineScript
    Write-Host " ✅ 内联JS: $jsFile ($(($jsContent | Measure-Object -Character).Characters) chars)"
  }
}

# 3. 添加离线说明
$offlineNote = @"
`n
<!-- 离线使用说明 -->
<style>
  .offline-badge {
    position: fixed; bottom: 70px; right: 10px;
    background: rgba(74,144,217,0.9); color: white;
    padding: 4px 12px; border-radius: 20px;
    font-size: 0.65rem; z-index: 1000;
    backdrop-filter: blur(4px);
    pointer-events: none;
  }
</style>
<div class="offline-badge">📦 离线可用</div>
"@
# 在</body>前插入
$html = $html -replace '</body>', "$offlineNote`n</body>"

# 4. 写入输出文件
$outputPath = Join-Path $appDir "暑期作业_七年级预习_离线版.html"
# 注意：PowerShell输出UTF8需要特殊处理
[System.IO.File]::WriteAllText($outputPath, $html, [System.Text.Encoding]::UTF8)

# 5. 统计
$outputSize = (Get-Item $outputPath).Length
$jsSize = ($jsFiles | ForEach-Object { (Get-Content (Join-Path (Join-Path $appDir "js") $_) -Encoding UTF8 -Raw).Length } | Measure-Object -Sum).Sum
$cssSize = ($cssFiles | ForEach-Object { (Get-Content (Join-Path (Join-Path $appDir "css") $_) -Encoding UTF8 -Raw).Length } | Measure-Object -Sum).Sum

Write-Host "`n📊 打包完成！"
Write-Host "  JS原始大小: $jsSize bytes"
Write-Host "  CSS原始大小: $cssSize bytes"
Write-Host "  输出文件大小: $outputSize bytes"
Write-Host "  输出位置: $outputPath"
Write-Host "`n📋 使用说明："
Write-Host "  1. 把这个文件发送给学生（微信/QQ/AirDrop）"
Write-Host "  2. 学生用Safari打开（保存到'文件'App后打开）"
Write-Host "  3. 所有功能离线可用！无需网络、无需服务器"
Write-Host "  4. 学习进度自动保存在iPad本地，不会丢失"



