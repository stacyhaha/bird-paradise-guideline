#!/usr/bin/env python3
"""
Script to check which bird images are missing
"""

import os
import re

# Read the script.js file to extract all bird IDs
def extract_bird_ids():
    with open('script.js', 'r') as f:
        content = f.read()
    
    # Find all bird IDs
    pattern = r'id: "([^"]*)"'
    bird_ids = re.findall(pattern, content)
    return bird_ids

def check_missing_images():
    bird_ids = extract_bird_ids()
    missing_images = []
    existing_images = []
    
    print(f"Found {len(bird_ids)} bird IDs in script.js")
    print("Checking for corresponding image files...\n")
    
    for bird_id in bird_ids:
        image_path = f"images/{bird_id}.jpg"
        if os.path.exists(image_path):
            existing_images.append(bird_id)
            print(f"✅ {bird_id}.jpg")
        else:
            missing_images.append(bird_id)
            print(f"❌ {bird_id}.jpg - MISSING")
    
    print(f"\n📊 Summary:")
    print(f"✅ Existing images: {len(existing_images)}")
    print(f"❌ Missing images: {len(missing_images)}")
    
    if missing_images:
        print(f"\nMissing images:")
        for bird_id in missing_images:
            print(f"  - {bird_id}.jpg")
    
    return missing_images, existing_images

if __name__ == "__main__":
    missing, existing = check_missing_images()
