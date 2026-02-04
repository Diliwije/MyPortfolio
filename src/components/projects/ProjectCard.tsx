import React from 'react';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    imagePlaceholder: string;
    specialNote?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-200 dark:border-[#282b39] rounded-xl bg-background-light dark:bg-[#1c1d27] hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url(${project.imagePlaceholder})` }}
                data-alt={`Screenshot of ${project.title} application`}
            ></div>
            <div className="flex flex-col gap-3 flex-grow">
                <div className="flex flex-col gap-1">
                    <p className="text-gray-900 dark:text-white text-base font-bold leading-normal">{project.title}</p>
                    {project.specialNote && (
                        <p className="text-xs font-semibold text-red-500 dark:text-red-400 italic">
                            {project.specialNote}
                        </p>
                    )}
                </div>

                <p className="text-gray-600 dark:text-[#9da1b9] text-sm font-normal leading-normal">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.techStack.map(tech => (
                        <div key={tech} className="flex h-6 shrink-0 items-center justify-center rounded bg-primary/20 px-2">
                            <p className="text-primary text-xs font-medium">{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                        <FontAwesomeIcon icon={faEye} />
                        <span>Live Demo</span>
                    </a>
                )}
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-[#282b39] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-[#3b3f54] transition-colors">
                        <FontAwesomeIcon icon={faCode} />
                        <span>GitHub</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
