import React from 'react'
import { motion } from 'framer-motion'

// 项目接口
interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

// 项目数据
const projects: Project[] = [
  {
    id: 1,
    title: '电商平台',
    description: '一个功能完善的在线购物平台，包含商品展示、购物车、用户认证等功能。',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    link: '#',
  },
  {
    id: 2,
    title: '社交媒体应用',
    description: '现代化的社交网络应用，支持实时聊天、动态发布、用户关注等功能。',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    link: '#',
  },
  {
    id: 3,
    title: '数据可视化仪表盘',
    description: '企业级数据可视化平台，实时监控业务指标，提供丰富的图表展示。',
    tags: ['React', 'D3.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    link: '#',
  },
  {
    id: 4,
    title: '任务管理应用',
    description: '高效的任务协作工具，支持看板视图、甘特图、团队协作等功能。',
    tags: ['React', 'Redux', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    link: '#',
  },
]

// 项目卡片组件
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background-secondary rounded-2xl overflow-hidden shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
    >
      {/* 项目图片 */}
      <div className="relative">
        <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transition-all duration-300" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-500"
        />
      </div>

      {/* 项目内容 */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text mb-3">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* 技术标签 */}
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

        {/* 查看详情链接 - 带hover效果 */}
        <a
          href={project.link}
className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 text-sm font-medium"
          >
            查看详情
            <svg
              className="w-4 h-4 transform hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

// Portfolio 组件
const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section-spacing bg-background-secondary">
      <div className="container-wide">
        {/* Section 标题 */}
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

        {/* 项目列表 - 网格布局 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
