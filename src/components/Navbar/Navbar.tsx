import { useState, type JSX } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.scss";

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Desktop links */}
        <nav className="navbar__links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="navbar__link"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="navbar__actions">
          <ThemeToggle />

          <button
            className="navbar__menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="navbar__mobile-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
