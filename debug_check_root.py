import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"

# Check root index.html
with open(os.path.join(wd, "index.html"), "r", encoding="utf-8-sig") as f:
    root = f.read()

# Check app/index.html  
with open(os.path.join(wd, "app", "index.html"), "r", encoding="utf-8-sig") as f:
    app_html = f.read()

# Compare script structures
root_scripts = re.findall(r'<script[^>]*>(.*?)</script>', root, re.DOTALL)
app_scripts = re.findall(r'<script[^>]*>(.*?)</script>', app_html, re.DOTALL)

print(f"Root index.html: {len(root_scripts)} script blocks")
print(f"App index.html: {len(app_scripts)} script blocks (external refs)")

# Check if root has external script references
root_ext = re.findall(r'<script\s+src="([^"]+)"', root)
print(f"Root external scripts: {len(root_ext)}: {root_ext[:5]}...")

# Check app HTML external scripts
app_ext = re.findall(r'<script\s+src="([^"]+)"', app_html)
print(f"App external scripts: {len(app_ext)}")

# Check the standalone version for comparison
with open(os.path.join(wd, "暑期作业_七年级预习.html"), "r", encoding="utf-8-sig") as f:
    standalone = f.read()
standalone_scripts = re.findall(r'<script>(.*?)</script>', standalone, re.DOTALL)
print(f"\nStandalone version: {len(standalone_scripts)} inline scripts")

# Count script types in standalone
for i, s in enumerate(standalone_scripts):
    if "var App" in s and "currentDay" in s:
        print(f"  Script #{i+1}: App definition ({len(s)} chars)")
    elif "renderDay" in s:
        print(f"  Script #{i+1}: renderDay function")
    elif "StudyTracker" in s:
        print(f"  Script #{i+1}: StudyTracker")
