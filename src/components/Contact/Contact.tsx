import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Contact.scss";
import type { JSX } from "react";

const Contact = (): JSX.Element => {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact__container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Contact</h2>
        <p>
          I’m open to opportunities, collaborations, and interesting projects.
          Feel free to reach out.
        </p>

        <div className="contact__links">
          <a href="mailto:omcars253@gmail.com">
            <FiMail /> omcars253@gmail.com
          </a>
          <a
            href="https://github.com/omcarsawant"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/omkar-sawant-b8191222a/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
