'use client'

import { Code, Palette, Users, Zap, Heart, Star, Target, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'
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

  const services = [
    {
      icon: <Code className="w-6 h-6 text-gray-700" />,
      title: "ディレクション",
      description: "お客様の要望をヒアリングし、最適なソリューションを提案します。",
      features: ["要件定義", "技術選定", "スケジュール管理"]
    },
    {
      icon: <Palette className="w-6 h-6 text-gray-700" />,
      title: "デザイン",
      description: "ユーザビリティを重視した美しく機能的なデザインを制作します。",
      features: ["UI/UXデザイン", "プロトタイピング", "ブランディング"]
    },
    {
      icon: <Users className="w-6 h-6 text-gray-700" />,
      title: "フロントエンド開発",
      description: "最新技術を使用した高品質なフロントエンド開発を行います。",
      features: ["React/Next.js", "TypeScript", "レスポンシブ対応"]
    },
    {
      icon: <Zap className="w-6 h-6 text-gray-700" />,
      title: "サポート・保守",
      description: "リリース後も継続的なサポートと改善を提供します。",
      features: ["運用保守", "機能改善", "パフォーマンス最適化"]
    }
  ]

  const techStack = [
    { name: 'React', level: 95, color: 'bg-accent' },
    { name: 'Next.js', level: 90, color: 'bg-gray-700' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
    { name: 'Figma', level: 88, color: 'bg-purple-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-600' }
  ]

  const values = [
    "ユーザー体験を最優先に考える",
    "シンプルで分かりやすい設計",
    "持続可能で保守性の高いコード",
    "チームワークを大切にする",
    "継続的な学習と改善"
  ]

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title mb-6">
            私について
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <div className="container-text">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              フロントエンドエンジニア・デザイナーとして、<br />
              ユーザーにとって価値のあるプロダクトを創造することを使命としています。
            </p>
            <p className="text-gray-600 leading-relaxed">
              技術的な実装スキルだけでなく、ビジネス視点とユーザー視点を持ち合わせ、
              お客様の課題解決に向けて最適なソリューションを提供します。
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          
          {/* Left Column - Services */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Service</h3>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      className="service-card group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="service-icon bg-gray-100 group-hover:bg-gray-200">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="badge-primary text-xs">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills & Values */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="space-y-12">
              
              {/* Tech Skills */}
              <div className="card-elevated p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {techStack.map((tech, index) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{tech.name}</span>
                        <span className="text-sm text-gray-500 font-medium">{tech.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className={`progress-fill ${tech.color}`}
                          style={{ width: isVisible ? `${tech.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values & Approach */}
              <div className="card-elevated p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Values & Approach</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="card-elevated p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">50+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">10+</div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="card-elevated p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              プロジェクトのご相談はいつでもお気軽に
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              あなたのアイデアを形にするお手伝いをさせていただきます。
              まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:your.email@example.com"
                className="btn-primary btn-lg group"
              >
                お問い合わせ
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/resume.pdf"
                download
                className="btn-secondary btn-lg"
              >
                履歴書をダウンロード
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection