# Tasks

- [x] Task 1: 修复 CSS 变量定义
  - [x] SubTask 1.1: 更新 src/index.css，使用 :root 定义默认（亮色）主题变量
  - [x] SubTask 1.2: 使用 :root[data-theme="dark"] 定义暗色主题变量覆盖

- [x] Task 2: 更新主题切换逻辑
  - [x] SubTask 2.1: 修改 ThemeContext.tsx，使用 data-theme 属性而非 class
  - [x] SubTask 2.2: 确保 theme 属性正确设置到 document.documentElement

- [x] Task 3: 验证主题切换
  - [x] SubTask 3.1: 测试亮色主题显示正确
  - [x] SubTask 3.2: 测试暗色主题显示正确
  - [x] SubTask 3.3: 测试主题切换过渡平滑

# Task Dependencies

- [Task 2] depends on [Task 1]
- [Task 3] depends on [Task 2]
