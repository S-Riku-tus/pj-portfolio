'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Header = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/blog', label: 'BLOG' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-navy-900 hover:text-primary-600 transition-colors"
          >
            Your Name
          </Link>
          
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-navy-800 hover:text-primary-600'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header