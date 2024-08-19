export type Marking = {
  name: string
  including?: string
  note?: string
  similar?: string[]
  related?: string[]
  short_name: string
  full_name: string
  aka: string
  image: string
  attribute: MarkingAttribute
  group: string[]
  meaning: string | string[]
}

type MarkingAttribute = {
  number_of_lines: string
  type: string
  color: string
}
