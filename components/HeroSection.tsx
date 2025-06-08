'use client'

import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary-200/20 to-accent-200/20 rounded-full blur-3xl"></div>

      <div className="container-custom mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left side - Speech bubble with main message */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-8">
              {/* Greeting */}
              <div className="speech-bubble max-w-md">
                <p className="text-gray-600 text-lg mb-2">こんにちは！</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                  <span className="gradient-text">Your Name</span> です
                </h1>
                <p className="text-gray-600">
                  フロントエンドエンジニア・デザイナーとして活動しています
                </p>
              </div>

              {/* Main message */}
              <div className="speech-bubble max-w-lg ml-8">
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  ユーザー体験を重視した<br />
                  <span className="gradient-text">美しく機能的な</span><br />
                  Webアプリケーション開発
                </h2>
                <p className="text-gray-600 mb-6">
                  技術とデザインの力で、ビジネス価値を最大化し、
                  ユーザーに愛されるプロダクトを創造します。
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Next.js', 'TypeScript', 'Figma', 'Tailwind'].map((tech) => (
                    <span key={tech} className="badge-primary">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Location & Availability */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>東京</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>フリーランス可能</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 ml-4">
                <button onClick={scrollToAbout} className="btn-primary">
                  <span>ポートフォリオを見る</span>
                  <ArrowDown className="w-4 h-4 ml-2" />
                </button>
                <Link href="/blog" className="btn-secondary">
                  ブログを読む
                </Link>
                <a href="/resume.pdf" download className="btn-ghost">
                  <Download className="w-4 h-4 mr-2" />
                  履歴書
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center space-x-4 ml-4">
                <span className="text-sm text-gray-500">フォローする:</span>
                <Link 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link 
                  href="mailto:your.email@example.com"
                  className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative flex justify-center lg:justify-end">
              {/* Main profile image container */}
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl blur-lg opacity-20 animate-pulse-slow"></div>
                
                {/* Profile image placeholder */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-3xl shadow-soft-xl overflow-hidden">
                  {/* Image overlay with initials */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-secondary-600/90 flex items-center justify-center">
                    <span className="text-6xl lg:text-7xl font-bold text-white text-shadow-lg">YN</span>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-6 right-6 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                    <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Available</span>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center floating-element">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center floating-element" style={{animationDelay: '1s'}}>
                  <span className="text-xl">🎨</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center floating-element" style={{animationDelay: '2s'}}>
                  <span className="text-lg">💡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection