import React from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../../types'
import { projects } from '../../data'
import { Card, Icon } from '../ui'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card>
      <div className="relative">
        <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transition-all duration-300" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-text mb-3">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-primary text-xs font-medium rounded-full transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 text-sm font-medium"
        >
          查看详情
          <Icon name="arrowRight" className="w-4 h-4 transform hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </Card>
  )
}

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section-spacing bg-background-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading font-bold mb-4">
            <span className="text-indigo-500 px-4 py-2 rounded-lg">
              作品集
            </span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            我参与开发的项目，展示了我在前端开发方面的技术和创造力。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
