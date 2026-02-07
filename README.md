# 个人作品集网站

使用 React + TypeScript + Tailwind CSS 开发的现代化个人作品集网站。

## 技术栈

- **React 19.2.4** - 前端框架
- **TypeScript 5.9.3** - 类型安全
- **Tailwind CSS 4.1.18** - 样式框架
- **Framer Motion 12.33.0** - 动画库
- **Vite 7.3.1** - 构建工具

## 项目特点

✨ **深色主题** - 采用深色背景 (#0a0a0a) 和浅色文字 (#ffffff)
🎨 **渐变色强调** - 多种渐变色方案，提升视觉效果
⚡ **平滑动画** - 使用 Framer Motion 实现流畅的滚动和过渡动画
📱 **移动端适配** - 完全响应式设计，支持各种设备
🎯 **图片懒加载** - 优化加载性能，提升用户体验
📝 **中文注释** - 代码注释全部使用中文

## 项目结构

```
portfolio-website/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # React 组件
│   │   ├── About.tsx    # 关于页面和技能展示
│   │   ├── Contact.tsx  # 联系方式组件
│   │   ├── Hero.tsx     # Hero 区域组件
│   │   ├── Navbar.tsx   # 导航栏组件
│   │   └── Portfolio.tsx # 作品集展示组件
│   ├── App.tsx          # 主应用组件
│   ├── main.tsx         # 入口文件
│   ├── index.css        # 全局样式
│   └── vite-env.d.ts    # TypeScript 类型声明
├── index.html           # HTML 入口
├── package.json         # 项目配置
├── tailwind.config.js   # Tailwind CSS 配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 安装依赖

```bash
npm install
```

## 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看项目。

## 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录。

## 预览生产构建

```bash
npm run preview
```

## 主要功能

### 1. 导航栏 (Navbar)
- 固定在顶部，滚动时自动切换背景
- 响应式设计，支持移动端菜单
- 平滑滚动到指定区域

### 2. Hero 区域
- 动画效果展示欢迎信息和标题
- 渐变色文字效果
- 呼吁性按钮（查看作品、联系我）

### 3. 作品集展示 (Portfolio)
- 响应式网格布局
- 图片懒加载
- 技术标签展示
- 悬停效果

### 4. 关于我 (About)
- 个人介绍
- 工作经历展示
- 技能进度条可视化

### 5. 联系方式 (Contact)
- 联系表单（模拟提交）
- 联系信息展示
- 社交媒体链接

## 样式定制

在 `tailwind.config.js` 中可以自定义：

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',      // 背景色
        text: '#ffffff',            // 文字颜色
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        // 其他渐变色...
      },
    },
  },
  plugins: [],
}
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 性能优化

- 使用 Vite 进行快速构建
- 图片懒加载，提升首屏加载速度
- 使用 Tailwind CSS 进行按需加载
- 代码分割和优化

## 开发说明

### 代码规范
- 使用函数式组件 + Hooks
- 使用 TypeScript 确保类型安全
- 代码注释使用中文
- 变量名使用驼峰命名法
- 2 空格缩进

### 组件开发
所有组件都包含：
- 中文注释
- TypeScript 类型定义
- Props 接口定义
- 空值检查

## 许可证

ISC

## 作者

您的名字

---

⭐ 如果觉得这个项目有帮助，请给个星标！
