import sys, re
sys.stdout.reconfigure(encoding="utf-8")
path = r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html"
with open(path, "r", encoding="utf-8-sig") as f:
    content = f.read()
insert_point = 137996
print(f"Insert point: {insert_point}")
print(f"File size: {len(content)}")
print("Ready to generate content")
