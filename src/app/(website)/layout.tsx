import MainLayout from '@/components/layout/MainLayout'

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
} 