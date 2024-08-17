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
  // const firstTen = entries.slice(0, 30)

  return (
    <main className="flex min-h-screen flex-col justify-between p-6 md:p-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,_1fr))] justify-between gap-4">
        {entries?.map(([signKey, sign]) => {
          const imgUrl = sign.image
            ? `${directoryPath}/${sign.image}`
            : `${directoryPath}/${signKey.replace('.', '')}.svg`

          return (
            <div
              key={signKey}
              className="flex items-center justify-start flex-col border px-3 py-2 rounded-md"
            >
              <img
                alt={signKey}
                src={imgUrl}
                className="max-h-[150px] w-full order-none object-contain object-bottom mb-1"
              />
              <div className="line-clamp-3 text-balance text-center leading-5">
                {sign.name}
              </div>
              <div className="flex-grow" />
              <div className="self-end text-gray-500 text-xs italic">
                {signKey}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
