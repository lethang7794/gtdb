import React from 'react'

import BlogSummaryCard from '@/components/BlogSummaryCard'
import { getMarkmapList } from '@/helpers/markmap-file-helper'
import { BLOG_TITLE } from '@/constant/common'

import styles from './homepage.module.css'

export const metadata = {
  title: BLOG_TITLE,
}

async function Home() {
  const blogPosts = await getMarkmapList()

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>Sơ đồ mới nhất</h1>
        {blogPosts.map((blogPost) => {
          return <BlogSummaryCard key={blogPost.slug} {...blogPost} />
        })}
      </div>
    </div>
  )
}

export default Home
