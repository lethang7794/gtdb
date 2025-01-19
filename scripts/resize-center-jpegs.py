#!/usr/bin/env python

from PIL import Image, ImageOps
import os

def resize_and_center_jpeg(input_dir, output_dir, target_width=1200, target_height=630, background_color=(255, 255, 255)):
  if not os.path.exists(output_dir):
    os.makedirs(output_dir)
  
  for file_name in os.listdir(input_dir):
    if file_name.lower().endswith((".jpg", ".jpeg")):
      file_path = os.path.join(input_dir, file_name)
      output_path = os.path.join(output_dir, file_name)
      
      with Image.open(file_path) as img:
        # Maintain aspect ratio while resizing
        img.thumbnail((target_width, target_height), Image.LANCZOS)
        
        # Create a new blank image with the target dimensions and background color
        new_img = Image.new("RGB", (target_width, target_height), background_color)
        
        # Calculate position to center the image
        x_offset = (target_width - img.width) // 2
        y_offset = (target_height - img.height) // 2
        
        # Paste the resized image onto the blank canvas
        new_img.paste(img, (x_offset, y_offset))
        
        # Save the result
        new_img.save(output_path, "JPEG")
        print(f"Processed {file_name}")

# Specify input and output directories
input_directory = "public/road-signs"
output_directory = "public/output-jpeg-center"

# Run the script
resize_and_center_jpeg(input_directory, output_directory)
