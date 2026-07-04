import sys
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Search for where App is defined
# var App, App =, window.App, this.App
patterns = ["var App", "App = {", "App={", "window.App", "this.App"]
for p in patterns:
    idx = c.find(p)
    if idx >= 0:
        print(f"'{p}' at {idx}: {repr(c[idx:idx+150])}")

# If none found, the App might be from an external JS file
# Check if any external JS files are referenced
import re
ext_scripts = re.findall(r'<script src="([^"]+)"', c)
print(f"\nExternal scripts: {ext_scripts}")

# Also check the first script block in detail
first_script = c.find("<script>")
end = c.find("</script>", first_script)
block = c[first_script+8:end]
print(f"\nFirst script block ({len(block)} chars): {repr(block[:500])}")
