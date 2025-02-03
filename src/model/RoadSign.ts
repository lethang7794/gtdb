type RoadSignType = 'group' | 'sign'

export type RoadSign = {
  type?: RoadSignType
  docs_name?: string
  docs_source?: string
  docs?: string
  docs_mdx?: string
  name: string
  image?: string
  including?: string
  note?: string
  similar?: string[]
  related?: string[]
  group_meaning?: string
  group_ref?: string
}
