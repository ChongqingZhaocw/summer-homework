import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"

# Read the root index.html
with open(os.path.join(wd, "index.html"), "r", encoding="utf-8-sig") as f:
    root = f.read()

# Read the App code from standalone version
with open(os.path.join(wd, "暑期作业_七年级预习.html"), "r", encoding="utf-8-sig") as f:
    standalone = f.read()

# Extract App definition
scripts = re.findall(r"<script>(.*?)</script>", standalone, re.DOTALL)
app_script = None
for s in scripts:
    if "var App" in s and "currentDay" in s:
        app_script = s
        break

if app_script is None:
    print("ERROR: Could not find App definition in standalone")
    sys.exit(1)

# Insert point: after script #7 (last COURSE_DATA block at position 218217)
insert_point = 218217

# Create the new script block
new_block = f"\n<script>\n{app_script}\n</script>\n"

# Insert
new_content = root[:insert_point] + new_block + root[insert_point:]
backup = wd + "/index.html.pre_app_fix"
os.rename(wd + "/index.html", backup)
with open(wd + "/index.html", "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Inserted App definition ({len(app_script)} chars) at position {insert_point}")
print(f"New file size: {len(new_content)} bytes")
print(f"Backup saved: {backup}")

# Verify
with open(wd + "/index.html", "r", encoding="utf-8-sig") as f:
    ver = f.read()
app_count = ver.count("var App")
init_count = ver.count("App.init")
print(f"\nVerification: var App={app_count}, App.init={init_count}")
