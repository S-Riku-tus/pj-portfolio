'use client'

import { Calendar, MapPin } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      company: "株式会社テックカンパニー",
      position: "フロントエンドエンジニア",
      period: "2023年4月 - 現在",
      location: "東京",
      description: [
        "React/Next.jsを用いたWebアプリケーションの開発・保守",
        "UI/UXデザインからフロントエンド実装まで一貫して担当",
        "チーム内でのコードレビュー文化の推進",
        "新人エンジニアのメンタリング"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"]
    },
    {
      company: "フリーランス",
      position: "Web開発・デザイン",
      period: "2022年6月 - 2023年3月",
      location: "リモート",
      description: [
        "中小企業向けWebサイト・アプリケーションの開発",
        "ブランディングからWebデザイン、実装まで一貫して提供",
        "クライアントとの要件定義・提案・進行管理",
        "SEO対策・パフォーマンス最適化の実施"
      ],
      technologies: ["React", "Vue.js", "WordPress", "PHP", "Adobe XD"]
    },
    {
      company: "株式会社スタートアップ",
      position: "フロントエンドエンジニア（インターン）",
      period: "2021年9月 - 2022年5月",
      location: "東京",
      description: [
        "新規サービスのフロントエンド開発",
        "モックアップからの実装・レスポンシブ対応",
        "APIとの連携・状態管理の実装",
        "ユーザビリティテストの実施・改善提案"
      ],
      technologies: ["React", "JavaScript", "CSS", "REST API"]
    }
  ]

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">経歴</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    {exp.company}
                  </h3>
                  <h4 className="text-xl font-semibold text-primary-600 mb-3">
                    {exp.position}
                  </h4>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-navy-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection