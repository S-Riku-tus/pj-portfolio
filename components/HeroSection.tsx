'use client'

import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh] py-8">
          
          {/* Left side - Speech bubble with message */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Large oval speech bubble */}
              <div className="bg-white p-8 md:p-16 lg:p-20 shadow-lg relative w-80 h-60 md:w-[400px] md:h-[300px] lg:w-[480px] lg:h-[360px]" 
                   style={{
                     borderRadius: '50%',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                   }}>
                <div className="text-center space-y-4 max-w-xs">
                  <h1 className="text-base lg:text-lg font-normal text-gray-700 leading-relaxed">
                    つくるものを通して人と人がつながり
                  </h1>
                  <p className="text-base lg:text-lg font-normal text-gray-700 leading-relaxed">
                    新しい価値が生まれ、気持ちや想いが届く。
                  </p>
                  <p className="text-base lg:text-lg font-normal text-gray-700 leading-relaxed">
                    そんなお手伝いができればと考えています。
                  </p>
                </div>
                
                {/* Speech bubble tail */}
                <div className="absolute w-4 h-4 md:w-6 md:h-6 bg-white transform rotate-45 shadow-lg" 
                     style={{ bottom: '-8px', right: '60px' }}></div>
              </div>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile photo container */}
              <div className="relative w-64 h-80 lg:w-72 lg:h-96 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="プロフィール写真"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection