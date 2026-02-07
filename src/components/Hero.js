import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
// Hero 区域组件
const Hero = () => {
    // 动画配置
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    return (_jsx("section", { id: "home", className: "min-h-screen flex items-center justify-center px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsxs(motion.div, { initial: "hidden", animate: "visible", transition: { duration: 0.8, delay: 0.2 }, variants: fadeInUp, children: [_jsx("p", { className: "text-purple-400 text-lg md:text-xl mb-4 font-medium", children: "\uD83D\uDC4B \u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E2A\u4EBA\u4F5C\u54C1\u96C6" }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsxs("span", { className: "block", children: ["\u6211\u662F", _jsxs("span", { className: "bg-gradient-primary bg-clip-text text-transparent", children: [' ', "\u5F00\u53D1\u8005"] })] }), _jsxs("span", { className: "block", children: ["\u7528\u4EE3\u7801", _jsxs("span", { className: "bg-gradient-secondary bg-clip-text text-transparent", children: [' ', "\u521B\u9020\u4EF7\u503C"] })] })] }), _jsx("p", { className: "text-gray-400 text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed", children: "\u4E13\u6CE8\u4E8E\u524D\u7AEF\u5F00\u53D1\uFF0C\u70ED\u8877\u4E8E\u6784\u5EFA\u4F18\u96C5\u7684\u7528\u6237\u754C\u9762\u548C\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C\u3002 \u4F7F\u7528 React + TypeScript + Tailwind CSS \u6253\u9020\u73B0\u4EE3\u5316 Web \u5E94\u7528\u3002" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "#portfolio", className: "px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-purple-500/25", children: "\u67E5\u770B\u4F5C\u54C1" }), _jsx("a", { href: "#contact", className: "px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors duration-200", children: "\u8054\u7CFB\u6211" })] })] }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.6 }, className: "mt-16", children: _jsx(motion.div, { animate: {
                            y: [0, -10, 0],
                        }, transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }, className: "inline-block", children: _jsx("svg", { className: "w-6 h-6 text-purple-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }) }) })] }) }));
};
export default Hero;
//# sourceMappingURL=Hero.js.map