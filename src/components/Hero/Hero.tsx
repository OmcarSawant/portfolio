import { motion } from "framer-motion";
import "./Hero.scss";
import "./../../assets/doodle.png"
import type { JSX } from "react";

const Hero = (): JSX.Element => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="doodle.png" />
        <>
          <h1>
            Hi, I’m <span>Omkar</span>
          </h1>
          <h2>Web Developer</h2>

          <p>I’m a web developer who enjoys building modern, scalable applications with a
            strong focus on clean UI, performance, and maintainable code.
          </p>
          <p>
            I like working across the stack when needed, understanding how frontend
            decisions impact backend systems, APIs, and overall user experience.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </>
      </motion.div>
    </section>
  );
};

export default Hero;
