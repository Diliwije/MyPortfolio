// src/pages/HomePage.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PROJECTS_DATA, PERSONAL_DATA } from '../data/portfolioData';
import ScrollReveal from '../components/shared/ScrollReveal';

// --- Dummy Data for Fav Stacks (Adjusted to IT/Code Theme) ---
const FAV_STACKS = [
    { text: "React", icon: "brand_react" },
    { text: "Node.js", icon: "brand_node" },
    { text: "Python", icon: "brand_python" },
    { text: "Spring Boot", icon: "brand_java" },
    { text: "Tailwind CSS", icon: "brand_tailwind" },
];

// --- Tech Stack Badges Icons (Placeholder - using Material Symbols) ---
const getIcon = (name: string) => {
    switch (name) {
        case 'brand_react': return 'code'; // Using general code icon for simplicity
        case 'brand_node': return 'data_object';
        case 'brand_python': return 'terminal';
        case 'brand_java': return 'coffee';
        case 'brand_tailwind': return 'palette';
        default: return 'build';
    }
};

// --- NEW Hero Section Component ---
const HeroSection: React.FC = () => {

    const GridLineAnimation = () => (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[linear-gradient(to_right,theme(colors.gray.400)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.400)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.gray.700)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.700)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

            {/* Horizontal Light Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 h-[1px] w-full bg-primary/80 shadow-[0_0_10px_2px_var(--primary)]"
                    style={{ animation: 'grid-move-x 15s linear infinite' }}>
                </div>
            </div>

            {/* Vertical Light Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 w-[1px] h-full bg-primary/80 shadow-[0_0_10px_2px_var(--primary)]"
                    style={{ animation: 'grid-move-y 12s linear infinite' }}>
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative h-auto min-h-[700px] w-full py-20 lg:py-24 font-display overflow-hidden bg-background-light dark:bg-background-dark text-gray-800 dark:text-white">

            {/* Background Grid Animation */}
            <GridLineAnimation />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <ScrollReveal direction="down" delay={0.1}>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* 1. Left Column: Text Content and Fav Stacks */}
                        <div className="flex flex-col gap-8">

                            {/* Available for Projects Badge */}
                            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 text-sm">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                Available for Projects
                            </div>

                            {/* Main Title (Using Dilshan's details) */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white">
                                Meet {PERSONAL_DATA.name.split(' ')[0]},<br />The Expert <span className="whitespace-nowrap">Software Engineer.</span>
                            </h1>

                            {/* Download Resume Button */}
                            <div className="self-start">
                                <a
                                    href={PERSONAL_DATA.resumeLink}
                                    download
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
                                >
                                    <span className="material-symbols-outlined">download</span>
                                    Download Resume
                                </a>
                            </div>

                            {/* Fav Stacks Badges */}
                            <div className="flex items-center gap-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-2 self-start flex-wrap">
                                <span className="pl-3 text-sm text-gray-700 dark:text-gray-300">My Fav Stacks</span>
                                <div className="flex items-center gap-1">
                                    {FAV_STACKS.map((stack, index) => (
                                        <div key={index} className="flex items-center justify-center w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300" title={stack.text}>
                                            <span className="material-symbols-outlined text-xl">{getIcon(stack.icon)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2. Right Column: Profile Image Card and Circular Text */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="w-full max-w-md relative flex justify-center lg:block">
                                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-4 border-white/20 dark:border-white/10 shadow-2xl overflow-hidden group mx-auto lg:mx-0">
                                    <img
                                        alt={`${PERSONAL_DATA.name} Profile`}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        src={PERSONAL_DATA.profilePictureUrl}
                                    />
                                    {/* Inner Ring */}
                                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 dark:ring-white/10"></div>
                                </div>

                                {/* Circular Text Overlay */}
                                <div className="absolute top-8 right-8 w-32 h-32 flex items-center justify-center pointer-events-none">
                                    <svg className="circular-text-slow fill-current text-white/50 dark:text-white/30" viewBox="0 0 100 100">
                                        <path d="M 0, 50 a 50,50 0 1,1 0,1 z" fill="none" id="circle"></path>
                                        <text>
                                            <textPath className="uppercase tracking-widest text-[10px]" xlinkHref="#circle">
                                                SOFTWARE ENGINEER • PROBLEM SOLVER • FULL-STACK DEV •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="absolute w-8 h-8 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">terminal</span>
                                    </div>
                                </div>

                                {/* Bottom Info Card */}
                                <div className="absolute bottom-[-8rem] right-0 lg:bottom-[-6rem] lg:right-[-8rem] w-full max-w-xs p-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm mt-8 lg:mt-0 shadow-xl">
                                    <p className="text-gray-800 dark:text-gray-300 mb-6 text-sm">
                                        {PERSONAL_DATA.aboutMe.substring(0, 150)}...
                                    </p>
                                    <NavLink to="/contact" className="w-full bg-primary text-black font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center hover:bg-primary/90 transition-colors duration-300">
                                        Explore Opportunities
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Footer Logoipsum section - keeping it simple without animation */}
                <div className="mt-32 lg:mt-40 hidden md:block">
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* Placeholder Client Logos */}
                        <div className="text-gray-500 dark:text-gray-400 font-semibold text-lg flex items-center gap-2"><span className="material-symbols-outlined">api</span> API Corp</div>
                        <div className="text-gray-500 dark:text-gray-400 font-semibold text-lg flex items-center gap-2"><span className="material-symbols-outlined">cloud</span> CloudSystems</div>
                        <div className="text-gray-500 dark:text-gray-400 font-semibold text-lg flex items-center gap-2"><span className="material-symbols-outlined">database</span> DataFlow</div>
                        <div className="text-gray-500 dark:text-gray-400 font-semibold text-lg flex items-center gap-2"><span className="material-symbols-outlined">security</span> SecureNet</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
const HomePage: React.FC = () => {
    const featuredProjects = PROJECTS_DATA.slice(0, 4); // Show first 4 projects

    return (
        <div className="flex flex-col flex-1">
            <HeroSection />

            {/* Featured Projects Section */}
            <ScrollReveal direction="up" delay={0.2}>
                <section className="pt-16 pb-16 font-display" id="projects">
                    <div className="px-4 sm:px-10 md:px-20 lg:px-40 mx-auto max-w-[960px]">
                        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                            {featuredProjects.map((project, index) => (
                                <div key={project.id} className="flex flex-col gap-3 pb-3 bg-background-light dark:bg-[#191C2D] p-4 rounded-lg border border-gray-200/20 dark:border-white/10 h-full">
                                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: `url(${project.imagePlaceholder})` }} />
                                    <div>
                                        <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">{project.title}</p>
                                        <p className="text-gray-600 dark:text-[#9da1b9] text-sm font-normal leading-normal mt-1">{project.description}</p>
                                        <p className="text-gray-500 dark:text-[#9da1b9] text-sm font-normal leading-normal mt-2">
                                            Tech Stack: {project.techStack.join(', ')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='text-center mt-8'>
                            <NavLink to="/projects" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors mx-auto">
                                <span className="truncate">View All Projects</span>
                            </NavLink>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* About Me & Skills Snippet (Simplified version of About Page) */}
            <ScrollReveal direction="up" delay={0.4}>
                <section className="pt-16 pb-16 font-display bg-background-light dark:bg-[#191C2D]" id="about">
                    <div className="px-4 sm:px-10 md:px-20 lg:px-40 mx-auto max-w-[960px]">
                        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            About Me & Key Skills
                        </h2>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {PERSONAL_DATA.aboutMe.substring(0, 300)}...
                                    <NavLink to="/about" className="text-primary hover:underline ml-1">Read More</NavLink>
                                </p>
                            </div>
                            <div className="md:col-span-1 flex flex-col gap-4">
                                <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-2">My Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* Snippet of top 4 skills */}
                                    {['React', 'Node.js', 'Python', 'Java'].map(skill => (
                                        <span key={skill} className="bg-primary/20 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                    <NavLink to="/skills" className="text-primary text-xs font-medium px-2.5 py-1 rounded-full border border-primary/50 hover:bg-primary/10 transition-colors">
                                        + More Skills
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
};

export default HomePage;
