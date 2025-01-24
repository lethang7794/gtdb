#!/usr/bin/env just --justfile

SRC_DIR_ND_168 := "out/vbpl/nghi-dinh-168-2024"
DEST_DIR_ND_168 := "public/og/vbpl/nghi-dinh-168-2024"
SRC_DIR_LUAT_2024 := "out/vbpl/luat-TTATGTDB-2024"
DEST_DIR_LUAT_2024 := "public/og/vbpl/luat-TTATGTDB-2024"

build_opengraph_images:
  next build

copy_opengraph_images:
  # Use rsync to copy only .png files, preserving the directory structure
  mkdir -p "{{DEST_DIR_ND_168}}"
  rsync -av --include="*/" --include="*.png" --exclude="*" "{{SRC_DIR_ND_168}}/" "{{DEST_DIR_ND_168}}/"

  # Use rsync to copy only .png files, preserving the directory structure
  mkdir -p "{{DEST_DIR_LUAT_2024}}"
  rsync -av --include="*/" --include="*.png" --exclude="*" "{{SRC_DIR_LUAT_2024}}/" "{{DEST_DIR_LUAT_2024}}/"
