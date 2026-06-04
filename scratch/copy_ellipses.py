import os
import shutil

src_dirs = [
    "/Users/samriddhi/Trams/hello-world/src/assets",
    "/Users/samriddhi/Downloads"
]
dest_dir = "/Users/samriddhi/Trams/hello-world/public"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

for s_dir in src_dirs:
    if not os.path.exists(s_dir):
        continue
    for fname in os.listdir(s_dir):
        if fname.startswith("Ellipse ") and fname.endswith(".png"):
            # Clean name: Ellipse_263.png
            clean_name = fname.replace(" ", "_")
            src_path = os.path.join(s_dir, fname)
            dest_path = os.path.join(dest_dir, clean_name)
            
            # Avoid overwriting if it already exists, unless size differs
            if os.path.exists(dest_path):
                if os.path.getsize(src_path) == os.path.getsize(dest_path):
                    continue
            
            shutil.copy2(src_path, dest_path)
            print(f"Copied {fname} to {clean_name}")
