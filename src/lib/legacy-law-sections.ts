import type { LuatGT2024 } from '../model/LuatGT2024'

export function withLegacyLawSections(items: Record<string, LuatGT2024>) {
  // YAML parses unquoted IDs as numbers; the record keys preserve IDs such as 2.10.
  const result = Object.fromEntries(
    Object.entries(items).map(([id, item]) => [id, { ...item, id }])
  )
  // Keep old links, but never shadow genuine Article 58 provisions.
  for (const [id, item] of Object.entries(result)) {
    if (id.startsWith('57.')) {
      const legacyId = id.replace(/^57\./, '58.')
      if (!(legacyId in result)) result[legacyId] = item
    }
  }
  for (const point of ['a', 'b', 'c']) {
    if (result[`71.1.${point}`]) result[point] = result[`71.1.${point}`]
  }
  return result
}
