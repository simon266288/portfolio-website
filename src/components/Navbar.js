import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// 导航栏组件
const Navbar = () => {
    // 移动端菜单状态
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // 导航项
    const navItems = [
        { name: '首页', href: '#home' },
        { name: '作品集', href: '#portfolio' },
        { name: '关于我', href: '#about' },
        { name: '联系方式', href: '#contact' },
    ];
    // 滚动监听
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // 平滑滚动到指定位置
    const scrollToSection = (href) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsxs("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`, children: [_jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx(Link, { to: "/", className: "text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent", children: "Portfolio" }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: navItems.map((item) => (_jsx("button", { onClick: () => scrollToSection(item.href), className: "text-text hover:text-purple-400 transition-colors duration-200 font-medium", children: item.name }, item.name))) }), _jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "md:hidden text-text hover:text-purple-400 transition-colors", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isMobileMenuOpen ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })) }) })] }) }), _jsx(AnimatePresence, { children: isMobileMenuOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 }, className: "md:hidden bg-background/95 backdrop-blur-md", children: _jsx("div", { className: "px-4 py-4 space-y-2", children: navItems.map((item) => (_jsx("button", { onClick: () => scrollToSection(item.href), className: "block w-full text-left text-text hover:text-purple-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5", children: item.name }, item.name))) }) })) })] }));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map