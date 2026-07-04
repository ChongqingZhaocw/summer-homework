import sys, os
sys.stdout.reconfigure(encoding="utf-8")
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"
with open(os.path.join(wd, "index.html"), "r", encoding="utf-8-sig") as f:
    root = f.read()

# Check for App.init
count = root.count("App.init")
print(f"App.init references: {count}")
for i in range(count):
    idx = 0
    for j in range(i+1):
        idx = root.find("App.init", idx+1)
    print(f"  #{i+1} at {idx}: {repr(root[max(0,idx-30):idx+40])}")

# Check for DOMContentLoaded
dcl = root.count("DOMContentLoaded")
print(f"\nDOMContentLoaded references: {dcl}")
