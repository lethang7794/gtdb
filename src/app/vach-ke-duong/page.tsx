import Link from 'next/link'
import { getDataMarkings } from '@/lib/getMarkings'
import { getMarkingImage } from '@/lib/getMarkingImage'

export default async function Home() {
  const data = getDataMarkings()

  const entries = Object.entries(data)
  // const firstTen = entries.slice(0, 30)

  return (
    <main className="flex min-h-screen flex-col justify-between p-6 md:p-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] justify-between gap-4">
        {entries?.map(([key, val]) => {
          const imgUrl = getMarkingImage(val)

          console.log({ key, val })

          return (
            <Link
              href={`vach-ke-duong/${key}`}
              key={key}
              className="flex items-center justify-start flex-col border px-3 py-2 rounded-md"
            >
              <img
                alt={key}
                src={imgUrl}
                className="max-h-[150px] w-full order-none object-contain object-bottom mb-1"
              />
              <div className="text-sm text-balance text-center leading-5">
                {val.full_name}
              </div>
              <div className="flex-grow" />
              <div className="self-end text-gray-500 text-xs italic">{key}</div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
