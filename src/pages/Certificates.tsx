import React from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import ScrollReveal from '../components/shared/ScrollReveal';

const Certificates: React.FC = () => {
    return (
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10 font-display">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
                <main className="flex flex-col gap-12 py-5 px-4 sm:px-10">
                    
                    {/* Section Header */}
                    <ScrollReveal direction="down" delay={0.1}>
                        <div className="flex flex-wrap justify-between gap-3">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                    Licenses & Certifications
                                </p>
                                <p className="text-black/60 dark:text-[#9da1b9] text-base font-normal leading-normal">
                                    A showcase of my continuous learning path, verified skillsets, and professional accomplishments.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Certificates Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {CERTIFICATES.map((cert, index) => (
                            <ScrollReveal 
                                key={index} 
                                direction="up" 
                                delay={0.2 + index * 0.1}
                                className="flex flex-col bg-background-light dark:bg-[#1c1d27] rounded-xl border border-black/10 dark:border-[#3b3f54] overflow-hidden group hover:shadow-lg transition-all duration-300"
                            >
                                {/* Certificate Image Container */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-[#3b3f54]">
                                    <img 
                                        src={cert.image} 
                                        alt={`${cert.title} certificate`} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>

                                {/* Certificate Meta Content */}
                                <div className="p-5 flex flex-col flex-1 justify-between gap-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm font-medium text-primary mt-1">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                    <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-black/40 dark:text-[#9da1b9]">
                                        <span>Issued: {cert.date}</span>
                                        <span className="text-primary hover:underline cursor-pointer font-semibold">
                                                 <a 
                                                  href={cert.credentialUrl} 
                                                  target="_blank" 
                                                  rel="noopener noreferrer" 
                                                  className="text-primary hover:underline cursor-pointer font-semibold"
                                                >
                                            View Fullscreen
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Certificates;
