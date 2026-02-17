import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../../hooks'
import { navItems } from '../../data'
import { Icon, ThemeToggle } from '../ui'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrolled } = useScrollPosition()

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-secondary/95 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-2xl font-bold text-indigo-500 px-4 py-1 rounded-lg transition-all duration-200 hover:opacity-90 cursor-pointer"
          >
            Portfolio
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium text-base cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-background-secondary/95 backdrop-blur-lg border-t border-border"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-200 py-2.5 px-4 rounded-lg hover:bg-white/5 font-medium text-base cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
