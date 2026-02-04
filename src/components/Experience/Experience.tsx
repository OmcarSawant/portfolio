import { motion } from "framer-motion";
import "./Experience.scss";
import type { JSX } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Intern",
    company: "OpenText",
    duration: "April 2025 – October 2025",
    points: [
      "Worked with engineering teams to understand backend workflows and authentication systems.",
      "Designed and executed automated test workflows for OAuth and SAML-based systems.",
      "Debugged backend issues using SQL queries, REST APIs, logs, and Linux tools.",
      "Integrated automated test suites into Jenkins CI/CD pipelines.",
    ],
  }
];

const Experience = (): JSX.Element => {
  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience__container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>

        <div className="experience__list">
          {experiences.map((exp) => (
            <div key={exp.role} className="experience__item">
              <div className="experience__header">
                <h3>{exp.role}</h3>
                <span>{exp.duration}</span>
              </div>

              <p className="experience__company">{exp.company}</p>

              <ul>
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

