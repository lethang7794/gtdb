export type Marking = {
  short_name: string
  full_name: string
  aka: string
  image: string
  image_alt?: string
  image_extra?: string
  image_extra_alt?: string
  attribute: MarkingAttribute
  group: string[]
  meaning: string | string[]
  docs: string
}

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
