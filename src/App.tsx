import type { JSX } from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.tsx";
import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <ThemeToggle />

      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
