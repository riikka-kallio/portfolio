import ProjectCard from "./common/ProjectCard/ProjectCard";

const ACCENT_SAGE = '#b9c9ab';
const ACCENT_TERRACOTTA = '#d98a6b';

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio site built with Next.js and React. It features a custom contact form powered by Next.js API routes and Maileroo for seamless communication. Focused on clean code, accessibility, and modern web standards.",
    image: "/images/portfolio.png",
    alt: "portfolio website screenshot",
    githubLink: "https://github.com/riikka-kallio/portfolio",
    liveLink: "https://riikka.io/",
  },
  {
    title: "Weather and Local News API",
    description: "A real-time news and weather dashboard built with JavaScript and Web APIs. This project focuses on dynamic data fetching, error handling, and presenting live information.",
    image: "/images/weatherapi.jpeg",
    alt: "weather and news app screenshot",
    githubLink: "https://github.com/riikka-kallio/weather-api-app",
    liveLink: "https://vocal-cupcake-d2f9e9.netlify.app/",
  },
  {
    title: "Snake Game",
    description: "A team-built Snake game using JavaScript, HTML, and CSS. I handled the design and the final code integration, ensuring the game was functional, responsive, and user-friendly.",
    image: "/images/snakegame.jpeg",
    alt: "snake game screenshot",
    githubLink: "https://github.com/riikka-kallio/snake-game-v1",
    liveLink: "https://66eb17e57e08fb739564971f--endearing-marigold-8879a0.netlify.app/",
  },
  {
    title: "Creative Challenge",
    description: "A creative challenge where I built an interactive solar system using SVG, HTML, and CSS. I focused on using CSS animations to create smooth, realistic planetary orbits while keeping the code clean.",
    image: "/images/solarsystem.jpeg",
    alt: "solar system creative challenge screenshot",
    githubLink: "https://github.com/riikka-kallio/svg-project-solar-system",
    liveLink: "https://6682b9551ce4f920aa2ac5a3--ornate-muffin-e6db46.netlify.app/",
  },
  {
    title: "Four Card Feature",
    description: "I built this to practice taking a professional Figma design and turning it into a real website. Using HTML and CSS, I made sure every detail matched the original design while keeping the layout responsive and easy to navigate.",
    image: "/images/fourcardfeature.jpeg",
    alt: "four card feature screenshot",
    githubLink: "https://github.com/riikka-kallio/four-card-image-riikka",
    liveLink: "https://fastidious-pie-e53f68.netlify.app/",
  },
  {
    title: "Christmas Game (Hackathon)",
    description: "A festive Christmas game built during a Hackathon challenge. This was a team project where we used React and collaborated through GitHub. I worked closely with my teammates to build a fun, interactive experience under a tight deadline.",
    image: "/images/christmasgame.jpeg",
    alt: "christmas hackathon game screenshot",
    githubLink: "https://github.com/riikka-kallio/christmas-game-hackathon-2024",
    liveLink: "https://christmas-game-hackathon-2024.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            accentColor={index % 2 === 0 ? ACCENT_SAGE : ACCENT_TERRACOTTA}
          />
        ))}
      </div>
    </section>
  );
}
