import React from 'react'
import { motion } from 'framer-motion'

// Hero 区域组件
const Hero: React.FC = () => {
  // 动画配置
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
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
          {/* 副标题 */}
          <p className="text-primary text-lg md:text-xl mb-6 font-medium tracking-wide">
            👋 欢迎来到我的个人作品集
          </p>

          {/* 主标题 */}
          <h1 className="text-display font-bold mb-8 leading-tight">
            我是
            <span className="text-indigo-500 px-3 py-1 rounded-full">
              开发者
            </span>
            用代码
            <span className="text-pink-400 px-3 py-1 rounded-full">
              创造价值
            </span>
          </h1>

          {/* 描述文字 */}
          <p className="text-text-secondary text-body mb-10 max-w-2xl mx-auto leading-relaxed">
            专注于前端开发，热衷于构建优雅的用户界面和流畅的用户体验。使用 React + TypeScript + Tailwind CSS 打造现代化 Web 应用。
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<a
            href="#portfolio"
            className="px-8 py-3 bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          >
            查看作品
          </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-text-secondary font-semibold rounded-lg transition-all duration-200 hover:bg-white/5 hover:text-text-primary"
            >
              联系我
            </a>
          </div>
        </motion.div>

        {/* 装饰性元素 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={() => {
              const portfolioElement = document.querySelector('#portfolio')
              if (portfolioElement) {
                portfolioElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <svg
              className="w-8 h-8 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
