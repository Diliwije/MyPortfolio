// src/pages/AboutPage.tsx
import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';
import ScrollReveal from '../components/shared/ScrollReveal';

const AboutPage: React.FC = () => {
    return (
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10 font-display">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
                <main className="flex-grow pt-5">
                    {/* A. About Me Header & Resume Button Section */}
                    <ScrollReveal direction="down" delay={0.1}>
                        <div className="flex p-4 @container">
                            <div className="flex w-full flex-col gap-8 @[520px]:flex-row @[520px]:items-start @[520px]:justify-between">
                                <div className="flex flex-col items-center gap-6 @[520px]:flex-row @[520px]:items-start">
                                    {/* Profile Picture */}
                                    <div className="relative w-32 h-32 flex-shrink-0">
                                        <div
                                            className="bg-center bg-no-repeat bg-cover rounded-full w-full h-full border-4 border-white/20 dark:border-white/10 shadow-lg"
                                            style={{ backgroundImage: `url(${PERSONAL_DATA.profilePictureUrl})` }}
                                            data-alt={`Professional headshot of ${PERSONAL_DATA.name}`}
                                        ></div>
                                        {/* Inner Ring */}
                                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                                    </div>
                                    {/* About Text (Using real data) */}
                                    <div className="flex flex-col text-center @[520px]:text-left">
                                        <h1 className="text-black dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">About Me</h1>
                                        <p className="text-zinc-600 dark:text-[#9da1b9] text-base font-normal leading-normal mt-2">
                                            {PERSONAL_DATA.aboutMe}
                                        </p>
                                    </div>
                                </div>
                                {/* Download Resume Button */}
                                <a href={PERSONAL_DATA.resumeLink} download className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary/10 dark:bg-white/10 text-primary dark:text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[520px]:w-auto flex-shrink-0 hover:bg-primary/20 transition-colors">
                                    <span className="material-symbols-outlined !text-base">download</span>
                                    <span className="truncate">Download Resume</span>
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Key Highlights Section (Using real data) */}
                    {/* B. Key Highlights Section */}
                    <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
                        Key Highlights
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
                        {/* University Card (Left to Right) */}
                        <ScrollReveal direction="left" delay={0.2} className="flex flex-1 flex-col gap-3 rounded-lg border border-zinc-200 dark:border-[#3b3f54] bg-white dark:bg-[#1c1d27] p-4">
                            <div className="text-primary">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-black dark:text-white text-base font-bold leading-tight">University</h3>
                                <p className="text-zinc-600 dark:text-[#9da1b9] text-sm font-normal leading-normal">{PERSONAL_DATA.university}</p>
                            </div>
                        </ScrollReveal>

                        {/* Major Card (Up) */}
                        <ScrollReveal direction="up" delay={0.3} className="flex flex-1 flex-col gap-3 rounded-lg border border-zinc-200 dark:border-[#3b3f54] bg-white dark:bg-[#1c1d27] p-4">
                            <div className="text-primary">
                                <span className="material-symbols-outlined">science</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-black dark:text-white text-base font-bold leading-tight">Major</h3>
                                <p className="text-zinc-600 dark:text-[#9da1b9] text-sm font-normal leading-normal">B.S. Software Engineering</p>
                            </div>
                        </ScrollReveal>

                        {/* Expected Graduation Card (Down) */}
                        <ScrollReveal direction="down" delay={0.4} className="flex flex-1 flex-col gap-3 rounded-lg border border-zinc-200 dark:border-[#3b3f54] bg-white dark:bg-[#1c1d27] p-4">
                            <div className="text-primary">
                                <span className="material-symbols-outlined">calendar_today</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-black dark:text-white text-base font-bold leading-tight">Expected Graduation</h3>
                                <p className="text-zinc-600 dark:text-[#9da1b9] text-sm font-normal leading-normal">{PERSONAL_DATA.graduationDate}</p>
                            </div>
                        </ScrollReveal>

                        {/* Achievement Card (Right to Left) */}
                        <ScrollReveal direction="right" delay={0.5} className="flex flex-1 flex-col gap-3 rounded-lg border border-zinc-200 dark:border-[#3b3f54] bg-white dark:bg-[#1c1d27] p-4">
                            <div className="text-primary">
                                <span className="material-symbols-outlined">trophy</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-black dark:text-white text-base font-bold leading-tight">Key Achievement</h3>
                                <p className="text-zinc-600 dark:text-[#9da1b9] text-sm font-normal leading-normal">{PERSONAL_DATA.keyAchievement}</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AboutPage;
