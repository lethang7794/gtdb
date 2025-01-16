import React from 'react'

import Markmap from '@/components/markmap'
import { processStaticParams } from '@/lib/static-params'
import { getMarkmapById, getMarkmaps } from '@/service/markmap'

import styles from './slug.module.css'
import { env } from '@/env.mjs'

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  const items = await getMarkmaps()
  const params = items.map((item) => ({ slug: item.slug }))
  return processStaticParams(params)
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const item = await getMarkmapById(slug)
  return {
    title: `${item.frontmatter.title} | ${env.NEXT_PUBLIC_BRAND_SHORT}`,
    description: item.frontmatter.abstract,
  }
}

async function MarkmapPost({ params }: Props) {
  const { slug } = await params
  const item = await getMarkmapById(slug)

  return (
    <div>
      <Markmap data={item.content} classNameSvg={styles.markmapSVG} />
    </div>
  )
}

export default MarkmapPost
