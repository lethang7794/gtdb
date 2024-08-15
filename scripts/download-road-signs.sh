#!/bin/bash

url="https://vi.wikipedia.org/wiki/Bi%E1%BB%83n_b%C3%A1o_giao_th%C3%B4ng_t%E1%BA%A1i_Vi%E1%BB%87t_Nam"

dest=$1

temp_dir=$(mktemp --directory)

# Get HTML of page, get all of the image links, and make sure URLs have HTTPs
curl $url | grep -E "(https?:)?//[^/\s]+/\S+\.(jpg|png|gif|svg)" -o | sed "s/^(https?)?\/\//https\:\/\//g" -r >"$temp_dir"/image-urls.txt

# Get full-res URLs instead of thumbnails and re-saving $temp_dir/image-urls.txt
sed -E "s/\/thumb//g; s/\/[0-9]+px-.+\.(jpg|png)$//g" "$temp_dir"/image-urls.txt | uniq >"$temp_dir"/image-urls-uniq.txt

# Only keep Vietnam road sign
grep Vietnam_road_sign "$temp_dir"/image-urls-uniq.txt >"$temp_dir"/vietnam-road-sign-urls.txt

# Downloading Images
echo "Downloading images"
wget -i "$temp_dir"/vietnam-road-sign-urls.txt -P "$temp_dir"/road-signs/

# Remove the prefix in file names
prefix="Vietnam_road_sign_"
for file in "$temp_dir"/road-signs/"$prefix"*; do
  new_name="${file//$prefix/}"
  mv "$file" "$new_name"
done

# Move images from temp_dir to the input user choose
echo "Move images to destination"
mv -f "$temp_dir"/road-signs/** "$dest"
