#!/bin/bash

# Check if input and output directories are provided as arguments
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <input_directory> <output_directory>"
  exit 1
fi

# Assign input and output directories to variables
input_directory="$1"
output_directory="$2"

# Check if input directory exists
if [ ! -d "$input_directory" ]; then
  echo "Error: Input directory '$input_directory' does not exist."
  exit 1
fi

# Create output directory if it doesn't exist
if [ ! -d "$output_directory" ]; then
  mkdir -p "$output_directory"
  echo "Created output directory: $output_directory"
fi

# Check if rsvg-convert is installed
if ! command -v rsvg-convert &>/dev/null; then
  echo "Error: rsvg-convert is not installed. Install it using your package manager (e.g., apt, yum, or brew)."
  exit 1
fi

# Find all SVG files in the input directory
svg_files=("$input_directory"/*.svg)

# Check if any SVG files are found
if [ ${#svg_files[@]} -eq 0 ]; then
  echo "No SVG files found in directory '$input_directory'."
  exit 1
fi

# Convert each SVG to PNG in the output directory
for svg_file in "${svg_files[@]}"; do
  # Get the base name (without extension) for the PNG file
  base_name="$(basename "$svg_file" .svg)"
  png_file="$output_directory/${base_name}.png"

  # Extract the viewBox attribute
  viewBox=$(grep -oP 'viewBox="\K[^"]+' "$svg_file")

  # Check if viewBox was found
  if [ -z "$viewBox" ]; then
    echo "Error: viewBox attribute not found in '$svg_file'."
    return
  fi

  # Split the viewBox into its components
  read -r x y width height <<<"$viewBox"

  # Compare width and height, then convert SVG to PNG
  if (($(echo "$width > $height" | bc -l))); then
    rsvg-convert "$svg_file" -o "$png_file" -w=630 --keep-aspect-ratio
  else
    rsvg-convert "$svg_file" -o "$png_file" -h=630 --keep-aspect-ratio
  fi

  # Check if conversion was successful
  if [ $? -eq 0 ]; then
    echo "Converted: $svg_file -> $png_file"
  else
    echo "Failed to convert: $svg_file"
  fi
done

echo "Conversion completed. PNG files are in '$output_directory'."
