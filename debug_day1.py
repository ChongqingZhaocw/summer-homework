import sys, re
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Find Day 1 and Day 2 boundaries
entries = [(m.start(), int(re.search(r"day:\s*(\d+)", c[m.start():m.start()+200]).group(1))) for m in re.finditer(r"COURSE_DATA\.push\(", c)]
d1_pos = entries[0][0]
d2_pos = entries[1][0]
d3_pos = entries[2][0] if len(entries) > 2 else len(c)

# Show the tail of Day 1 (last 200 chars)
d1_tail = c[d1_pos:d2_pos][-200:]
print("Day 1 tail:")
print(repr(d1_tail))
# Count backticks in Day 1
d1_block = c[d1_pos:d2_pos]
bt_count = d1_block.count("`")
print(f"\nDay 1 backticks: {bt_count}")

# Show the beginning of Day 2
d2_head = c[d2_pos:d2_pos+200]
print("\nDay 2 head:")
print(repr(d2_head))

# Check if Day 1 backtick count is odd
# This would mean Day 1's backtick template literal is closed in Day 2
if bt_count % 2 != 0:
    # Find the last backtick in Day 1
    last_bt = d1_block.rfind("`")
    context_before = d1_block[max(0,last_bt-50):last_bt]
    print(f"\nLast backtick at offset {last_bt}: ...{repr(context_before)}")
    # Check if this is a body: template
    if "body:" in context_before:
        print("Last backtick is from a body: template - likely NOT closed within Day 1")
        print("This is a BUG! body: template literal not closed in Day 1")
