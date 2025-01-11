import React from 'react'
import dynamic from 'next/dynamic'

import Markmap from '@/components/markmap'
import BlogHero from '@/components/BlogHero'
import { loadMarkmap } from '@/helpers/markmap-file-helper'

const DivisionGroupsDemo = dynamic(
  () => import('@/components/DivisionGroupsDemo')
)
const CircularColorsDemo = dynamic(
  () => import('@/components/CircularColorsDemo')
)

import styles from './postSlug.module.css'

export async function generateMetadata({ params }) {
  const blogPost = await loadMarkmap(params.postSlug)
  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract,
  }
}

async function BlogPost({ params }) {
  const blogPost = await loadMarkmap(params.postSlug)

  return <Markmap data={blogPost.content} />
}

export default BlogPost
