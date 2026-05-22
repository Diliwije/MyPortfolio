# Dilshan Portfolio 🚀

Welcome to my personal portfolio website! This project is a modern, responsive, and visually engaging portfolio designed to showcase my software engineering skills, technical expertise, and personal projects.

🌐 **Live Demo:** [https://dilshan-my-portfolio.netlify.app/](https://dilshan-my-portfolio.netlify.app/)

---

## ✨ Key Features

- **Modern & Responsive UI:** Built with Tailwind CSS, ensuring a pixel-perfect layout across mobile, tablet, and desktop screens.
- **3D Interactive Elements:** Immersive visual experience powered by Three.js and React Three Fiber.
- **Smooth Animations:** Dynamic transitions, scroll-triggered animations, and hover effects built with Framer Motion.
- **Project Showcase:** Detailed section highlighting various projects, features, and source code.
- **Skills Directory:** A dedicated space categorized by technologies, tools, and proficiencies.
- **Integrated Contact Form:** A fully functional contact section integrated with EmailJS for direct communication.

---

## 🛠️ Technologies Used

- **Frontend Library:** React 19
- **Programming Language:** TypeScript
- **Styling Framework:** Tailwind CSS (with PostCSS and Autoprefixer)
- **3D Graphics:** Three.js & React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
- **Animation:** Framer Motion
- **Icons:** FontAwesome (`@fortawesome/react-fontawesome`)
- **Contact Service:** EmailJS (`@emailjs/browser`)
- **Routing:** React Router DOM

---

## 📦 Project Structure Overview

```text
src/
├── components/       # Reusable UI components
│   ├── projects/     # Project cards and showcase logic
│   └── shared/       # Header, Footer, and ScrollReveal components
├── data/             # Portfolio static data (portfolioData.ts)
├── pages/            # Core views (HomePage, AboutPage, SkillsPage, ProjectsPage, ContactPage)
├── App.tsx           # Application routing and core setup
└── index.tsx         # Application entry point
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Make sure you have **Node.js** installed (version 16+ recommended).

### 1. Clone the Repository

```bash
git clone <repository-url>
cd MyPortfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the local instance.

### 4. Build for Production

To generate an optimized build for production (into the `build` folder):

```bash
npm run build
```

---

## 🌐 Deployment Note

This website is configured to deploy seamlessly on **Netlify**. It includes a `netlify.toml` file that handles the Single Page Application (SPA) routing, ensuring that all deep links redirect correctly without causing 404 errors:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📬 Contact Me

Feel free to reach out if you'd like to collaborate, discuss project opportunities, or just say hello!

- **Email:** Can be sent directly via the contact form on the website.
- **LinkedIn:** [Dilshan's Profile](https://dilshan-my-portfolio.netlify.app/) *(Or add your exact LinkedIn URL here)*
