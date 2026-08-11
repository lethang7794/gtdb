type MarkingType = 'group' | 'sub_group' | 'item'

export type Marking = {
  id: string
  type?: MarkingType
  group_name: string
  short_name: string
  full_name: string
  official_name: string
  aka: string
  image: string
  image_orientation: Orientation
  image_alt?: string
  image_extra?: string
  image_extra_alt?: string
  attribute: MarkingAttribute
  group: string[]
  meaning: string | { type: string; meaning: string }[]
  docs: string
}

type Orientation = 'portrait' | 'landscape' | 'square'

export enum MarkingImage {
  main = 'main',
  extra = 'extra',
}

export type MarkingsByKey = Record<string, Marking>

type MarkingAttribute = {
  number_of_lines: string
  type: string
  color: string
}
