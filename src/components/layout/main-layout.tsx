export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-full flex-col justify-between p-6 md:p-8">
      {children}
    </main>
  )
}
