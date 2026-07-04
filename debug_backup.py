import sys
sys.stdout.reconfigure(encoding="utf-8")
# Check backup file
baks = ["index.html.bak", "index.html.bak2", "index.html.bak3", "index.html.bak4", "index.html.bak5", "index.html.bak6", "index.html.bak7"]
import os
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"
for bak in baks:
    path = os.path.join(wd, bak)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8-sig") as f:
            c = f.read()
        patterns = ["var App", "App = {", "window.App"]
        found = False
        for p in patterns:
            if p in c:
                idx = c.find(p)
                print(f"{bak}: '{p}' found at {idx}: {repr(c[idx:idx+100])}")
                found = True
        if not found:
            print(f"{bak}: No App definition found!")
