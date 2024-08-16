import fs from 'node:fs'
import yaml from 'yaml'
import Image from 'next/image'
import { cache } from 'react'

const roadSigns = {
  P: [],
}

const directoryPath = 'road-signs'

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
  const entries = Object.entries(data.signs) as [string, string][]

  return (
    <main className="flex min-h-screen flex-col justify-between p-6 md:p-8">
      <div className="grid grid-cols-[repeat(auto-fill,_150px)] justify-between gap-4">
        {/* {signs.map((sign) => {
          return (
            <div
              key={sign}
              className="flex items-center justify-center flex-col border"
            >
              <img
                alt={sign}
                src={`${directoryPath}/${sign}`}
                className="max-h-full h-20 aspect-square border"
              />
              <div>{sign}</div>
            </div>
          )
        })} */}
        {entries?.map(([sign, val]) => {
          const imgUrl = `${directoryPath}/${sign.replace('.', '')}.svg`
          return (
            <div
              key={sign}
              className="flex items-center justify-start flex-col border"
            >
              <img
                alt={sign}
                src={imgUrl}
                className="max-h-full h-20 aspect-square border"
              />
              <div>{sign}</div>
              <div className="line-clamp-3 text-balance text-center">{val}</div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
