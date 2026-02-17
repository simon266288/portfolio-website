# Tasks

- [x] Task 1: 清理编译产物文件
  - [x] SubTask 1.1: 删除 src/components/ 下的 .js、.js.map、.d.ts 文件
  - [x] SubTask 1.2: 删除 src/ 下的 .js、.js.map、.d.ts 文件
  - [x] SubTask 1.3: 删除根目录下的 vite.config.js、vite.config.js.map、vite.config.d.ts 文件

- [x] Task 2: 创建类型定义文件
  - [x] SubTask 2.1: 创建 src/types/index.ts 导出所有类型
  - [x] SubTask 2.2: 创建 src/types/portfolio.ts 定义项目相关类型
  - [x] SubTask 2.3: 创建 src/types/profile.ts 定义个人信息类型
  - [x] SubTask 2.4: 创建 src/types/theme.ts 定义主题相关类型

- [x] Task 3: 创建数据配置文件
  - [x] SubTask 3.1: 创建 src/data/index.ts 导出所有数据
  - [x] SubTask 3.2: 创建 src/data/portfolio.ts 提取项目数据
  - [x] SubTask 3.3: 创建 src/data/profile.ts 提取个人信息数据
  - [x] SubTask 3.4: 创建 src/data/navigation.ts 提取导航数据

- [x] Task 4: 创建自定义 Hooks
  - [x] SubTask 4.1: 创建 src/hooks/index.ts 导出所有 hooks
  - [x] SubTask 4.2: 创建 src/hooks/useScrollPosition.ts 滚动监听 hook
  - [x] SubTask 4.3: 创建 src/hooks/useLocalStorage.ts 本地存储 hook

- [x] Task 5: 创建主题系统
  - [x] SubTask 5.1: 创建 src/contexts/ThemeContext.tsx 主题上下文
  - [x] SubTask 5.2: 更新 src/index.css 添加亮色主题变量
  - [x] SubTask 5.3: 更新 tailwind.config.js 配置主题切换

- [x] Task 6: 创建可复用 UI 组件
  - [x] SubTask 6.1: 创建 src/components/ui/index.ts 导出组件
  - [x] SubTask 6.2: 创建 src/components/ui/Button.tsx 按钮组件
  - [x] SubTask 6.3: 创建 src/components/ui/Card.tsx 卡片组件
  - [x] SubTask 6.4: 创建 src/components/ui/Icon.tsx 图标组件
  - [x] SubTask 6.5: 创建 src/components/ui/ThemeToggle.tsx 主题切换组件

- [x] Task 7: 创建布局组件
  - [x] SubTask 7.1: 创建 src/components/layout/index.ts 导出组件
  - [x] SubTask 7.2: 创建 src/components/layout/Section.tsx 区块容器组件
  - [x] SubTask 7.3: 创建 src/components/layout/Container.tsx 容器组件

- [x] Task 8: 重构页面区块组件
  - [x] SubTask 8.1: 创建 src/components/sections/index.ts 导出组件
  - [x] SubTask 8.2: 重构 Navbar 组件，使用 hooks 和 UI 组件
  - [x] SubTask 8.3: 重构 Hero 组件，使用数据配置
  - [x] SubTask 8.4: 重构 Portfolio 组件，使用数据配置和类型
  - [x] SubTask 8.5: 重构 About 组件，使用数据配置和类型
  - [x] SubTask 8.6: 重构 Contact 组件，使用数据配置和类型

- [x] Task 9: 更新入口文件
  - [x] SubTask 9.1: 更新 App.tsx 添加主题提供者
  - [x] SubTask 9.2: 更新 main.tsx 确保正确初始化

- [x] Task 10: 验证构建
  - [x] SubTask 10.1: 运行 TypeScript 类型检查
  - [x] SubTask 10.2: 运行构建命令验证

# Task Dependencies

- [Task 2] depends on [Task 1]
- [Task 3] depends on [Task 2]
- [Task 4] 独立任务
- [Task 5] depends on [Task 4]
- [Task 6] depends on [Task 2], [Task 5]
- [Task 7] 独立任务
- [Task 8] depends on [Task 3], [Task 4], [Task 6], [Task 7]
- [Task 9] depends on [Task 5], [Task 8]
- [Task 10] depends on [Task 9]
