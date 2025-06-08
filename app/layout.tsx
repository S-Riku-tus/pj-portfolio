import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'エンジニア・デザイナーのポートフォリオサイト',
  keywords: ['エンジニア', 'デザイナー', 'ポートフォリオ', 'Next.js', 'React'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-navy-900 antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-navy-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}