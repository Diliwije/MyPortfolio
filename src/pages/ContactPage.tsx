// src/pages/ContactPage.tsx
import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactPage: React.FC = () => {
    return (
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10 font-display">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
                <main className="flex flex-col gap-12 py-5 px-4 sm:px-10">
                    <div className="flex flex-wrap justify-between gap-3">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Let's Connect</p>
                            <p className="text-black/60 dark:text-[#9da1b9] text-base font-normal leading-normal">I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Contact Form (Dummy submission) */}
                        <form className="flex flex-col gap-6 flex-1" onSubmit={(e) => { e.preventDefault(); alert("Form submitted! (This is a dummy function)"); }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Name</p>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-black/20 dark:border-[#3b3f54] bg-background-light dark:bg-[#1c1d27] focus:border-primary dark:focus:border-primary h-14 placeholder:text-black/40 dark:placeholder:text-[#9da1b9] p-[15px] text-base font-normal leading-normal" placeholder="Your Name" type="text" required />
                                </label>
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Email</p>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-black/20 dark:border-[#3b3f54] bg-background-light dark:bg-[#1c1d27] focus:border-primary dark:focus:border-primary h-14 placeholder:text-black/40 dark:placeholder:text-[#9da1b9] p-[15px] text-base font-normal leading-normal" placeholder="your.email@example.com" type="email" required />
                                </label>
                            </div>
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Subject</p>
                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-black/20 dark:border-[#3b3f54] bg-background-light dark:bg-[#1c1d27] focus:border-primary dark:focus:border-primary h-14 placeholder:text-black/40 dark:placeholder:text-[#9da1b9] p-[15px] text-base font-normal leading-normal" placeholder="Project Inquiry" type="text" required />
                            </label>
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Message</p>
                                <textarea className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-black/20 dark:border-[#3b3f54] bg-background-light dark:bg-[#1c1d27] focus:border-primary dark:focus:border-primary min-h-36 placeholder:text-black/40 dark:placeholder:text-[#9da1b9] p-[15px] text-base font-normal leading-normal" placeholder="Hi, I'd like to discuss..." required></textarea>
                            </label>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors w-full sm:w-auto" type="submit">
                                <span className="truncate">Send Message</span>
                            </button>
                        </form>

                        {/* Contact Info (Using real data) */}
                        <div className="flex flex-col gap-6 lg:w-72">
                            <h3 className="text-xl font-bold text-black dark:text-white">Or Find Me Here</h3>
                            <div className="flex flex-col gap-4">
                                {/* Email */}
                                <a className="flex items-center gap-3 group" href={`mailto:${PERSONAL_DATA.email}`}>
                                    <div className="flex items-center justify-center size-10 bg-black/5 dark:bg-white/5 rounded-lg text-black/60 dark:text-white/60 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-black/60 dark:text-white/60">Email</p>
                                        <p className="font-medium text-black dark:text-white group-hover:text-primary transition-colors">{PERSONAL_DATA.email}</p>
                                    </div>
                                </a>
                                {/* LinkedIn */}
                                <a className="flex items-center gap-3 group" href={PERSONAL_DATA.linkedin} target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center justify-center size-10 bg-black/5 dark:bg-white/5 rounded-lg text-black/60 dark:text-white/60 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-black/60 dark:text-white/60">LinkedIn</p>
                                        <p className="font-medium text-black dark:text-white group-hover:text-primary transition-colors">/in/dilshan-wijerathna</p>
                                    </div>
                                </a>
                                {/* GitHub */}
                                <a className="flex items-center gap-3 group" href={PERSONAL_DATA.github} target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center justify-center size-10 bg-black/5 dark:bg-white/5 rounded-lg text-black/60 dark:text-white/60 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-black/60 dark:text-white/60">GitHub</p>
                                        <p className="font-medium text-black dark:text-white group-hover:text-primary transition-colors">/Diliwije</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ContactPage;
