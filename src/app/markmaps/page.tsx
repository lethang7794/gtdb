import React from 'react'

import BlogSummaryCard from '@/components/BlogSummaryCard'
import { getMarkmaps } from '@/service/markmap'

import styles from './homepage.module.css'

export const metadata = {
  title: 'Sơ đồ',
}

async function Home() {
  const blogPosts = await getMarkmaps()

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
