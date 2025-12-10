// src/components/shared/Footer.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PERSONAL_DATA } from '../../data/portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-background-light dark:bg-background-dark border-t border-gray-200/20 dark:border-white/10 font-display">
            <div className="px-4 sm:px-10 md:px-20 lg:px-40 mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand/Copyright */}
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                            <div className="size-6 text-primary">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">{PERSONAL_DATA.name.split(' ')[0]}</h2>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">© {year} {PERSONAL_DATA.name}. All rights reserved.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <NavLink to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm">Home</NavLink>
                            <NavLink to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm">Projects</NavLink>
                            <NavLink to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm">About Me</NavLink>
                            <NavLink to="/skills" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm">Skills</NavLink>
                        </div>
                    </div>

                    {/* Connect Links (Using real data) */}
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">Connect</h3>
                        <div className="flex gap-4">
                            <a aria-label="LinkedIn" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href={PERSONAL_DATA.linkedin} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                            </a>
                            <a aria-label="GitHub" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href={PERSONAL_DATA.github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                            </a>
                            <a aria-label="Twitter" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
