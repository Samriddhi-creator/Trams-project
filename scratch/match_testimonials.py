import os
import urllib.request
import zlib
import struct
import ssl

# Disable SSL verification to allow downloads in varying local developer environments
ssl._create_default_https_context = ssl._create_unverified_context

# URLs for Unsplash source images used as references for the avatars
unsplash_urls = {
    "unsplash_1 (50700...)": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    "unsplash_2 (50064...)": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    "unsplash_3 (53957...)": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    "unsplash_4 (49479...)": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    "unsplash_5 (51784...)": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    "unsplash_6 (53452...)": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
}

# Create temporary directory to save downloaded reference images if it doesn't exist
temp_dir = "/Users/samriddhi/Trams/hello-world/scratch/temp_images"
if not os.path.exists(temp_dir):
    os.makedirs(temp_dir)

# Download each Unsplash reference image locally
downloaded = {}
for name, url in unsplash_urls.items():
    local_path = os.path.join(temp_dir, name.split()[0] + ".jpg")
    try:
        urllib.request.urlretrieve(url, local_path)
        downloaded[name] = local_path
    except Exception as e:
        print(f"Failed to download {name}: {e}")

# Read and compare images using Python PIL library
try:
    from PIL import Image
    
    def get_resized_grayscale(path, size=(16, 16)):
        """
        Loads the image at the path, converts it to a single grayscale channel,
        and resizes it to 16x16 pixels. Returns flat pixel list.
        """
        img = Image.open(path).convert('L').resize(size)
        return list(img.getdata())
        
    print("Using PIL for image comparison...")
    
    ellipse_dir = "/Users/samriddhi/Trams/hello-world/public"
    ellipse_files = [f"Ellipse_{i}.png" for i in range(263, 271)]
    
    # Load and process target local Ellipse avatar images
    ellipses_data = {}
    for f in ellipse_files:
        p = os.path.join(ellipse_dir, f)
        if os.path.exists(p):
            ellipses_data[f] = get_resized_grayscale(p)
            
    # Load and process downloaded Unsplash reference images
    unsplash_data = {}
    for name, p in downloaded.items():
        unsplash_data[name] = get_resized_grayscale(p)
        
    # Compare each avatar to reference images to find the closest visual match (minimum MSE)
    for e_name, e_pixels in ellipses_data.items():
        best_match = None
        min_err = float('inf')
        for u_name, u_pixels in unsplash_data.items():
            err = sum((a - b) ** 2 for a, b in zip(e_pixels, u_pixels)) / len(e_pixels)
            if err < min_err:
                min_err = err
                best_match = u_name
        print(f"{e_name} closest to {best_match} (MSE={min_err:.2f})")
except ImportError:
    print("PIL not installed, let's install it or do basic byte analysis.")
