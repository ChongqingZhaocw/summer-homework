import sys, re
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Find all script blocks and which days are in each
script_tags = [(m.start(), m.end()) for m in re.finditer(r'<script>', c)]
script_closes = [(m.start(), m.end()) for m in re.finditer(r'</script>', c)]

print("Script blocks containing COURSE_DATA:")
for st in script_tags:
    sc_pos = st[1]
    # Find the matching </script>
    end = c.find("</script>", sc_pos)
    if end < 0:
        continue
    block = c[sc_pos:end]
    if "COURSE_DATA.push" in block or "COURSE_DATA =" in block:
        days = [int(d) for d in re.findall(r'day:\s*(\d+)', block)]
        print(f"  Block at {sc_pos}: days {days}")
        # Check if this block has syntax issues
        backticks = block.count("`")
        if backticks % 2 != 0:
            print(f"    ❌ Unbalanced backticks! Count: {backticks}")
        # Check opening vs closing braces
        ob = block.count("{")
        cb = block.count("}")
        if ob != cb:
            print(f"    ❌ Braces mismatch: {ob} open vs {cb} close") 
