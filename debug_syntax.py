import sys, re
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Check each script block for valid JavaScript
script_tags = [(m.start(), m.end()) for m in re.finditer(r'<script>', c)]

print("Checking each script block for syntax issues...")
for st_index, (st_pos, st_end) in enumerate(script_tags):
    end = c.find("</script>", st_end)
    if end < 0:
        continue
    block = c[st_end:end]
    block = block.strip()
    if not block:
        continue
    
    has_course_data = "COURSE_DATA" in block
    has_app_code = "var App" in block or "App.init" in block
    
    if has_course_data or has_app_code:
        # Check backticks
        bt = block.count("`")
        ob = block.count("{")
        cb = block.count("}")
        
        issues = []
        if bt % 2 != 0:
            issues.append(f"backticks: {bt}")
        if ob != cb:
            issues.append(f"braces: {ob} vs {cb}")
        
        # Show first/last 100 chars
        preview = block[:100].replace("\n", "\\n")
        tail = block[-100:].replace("\n", "\\n")
        days = re.findall(r"day:\s*(\d+)", block)
        
        status = "❌ " + ", ".join(issues) if issues else "✅"
        print(f"\n  [{st_index}] Block at {st_pos}: {status}")
        print(f"    Days: {days[:5]}{'...' if len(days) > 5 else ''}")
        print(f"    Head: {preview}")
        print(f"    Tail: {tail}")
