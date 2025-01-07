import fs from 'node:fs'
import path from 'node:path'

const NGHI_DINH_168_MIND_MAP = 'src/content/nghi-dinh-168-mind-map.md'

export const getNghiDinh168MindMap = () => {
  const filePath = path.resolve(process.cwd(), NGHI_DINH_168_MIND_MAP)
  return fs.readFileSync(filePath, 'utf-8').toString()
}
