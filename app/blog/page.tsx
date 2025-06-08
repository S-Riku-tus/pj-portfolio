'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Tag, ExternalLink } from 'lucide-react'

interface QiitaArticle {
  id: string
  title: string
  url: string
  created_at: string
  updated_at: string
  tags: Array<{ name: string }>
  likes_count: number
  comments_count: number
  body: string
  user: {
    id: string
    name: string
    profile_image_url: string
  }
}

const BlogPage = () => {
  const [articles, setArticles] = useState<QiitaArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchQiitaArticles()
  }, [])

  const fetchQiitaArticles = async () => {
    try {
      // あなたのQiitaユーザー名に変更してください
      const QIITA_USERNAME = 'your-qiita-username'
      const response = await fetch(`https://qiita.com/api/v2/users/${QIITA_USERNAME}/items?page=1&per_page=20`)
      
      if (!response.ok) {
        throw new Error('記事の取得に失敗しました')
      }
      
      const data = await response.json()
      setArticles(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '記事の取得に失敗しました')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const truncateText = (text: string, length: number) => {
    // HTMLタグを除去してプレーンテキストにする
    const plainText = text.replace(/<[^>]*>/g, '')
    return plainText.length > length ? plainText.substring(0, length) + '...' : plainText
  }

  if (loading) {
    return (
      <div className="pt-24 min-h-screen bg-navy-50">
        <div className="container-custom mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-navy-600">記事を読み込んでいます...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-24 min-h-screen bg-navy-50">
        <div className="container-custom mx-auto px-6">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={fetchQiitaArticles}
              className="btn-primary"
            >
              再試行
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen bg-navy-50">
      <div className="container-custom mx-auto px-6 py-12">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-6">ブログ</h1>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-navy-700 text-lg max-w-2xl mx-auto">
            技術記事やプログラミングに関する知見をQiitaで発信しています。
          </p>
        </div>

        {/* 記事一覧 */}
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-navy-600">記事が見つかりませんでした。</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id}
                className="card p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
              >
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                    <Link 
                      href={`/blog/${article.id}`}
                      className="block"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  
                  <div className="flex items-center text-sm text-navy-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(article.created_at)}</span>
                  </div>
                  
                  <p className="text-navy-700 text-sm leading-relaxed mb-4">
                    {truncateText(article.body, 120)}
                  </p>
                </div>
                
                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag.name}
                      className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag.name}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="text-xs text-navy-500">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>
                
                {/* 統計情報 */}
                <div className="flex items-center justify-between text-sm text-navy-600 mb-4">
                  <span>❤️ {article.likes_count}</span>
                  <span>💬 {article.comments_count}</span>
                </div>
                
                {/* リンク */}
                <div className="flex space-x-4">
                  <Link 
                    href={`/blog/${article.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                  >
                    続きを読む
                  </Link>
                  <Link 
                    href={article.url}
                    target="_blank"
                    className="flex items-center space-x-1 text-navy-600 hover:text-navy-800 font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Qiitaで開く</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        
        {/* Qiitaへのリンク */}
        <div className="text-center mt-16">
          <Link 
            href="https://qiita.com/your-qiita-username"
            target="_blank"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Qiitaでもっと見る</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPage