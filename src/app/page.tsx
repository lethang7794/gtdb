import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <div>
          <Link className="text-5xl text-blue-500" href="/bbgt">
            Biển báo giao thông
          </Link>
        </div>
        <div>
          <Link className="text-5xl text-blue-500" href="/vach-ke-duong">
            Vạch kẻ đường
          </Link>
        </div>
        <div>
          <Link className="text-5xl text-blue-500" href="/thuat-ngu">
            Thuật ngữ
          </Link>
        </div>
      </div>
    </div>
  )
}
