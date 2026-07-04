import sys, re
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Find Day 30
d30 = c.find("day:30,")
if d30 < 0:
    print("Day 30 not found!")
    sys.exit(1)

# Find the end of Day 30's block
end = c.find("</script>", d30)
# Find the last }) in this block
last_close = c.rfind("})", d30, end)
print("Day 30 last 300 chars:")
print(repr(c[last_close-300:last_close+10]))
