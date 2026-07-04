import sys, os
sys.stdout.reconfigure(encoding="utf-8")

# Check the app directory for original source files
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排\app"
for root, dirs, files in os.walk(wd):
    for fn in files:
        if fn.endswith(".js"):
            path = os.path.join(root, fn)
            with open(path, "r", encoding="utf-8-sig", errors="ignore") as f:
                content = f.read()
            if "var App" in content or "App =" in content or "App.init" in content:
                print(f"'{fn}' contains App definition")
                idx = content.find("var App") if "var App" in content else content.find("App =")
                print(f"  {content[idx:idx+150]}")
