'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 to-primary-50 relative">
      <div className="container-custom mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* プロフィール画像のプレースホルダー */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">YN</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">
            Your Name
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            フロントエンドエンジニア・デザイナー
            <br />
            <span className="text-lg text-navy-600">
              ユーザー体験を重視したWebアプリケーション開発
            </span>
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-12">
            <Link 
              href="https://github.com/yourusername" 
              target="_blank"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-200"
            >
              <Github className="w-6 h-6 text-navy-700" />
            </Link>
            <Link 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-200"
            >
              <Linkedin className="w-6 h-6 text-navy-700" />
            </Link>
            <Link 
              href="mailto:your.email@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-200"
            >
              <Mail className="w-6 h-6 text-navy-700" />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/blog" className="btn-primary">
              ブログを見る
            </Link>
            <button onClick={scrollToAbout} className="btn-secondary">
              詳しく見る
            </button>
          </div>
        </div>
      </div>
      
      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-navy-600" />
      </div>
    </section>
  )
}

export default HeroSection