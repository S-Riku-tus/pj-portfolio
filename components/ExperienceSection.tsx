'use client'

import { Calendar, MapPin, Building, ArrowRight, Award, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // 順次アニメーション表示
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index])
            }, index * 200)
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

  const experiences = [
    {
      company: "株式会社テックカンパニー",
      position: "シニアフロントエンドエンジニア",
      period: "2023年4月 - 現在",
      duration: "1年8ヶ月",
      location: "東京",
      type: "正社員",
      companySize: "300名",
      description: [
        "React/Next.jsを用いた大規模Webアプリケーションの設計・開発・保守",
        "UI/UXデザインからフロントエンド実装まで一貫した開発プロセスの確立",
        "チーム内でのコードレビュー文化とベストプラクティスの推進",
        "新人エンジニア5名のメンタリングとテクニカルリーダーシップ",
        "パフォーマンス最適化による読み込み速度40%向上を実現"
      ],
      achievements: [
        "月間アクティブユーザー数20%向上",
        "コード品質向上によりバグ発生率30%削減",
        "新機能リリースサイクル50%短縮"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Jest", "Storybook"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      company: "フリーランス",
      position: "フルスタック開発者・デザイナー",
      period: "2022年6月 - 2023年3月",
      duration: "10ヶ月",
      location: "リモート",
      type: "業務委託",
      companySize: "個人事業",
      description: [
        "中小企業・スタートアップ向けWebサイト・アプリケーションの企画から開発まで",
        "ブランディング戦略からWebデザイン、フロントエンド・バックエンド実装まで一貫提供",
        "クライアントとの要件定義・技術提案・プロジェクト管理・運用サポート",
        "SEO対策・Core Web Vitals最適化による検索順位向上の実現",
        "15社のクライアントと継続的なパートナーシップを構築"
      ],
      achievements: [
        "平均プロジェクト満足度95%以上",
        "リピート率80%達成",
        "売上前年比200%増加"
      ],
      technologies: ["React", "Vue.js", "Node.js", "WordPress", "PHP", "Adobe XD", "Figma"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      company: "株式会社スタートアップ",
      position: "フロントエンドエンジニア（インターン）",
      period: "2021年9月 - 2022年5月",
      duration: "9ヶ月",
      location: "東京",
      type: "インターン",
      companySize: "50名",
      description: [
        "シードステージスタートアップでの新規SaaSサービスのフロントエンド開発",
        "モックアップからの高精度実装・レスポンシブデザイン対応",
        "RESTful API設計・実装とフロントエンドでの状態管理",
        "ユーザビリティテストの計画・実施・分析・改善提案",
        "アジャイル開発プロセスでの継続的な機能追加・改善"
      ],
      achievements: [
        "ユーザー体験スコア30%向上",
        "MVP開発を予定より2週間前倒しで完了",
        "正社員内定を獲得"
      ],
      technologies: ["React", "JavaScript", "CSS3", "REST API", "Git", "Figma"],
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-green-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title">
            <span className="gradient-text">経歴</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            これまでの経験とキャリアの成長を通じて培ったスキルと実績
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-1000 delay-${index * 200} ${
                  visibleItems.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r ${exp.gradient} rounded-full transform md:-translate-x-1/2 -translate-y-1 border-4 border-white shadow-lg z-10 flex items-center justify-center`}>
                  <Building className="w-4 h-4 text-white" />
                </div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="card card-hover p-8 relative">
                    {/* Arrow for timeline */}
                    <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white transform rotate-45 border ${
                      index % 2 === 0 ? '-right-2 border-r-0 border-b-0' : '-left-2 border-l-0 border-t-0'
                    } border-white/20`}></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                            {exp.type}
                          </span>
                          <span className="text-sm text-gray-500">{exp.companySize}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.company}
                        </h3>
                        <h4 className="text-xl font-semibold text-primary-600 mb-4">
                          {exp.position}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-primary-500" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">主な業務内容</h5>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        主な成果
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700 text-sm leading-relaxed font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">使用技術</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium hover:scale-105 transition-transform"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection