import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Hero from './components/Hero.tsx';
import Portfolio from './components/Portfolio.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Navbar from './components/Navbar.tsx';
const App = () => {
    return (_jsxs("div", { className: "min-h-screen bg-background text-text", children: [_jsx(Navbar, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(Portfolio, {}), _jsx(About, {}), _jsx(Contact, {})] })] }));
};
export default App;
//# sourceMappingURL=App.js.map