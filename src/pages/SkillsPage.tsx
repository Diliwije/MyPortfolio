// src/pages/SkillsPage.tsx
import React, { useState } from 'react';
import { SKILLS_DATA, SKILL_CATEGORIES, STRENGTHS_DATA } from '../data/portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLaptopCode, faTools } from '@fortawesome/free-solid-svg-icons';
import { faAws, faDocker, faGit, faHtml5, faJava, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from '../components/shared/ScrollReveal';

// Mapping skill names to FontAwesome icons (for real logos)
const getSkillIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
        case 'python': return faPython;
        case 'java': return faJava;
        case 'javascript': return faJs;
        case 'react': return faReact;
        case 'node.js': return faNodeJs;
        case 'html/css': return faHtml5;
        case 'git': return faGit;
        case 'docker': return faDocker;
        case 'aws': return faAws;
        case 'c++': return faCode;
        case 'sql':
        case 'postgresql':
        case 'mongodb':
        case 'redis': return faDatabase;
        case 'jenkins': return faTools;
        case 'django': return faLaptopCode;
        // Default icon if none is found
        default: return faCode;
    }
};

const ProgressIndicator: React.FC<{ progress: number }> = ({ progress }) => {
    return (
        <div className="flex items-center gap-4 py-3">
            <div className="w-full bg-gray-200 dark:bg-[#282b39] rounded-full h-2.5">
                <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-white min-w-[30px]">{progress}%</span>
        </div>
    );
};

const SkillsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredSkills = SKILLS_DATA.filter(skill =>
        activeFilter === 'All' || skill.category === activeFilter
    );

    // Grouping skills for progress bar based on user request
    const javaProgress = SKILLS_DATA.find(s => s.name === 'Java')?.progress || 90;
    const htmlCssProgress = SKILLS_DATA.find(s => s.name === 'HTML/CSS')?.progress || 100;
    const otherProgress = 70;

    return (
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10 font-display">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
                <main className="flex flex-col gap-8 py-5">
                    <ScrollReveal direction="left">
                        <div className="flex flex-wrap justify-between gap-3 px-4">
                            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                                Technical Skills & Proficiencies
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Progress Bars Section */}
                    <ScrollReveal direction="up" delay={0}>
                        <div className="p-4">
                            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Proficiency Level</h2>
                            <div className='flex flex-col gap-2'>
                                <div>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>HTML, CSS, Tailwind CSS</p>
                                    <ProgressIndicator progress={htmlCssProgress} />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>Java & Java Frameworks (Spring Boot)</p>
                                    <ProgressIndicator progress={javaProgress} />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>Other Technologies (React, Node.js, Python, Databases, Tools)</p>
                                    <ProgressIndicator progress={otherProgress} />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>


                    {/* Skill Filter Buttons */}
                    <ScrollReveal direction="down" delay={0.3}>
                        <div className="flex gap-2 p-3 flex-wrap">
                            {SKILL_CATEGORIES.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`flex h-8 shrink-0 items-center justify-center rounded-lg pl-4 pr-4 text-sm font-medium leading-normal transition-colors ${activeFilter === category
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 dark:bg-[#282b39] text-gray-800 dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
                        {filteredSkills.map((skill, index) => (
                            <ScrollReveal key={skill.name} direction="up" delay={index * 0.05}>
                                <div className="flex flex-col gap-3 pb-3">
                                    <div className="w-full bg-gray-200 dark:bg-[#191C2D] aspect-square rounded-lg flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                                        <FontAwesomeIcon icon={getSkillIcon(skill.name)} className="w-16 h-16" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">{skill.name}</p>
                                        <p className="text-[#9da1b9] text-sm font-normal leading-normal">{skill.category.replace(' & Libraries', '')}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Professional Strengths */}
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="px-4 pb-3 pt-5">
                            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
                                Professional Strengths
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {STRENGTHS_DATA.map(strength => (
                                    <div key={strength.title} className="flex items-center gap-3 p-4 bg-gray-200 dark:bg-[#191C2D] rounded-lg">
                                        <span className="material-symbols-outlined text-primary text-2xl">{strength.icon}</span>
                                        <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">{strength.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </main>
            </div>
        </div>
    );
};

export default SkillsPage;
