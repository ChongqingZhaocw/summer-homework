import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"

with open(os.path.join(wd, "index.html"), "r", encoding="utf-8-sig") as f:
    root = f.read()

# Find block #7 end and #8 start
# Block #7: COURSE_DATA script
s7_start = 124783
# Find block #7's closing </script>
s7_end = root.find("</script>", s7_start) + len("</script>")

# Block #8 start
s8_start = root.find("<script>", s7_end)

print(f"Block #7 end: {s7_end}")
print(f"Block #8 start: {s8_start}")
print(f"Gap: {repr(root[s7_end:s8_start])}")

# Insert point is right after s7_end
insert_point = s7_end
print(f"\nInsert point: {insert_point}")
print(f"Content at insert: {repr(root[insert_point:insert_point+30])}")

# Read the App code from standalone
with open(os.path.join(wd, "暑期作业_七年级预习.html"), "r", encoding="utf-8-sig") as f:
    standalone = f.read()
scripts = re.findall(r"<script>(.*?)</script>", standalone, re.DOTALL)
app_script = None
for s in scripts:
    if "var App" in s and "currentDay" in s:
        app_script = s
        break

print(f"\nApp script length: {len(app_script)} chars")
print(f"App script starts: {app_script[:80]}")
print(f"App script ends: {app_script[-80:]}")
