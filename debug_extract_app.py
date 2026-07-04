import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"

# Extract the App definition from the standalone version
with open(os.path.join(wd, "暑期作业_七年级预习.html"), "r", encoding="utf-8-sig") as f:
    standalone = f.read()

# Find script #7 with App definition
scripts = re.findall(r'<script>(.*?)</script>', standalone, re.DOTALL)
for i, s in enumerate(scripts):
    if "var App" in s and "currentDay" in s:
        print(f"Script #{i+1}: App definition, {len(s)} chars")
        print(f"  Starts: {s[:100]}")
        print(f"  Ends: {s[-100:]}")
        # Save the App code
        with open(os.path.join(wd, "app_code.js"), "w", encoding="utf-8") as f2:
            f2.write(s)
        break

# Also get from app/js/app.js
with open(os.path.join(wd, "app", "js", "app.js"), "r", encoding="utf-8-sig") as f:
    app_js = f.read()
print(f"\napp.js: {len(app_js)} chars")
print(f"  Starts: {app_js[:100]}")
print(f"  Ends: {app_js[-100:]}")
