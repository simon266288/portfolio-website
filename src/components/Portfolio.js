import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
// 项目数据
const projects = [
    {
        id: 1,
        title: '电商平台',
        description: '一个功能完善的在线购物平台，包含商品展示、购物车、用户认证等功能。',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        link: '#',
    },
    {
        id: 2,
        title: '社交媒体应用',
        description: '现代化的社交网络应用，支持实时聊天、动态发布、用户关注等功能。',
        tags: ['React', 'Firebase', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
        link: '#',
    },
    {
        id: 3,
        title: '数据可视化仪表盘',
        description: '企业级数据可视化平台，实时监控业务指标，提供丰富的图表展示。',
        tags: ['React', 'D3.js', 'TypeScript'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        link: '#',
    },
    {
        id: 4,
        title: '任务管理应用',
        description: '高效的任务协作工具，支持看板视图、甘特图、团队协作等功能。',
        tags: ['React', 'Redux', 'TypeScript'],
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
        link: '#',
    },
];
// 项目卡片组件
const ProjectCard = ({ project }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300", children: [_jsxs("div", { className: "relative overflow-hidden group", children: [_jsx("img", { src: project.image, alt: project.title, loading: "lazy", className: "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-text mb-2", children: project.title }), _jsx("p", { className: "text-gray-400 text-sm mb-4 line-clamp-2", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tags.map((tag) => (_jsx("span", { className: "px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full", children: tag }, tag))) }), _jsxs("a", { href: project.link, className: "text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200", children: ["\u67E5\u770B\u8BE6\u60C5", _jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })] })] })] }));
};
// Portfolio 组件
const Portfolio = () => {
    return (_jsx("section", { id: "portfolio", className: "py-20 px-4", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: _jsx("span", { className: "bg-gradient-primary bg-clip-text text-transparent", children: "\u4F5C\u54C1\u96C6" }) }), _jsx("p", { className: "text-gray-400 max-w-2xl mx-auto", children: "\u6211\u53C2\u4E0E\u5F00\u53D1\u7684\u9879\u76EE\uFF0C\u5C55\u793A\u4E86\u6211\u5728\u524D\u7AEF\u5F00\u53D1\u65B9\u9762\u7684\u6280\u672F\u548C\u521B\u9020\u529B\u3002" })] }), _jsx(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: projects.map((project) => (_jsx(ProjectCard, { project: project }, project.id))) })] }) }));
};
export default Portfolio;
//# sourceMappingURL=Portfolio.js.map