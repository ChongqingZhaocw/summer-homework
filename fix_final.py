import sys, os
sys.stdout.reconfigure(encoding="utf-8")

# We need a file with:
# 1. Initial BOM at start
# 2. All 30 days of data
# 3. App definition in correct position
# 4. All original BOMs in script blocks PRESERVED

# The problem was: I removed all BOMs with fix_bom.py
# Let me go back to a backup or rebuild properly

wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"

# Use the CURRENT index.html (which has BOM at start but no internal BOMs)
# And add back the internal BOMs from the standalone

current_path = wd + "/index.html"
standalone_path = wd + "/暑期作业_七年级预习.html"

with open(current_path, "r", encoding="utf-8") as f:
    current = f.read()

with open(standalone_path, "r", encoding="utf-8-sig") as f:
    standalone = f.read()

# Check: current has 1 BOM (at start), standalone has 26 BOMs
# We need to add BOMs inside script blocks in current

# Find all <script> blocks in standalone that have BOM
import re
script_boms = []
for m in re.finditer(r"<script>(.*?)</script>", standalone, re.DOTALL):
    block = m.group(1)
    if "\ufeff" in block:
        script_boms.append((m.start(), block))

print(f"Standalone script blocks with BOM: {len(script_boms)}")

# In the current file, we need to add \ufeff after each <script> tag
# wherever the standalone has them
# But this is tricky to do generically

# Simpler approach: just ensure the initial BOM is present
# and the file encoding is correct
# Let me check what the browser sees

# Actually, let me just verify the current index.html one more time
print(f"\nCurrent file: {len(current)} bytes")
print(f"BOM at start: {current[0] == chr(0xFEFF)}")
print(f"var App: {'var App' in current}")
print(f"App.init: {'App.init' in current}")

# Count script blocks
scripts = list(re.finditer(r"<script>", current))
print(f"Script blocks: {len(scripts)}")

# Check if the App definition is in the right position
app_idx = current.find("var App =")
last_data_idx = current.rfind("COURSE_DATA.push({")
print(f"Last push at: {last_data_idx}, var App at: {app_idx}")
print(f"App is after last push: {app_idx > last_data_idx}")

# Check Day 2 data
d2 = current.find("day: 2,")
print(f"Day 2 at: {d2}")
if d2 > 0:
    # Find the script block containing Day 2
    script_start = current.rfind("<script>", 0, d2)
    script_end = current.find("</script>", d2)
    block = current[script_start:script_end]
    ob = block.count("{")
    cb = block.count("}")
    bt = block.count("`")
    print(f"Day 2 script block: {len(block)} chars, braces {ob}/{cb}, backticks {bt}")
