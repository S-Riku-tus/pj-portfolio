'use client'

import { useState } from 'react'

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'フロントエンド',
      skills: [
        { name: 'React', level: 90, experience: '3年' },
        { name: 'Next.js', level: 85, experience: '2年' },
        { name: 'TypeScript', level: 80, experience: '2年' },
        { name: 'JavaScript', level: 90, experience: '4年' },
        { name: 'HTML/CSS', level: 95, experience: '5年' },
        { name: 'Tailwind CSS', level: 85, experience: '2年' },
        { name: 'Vue.js', level: 70, experience: '1年' }
      ]
    },
    design: {
      title: 'デザイン',
      skills: [
        { name: 'Figma', level: 85, experience: '2年' },
        { name: 'Adobe XD', level: 80, experience: '2年' },
        { name: 'Photoshop', level: 75, experience: '3年' },
        { name: 'Illustrator', level: 70, experience: '2年' },
        { name: 'UI/UX Design', level: 80, experience: '3年' },
        { name: 'プロトタイピング', level: 85, experience: '2年' }
      ]
    },
    backend: {
      title: 'バックエンド・その他',
      skills: [
        { name: 'Node.js', level: 70, experience: '2年' },
        { name: 'Python', level: 65, experience: '1年' },
        { name: 'PHP', level: 60, experience: '1年' },
        { name: 'MySQL', level: 65, experience: '2年' },
        { name: 'Git', level: 85, experience: '3年' },
        { name: 'Docker', level: 60, experience: '1年' }
      ]
    }
  }

  const getLevelColor = (level: number) => {
    if (level >= 80) return 'bg-green-500'
    if (level >= 70) return 'bg-yellow-500'
    return 'bg-gray-400'
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">スキル</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>
        
        {/* カテゴリータブ */}
        <div className="flex justify-center mb-12">
          <div className="bg-navy-100 rounded-lg p-2 inline-flex">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeCategory === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-navy-700 hover:text-primary-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* スキル一覧 */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div key={index} className="card p-6">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-navy-900">
                  {skill.name}
                </h4>
                <div className="text-right">
                  <span className="text-sm text-navy-600">経験: {skill.experience}</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className={`h-3 rounded-full transition-all duration-1000 ease-out ${getLevelColor(skill.level)}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-navy-600">レベル</span>
                <span className="font-semibold text-navy-900">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection