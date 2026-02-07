import React from 'react'
import Hero from './components/Hero.tsx'
import Portfolio from './components/Portfolio.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Navbar from './components/Navbar.tsx'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
