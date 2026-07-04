import sys, re
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Show the boundaries between script blocks
script_tags = [(m.start(), m.end()) for m in re.finditer(r'<script>', c)]
script_closes = [(m.start(), m.end()) for m in re.finditer(r'</script>', c)]

# Show the area around block 1 and 2 transition (Day 1 -> Day 2)
# Block 1 (COURSE_DATA = []) ends with </script>, then <script> for Day 1
d1_start = 45221
d1_end = c.find("</script>", d1_start)
d2_start = c.find("<script>", d1_end)

print("Transition from Day 1 script to Day 2 script:")
print(f"Day 1 block ends at {d1_end}")
print(f"Content around boundary: {repr(c[d1_end-30:d2_start+30])}")

print("\n\nDay 2 script block start:")
print(f"Block at {d2_start}")
d2_end = c.find("</script>", d2_start)
d2_block = c[d2_start+8:d2_end]  # <script> is 8 chars
print(f"First 200 chars: {repr(d2_block[:200])}")
print(f"Last 100 chars: {repr(d2_block[-100:])}")

# Also check the first block
first_block = c[45167:45221]
print(f"\n\nFirst block (COURSE_DATA = []): {repr(first_block[:200])}")
