# AGENTS.md

## 项目概述

React + TypeScript + Tailwind CSS 个人作品集网站，使用 Vite 构建，Framer Motion 实现动画效果。

## 构建和测试命令

### 开发
```bash
npm run dev
```
启动开发服务器，访问 http://localhost:3000

### 构建
```bash
npm run build
```
执行 TypeScript 类型检查并构建生产版本，输出到 `dist/` 目录

### 预览
```bash
npm run preview
```
预览生产构建

### 单个测试命令
```bash
npm run build
```
构建命令会自动进行 TypeScript 类型检查，这是唯一的测试命令。

## 代码风格指南

### 基本规则
- **缩进**: 2 空格
- **文件编码**: UTF-8
- **注释**: 全部使用中文
- **变量命名**: 驼峰命名法（camelCase）
- **函数命名**: 动词开头（如 `handleInputChange`）
- **接口命名**: PascalCase（如 `NavItem`）

### TypeScript 配置
项目使用严格的 TypeScript 配置（`tsconfig.json`）：
- `strict: true` - 启用所有严格类型检查
- `noUncheckedIndexedAccess: true` - 禁止未检查的索引访问
- `exactOptionalPropertyTypes: true` - 精确可选属性类型

**禁止行为**:
- 禁止使用 `as any`、`@ts-ignore`、`@ts-expect-error` 绕过类型错误
- 禁止在代码中使用类型断言来忽略类型检查
- 禁止使用空值检查绕过类型系统

### React 组件规范

#### 函数式组件 + Hooks
所有组件必须是函数式组件，使用 Hooks 管理状态和副作用。

```typescript
// ✅ 正确示例
const Component: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 副作用逻辑
  }, [])

  return <div>...</div>
}

// ❌ 错误示例（类组件）
class Component extends React.Component {
  render() {
    return <div>...</div>
  }
}
```

#### Props 接口定义
所有组件的 Props 必须定义明确的接口类型。

```typescript
interface ComponentProps {
  title: string
  items: string[]
  onAction: () => void
}

const Component: React.FC<ComponentProps> = ({ title, items, onAction }) => {
  return <div>...</div>
}
```

#### 空值检查
必须对可能为 null 或 undefined 的值进行空值检查。

```typescript
// ✅ 正确示例
const element = document.querySelector(selector)
if (element) {
  element.classList.add('active')
}

// ❌ 错误示例
const element = document.querySelector(selector)
element.classList.add('active') // 可能报错
```

#### 状态管理
使用 React Hooks 管理状态。

```typescript
// ✅ 正确示例
const [data, setData] = useState<string[]>([])
const [loading, setLoading] = useState(false)

// 使用函数式更新
setData(prev => [...prev, newItem])

// ❌ 错误示例
setData([...data, newItem]) // 可能导致状态不同步
```

### 导入和导出

#### 导入顺序
1. React 核心库
2. 第三方库
3. 相对路径导入（组件、工具函数等）

```typescript
import React from 'react'
import { motion } from 'framer-motion'

import Component from './Component'
import type { MyType } from './types'
```

#### 组件导出
使用默认导出（default export）。

```typescript
// ✅ 正确示例
export default Component

// ❌ 错误示例
export { Component }
```

### 样式规范

#### Tailwind CSS 类名
- 使用语义化的类名
- 使用项目自定义的颜色和字体（在 `tailwind.config.js` 中定义）
- 响应式设计使用 `sm:`、`md:`、`lg:`、`xl:` 前缀

```typescript
// ✅ 正确示例
className="px-4 py-2 bg-background text-text md:px-6 md:py-3"

// ❌ 错误示例
className="px-4 py-2 bg-[#0a0a0a] text-white" // 使用硬编码颜色
```

#### 自定义类名
使用项目定义的 CSS 类（在 `src/index.css` 中）。

```typescript
// ✅ 正确示例
className="section-spacing container-wide"

// ❌ 错误示例
className="padding-80px max-w-screen-xl"
```

### 错误处理

#### 异步操作
必须正确处理异步操作的错误。

```typescript
// ✅ 正确示例
const handleAsync = async () => {
  try {
    setLoading(true)
    await fetchData()
  } catch (error) {
    console.error('Failed to fetch:', error)
    // 或者显示错误信息给用户
  } finally {
    setLoading(false)
  }
}

// ❌ 错误示例
const handleAsync = async () => {
  setLoading(true)
  await fetchData() // 没有错误处理
  setLoading(false)
}
```

