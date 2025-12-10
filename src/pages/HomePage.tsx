// src/pages/HomePage.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { NavLink } from 'react-router-dom';
import { PROJECTS_DATA, PERSONAL_DATA } from '../data/portfolioData';


// --- 3D Sphere Component ---
const AnimatedSphere: React.FC = () => {
    const meshRef = useRef<any>(null);
    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={3.2} ref={meshRef}>
            <MeshDistortMaterial
                color="#1337ec"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.5}
            />
        </Sphere>
    );
};

// --- Hero Section Component ---
const HeroSection: React.FC = () => {
    return (
        <section className="relative h-[600px] w-full py-16 md:py-24 font-display">
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <AnimatedSphere />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center justify-center p-4">
                <div className="flex min-h-[480px] flex-col gap-6 @[480px]:gap-8 items-center justify-center p-4 text-center">
                    {/* Profile Picture (Overlayed on 3D Background) */}
                    <div className="relative size-40 @[480px]:size-56 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl">
                        <img
                            src={PERSONAL_DATA.profilePictureUrl}
                            alt={`${PERSONAL_DATA.name} Profile`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-full ring-4 ring-primary/50"></div>
                    </div>

                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                            {PERSONAL_DATA.name}
                        </h1>
                        <h2 className="text-gray-300 text-sm font-normal leading-normal @[480px]:text-base">
                            {PERSONAL_DATA.title}
                        </h2>
                    </div>
                    <NavLink to="/projects" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-primary/90 transition-colors">
                        <span className="truncate">View My Projects</span>
                    </NavLink>
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
            <section className="pt-16 pb-16 font-display" id="projects">
                <div className="px-4 sm:px-10 md:px-20 lg:px-40 mx-auto max-w-[960px]">
                    <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        {featuredProjects.map(project => (
                            <div key={project.id} className="flex flex-col gap-3 pb-3 bg-background-light dark:bg-[#191C2D] p-4 rounded-lg border border-gray-200/20 dark:border-white/10">
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

            {/* About Me & Skills Snippet (Simplified version of About Page) */}
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
        </div>
    );
};

export default HomePage;
