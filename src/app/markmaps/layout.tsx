import Header from '@/components/block/header'
import BlankLayout from '@/components/layout/blank-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlankLayout>
      <Header />
      {children}
    </BlankLayout>
  )
}
