import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { Icon } from './Icon'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-200 cursor-pointer"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="w-5 h-5" />
    </button>
  )
}
