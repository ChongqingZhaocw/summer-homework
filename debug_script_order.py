import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"

with open(os.path.join(wd, "index.html"), "r", encoding="utf-8-sig") as f:
    root = f.read()

# Find all script blocks in order
scripts = [(m.start(), m.end()) for m in re.finditer(r'<script>', root)]
print(f"Total script blocks: {len(scripts)}")
for i, (st, en) in enumerate(scripts):
    end_tag = root.find("</script>", en)
    block = root[en:end_tag]
    has_cd = "COURSE_DATA" in block
    has_app = "var App" in block or "App.init" in block
    has_app_ref = "App." in block and not has_app
    has_render_day = "renderDay" in block
    is_empty = len(block.strip()) < 10
    
    # Short description
    desc = ""
    if has_cd: desc = "COURSE_DATA"
    if has_app: desc = "APP DEFINITION"
    if has_app_ref and not has_cd: desc = "uses App.xxx"
    if has_render_day: desc = "renderDay"
    if is_empty: desc = "empty"
    
    print(f"  #{i+1} at {st}: {len(block)} chars - {desc}")
    if i > 10 or desc == "empty":
        if desc == "empty":
            continue
