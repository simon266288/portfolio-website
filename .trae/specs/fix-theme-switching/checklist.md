# 主题切换修复验收清单

## CSS 变量
- [x] :root 定义默认亮色主题变量
- [x] :root[data-theme="dark"] 定义暗色主题变量
- [x] 所有主题变量在两种模式下都有定义

## 主题切换逻辑
- [x] ThemeContext 使用 data-theme 属性设置主题
- [x] 切换主题时 document.documentElement.getAttribute('data-theme') 正确更新
- [x] 主题偏好持久化到 localStorage

## 视觉验证
- [x] 亮色主题：背景为白色，文字为深色
- [x] 暗色主题：背景为深色，文字为浅色
- [x] 导航栏背景随主题变化
- [x] 卡片背景随主题变化
- [x] 边框颜色随主题变化
- [x] 滚动条样式随主题变化

## 自动化测试验证
- [x] Playwright 测试：主题属性从 dark 切换到 light
- [x] Playwright 测试：背景颜色从 rgb(10, 10, 10) 切换到 rgb(255, 255, 255)
