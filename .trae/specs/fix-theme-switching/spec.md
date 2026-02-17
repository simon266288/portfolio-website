# 修复主题切换功能 Spec

## Why

当前主题切换功能只影响滚动条样式，页面背景和文字颜色没有随主题切换而变化。原因是 Tailwind CSS v4 的暗色模式配置方式与 v3 不同，需要调整 CSS 变量的应用方式。

## What Changes

- **CSS 变量重构**：将主题变量从 `.dark`/`.light` 类选择器改为 `:root` 配合 `[data-theme]` 属性选择器
- **ThemeContext 更新**：使用 `data-theme` 属性而非 class 来切换主题
- **确保变量正确继承**：在 `:root` 中定义所有主题相关变量

## Impact

- Affected code:
  - `src/index.css` - CSS 变量定义方式
  - `src/contexts/ThemeContext.tsx` - 主题切换逻辑
  - `tailwind.config.js` - 可能需要调整

## ADDED Requirements

### Requirement: 主题切换正确应用
系统 SHALL 在切换主题时正确更新所有使用 CSS 变量的样式，包括背景色、文字颜色、边框颜色等。

#### Scenario: 切换到亮色主题
- **WHEN** 用户点击主题切换按钮切换到亮色模式
- **THEN** 页面背景变为白色，文字变为深色，所有组件样式正确更新

#### Scenario: 切换到暗色主题
- **WHEN** 用户点击主题切换按钮切换到暗色模式
- **THEN** 页面背景变为深色，文字变为浅色，所有组件样式正确更新

## MODIFIED Requirements

### Requirement: CSS 变量定义
系统 SHALL 使用 `:root` 和属性选择器定义主题变量，确保 Tailwind 类能正确读取。

```css
:root {
  --bg-color: #ffffff;
  --bg-secondary: #f8fafc;
  ...
}

:root[data-theme="dark"] {
  --bg-color: #0a0a0a;
  --bg-secondary: #111111;
  ...
}
```

### Requirement: 主题切换逻辑
系统 SHALL 使用 `data-theme` 属性而非 class 来切换主题。
