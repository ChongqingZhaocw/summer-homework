import sys, os
sys.stdout.reconfigure(encoding="utf-8")

# Check the app HTML for how scripts are included
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排\app"
for fn in os.listdir(wd):
    if fn.endswith(".html"):
        path = os.path.join(wd, fn)
        with open(path, "r", encoding="utf-8-sig", errors="ignore") as f:
            content = f.read()
        # Find script references
        import re
        scripts = re.findall(r'<script[^>]*src="([^"]*)"', content)
        inline_scripts = len(re.findall(r'<script>', content))
        print(f"{fn}: {len(scripts)} external scripts: {scripts}")
        print(f"  Inline scripts: {inline_scripts}")
        if "app.js" in content:
            idx = content.find("app.js")
            print(f"  app.js context: {repr(content[idx-20:idx+50])}")
