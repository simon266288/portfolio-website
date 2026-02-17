import React from 'react'
import { motion } from 'framer-motion'
import type { Skill, Experience } from '../../types'
import { skills, experiences, aboutContent } from '../../data'

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-background-secondary rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative w-20 h-20 mx-auto mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-border"
          />
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: skill.level / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">{skill.icon}</span>
        </div>
      </div>

      <h4 className="text-sm font-semibold text-text text-center mb-1">
        {skill.name}
      </h4>
      <p className="text-primary text-xs text-center font-medium">
        {skill.level}%
      </p>
    </motion.div>
  )
}

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-background-secondary rounded-lg p-4 border border-border shadow-sm"
    >
      <span className="text-primary text-sm font-medium block mb-1">
        {experience.year}
      </span>
      <h4 className="text-base font-semibold text-text">{experience.position}</h4>
      <p className="text-text-secondary text-sm">{experience.company}</p>
    </motion.div>
  )
}

const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-heading font-bold mb-6">
              <span className="text-indigo-500 px-4 py-2 rounded-lg">
                {aboutContent.title}
              </span>
            </h2>
            <p className="text-text-secondary text-base mb-6 leading-relaxed">
              {aboutContent.description}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              {aboutContent.extendedDescription}
            </p>

            <div className="space-y-4">
              <h3 className="text-subheading font-semibold mb-4 text-text">工作经历</h3>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-heading font-bold mb-8 text-center lg:text-left">
              <span className="text-indigo-500 px-4 py-2 rounded-lg">
                技能栈
              </span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
