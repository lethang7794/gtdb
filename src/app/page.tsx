import Link from 'next/link'
import { LINKS, USEFUL_LINKS } from '@/constant/homepage-links'
import { Badge } from '@/components/ui/badge'

export default async function Home() {
  return (
    <div className="flex h-full flex-col justify-start m-6 md:m-8">
      <h1 className="self-center text-4xl font-bold">
        An toàn giao thông đường bộ
      </h1>

      <h2 className="text-3xl">Luật và văn bản pháp luật:</h2>
      <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
        {LINKS.map((item) => {
          return (
            <li key={item.name + item.url}>
              <div className="flex gap-2">
                <Link
                  className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  href={item.url}
                >
                  {item.name}
                </Link>
                {item.tags?.map((tag) => {
                  return (
                    <Badge key={tag} className="h-fit w-min">
                      {tag}
                    </Badge>
                  )
                })}
              </div>
              {item.description ? (
                <div className="text-gray-500 italic">({item.description})</div>
              ) : null}
            </li>
          )
        })}
      </ol>

      <h2 className="text-3xl mt-4">Thông tin liên quan:</h2>
      <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
        {USEFUL_LINKS.map((item) => {
          return (
            <li key={item.name + item.url}>
              <div className="flex gap-2">
                <Link
                  className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  href={item.url}
                >
                  {item.name}
                </Link>
                {item.tags?.map((tag) => {
                  return (
                    <Badge key={tag} className="h-fit w-min">
                      {tag}
                    </Badge>
                  )
                })}
              </div>
              {item.description ? (
                <div className="text-gray-500 italic">({item.description})</div>
              ) : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
