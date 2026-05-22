// src/data/portfolioData.ts

// --- Personal Details ---
export const PERSONAL_DATA = {
    name: "Dilshan Wijerathna",
    title: "Software Engineer & Creative Problem Solver",
    email: "dilshanwijerathna426@gmail.com",
    linkedin: "https://www.linkedin.com/in/dilshan-wijerathna",
    github: "https://github.com/Diliwije",
    resumeLink: "https://drive.google.com/file/d/1oV4iIBD5GiGFDIz0BkYxxuKJWy0SkbcA/view?usp=sharing", // Add your actual resume link here
    profilePictureUrl: "/images/profile.jpg",
    university: "NSBM Green University",
    graduationDate: "December 2027",
    keyAchievement: "Selected Member of the IEEE Day 2025 Design Team",
    aboutMe: "I'm a passionate software engineering student at NSBM Green University, driven by a fascination for building elegant and impactful solutions. My journey in tech is fueled by a desire to tackle complex challenges, whether it's developing full-stack applications or exploring the potential of AI. I am currently seeking internship opportunities where I can contribute to innovative projects and continue to grow my skills."
};

// --- Projects Data (Dummy Data) ---
export const PROJECTS_DATA = [
    {
        id: 1,
        title: "BiddingBoom - Real-Time Auction Platform",
        description: "A secure, high-performance auction application featuring real-time bidding and seamless payments. Implemented JWT-based authentication for secure user sessions and integrated PayPal Sandbox for safe, simulated financial transactions.",
        category: "Full-Stack Development",
        techStack: [".NET 9", "React 19", "SignalR", "JWT Authentication", "PayPal SDK", "SQL Server"],
        liveUrl: "https://youtu.be/S1hT_rjuOng",
        githubUrl: "https://github.com/Diliwije/Auction-App",
        imagePlaceholder: "/images/bidding-boom.png"
    },
    {
        id: 2,
        title: "Hotel Management System - Microservices [Back-End]",
        specialNote: "[This Repo(Organization) is Private]",
        description: "A highly scalable hotel management platform built using a microservices architecture, featuring centralized authentication with Keycloak and automated CI/CD deployment on AWS.",
        category: "Full-stack / Back-end",
        techStack: ["Java", "Spring Boot", "Keycloak", "Spring Cloud (Eureka)", "MySQL", "AWS", "CI/CD Pipeline"],
        liveUrl: "#",
        githubUrl: "#",
        imagePlaceholder: "/images/Eureka-Server.png"
    },
    {
        id: 3,
        title: "DevOps POS System Backend",
        description: "A robust Point of Sale backend featuring secure JWT authentication, inventory tracking, and automated order processing built with a focus on DevOps best practices.",
        category: "Backend Development",
        techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
        liveUrl: "#",
        githubUrl: "https://github.com/Diliwije/devops-pos-system",
        imagePlaceholder: "/images/postman.png"
    },
    {
        id: 4,
        title: "𝐀 𝐅𝐮𝐥𝐥𝐲 𝐃𝐨𝐜𝐤𝐞𝐫𝐢𝐳𝐞𝐝 𝐅𝐮𝐥𝐥-𝐒𝐭𝐚𝐜𝐤 𝐏𝐎𝐒 𝐒𝐲𝐬𝐭𝐞𝐦!",
        description: "The core focus of this project was not on building an extensive feature list, but rather on mastering the deployment lifecycle. I prioritized building a reliable, containerized environment that ensures the application runs consistently across any machine. ",
        category: "Backend Development,Frontend Development, DevOps",
        techStack: ["Docker", "Angular", "MongoDB", "JWT", "NodeJs"],
        liveUrl: "#",
        githubUrl: "https://github.com/Diliwije/pos-system-Dokrizing",
        imagePlaceholder: "/images/DevOps-POS.png"
     },
   {
    id: 5,
    title: "CleanPulse",
    description: "CleanPulse is a verified waste reporting and fast resolution tracking platform designed to support SDG 11.6 (Sustainable Cities and Communities). It empowers citizens to report environmental hazards like waste, pollution, and infrastructure issues, which are then verified, prioritized, and tracked for resolution.",
    category: "FullStack-Project",
    techStack: [
        "Next.js", 
        "TypeScript", 
        "Tailwind CSS", 
        "Firebase", 
        "AWS S3", 
        "Leaflet",
        "Gemini API"
    ],
    liveUrl: "",
    githubUrl: "#",
    imagePlaceholder: "/images/CleanPulse.png.png"
}
];

// --- Skills Data ---
export const SKILLS_DATA = [
    
    { name: "Java", category: "Languages", icon: "java", progress: 90 },
    { name: "C#", category: "Languages", icon: "c#", progress: 70 },
    { name: "Dart", category: "Languages", icon: "dart", progress: 70 },
    { name: "JavaScript", category: "Languages", icon: "js", progress: 95 },
    { name: "HTML/CSS", category: "Languages", icon: "html5", progress: 100 }, // Added for 100% progress

    { name: "React", category: "Frameworks & Libraries", icon: "react", progress: 70 },
    {name: "Angular", category: "Frameworks & Libraries", icon: "angular", progress: 90 },
    { name: "Node.js", category: "Frameworks & Libraries", icon: "node-js", progress: 70 },
    { name: "Spring Boot", category: "Frameworks & Libraries", icon: "spring", progress: 90 }, // Linked to 90%
    { name: "Tailwind CSS", category: "Frameworks & Libraries", icon: "tailwind", progress: 100 }, // Linked to 100%

    { name: "SQL", category: "Databases", icon: "database", progress: 90 },
    { name: "MongoDB", category: "Databases", icon: "database", progress: 90 },
    { name: "PostgreSQL", category: "Databases", icon: "database", progress: 70 },
    { name: "Redis", category: "Databases", icon: "database", progress: 70 },

    { name: "Git", category: "Tools & Platforms", icon: "git", progress: 90 },
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

export const PROJECT_CATEGORIES = ["All", "Web Development", "Mobile", "DevOps"];
export const SKILL_CATEGORIES = ["All", "Languages", "Frameworks & Libraries", "Databases", "Tools & Platforms"];
