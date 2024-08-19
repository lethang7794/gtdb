import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
  return (
    <>
      <div>
        <Link href="/bbgt">Bien bao giao thong</Link>
      </div>
      <div>
        <Link href="/vach-ke-duong">Vach ke duong</Link>
      </div>
    </>
  )
}
