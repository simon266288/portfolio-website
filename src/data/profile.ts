import type { Skill, Experience, NavItem } from '../types'

export const skills: Skill[] = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'TypeScript', level: 85, icon: '📘' },
  { name: 'Tailwind CSS', level: 95, icon: '🎨' },
  { name: 'JavaScript', level: 90, icon: '⚡' },
  { name: 'Vue.js', level: 80, icon: '💚' },
  { name: 'Node.js', level: 70, icon: '🟢' },
]

export const experiences: Experience[] = [
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

export const navItems: NavItem[] = [
  { name: '首页', href: '#home' },
  { name: '作品集', href: '#portfolio' },
  { name: '关于我', href: '#about' },
  { name: '联系方式', href: '#contact' },
]

export const heroContent = {
  subtitle: '👋 欢迎来到我的个人作品集',
  title: {
    prefix: '我是',
    highlight1: '开发者',
    middle: '用代码',
    highlight2: '创造价值',
  },
  description: '专注于前端开发，热衷于构建优雅的用户界面和流畅的用户体验。使用 React + TypeScript + Tailwind CSS 打造现代化 Web 应用。',
  buttons: {
    primary: { text: '查看作品', href: '#portfolio' },
    secondary: { text: '联系我', href: '#contact' },
  },
}

export const aboutContent = {
  title: '关于我',
  description: '你好！我是一名热爱前端开发的技术人员。拥有多年前端开发经验，专注于 React、TypeScript 和现代前端技术栈。',
  extendedDescription: '我热衷于创造优雅的用户界面，追求代码质量和用户体验的完美平衡。在工作中，我注重团队协作，积极参与技术分享，不断学习新知识，提升自己的技术能力。',
}

export const contactContent = {
  title: '联系我',
  description: '有项目合作意向？欢迎随时联系我，我会尽快回复。',
  info: [
    { label: '邮箱', value: 'example@email.com' },
    { label: '位置', value: '中国, 上海' },
  ],
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
  ],
}
