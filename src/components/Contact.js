import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Contact 组件
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    // 处理表单输入变化
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // 处理表单提交
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        // 模拟表单提交
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitStatus('success');
        // 重置表单
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        // 3秒后重置状态
        setTimeout(() => {
            setSubmitStatus('idle');
        }, 3000);
    };
    // 联系方式信息
    const contactInfo = [
        {
            icon: (_jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) })),
            label: '邮箱',
            value: 'example@email.com',
        },
        {
            icon: (_jsxs("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }), _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })] })),
            label: '位置',
            value: '中国, 上海',
        },
    ];
    return (_jsx("section", { id: "contact", className: "py-20 px-4 bg-white/5", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: _jsx("span", { className: "bg-gradient-primary bg-clip-text text-transparent", children: "\u8054\u7CFB\u6211" }) }), _jsx("p", { className: "text-gray-400 max-w-2xl mx-auto", children: "\u6709\u9879\u76EE\u5408\u4F5C\u610F\u5411\uFF1F\u6B22\u8FCE\u968F\u65F6\u8054\u7CFB\u6211\uFF0C\u6211\u4F1A\u5C3D\u5FEB\u56DE\u590D\u3002" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("h3", { className: "text-2xl font-semibold mb-8", children: "\u8054\u7CFB\u65B9\u5F0F" }), _jsx("div", { className: "space-y-6", children: contactInfo.map((info, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "flex items-start gap-4", children: [_jsx("div", { className: "p-3 bg-purple-500/10 rounded-lg text-purple-400", children: info.icon }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-400 text-sm mb-1", children: info.label }), _jsx("p", { className: "text-text font-medium", children: info.value })] })] }, index))) }), _jsxs("div", { className: "mt-8", children: [_jsx("h3", { className: "text-2xl font-semibold mb-6", children: "\u793E\u4EA4\u5A92\u4F53" }), _jsx("div", { className: "flex gap-4", children: [
                                                { name: 'GitHub', icon: 'G', url: '#' },
                                                { name: 'LinkedIn', icon: 'L', url: '#' },
                                                { name: 'Twitter', icon: 'T', url: '#' },
                                            ].map((social, index) => (_jsx("a", { href: social.url, className: "w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg text-white font-semibold hover:bg-purple-500/20 transition-colors duration-200", children: social.icon }, social.name))) })] })] }), _jsx(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-text font-medium mb-2", children: "\u59D3\u540D" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-text placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200", placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-text font-medium mb-2", children: "\u90AE\u7BB1" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-text placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200", placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-text font-medium mb-2", children: "\u7559\u8A00" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleInputChange, required: true, rows: 5, className: "w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-text placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 resize-none", placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u7559\u8A00\u5185\u5BB9" })] }), submitStatus === 'success' && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400", children: "\u2713 \u7559\u8A00\u53D1\u9001\u6210\u529F\uFF01\u6211\u4F1A\u5C3D\u5FEB\u56DE\u590D\u60A8\u3002" })), submitStatus === 'error' && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400", children: "\u2717 \u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002" })), _jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/25", children: isSubmitting ? '发送中...' : '发送留言' })] }) })] })] }) }));
};
export default Contact;
//# sourceMappingURL=Contact.js.map