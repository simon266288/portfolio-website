import React, { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks'
import type { Theme, ThemeContextType } from '../types'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark')

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
