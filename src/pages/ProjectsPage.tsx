// src/pages/ProjectsPage.tsx
import React, { useState } from 'react';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../data/portfolioData';
import ProjectCard from '../components/projects/ProjectCard';

const ProjectsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = PROJECTS_DATA.filter(project =>
        activeFilter === 'All' || project.category === activeFilter
    );

    return (
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10 font-display">
            <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
                <main className="flex flex-col gap-8 md:gap-12 px-4 sm:px-6 lg:px-10 py-5">
                    <div className="flex flex-wrap justify-between gap-4">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                My Projects
                            </p>
                            <p className="text-gray-600 dark:text-[#9da1b9] text-base font-normal leading-normal">
                                A selection of projects I've built, showcasing my skills in web development, machine learning, and more.
                            </p>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex gap-3 flex-wrap">
                        {PROJECT_CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`flex h-8 shrink-0 items-center justify-center rounded-full pl-4 pr-4 text-sm font-medium leading-normal transition-colors ${activeFilter === category
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 dark:bg-[#282b39] text-gray-800 dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        ) : (
                            <p className="text-gray-600 dark:text-[#9da1b9] text-base col-span-full">No projects found in this category.</p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProjectsPage;
