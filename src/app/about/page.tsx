import { Logo } from '@/components/block/logo'

export default function AboutPage() {
  return (
    <main className="flex h-full flex-col justify-between p-6 md:p-8">
      <div className="container">
        <h1 className="text-center text-4xl font-bold">Giới thiệu</h1>
        <p className="mt-4 text-2xl text-gray-500">
          <Logo className="h-8" /> là dự án cá nhân <em>phi lợi nhuận</em> nhằm
          phổ biến các kiến thức về an toàn giao thông đường bộ đến tất cả mọi
          người dân tham gia giao thông ở Việt Nam.
        </p>
        <p className="mt-4 text-2xl text-gray-500">
          - Dự án khởi đầu là nơi để tác giả tra cứu luật, tài liệu, biển báo
          giao thông... trong quá trình học lái xe vào giữa năm 2024.
        </p>
        <p className="mt-4 text-2xl text-gray-500">
          - Đến đầu năm 2025, khi Nghị định 168/2024 được thông qua và có hiệu
          lực.
        </p>
      </div>
    </main>
  )
}
