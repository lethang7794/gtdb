#!/bin/bash

# Check if directory is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

# Assign the provided directory to a variable
directory="$1"

# Check if the directory exists
if [ ! -d "$directory" ]; then
  echo "Error: Directory '$directory' does not exist."
  exit 1
fi

# Check if rsvg-convert is installed
if ! command -v rsvg-convert &>/dev/null; then
  echo "Error: rsvg-convert is not installed. Install it using your package manager (e.g., apt, yum, or brew)."
  exit 1
fi

# Find all SVG files in the directory
svg_files=("$directory"/*.svg)

# Check if any SVG files are found
if [ ${#svg_files[@]} -eq 0 ]; then
  echo "No SVG files found in directory '$directory'."
  exit 1
fi

# Convert each SVG to PNG
for svg_file in "${svg_files[@]}"; do
  # Get the base name (without extension) for the PNG file
  base_name="$(basename "$svg_file" .svg)"
  png_file="$directory/${base_name}.png"

  # Convert SVG to PNG
  rsvg-convert "$svg_file" -o "$png_file" -w=630 --keep-aspect-ratio

  # Check if conversion was successful
  if [ $? -eq 0 ]; then
    echo "Converted: $svg_file -> $png_file"
  else
    echo "Failed to convert: $svg_file"
  fi
done

echo "Conversion completed."
