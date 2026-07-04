import sys, re
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Check how many times COURSE_DATA is declared
declarations = re.findall(r'var\s+COURSE_DATA\s*=', c)
pushes = re.findall(r'COURSE_DATA\.push\(', c)
print(f"var COURSE_DATA = : {len(declarations)}")
print(f"COURSE_DATA.push(): {len(pushes)}")

if len(declarations) > 1:
    print("❌ Multiple COURSE_DATA declarations! This will cause an error!")
    for m in re.finditer(r'var\s+COURSE_DATA\s*=', c):
        context = c[max(0,m.start()-50):m.end()+50]
        print(f"  At {m.start()}: {repr(context)}")
elif len(declarations) == 1:
    print("✅ Single declaration only")

# Also check for any missing semicolons or other issues
# Look for potential JS errors by checking if there's a COURSE_DATA.push without COURSE_DATA existing
# Check that the script that contains the App.init or main code has COURSE_DATA available
