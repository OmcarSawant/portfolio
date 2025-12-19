import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiSass,
} from "react-icons/si";
import { SiOpenjdk, SiCplusplus ,SiFigma} from "react-icons/si";

import "./Skills.scss";
import type { JSX } from "react";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SCSS", icon: <SiSass /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Figma" , icon: <SiFigma/>  },
  { name: "c++" , icon: <SiCplusplus/>  },
  { name: "Java" , icon: <SiOpenjdk/>  }
];

const Skills = (): JSX.Element => {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills__container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skills__card">
              <span className="icon">{skill.icon}</span>
              <span className="label">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
