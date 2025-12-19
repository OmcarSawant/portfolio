import type { JSX } from "react";
import "./Footer.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Omkar Sawant. Built with React & TypeScript.
      </p>
    </footer>
  );
};

export default Footer;
