// import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import ProjectCard from "./common/ProjectCard/ProjectCard";


function Projects() {
  const projects = [
    {
      title: "Creative Challenge",
      description: "In this challenge I built Solar System by using HTML and CSS",
      image: "/images/solarsystem.jpeg",
      alt: "solarsystem image",
      githubLink: "https://github.com/riikka-kallio/svg-project-solar-system",
      liveLink: "https://6682b9551ce4f920aa2ac5a3--ornate-muffin-e6db46.netlify.app/",
    },
    {
      title: "Four Card Feature",
      description: "In this project I built a four card feature from Figma design by using HTML and CSS",
      image: "/images/fourcardfeature.jpeg",
      alt: "four cards image",
      githubLink: "https://github.com/riikka-kallio/four-card-image-riikka",
      liveLink: "https://fastidious-pie-e53f68.netlify.app/",
    },
    {
      title: "Snake Game",
      description: "Snake Game I built in collaboration using JavaScript, HTML and CSS.",
      image: "/images/snakegame.jpeg",
      alt: "snake game image",
      githubLink: "https://github.com/riikka-kallio/snake-game-v1",
      liveLink: "https://66eb17e57e08fb739564971f--endearing-marigold-8879a0.netlify.app/",
    },
    {
      title: "Weather and Local News API",
      description: "In this project I built a weather and local news app using two APIs.",
      image: "/images/weatherapi.jpeg",
      alt: "weather and news app image",
      githubLink: "https://github.com/riikka-kallio/weather-api-app",
      liveLink: "https://vocal-cupcake-d2f9e9.netlify.app/",
    },
    {
      title: "Christmas Game (Hackathon Challenge)",
      description: "This was a Hackathon challenge where we built a Christmas Game using React.",
      image: "/images/christmasgame.jpeg",
      alt: "christmas game image",
      githubLink: "https://github.com/riikka-kallio/christmas-game-hackathon-2024",
      liveLink: "https://christmas-game-hackathon-2024.netlify.app/",
    },
    {
      title: "Serverless Book App",
      description: "This app uses serverless functions made with React and Next.js",
      image: "/images/booksapp.jpeg",
      alt: "book app image",
      githubLink: "https://github.com/riikka-kallio/c18-next-books",
      liveLink: "https://c18-next-books.vercel.app/",
    },
  ];

  return (
    <Container id="Projects" className="general-container">
      <Typography variant="h2">Projects</Typography>
      <Grid container className="project-grid" spacing={3}>
        {projects.map((project, index) => (
          <Grid key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;