'use client'

import { Code, Palette, Users, Zap } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary-600" />,
      title: "フロントエンド開発",
      description: "React, Next.js, TypeScriptを使用したモダンなWebアプリケーション開発"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary-600" />,
      title: "UI/UXデザイン",
      description: "ユーザビリティを重視した直感的で美しいインターフェース設計"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "チーム開発",
      description: "アジャイル開発手法でのチームワークとコミュニケーション"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "パフォーマンス最適化",
      description: "高速で軽量なWebアプリケーションの実現"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">自己紹介</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">
              ユーザー体験を重視した開発
            </h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-6">
              フロントエンドエンジニア・デザイナーとして、ユーザーにとって使いやすく、
              美しいWebアプリケーションの開発に取り組んでいます。
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mb-8">
              技術的な実装だけでなく、ユーザビリティやアクセシビリティを考慮した
              設計を心がけ、ビジネス価値の最大化を目指しています。
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Figma', 'Node.js'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card p-6 text-center hover:scale-105 transform transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection