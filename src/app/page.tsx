import fs from 'node:fs'
import yaml from 'yaml'
import Image from 'next/image'
import { cache } from 'react'

const directoryPath = 'road-signs'

type RoadSign = {
  name: string
  image?: string
  including?: string
  note?: string
  similar?: string[]
  related?: string[]
}

function getRoadSigns() {
  return fs.readdirSync(`public/${directoryPath}`)
}
function getRoadSignsFromYaml() {
  const file = fs.readFileSync('data/signs.yaml').toString()
  const data = yaml.parse(file)
  return data
}

const getRoadSignsCached = cache(getRoadSigns)
const getRoadSignsFromYamlCached = cache(getRoadSignsFromYaml)

export default async function Home() {
  // const signs = getRoadSignsCached()
  const data = getRoadSignsFromYamlCached()

  const entries = Object.entries(data.signs) as [string, RoadSign][]

  return (
    <main className="flex min-h-screen flex-col justify-between p-6 md:p-8">
      <div className="grid grid-cols-[repeat(auto-fill,_160px)] justify-between gap-4">
        {entries?.map(([signKey, sign]) => {
          const imgUrl = sign.image
            ? `${directoryPath}/${sign.image}`
            : `${directoryPath}/${signKey.replace('.', '')}.svg`

          return (
            <div
              key={signKey}
              className="flex items-center justify-start flex-col border"
            >
              <img
                alt={signKey}
                src={imgUrl}
                className="max-h-full h-20 aspect-square border object-contain"
              />
              <div>{signKey}</div>
              <div className="line-clamp-3 text-balance text-center">
                {sign.name}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
