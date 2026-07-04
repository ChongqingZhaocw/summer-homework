import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")
wd = r"C:\Users\zcw76\Documents\小升初暑期作业安排"

# Read the root index.html
with open(os.path.join(wd, "index.html"), "r", encoding="utf-8-sig") as f:
    root = f.read()

# Read the App code
with open(os.path.join(wd, "app_code.js"), "r", encoding="utf-8-sig") as f:
    app_code = f.read()

# Find the insertion point - after COURSE_DATA blocks but before scripts that reference App
# The COURSE_DATA ends with </script>, then other scripts follow
# We need to insert App definition AFTER the first </script> after COURSE_DATA 
# but BEFORE any script that references App.xxx

# Find all script blocks
scripts = [(m.start(), m.end()) for m in re.finditer(r'<script>', root)]

# Find the COURSE_DATA definition's closing </script>
first_script = scripts[0]
# This is "var COURSE_DATA = []" 
# Find its closing
end_cd = root.find("</script>", first_script[1]) + 9

print(f"COURSE_DATA var script ends at: {end_cd}")

# Find where the first App reference is
first_app_ref = root.find("App.")
if first_app_ref > 0:
    print(f"First App. reference at: {first_app_ref}")
    # Find the <script> tag just before this
    prev_script = root.rfind("<script>", 0, first_app_ref)
    print(f"Script tag before App ref: {prev_script}")
    
    # The App definition should go right after the </script> that closes the script before first App ref
    prev_script_end = root.find("</script>", prev_script) + 9
    print(f"Script end before App ref: {prev_script_end}")
    
    # Show what's there
    print(f"Content at insertion point: {repr(root[prev_script_end:prev_script_end+80])}")
