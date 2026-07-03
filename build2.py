import os, sys
sys.stdout.reconfigure(encoding="utf-8")
base = r"C:\Users\zcw76\Documents\小升初暑期作业安排"
app = os.path.join(base, "app")
with open(os.path.join(app, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()
css_files = ["style.css", "enhanced.css", "learn.css"]
js_files = ["init.js","c1.js","c2.js","c3.js","c4.js","c5.js","app.js","app-fix.js","enhanced.js","opening.js","tracker.js","tracker-ui.js","mastery.js","mastery-ui.js","learn-engine.js","english-enhanced.js","integrate.js","textbook.js","textbook-content.js","textbook-content-d2-7.js","inject-textbook.js","stories.js","inject-stories.js"]
for f in css_files:
    p = os.path.join(app, "css", f)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as fp:
            html = html.replace(f'<link rel="stylesheet" href="css/{f}">', f"<style>\n{fp.read()}\n</style>")
for f in js_files:
    p = os.path.join(app, "js", f)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as fp:
            tag = f'<script src="js/{f}"></script>'
            if tag in html:
                html = html.replace(tag, f"<script>\n{fp.read()}\n</script>")
            else:
                print(f"Missing: {f}")
out = os.path.join(base, "暑期作业_七年级预习_离线版.html")
with open(out, "w", encoding="utf-8") as fp:
    fp.write(html)
out2 = os.path.join(base, "summer_homework.html") 
with open(out2, "w", encoding="utf-8") as fp:
    fp.write(html)
print(f"OK: {len(html)} bytes")
for d in range(1,8):
    print(f"Day {d}:", "Y" if f'"{d}_chinese"' in html else "N", "Y" if f'"{d}_math"' in html else "N", "Y" if f'"{d}_english"' in html else "N")
print(f"\nFiles:\n  {out}\n  {out2}")
