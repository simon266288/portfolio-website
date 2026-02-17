import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar, Hero, Portfolio, About, Contact } from './components/sections'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <About />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
