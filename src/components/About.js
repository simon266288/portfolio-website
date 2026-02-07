import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
// 技能数据
const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Vue.js', level: 80 },
    { name: 'Node.js', level: 70 },
];
// 经验数据
const experiences = [
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
];
// 关于我组件
const About = () => {
    return (_jsx("section", { id: "about", className: "py-20 px-4", children: _jsx("div", { className: "container mx-auto", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: _jsx("span", { className: "bg-gradient-primary bg-clip-text text-transparent", children: "\u5173\u4E8E\u6211" }) }), _jsx("p", { className: "text-gray-300 text-lg mb-6 leading-relaxed", children: "\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u70ED\u7231\u524D\u7AEF\u5F00\u53D1\u7684\u6280\u672F\u4EBA\u5458\u3002\u62E5\u6709\u591A\u5E74\u524D\u7AEF\u5F00\u53D1\u7ECF\u9A8C\uFF0C\u4E13\u6CE8\u4E8E React\u3001TypeScript \u548C\u73B0\u4EE3\u524D\u7AEF\u6280\u672F\u6808\u3002" }), _jsx("p", { className: "text-gray-400 text-base leading-relaxed mb-8", children: "\u6211\u70ED\u8877\u4E8E\u521B\u9020\u4F18\u96C5\u7684\u7528\u6237\u754C\u9762\uFF0C\u8FFD\u6C42\u4EE3\u7801\u8D28\u91CF\u548C\u7528\u6237\u4F53\u9A8C\u7684\u5B8C\u7F8E\u5E73\u8861\u3002\u5728\u5DE5\u4F5C\u4E2D\uFF0C\u6211\u6CE8\u91CD\u56E2\u961F\u534F\u4F5C\uFF0C\u79EF\u6781\u53C2\u4E0E\u6280\u672F\u5206\u4EAB\uFF0C\u4E0D\u65AD\u5B66\u4E60\u65B0\u77E5\u8BC6\uFF0C\u63D0\u5347\u81EA\u5DF1\u7684\u6280\u672F\u80FD\u529B\u3002" }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-xl font-semibold text-text mb-4", children: "\u5DE5\u4F5C\u7ECF\u5386" }), experiences.map((exp, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: index * 0.1 }, className: "bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10", children: [_jsx("span", { className: "text-purple-400 text-sm font-medium block mb-1", children: exp.year }), _jsx("h4", { className: "text-lg font-semibold text-text", children: exp.position }), _jsx("p", { className: "text-gray-400 text-sm", children: exp.company })] }, index)))] })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left", children: _jsx("span", { className: "bg-gradient-primary bg-clip-text text-transparent", children: "\u6280\u672F\u6808" }) }), _jsx("div", { className: "space-y-6", children: skills.map((skill, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.05 }, children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { className: "text-text font-medium", children: skill.name }), _jsxs("span", { className: "text-purple-400 text-sm", children: [skill.level, "%"] })] }), _jsx("div", { className: "h-3 bg-white/10 rounded-full overflow-hidden", children: _jsx(motion.div, { initial: { width: 0 }, whileInView: { width: `${skill.level}%` }, viewport: { once: true }, transition: { duration: 1, delay: index * 0.1, ease: 'easeOut' }, className: "h-full bg-gradient-primary rounded-full" }) })] }, skill.name))) })] })] }) }) }));
};
export default About;
//# sourceMappingURL=About.js.map