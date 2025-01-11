import React from 'react'
import Link from 'next/link'

import { MARKMAPS_PATH } from '@/constant/path'
import Card from '@/components/Card'
import { getHumanizedDate } from '@/helpers/date-helpers'

import styles from './BlogSummaryCard.module.css'

type BlogSummaryCardProps = {
  slug?: string
  title?: string
  publishedOn?: string
  abstract?: string
}

function BlogSummaryCard({ slug, title, publishedOn, abstract }: BlogSummaryCardProps) {
  const href = `/${MARKMAPS_PATH}/${slug}`
  const humanizedDate = getHumanizedDate(publishedOn)

  return (
    <Card className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <time dateTime={publishedOn}>{humanizedDate}</time>
      <p>
        {abstract}{' '}
        <Link href={href} className={styles.continueReadingLink}>
          Continue reading <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  )
}

export default BlogSummaryCard
