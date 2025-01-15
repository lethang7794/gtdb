import React from 'react'
import dynamic from 'next/dynamic'

import Markmap from '@/components/markmap'
import { getMarkmapList, loadMarkmap } from '@/helpers/markmap-file-helper'

import styles from './postSlug.module.css'
import { env } from '@/env.mjs'

export async function generateStaticParams() {
  const items = await getMarkmapList()
  return Object.keys(items).map((key) => ({ slug: key }))
}

export async function generateMetadata({ params }) {
  const blogPost = await loadMarkmap(params.postSlug)
  return {
    title: `${blogPost.frontmatter.title} | ${env.NEXT_PUBLIC_BRAND_SHORT}`,
    description: blogPost.frontmatter.abstract,
  }
}

async function BlogPost({ params }) {
  const blogPost = await loadMarkmap(params.postSlug)

  return (
    <div>
      <Markmap data={blogPost.content} classNameSvg={styles.markmapSVG} />
    </div>
  )
}

export default BlogPost
