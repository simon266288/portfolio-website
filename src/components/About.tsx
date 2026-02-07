import React from 'react'
import { motion } from 'framer-motion'

// 技能项接口
interface Skill {
  name: string
  level: number
  icon: string
}

// 技能数据
const skills: Skill[] = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'TypeScript', level: 85, icon: '📘' },
  { name: 'Tailwind CSS', level: 95, icon: '🎨' },
  { name: 'JavaScript', level: 90, icon: '⚡' },
  { name: 'Vue.js', level: 80, icon: '💚' },
  { name: 'Node.js', level: 70, icon: '🟢' },
]

// 经验数据
const experiences = [
  {
    year: '2023 - 至今',
    position: '高级前端开发工程师',
    company: '某科技有限公司',
  },
  {
    year: '2021 - 2023',
    position: '前端开发工程师',
    company: '某互联网公司',
  },
  {
    year: '2019 - 2021',
    position: '初级前端开发工程师',
    company: '某初创公司',
  },
]

// 关于我组件
const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：文字介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-heading font-bold mb-6">
              <span className="text-indigo-500 px-4 py-2 rounded-lg">
                关于我
              </span>
            </h2>
            <p className="text-text-secondary text-base mb-6 leading-relaxed">
              你好！我是一名热爱前端开发的技术人员。拥有多年前端开发经验，专注于 React、TypeScript 和现代前端技术栈。
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              我热衷于创造优雅的用户界面，追求代码质量和用户体验的完美平衡。在工作中，我注重团队协作，积极参与技术分享，不断学习新知识，提升自己的技术能力。
            </p>

            {/* 经历列表 */}
            <div className="space-y-4">
              <h3 className="text-subheading font-semibold mb-4 text-text">工作经历</h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-background-secondary rounded-lg p-4 border border-border shadow-sm"
                >
                  <span className="text-primary text-sm font-medium block mb-1">
                    {exp.year}
                  </span>
                  <h4 className="text-base font-semibold text-text">{exp.position}</h4>
                  <p className="text-text-secondary text-sm">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 右侧：技能展示 - 极简环形图 */}
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
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-background-secondary rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* 环形进度条 */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      {/* 背景圆环 */}
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#27272a"
                        strokeWidth="3"
                      />
                      {/* 进度圆环 */}
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
                      {/* 渐变定义 */}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* 图标和百分比 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl">{skill.icon}</span>
                    </div>
                  </div>

                  {/* 技能名称 */}
                  <h4 className="text-sm font-semibold text-text text-center mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-primary text-xs text-center font-medium">
                    {skill.level}%
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
