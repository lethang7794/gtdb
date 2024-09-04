import Link from 'next/link'
import { LINKS } from '@/constant/homepage-links'

export default async function Home() {
  return (
    <div className="flex h-full flex-col justify-between m-6 md:m-8">
      <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
        {LINKS.map((item) => {
          return (
            <li key={item.name + item.url}>
              <Link
                className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                href={item.url}
              >
                {item.name}
              </Link>
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
