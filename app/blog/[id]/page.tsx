'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Calendar, Tag, ExternalLink, ArrowLeft, Heart, MessageCircle } from 'lucide-react'

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
  rendered_body: string
  user: {
    id: string
    name: string
    profile_image_url: string
  }
}

const BlogDetailPage = () => {
  const [article, setArticle] = useState<QiitaArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      fetchArticle(params.id as string)
    }
  }, [params.id])

  const fetchArticle = async (id: string) => {
    try {
      const response = await fetch(`https://qiita.com/api/v2/items/${id}`)
      
      if (!response.ok) {
        throw new Error('記事の取得に失敗しました')
      }
      
      const data = await response.json()
      setArticle(data)
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

  if (loading) {
    return (
      <div className="pt-24 min-h-screen bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-navy-600">記事を読み込んでいます...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="pt-24 min-h-screen bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error || '記事が見つかりませんでした'}</p>
            <Link href="/blog" className="btn-primary">
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container-custom mx-auto px-6 py-12">
        {/* 戻るボタン */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-navy-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ブログ一覧に戻る</span>
          </Link>
        </div>

        {/* 記事ヘッダー */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center text-navy-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(article.created_at)}</span>
              {article.updated_at !== article.created_at && (
                <span className="text-sm text-navy-500 ml-2">
                  (更新: {formatDate(article.updated_at)})
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-4 text-navy-600">
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                <span>{article.likes_count}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span>{article.comments_count}</span>
              </div>
            </div>
          </div>
          
          {/* タグ */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <span 
                key={tag.name}
                className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag.name}
              </span>
            ))}
          </div>
          
          {/* Qiitaで開くリンク */}
          <div className="border-b border-gray-200 pb-6">
            <Link 
              href={article.url}
              target="_blank"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Qiitaで開く</span>
            </Link>
          </div>
        </header>

        {/* 記事本文 */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="qiita-content"
            dangerouslySetInnerHTML={{ __html: article.rendered_body }}
          />
        </article>

        {/* 記事フッター */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {article.user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold text-navy-900">{article.user.name}</p>
                <p className="text-sm text-navy-600">@{article.user.id}</p>
              </div>
            </div>
            
            <Link 
              href={article.url}
              target="_blank"
              className="btn-primary"
            >
              Qiitaで続きを読む
            </Link>
          </div>
        </footer>
      </div>
      
      {/* Qiita記事用のスタイル */}
      <style jsx global>{`
        .qiita-content {
          line-height: 1.8;
        }
        
        .qiita-content h1,
        .qiita-content h2,
        .qiita-content h3,
        .qiita-content h4,
        .qiita-content h5,
        .qiita-content h6 {
          color: #0f172a;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .qiita-content h1 { font-size: 2rem; }
        .qiita-content h2 { font-size: 1.75rem; }
        .qiita-content h3 { font-size: 1.5rem; }
        .qiita-content h4 { font-size: 1.25rem; }
        
        .qiita-content p {
          margin-bottom: 1rem;
          color: #334155;
        }
        
        .qiita-content pre {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1.5rem 0;
          overflow-x: auto;
        }
        
        .qiita-content code {
          background-color: #f1f5f9;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.9em;
          color: #dc2626;
        }
        
        .qiita-content pre code {
          background-color: transparent;
          padding: 0;
          color: #334155;
        }
        
        .qiita-content blockquote {
          border-left: 4px solid #0ea5e9;
          background-color: #f0f9ff;
          padding: 1rem;
          margin: 1.5rem 0;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        
        .qiita-content ul, .qiita-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        
        .qiita-content li {
          margin-bottom: 0.5rem;
          color: #334155;
        }
        
        .qiita-content a {
          color: #0ea5e9;
          text-decoration: underline;
        }
        
        .qiita-content a:hover {
          color: #0284c7;
        }
        
        .qiita-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .qiita-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .qiita-content th,
        .qiita-content td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .qiita-content th {
          background-color: #f8fafc;
          font-weight: 600;
          color: #0f172a;
        }
      `}</style>
    </div>
  )
}

export default BlogDetailPage