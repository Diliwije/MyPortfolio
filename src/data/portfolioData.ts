// src/data/portfolioData.ts

// --- Personal Details ---
export const PERSONAL_DATA = {
    name: "Dilshan Wijerathna",
    title: "Software Engineer & Creative Problem Solver",
    email: "dilshanwijerathna426@gmail.com",
    linkedin: "https://www.linkedin.com/in/dilshan-wijerathna",
    github: "https://github.com/Diliwije",
    resumeLink: "#", // Add your actual resume link here
    profilePictureUrl: "/images/profile.jpg",
    university: "NSBM Green University",
    graduationDate: "December 2027",
    keyAchievement: "Top Performer in University Hackathon 2024", // Changed dummy value for realism
    aboutMe: "I'm a passionate software engineering student at NSBM Green University, driven by a fascination for building elegant and impactful solutions. My journey in tech is fueled by a desire to tackle complex challenges, whether it's developing full-stack applications or exploring the potential of AI. I am currently seeking internship opportunities where I can contribute to innovative projects and continue to grow my skills."
};

// --- Projects Data (Dummy Data) ---
export const PROJECTS_DATA = [
    {
        id: 1,
        title: "Nexus - Collaborative Editor",
        description: "A web-based collaborative code editor built with React, Node.js, and WebSockets to enable seamless real-time pair programming.",
        category: "Web Development",
        techStack: ["React", "Node.js", "WebSockets"],
        liveUrl: "#",
        githubUrl: "#",
        imagePlaceholder: "https://via.placeholder.com/600x400/191C2D/FFFFFF?text=Project+1+Screenshot"
    },
    {
        id: 2,
        title: "Project Phoenix - Mobile Task Manager",
        description: "A cross-platform mobile app for task management built with Flutter and Firebase.",
        category: "Mobile",
        techStack: ["Flutter", "Firebase", "Dart"],
        liveUrl: "#",
        githubUrl: "#",
        imagePlaceholder: "https://via.placeholder.com/600x400/191C2D/FFFFFF?text=Project+2+Screenshot"
    },
    {
        id: 3,
        title: "DataViz Dashboard",
        description: "An interactive data visualization dashboard for analyzing market trends using D3.js and Python.",
        category: "Data Science",
        techStack: ["D3.js", "Python", "Flask"],
        liveUrl: "#",
        githubUrl: "#",
        imagePlaceholder: "https://via.placeholder.com/600x400/191C2D/FFFFFF?text=Project+3+Screenshot"
    },
    {
        id: 4,
        title: "CloudStream - CI/CD Pipeline",
        description: "A fully automated CI/CD pipeline for a microservices architecture using Docker and AWS.",
        category: "DevOps",
        techStack: ["AWS", "Docker", "Jenkins"],
        liveUrl: "",
        githubUrl: "#",
        imagePlaceholder: "https://via.placeholder.com/600x400/191C2D/FFFFFF?text=Project+4+Screenshot"
    },
    {
        id: 5,
        title: "AlgoTrader Bot",
        description: "A cryptocurrency trading bot implementing various algorithmic strategies using Python.",
        category: "Data Science",
        techStack: ["Python", "REST APIs"],
        liveUrl: "",
        githubUrl: "#",
        imagePlaceholder: "https://via.placeholder.com/600x400/191C2D/FFFFFF?text=Project+5+Screenshot"
    },
];

// --- Skills Data ---
export const SKILLS_DATA = [
    { name: "Python", category: "Languages", icon: "python", progress: 70 },
    { name: "Java", category: "Languages", icon: "java", progress: 90 },
    { name: "C++", category: "Languages", icon: "c++", progress: 70 },
    { name: "JavaScript", category: "Languages", icon: "js", progress: 70 },
    { name: "HTML/CSS", category: "Languages", icon: "html5", progress: 100 }, // Added for 100% progress

    { name: "React", category: "Frameworks & Libraries", icon: "react", progress: 70 },
    { name: "Node.js", category: "Frameworks & Libraries", icon: "node-js", progress: 70 },
    { name: "Spring Boot", category: "Frameworks & Libraries", icon: "java", progress: 90 }, // Linked to 90%
    { name: "Django", category: "Frameworks & Libraries", icon: "django", progress: 70 },
    { name: "Tailwind CSS", category: "Frameworks & Libraries", icon: "tailwind", progress: 100 }, // Linked to 100%

    { name: "SQL", category: "Databases", icon: "database", progress: 70 },
    { name: "MongoDB", category: "Databases", icon: "database", progress: 70 },
    { name: "PostgreSQL", category: "Databases", icon: "database", progress: 70 },
    { name: "Redis", category: "Databases", icon: "database", progress: 70 },

    { name: "Git", category: "Tools & Platforms", icon: "git", progress: 70 },
    { name: "Docker", category: "Tools & Platforms", icon: "docker", progress: 70 },
    { name: "AWS", category: "Tools & Platforms", icon: "aws", progress: 70 },
    { name: "Jenkins", category: "Tools & Platforms", icon: "jenkins", progress: 70 },
];

export const STRENGTHS_DATA = [
    { title: "Team Collaboration", icon: "groups" },
    { title: "Problem Solving", icon: "emoji_objects" },
    { title: "Communication", icon: "record_voice_over" },
    { title: "Agile Methodologies", icon: "cycle" },
];

export const PROJECT_CATEGORIES = ["All", "Web Development", "Mobile", "Data Science", "DevOps"];
export const SKILL_CATEGORIES = ["All", "Languages", "Frameworks & Libraries", "Databases", "Tools & Platforms"];
