import sys
sys.stdout.reconfigure(encoding="utf-8")
c = open(r"C:\Users\zcw76\Documents\小升初暑期作业安排\index.html", "r", encoding="utf-8-sig").read()

# Check block at 247648
end = c.find("</script>", 247648)
block = c[247648+8:end]  # skip <script>
print(f"Block at 247648: {len(block)} chars")
print("First 500:")
print(block[:500])
print("\n---")
# Search for 'App' in this block
app_idx = block.find("App")
print(f"First 'App' at offset {app_idx}")
print(block[app_idx:app_idx+200])
