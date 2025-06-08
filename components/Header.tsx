'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Home, BookOpen, User, Briefcase, Mail } from 'lucide-react'

const Header = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME', icon: <Home className="w-4 h-4" /> },
    { href: '/#about', label: 'ABOUT', icon: <User className="w-4 h-4" /> },
    { href: '/#experience', label: 'EXPERIENCE', icon: <Briefcase className="w-4 h-4" /> },
    { href: '/#works', label: 'WORKS', icon: <Briefcase className="w-4 h-4" /> },
    { href: '/blog', label: 'BLOG', icon: <BookOpen className="w-4 h-4" /> },
    { href: '/#contact', label: 'CONTACT', icon: <Mail className="w-4 h-4" /> },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.slice(2))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:scale-105`}
            >
              <span className="gradient-text">Your Name</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }
                  }}
                  className={`font-medium transition-all duration-300 relative group px-4 py-2 rounded-xl ${
                    pathname === link.href
                      ? 'text-primary-600 bg-primary-50'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {link.icon}
                    <span>{link.label}</span>
                  </span>
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold gradient-text">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault()
                      handleNavClick(link.href)
                    } else {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                  className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-gray-200">
              <div className="text-center text-gray-500 text-sm">
                © 2024 Your Name
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header