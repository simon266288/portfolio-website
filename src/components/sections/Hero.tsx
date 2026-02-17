import React from 'react'
import { motion } from 'framer-motion'
import { heroContent } from '../../data'
import { Button, Icon } from '../ui'

const Hero: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="section-spacing bg-background">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-primary text-lg md:text-xl mb-6 font-medium tracking-wide">
            {heroContent.subtitle}
          </p>

          <h1 className="text-display font-bold mb-8 leading-tight">
            {heroContent.title.prefix}
            <span className="text-indigo-500 px-3 py-1 rounded-full">
              {heroContent.title.highlight1}
            </span>
            {heroContent.title.middle}
            <span className="text-pink-400 px-3 py-1 rounded-full">
              {heroContent.title.highlight2}
            </span>
          </h1>

          <p className="text-text-secondary text-body mb-10 max-w-2xl mx-auto leading-relaxed">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={heroContent.buttons.primary.href}>
              {heroContent.buttons.primary.text}
            </Button>
            <Button href={heroContent.buttons.secondary.href} variant="secondary">
              {heroContent.buttons.secondary.text}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={scrollToPortfolio}
          >
            <Icon name="arrowDown" className="w-8 h-8 text-indigo-400 hover:text-indigo-300 transition-colors duration-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