#### 空异常捕获
禁止空异常捕获。

```typescript
// ✅ 正确示例
try {
  // 操作
} catch (error) {
  // 实际的错误处理逻辑
}

// ❌ 错误示例
try {
  // 操作
} catch (e) {
  // 空捕获
}
```

### 代码组织

#### 文件结构
```
src/
├── assets/          # 静态资源
├── components/      # React 组件
│   ├── Component.tsx  # 主组件
│   ├── Component.d.ts # TypeScript 类型声明
├── App.tsx          # 主应用组件
├── main.tsx         # 入口文件
└── index.css        # 全局样式
```

#### 组件文件组织
- 在组件文件顶部定义 Props 接口
- 定义常量和数据
- 定义子组件（如果有）
- 定义主组件
- 导出主组件

```typescript
// Props 接口
interface ComponentProps {
  // ...
}

// 数据常量
const data = [...]

// 子组件
const SubComponent: React.FC = () => {
  // ...
}

// 主组件
const Component: React.FC<ComponentProps> = (props) => {
  // ...
  return <div>...</div>
}

export default Component
```

### TypeScript 最佳实践

#### 类型推断优于类型断言
优先让 TypeScript 推断类型。

```typescript
// ✅ 正确示例
const items: string[] = [...]
const filtered = items.filter(item => item.length > 5)

// ❌ 错误示例
const items: string[] = [...]
const filtered = items.filter(item => item.length > 5) as string[]
```

#### 避免使用 `any`
不要使用 `any` 类型，定义明确的类型。

```typescript
// ✅ 正确示例
interface User {
  name: string
  age: number
}
const user: User = { name: 'Alice', age: 30 }

// ❌ 错误示例
const user: any = { name: 'Alice', age: 30 }
```

#### 联合类型和枚举
对于一组相关的常量值，使用联合类型或枚举。

```typescript
// ✅ 正确示例
type Status = 'idle' | 'loading' | 'success' | 'error'

const status: Status = 'loading'

// 或者使用枚举
enum Status {
  Idle,
  Loading,
  Success,
  Error,
}
```

### 性能优化

#### 使用 React.memo
对于纯展示组件，使用 `React.memo` 避免不必要的重新渲染。

```typescript
const MemoComponent = React.memo(Component)
```

#### 使用 useMemo 和 useCallback
对于复杂的计算和函数，使用这些 Hook 优化性能。

```typescript
const expensiveValue = useMemo(() => {
  return heavyComputation()
}, [dependencies])

const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

#### 避免内联对象和函数
在组件外部定义对象和函数。

```typescript
// ✅ 正确示例
const ANIMATION_PROPS = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const handleClick = useCallback(() => {
  console.log('Clicked')
}, [])

const Component: React.FC = () => {
  return <motion.div {...ANIMATION_PROPS}>...</motion.div>
}
```

### 文档注释

#### 函数注释
对公共函数提供 JSDoc 注释。

```typescript
/**
 * 处理表单提交
 * @param e 表单事件对象
 * @returns Promise<void>
 */
const handleSubmit = async (e: React.FormEvent) => {
  // ...
}
```

### Git 提交规范

- 使用语义化提交信息
- 格式：`type(scope): description`
- 类型：`feat`（新功能）、`fix`（修复）、`docs`（文档）、`style`（格式化）、`refactor`（重构）、`test`（测试）、`chore`（构建）
- 示例：
  - `feat: 添加联系表单功能`
  - `fix: 修复导航栏滚动效果`
  - `refactor: 重构 Hero 组件结构`

### 代码审查检查清单

提交代码前，确保：

- [ ] 代码通过 TypeScript 类型检查（`npm run build`）
- [ ] 所有注释使用中文
- [ ] 没有使用 `any` 类型或类型断言绕过类型检查
- [ ] 所有 Props 都有明确的类型定义
- [ ] 所有可能为 null/undefined 的值都进行了空值检查
- [ ] 异步操作有正确的错误处理
- [ ] 使用了语义化的类名（Tailwind CSS）
- [ ] 文件组织清晰（接口、常量、组件顺序）
- [ ] 没有未使用的导入和导出
- [ ] 函数和组件命名清晰
- [ ] 添加了必要的注释

## 技术栈

- **React 19.2.4** - 前端框架
- **TypeScript 5.9.3** - 类型安全
- **Tailwind CSS 4.1.18** - 样式框架
- **Framer Motion 12.33.0** - 动画库
- **Vite 7.3.1** - 构建工具
