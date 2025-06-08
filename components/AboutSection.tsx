'use client'

import { Code, Palette, Users, Zap, Heart, Star, Target, Lightbulb } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary-600" />,
      title: "フロントエンド開発",
      description: "React, Next.js, TypeScriptを使用したモダンなWebアプリケーション開発",
      gradient: "from-blue-500 to-primary-600"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "UI/UXデザイン",
      description: "ユーザビリティを重視した直感的で美しいインターフェース設計",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "チーム開発",
      description: "アジャイル開発手法でのチームワークとコミュニケーション",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "パフォーマンス最適化",
      description: "高速で軽量なWebアプリケーションの実現",
      gradient: "from-yellow-500 to-orange-600"
    }
  ]

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "ユーザー第一",
      description: "常にユーザーの立場に立って考える"
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: "品質へのこだわり",
      description: "細部まで妥協しない完璧な仕上がり"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "目標達成",
      description: "チーム目標の確実な達成"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-green-500" />,
      title: "継続的学習",
      description: "新しい技術への挑戦と成長"
    }
  ]

  const techStack = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Next.js', level: 90, color: 'bg-gray-800' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Figma', level: 88, color: 'bg-purple-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' }
  ]

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title">
            <span className="gradient-text">自己紹介</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            ユーザー体験を最優先に、技術とデザインの力で価値を創造します
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                ユーザー体験を重視した開発
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                フロントエンドエンジニア・デザイナーとして、ユーザーにとって使いやすく、
                美しいWebアプリケーションの開発に取り組んでいます。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                技術的な実装だけでなく、ユーザビリティやアクセシビリティを考慮した
                設計を心がけ、ビジネス価値の最大化を目指しています。
              </p>
              
              {/* Tech Stack Progress */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">スキルレベル</h4>
                {techStack.map((tech, index) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{tech.name}</span>
                      <span className="text-sm text-gray-500">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${tech.color} transition-all duration-1000 delay-${index * 100}`}
                        style={{ width: isVisible ? `${tech.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`glass-card p-4 text-center transition-all duration-700 delay-${400 + index * 100} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                >
                  <div className="flex justify-center mb-2">
                    {value.icon}
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-1 text-sm">
                    {value.title}
                  </h5>
                  <p className="text-gray-600 text-xs">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`card card-hover p-8 text-center transition-all duration-700 delay-${600 + index * 100} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="glass-card p-8 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                <div className="text-gray-600">年の経験</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600">プロジェクト</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-600">技術スタック</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-600">情熱</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection