// src/components/shared/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PERSONAL_DATA } from '../../data/portfolioData';

interface HeaderProps {
    isDark: boolean;
    toggleDark: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleDark }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on navigation
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10 font-display">
            <div className="px-4 sm:px-10 md:px-20 lg:px-40 mx-auto max-w-[1280px]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo & Title */}
                    <NavLink to="/" className="flex items-center gap-4 text-gray-800 dark:text-white">
                        <div className="size-6 text-primary">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">{PERSONAL_DATA.name.split(' ')[0]}</h2>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary dark:text-primary font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary dark:text-primary font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>
                            Projects
                        </NavLink>
                        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary dark:text-primary font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>
                            About Me
                        </NavLink>
                        <NavLink to="/skills" onClick={closeMenu} className={({ isActive }) => `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary dark:text-primary font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>
                            Skills
                        </NavLink>
                        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary dark:text-primary font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>
                            Contact
                        </NavLink>

                        {/* Dark/Light Mode Toggle */}
                        <button onClick={toggleDark} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                    </nav>

                    {/* Mobile Menu & Toggle */}
                    <div className="flex items-center gap-4">
                        <button onClick={toggleDark} className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-gray-800 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <span className="material-symbols-outlined text-gray-600 dark:text-white">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-background-light dark:bg-background-dark border-b border-gray-200/20 dark:border-white/10 shadow-lg pb-4">
                    <nav className="flex flex-col gap-2 px-4">
                        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `text-lg px-2 py-1 transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => `text-lg px-2 py-1 transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary'}`}>
                            Projects
                        </NavLink>
                        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `text-lg px-2 py-1 transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary'}`}>
                            About Me
                        </NavLink>
                        <NavLink to="/skills" onClick={closeMenu} className={({ isActive }) => `text-lg px-2 py-1 transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary'}`}>
                            Skills
                        </NavLink>
                        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `text-lg px-2 py-1 transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary'}`}>
                            Contact
                        </NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
