import sys
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Find the App definition
idx = c.find("var App")
if idx < 0:
    # Try other patterns
    idx = c.find("App =")
if idx < 0:
    idx = c.find("App={")
if idx < 0:
    # Search for where the app logic starts (after COURSE_DATA)
    course_end = c.find("</script>", c.find("COURSE_DATA.push({"))
    # Find all script blocks after COURSE_DATA
    script_starts = []
    pos = course_end
    while True:
        pos = c.find("<script>", pos)
        if pos < 0:
            break
        script_starts.append(pos)
        pos += 8
    
    print(f"Script blocks after COURSE_DATA: {len(script_starts)}")
    for s in script_starts:
        end = c.find("</script>", s)
        block = c[s:end]
        if "var App" in block or "App =" in block:
            print(f"  Block at {s}: has App definition")
            print(f"  First 200: {repr(block[:200])}")
        elif "renderDay" in block:
            print(f"  Block at {s}: has renderDay function")
        elif "App.init" in block:
            print(f"  Block at {s}: has App.init")
        else:
            print(f"  Block at {s}: {len(block)} chars, no App")
