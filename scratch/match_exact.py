import os
from PIL import Image

# Metadata mapping of Unsplash keys to their photo source URLs (for reference)
unsplash_urls = {
    "unsplash_1_white_guy_white_shirt": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    "unsplash_2_glasses_purple_shirt": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    "unsplash_3_blue_shirt": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    "unsplash_4_woman_smiling": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    "unsplash_5_woman": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    "unsplash_6_woman": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
}

# Directories containing target images to compare
temp_dir = "/Users/samriddhi/Trams/hello-world/scratch/temp_images"
ellipse_dir = "/Users/samriddhi/Trams/hello-world/public"

def get_resized_grayscale(path, size=(16, 16)):
    """
    Opens an image, converts it to grayscale ('L' mode), and resizes it
    to a smaller grid size (default 16x16) to generate a feature vector.
    Returns a flat list of pixel intensity values.
    """
    img = Image.open(path).convert('L').resize(size)
    return list(img.getdata())

# Load local Ellipse avatars from the public directory
ellipses = {}
for i in range(263, 271):
    f = f"Ellipse_{i}.png"
    p = os.path.join(ellipse_dir, f)
    if os.path.exists(p):
        ellipses[f] = get_resized_grayscale(p)

# Load Unsplash reference images from the scratch temp directory
unsplash = {}
for fname in os.listdir(temp_dir):
    if fname.startswith("unsplash_") and fname.endswith(".jpg"):
        name = fname.replace(".jpg", "")
        p = os.path.join(temp_dir, fname)
        unsplash[name] = get_resized_grayscale(p)

# Compare each Ellipse avatar image with all downloaded Unsplash reference images
# using Mean Squared Error (MSE) on downsized grayscale pixel data.
for e_name, e_pix in ellipses.items():
    print(f"\n--- Matches for {e_name} ---")
    results = []
    for u_name, u_pix in unsplash.items():
        # Calculate MSE: average of squared pixel intensity differences
        err = sum((a - b) ** 2 for a, b in zip(e_pix, u_pix)) / len(e_pix)
        results.append((err, u_name))
    
    # Sort results by lowest error (closest match)
    results.sort()
    
    # Print the top 3 best matching Unsplash images
    for err, u_name in results[:3]:
         print(f"  {u_name}: MSE={err:.2f}")
