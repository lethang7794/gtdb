import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex h-full flex-col justify-between m-6 md:m-8">
      <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline"
            href="/bbgt"
          >
            Biển báo giao thông
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline"
            href="/vach-ke-duong"
          >
            Vạch kẻ đường
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline"
            href="/thuat-ngu"
          >
            Thuật ngữ
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
            href="/vbpl/luat-GTDB-2008"
          >
            Luật Giao thông đường bộ (2008)
          </Link>
          <br />
          <span>(Có hiệu lực đến 31/12/2024)</span>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
            href="/vbpl/luat-TTATGTDB-2024"
          >
            Luật Trật tự, an toàn giao thông đường bộ (2024)
          </Link>
          <br />
          <span>(Có hiệu lực từ 1/1/2025)</span>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline"
            href="/vbpl/toc-do-khoang-cach-an-toan"
          >
            Quy định về tốc độ và khoảng cách an toàn (2023)
          </Link>
        </li>
      </ol>
    </div>
  )
}
