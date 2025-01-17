import Link from 'next/link'
import { EXTRA_LINKS, LINKS, USEFUL_LINKS } from '@/constant/homepage-links'
import { Badge } from '@/components/ui/badge'
import { SquareArrowOutUpRight } from 'lucide-react'
import BaseLink from '@/components/base-link'
import ShareButton, {
  ShareButtonWrapper,
} from '@/components/block/share-button'

export default async function Home() {
  return (
    <>
      <div className="flex h-full flex-col justify-start ">
        <div className="container pb-8">
          {/* <h1 className="self-center text-4xl font-bold">
      
          </h1> */}
          <h2 className="mt-8 text-3xl">Văn bản pháp luật</h2>
          <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
            {LINKS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                      href={item.url}
                    >
                      {item.name}
                    </BaseLink>
                    {/* {item.tags?.map((tag) => {
                      return (
                        <Badge key={tag} className="h-fit w-min">
                          {tag}
                        </Badge>
                      )
                    })} */}
                  </div>
                  {item.description ? (
                    <div className="text-base text-gray-500 italic">
                      ({item.description})
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ol>
          <h2 className="mt-8 text-3xl">Tổng hợp</h2>
          <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
            {USEFUL_LINKS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                      href={item.url}
                    >
                      {item.name}
                    </BaseLink>
                    {/* {item.tags?.map((tag) => {
                      return (
                        <Badge key={tag} className="h-fit w-min">
                          {tag}
                        </Badge>
                      )
                    })} */}
                  </div>
                  {item.description ? (
                    <div className="text-base text-gray-500 italic">
                      ({item.description})
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ol>
          <h2 className="mt-8 text-3xl">Links</h2>
          <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
            {EXTRA_LINKS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                      href={item.url}
                    >
                      {item.name}
                    </BaseLink>
                    {/* {item.tags?.map((tag) => {
                      return (
                        <Badge key={tag} className="h-fit w-min">
                          {tag}
                        </Badge>
                      )
                    })} */}
                  </div>
                  {item.description ? (
                    <div className="text-base text-gray-500 italic">
                      ({item.description})
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
      <ShareButtonWrapper>
        <ShareButton title="gtdb" />
      </ShareButtonWrapper>
    </>
  )
}
