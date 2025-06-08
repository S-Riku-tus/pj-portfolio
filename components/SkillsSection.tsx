'use client'

import { Code2, Palette, Target, Users, Lightbulb, Rocket, Heart, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index])
            }, index * 150)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Direction",
      subtitle: "戦略・企画",
      description: "ビジネス目標を達成するための戦略立案から、ユーザー体験設計まで包括的にサポートします。",
      features: [
        "要件定義・仕様策定",
        "ユーザー調査・分析",
        "情報設計・IA設計",
        "プロジェクト管理"
      ],
      gradient: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50",
      hoverColor: "hover:bg-primary-100"
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Design",
      subtitle: "UI/UXデザイン",
      description: "ユーザビリティを重視した直感的で美しいインターフェースを設計・制作します。",
      features: [
        "UIデザイン・プロトタイピング",
        "UXリサーチ・テスト",
        "デザインシステム構築",
        "ブランディング"
      ],
      gradient: "from-secondary-500 to-secondary-600",
      bgColor: "bg-secondary-50",
      hoverColor: "hover:bg-secondary-100"
    },
    {
      icon: <Code2 className="w-8 h-8 text-white" />,
      title: "Coding",
      subtitle: "フロントエンド開発",
      description: "モダンな技術スタックを使用して、高品質なWebアプリケーションを開発します。",
      features: [
        "React/Next.js開発",
        "TypeScript実装",
        "レスポンシブ対応",
        "パフォーマンス最適化"
      ],
      gradient: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50",
      hoverColor: "hover:bg-accent-100"
    }
  ]

  const techStacks = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Principle"] },
    { category: "Tools", items: ["Git", "VS Code", "Notion", "Slack", "Vercel"] }
  ]

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary-600" />,
      title: "ユーザー第一",
      description: "常にエンドユーザーの立場に立って考え、最適な体験を提供します"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-secondary-600" />,
      title: "継続的改善",
      description: "新しい技術やトレンドを積極的に学び、品質向上に努めます"
    },
    {
      icon: <Users className="w-6 h-6 text-accent-600" />,
      title: "チームワーク",
      description: "チームメンバーとの協働を大切にし、共に成長していきます"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-600" />,
      title: "スピード感",
      description: "迅速な開発サイクルで、価値のあるプロダクトを素早く提供します"
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            戦略から実装まで、一貫したサービスでプロジェクトを成功に導きます
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card transition-all duration-700 delay-${index * 100} ${
                visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0'
              } ${service.bgColor} ${service.hoverColor}`}
            >
              <div className={`service-icon bg-gradient-to-r ${service.gradient} shadow-soft-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-4">
                {service.subtitle}
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Rocket className="w-4 h-4 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">Tech Stack</h3>
            <p className="text-gray-600">使用している主な技術スタック</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <div key={index} className="card p-6 hover-lift">
                <h4 className="text-lg font-semibold text-neutral-900 mb-4 text-center">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.items.map((item) => (
                    <span key={item} className="badge-gray hover:scale-105 transition-transform cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">Values</h3>
            <p className="text-gray-600">大切にしている価値観</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center hover-glow">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection