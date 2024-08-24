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
        <div>
          <Link className="text-5xl text-blue-500" href="/vbpl/luat-GTDB-2008">
            Luật Giao thông đường bộ 2008 (Có hiệu lực đến 31/12/2024)
          </Link>
        </div>
        <div>
          <Link
            className="text-5xl text-blue-500"
            href="/vbpl/luat-TTATGTDB-2024"
          >
            Luật Trật tự, an toàn giao thông đường bộ 2024 (Có hiệu lực từ
            1/1/2025)
          </Link>
        </div>
        <div>
          <Link
            className="text-5xl text-blue-500"
            href="/vbpl/toc-do-khoang-cach-an-toan"
          >
            Quy định về tốc độ và khoảng cách an toàn (2023)
          </Link>
        </div>
      </div>
    </div>
  )
}
