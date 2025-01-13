import { LawSectionPreview } from '@/components/block/law-section-preview'
import { LuatGT2024PreviewRoot } from '@/components/block/luat-gt-2024-preview-root'
import { NghiDinh168PreviewRoot } from '@/components/block/nghi-dinh-168-preview-root'
import { luatGT2024SectionExplainComponents } from '@/lib/luat-gt-2024-section-explain-detail'
import { nd168SectionExplainComponents } from '@/lib/nd-168-section-explain-detail'
import { getLuatGT2024ById } from '@/service/luat-giao-thong-2024'
import { getND168ById } from '@/service/nghi-dinh-168'
import { ImageResponse } from 'next/og'
import { toHex, key } from '@/lib/crypto'
import { LAW_ABBR } from '@/constant/laws'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const law = searchParams.get('l')
    const section = searchParams.get('s')
    const id = law
    const token = searchParams.get('t')

    const verifyToken = toHex(
      await crypto.subtle.sign(
        'HMAC',
        await key,
        new TextEncoder().encode(JSON.stringify({ id }))
      )
    )

    if (token !== verifyToken) {
      return new Response('Invalid token.', { status: 401 })
    }

    if (!law && !section) {
      return new Response('Not found', {
        status: 404,
      })
    }

    if (law === LAW_ABBR.luatGT2024) {
      if (!section) {
        return new ImageResponse(<LuatGT2024PreviewRoot />, {
          width: 1200,
          height: 630,
        })
      }

      const item = await getLuatGT2024ById(section)
      if (!item) {
        return new Response('Not found', {
          status: 404,
        })
      }

      const { short1, short2, short3, detail1, detail2, detail3, highlight } =
        await luatGT2024SectionExplainComponents(section)
      return new ImageResponse(
        <LawSectionPreview
          short1={short1}
          short2={short2}
          short3={short3}
          detail1={detail1}
          detail2={detail2}
          detail3={detail3}
          highlight={highlight}
          law="Luật TTATGTĐB 2024"
        />,
        {
          width: 1200,
          height: 630,
        }
      )
    }

    if (law === LAW_ABBR.nghiDinh168) {
      if (!section) {
        return new ImageResponse(<NghiDinh168PreviewRoot />, {
          width: 1200,
          height: 630,
        })
      }

      const item = await getND168ById(section)
      if (!item) {
        return new Response('Not found', {
          status: 404,
        })
      }

      const { short1, short2, short3, detail1, detail2, detail3, highlight } =
        await nd168SectionExplainComponents(section)
      return new ImageResponse(
        <LawSectionPreview
          short1={short1}
          short2={short2}
          short3={short3}
          detail1={detail1}
          detail2={detail2}
          detail3={detail3}
          highlight={highlight}
          law="Nghị định 168/2024"
        />,
        {
          width: 1200,
          height: 630,
        }
      )
    }

    return new Response('Access Denied', {
      status: 403,
    })

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
