import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ModalsProvider } from '@/providers/ModalsProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RNA Pro Painting',
  description: 'Professional Painting Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalsProvider>
          {children}
        </ModalsProvider>
      </body>
    </html>
  )
} 