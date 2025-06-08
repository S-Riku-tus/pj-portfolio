'use client'

import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const WorksSection = () => {
  const projects = [
    {
      title: "ECサイト管理システム",
      description: "React/Next.jsで構築したモダンなECサイトの管理システム。商品管理、注文管理、顧客管理機能を実装。",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/yourusername/ecommerce-admin",
      category: "Web Application"
    },
    {
      title: "タスク管理アプリ",
      description: "チーム向けのタスク管理アプリケーション。ドラッグ&ドロップでのタスク移動、リアルタイム同期機能を実装。",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      demoUrl: "https://task-manager.example.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      category: "Web Application"
    },
    {
      title: "コーポレートサイト",
      description: "スタートアップ企業のコーポレートサイト。モダンなデザインとアニメーション、SEO最適化を実装。",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Contentful"],
      demoUrl: "https://corporate-site.example.com",
      githubUrl: "https://github.com/yourusername/corporate-site",
      category: "Website"
    },
    {
      title: "ポートフォリオサイト",
      description: "デザイナー向けのポートフォリオサイト。作品の魅力を最大限に引き出すレイアウトとインタラクションを実装。",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Nuxt.js", "GSAP", "SCSS"],
      demoUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      category: "Website"
    },
    {
      title: "天気予報アプリ",
      description: "位置情報を活用した天気予報アプリ。直感的なUI/UXとマイクロインタラクションを重視した設計。",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Weather API", "Styled Components"],
      demoUrl: "https://weather-app.example.com",
      githubUrl: "https://github.com/yourusername/weather-app",
      category: "Mobile App"
    },
    {
      title: "ブログプラットフォーム",
      description: "マークダウンエディタを搭載したブログプラットフォーム。ユーザー認証、記事管理、コメント機能を実装。",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      demoUrl: "https://blog-platform.example.com",
      githubUrl: "https://github.com/yourusername/blog-platform",
      category: "Web Application"
    }
  ]

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">作品</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-navy-700 text-lg max-w-2xl mx-auto">
            これまでに手がけた主要なプロジェクトをご紹介します。
            技術選定から設計、実装まで一貫して担当しました。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card overflow-hidden hover:scale-105 transform transition-all duration-300 group"
            >
              {/* プロジェクト画像 */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg">
                    {project.title}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-primary-700 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Link 
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>デモ</span>
                  </Link>
                  <Link 
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center space-x-2 text-navy-600 hover:text-navy-800 font-medium text-sm transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>コード</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="https://github.com/yourusername"
            target="_blank"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>GitHubで他の作品を見る</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WorksSection