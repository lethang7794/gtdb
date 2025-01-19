#!/usr/bin/env python

import os
import xml.etree.ElementTree as ET

def resize_and_center_svgs(input_dir, output_dir, target_width=1200, target_height=630):
  if not os.path.exists(output_dir):
    os.makedirs(output_dir)
  
  for file_name in os.listdir(input_dir):
    if file_name.endswith(".svg"):
      file_path = os.path.join(input_dir, file_name)
      tree = ET.parse(file_path)
      root = tree.getroot()
      
      # Parse the current viewBox
      viewBox = root.get("viewBox", "0 0 0 0").split()
      if len(viewBox) != 4:
        print(f"Skipping {file_name}: invalid viewBox")
        continue
      
      x_min, y_min, width, height = map(float, viewBox)
      
      # Calculate scaling factors
      scale_x = target_width / width
      scale_y = target_height / height
      scale = min(scale_x, scale_y)  # Maintain aspect ratio
      
      # New dimensions after scaling
      new_width = width * scale
      new_height = height * scale
      
      # Calculate offsets to center the content
      x_offset = (target_width - new_width) / 2
      y_offset = (target_height - new_height) / 2
      
      # Update attributes
      root.set("width", str(target_width))
      root.set("height", str(target_height))
      root.set(
          "viewBox",
          f"{x_min - x_offset/scale} {y_min - y_offset/scale} {width} {height}"
      )
      
      # Save to output directory
      output_path = os.path.join(output_dir, file_name)
      tree.write(output_path)
      print(f"Processed {file_name}")

# Specify input and output directories
input_directory = "public/output-v3"
output_directory = "public/output-center"

# Run the script
resize_and_center_svgs(input_directory, output_directory)