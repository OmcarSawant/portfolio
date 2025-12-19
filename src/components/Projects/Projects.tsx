import { motion } from "framer-motion";
import "./Projects.scss";
import type { JSX } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "HomeQuest",
    description:
      "A full-stack property listing and messaging platform with authentication and REST APIs.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
  },
  {
    title: "Taskly",
    description:
      "A responsive task planner with clean UI, persistent storage, and smooth user experience.",
    tech: ["React", "Javascript", "SCSS"],
    github: "https://github.com/omcarsawant/taskly",
    live:"https://taskly-silk.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React, TypeScript, SCSS, and a dark/light theme system.",
    tech: ["React", "TypeScript", "SCSS"],
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "getRecipe",
    description:
      "Recipe web application made with reactjs , SCSS",
    tech: ["React", "JavaScript", "SCSS"],
    github: "https://github.com/OmcarSawant/get-recipe-",
    live:"https://getrecipe.vercel.app/",
  },
];

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects__container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.title} className="projects__card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="projects__tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="projects__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
