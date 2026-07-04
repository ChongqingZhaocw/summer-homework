import sys, re
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Check the JavaScript section for syntax issues
# Find COURSE_DATA section
start = c.find("COURSE_DATA = []")
end = c.find("var App", start)
section = c[start:end]

# Count backticks
backticks = section.count("`")
print(f"Backticks: {backticks} (should be even)")
if backticks % 2 != 0:
    print("❌ Unbalanced backticks!")
    # Find the problematic area
    lines = section.split("\n")
    for i, line in enumerate(lines):
        if line.count("`") % 2 != 0:
            print(f"  Line {i+1}: odd backticks: {repr(line[:100])}")
else:
    print("✅ Backticks balanced")

# Check all day braces
entries = [(m.start(), int(re.search(r"day:\s*(\d+)", c[m.start():m.start()+200]).group(1))) for m in re.finditer(r"COURSE_DATA\.push\(", c)]
print(f"\nTotal entries: {len(entries)}")
for i, (pos, day) in enumerate(entries):
    if i < len(entries) - 1:
        next_pos = entries[i+1][0]
    else:
        next_pos = end
    block = c[pos:next_pos]
    ob = block.count("{")
    cb = block.count("}")
    if ob != cb:
        print(f"  Day {day}: braces {ob} vs {cb} (diff: {ob-cb})")
    # Also check for : inside backtick strings  
    # Count "body:`" patterns to verify template literals
    body_literals = len(re.findall(r'body:\s*`', block))
    if body_literals > 0:
        # Check each template literal is closed
        in_literal = False
        literal_count = 0
        for ch in block:
            if ch == "`":
                in_literal = not in_literal
                if not in_literal:
                    literal_count += 1
        # Should be even
        if literal_count % 2 != 0:
            print(f"  Day {day}: odd template literals!")

# Check the day selector rendering
idx = c.find("renderDaySelector")
if idx > 0:
    print(f"\n✅ renderDaySelector found at {idx}")
    context = c[idx:idx+500]
    # Check if it references data-day attribute correctly
    if "data-day" in context:
        print("✅ Uses data-day attribute")
    if "getDayData" in context:
        print("✅ Uses getDayData")
    
# Check getDayData function
idx2 = c.find("getDayData:")
if idx2 > 0:
    print(f"\n✅ getDayData function found")
    
# Check goToDay
idx3 = c.find("goToDay: function")
if idx3 > 0:
    print(f"✅ goToDay function found")

# Check nav buttons
for btn in ["prevDay", "nextDay"]:
    btn_idx = c.find(f'id="{btn}"')
    if btn_idx > 0:
        print(f"✅ {btn} button found")
    
print("\n✅ Check complete")
