# Portfolio Website 重构规范

## Why

当前 portfolio-website 项目存在以下问题：
- 数据硬编码在组件中，难以维护和更新
- 缺少类型定义的统一管理
- 缺少可复用的 UI 组件抽象
- 只有暗色主题，缺少主题切换功能
- 项目结构不够清晰，缺少分层架构

重构的目标是提高代码的可维护性、可扩展性和可配置性。

## What Changes

### 架构重构
- **数据层分离**：将硬编码数据提取到独立的配置文件
- **类型定义集中**：创建统一的类型定义文件
- **组件分层**：提取可复用的 UI 组件和布局组件
- **Hooks 抽象**：创建自定义 hooks 管理状态和逻辑

### 功能增强
- **主题切换**：添加亮色/暗色主题切换功能
- **响应式优化**：改进移动端体验

### 代码质量
- **移除编译产物**：删除 `.js`、`.js.map`、`.d.ts` 等编译产物
- **统一代码风格**：确保一致的代码风格

## Impact

- Affected code: 
  - `src/App.tsx` - 添加主题提供者
  - `src/components/*` - 重构所有组件
  - `src/index.css` - 添加主题变量
  - `tailwind.config.js` - 更新主题配置
- New files:
  - `src/types/` - 类型定义
  - `src/data/` - 数据配置
  - `src/hooks/` - 自定义 hooks
  - `src/components/ui/` - 可复用 UI 组件
  - `src/components/layout/` - 布局组件
  - `src/contexts/` - React Context

## ADDED Requirements

### Requirement: 数据配置化
系统 SHALL 将所有硬编码数据提取到独立的配置文件中，便于维护和更新。

#### Scenario: 项目数据配置
- **WHEN** 开发者需要更新项目展示内容
- **THEN** 只需修改 `src/data/portfolio.ts` 文件即可

#### Scenario: 个人信息配置
- **WHEN** 开发者需要更新个人信息（技能、经历、联系方式）
- **THEN** 只需修改对应的配置文件即可

### Requirement: 类型定义集中管理
系统 SHALL 提供统一的类型定义文件，确保类型安全和代码提示。

#### Scenario: 项目类型
- **WHEN** 组件使用项目数据
- **THEN** 能够获得完整的类型提示和检查

### Requirement: 可复用 UI 组件
系统 SHALL 提供可复用的基础 UI 组件，减少代码重复。

#### Scenario: 按钮组件
- **WHEN** 需要按钮样式
- **THEN** 使用统一的 Button 组件

#### Scenario: 卡片组件
- **WHEN** 需要卡片容器
- **THEN** 使用统一的 Card 组件

### Requirement: 主题切换功能
系统 SHALL 支持亮色和暗色主题切换，并持久化用户偏好。

#### Scenario: 主题切换
- **WHEN** 用户点击主题切换按钮
- **THEN** 页面主题立即切换并保存到 localStorage

#### Scenario: 主题持久化
- **WHEN** 用户重新访问网站
- **THEN** 自动应用上次选择的主题

### Requirement: 自定义 Hooks
系统 SHALL 提供自定义 hooks 封装常用逻辑。

#### Scenario: 主题 Hook
- **WHEN** 组件需要访问主题状态
- **THEN** 使用 `useTheme` hook

#### Scenario: 滚动监听 Hook
- **WHEN** 组件需要监听滚动状态
- **THEN** 使用 `useScrollPosition` hook

## MODIFIED Requirements

### Requirement: 项目结构优化
系统 SHALL 采用清晰的分层目录结构。

```
src/
├── components/
│   ├── layout/        # 布局组件
│   ├── sections/      # 页面区块组件
│   └── ui/            # 基础 UI 组件
├── contexts/          # React Context
├── data/              # 数据配置
├── hooks/             # 自定义 Hooks
├── types/             # 类型定义
├── App.tsx
├── main.tsx
└── index.css
```

## REMOVED Requirements

### Requirement: 编译产物文件
**Reason**: 编译产物不应存在于源码仓库中，应由构建过程生成。

**Migration**: 删除所有 `.js`、`.js.map`、`.d.ts` 文件（非源码文件）。
