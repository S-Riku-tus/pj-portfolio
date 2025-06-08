import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Name - フロントエンドエンジニア・デザイナー',
  description: 'ユーザー体験を重視したWebアプリケーション開発を手がけるフロントエンドエンジニア・デザイナーのポートフォリオサイトです。React、Next.js、TypeScriptを使用したモダンな開発を行っています。',
  keywords: ['フロントエンドエンジニア', 'デザイナー', 'ポートフォリオ', 'Next.js', 'React', 'TypeScript', 'UI/UX', 'Webアプリケーション開発'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Your Name - フロントエンドエンジニア・デザイナー',
    description: 'ユーザー体験を重視したWebアプリケーション開発を手がけるポートフォリオサイト',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - フロントエンドエンジニア・デザイナー',
    description: 'ユーザー体験を重視したWebアプリケーション開発を手がけるポートフォリオサイト',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <Header />
        <main>
          {children}
        </main>
        <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-50"></div>
          <div className="container-custom mx-auto px-6 py-12 relative z-10">
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">Your Name</h3>
                <p className="text-gray-300 mb-6">
                  ユーザー体験を重視したWebアプリケーション開発
                </p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:your.email@example.com"
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  >
                    Email
                  </a>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8">
                <p className="text-gray-400 text-sm">
                  &copy; 2024 Your Name. All rights reserved. | Made with ❤️ using Next.js
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}