import { motion } from "framer-motion";
import "./About.scss";
import type { JSX } from "react";

const About = (): JSX.Element => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about__content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I’m a web developer who enjoys building clean, scalable, and
          user-focused applications. I focus on writing maintainable code,
          designing intuitive interfaces, and understanding systems beyond
          just the UI.
        </p>

        <p>
          I like working across the stack when needed and understanding how
          frontend decisions impact backend systems, APIs, and overall
          performance.
        </p>

        <div className="about__divider" />

        <div className="about__education">
          <h3>Education</h3>

          <div className="education__item">
            <h4>Bachelor of Engineering in Computer Science</h4>
            <p className="education__college">
              Dayananda Sagar College of Engineering, Bangalore
            </p>
            <span className="education__duration">2021 – 2025</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
