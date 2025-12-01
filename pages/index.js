import { useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    // Smooth scroll functionality
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });

    // Close menu when clicking outside
    const handleClickOutside = (e) => {
      const nav = document.querySelector("nav");
      const navLinks = document.querySelector(".navLinks");

      if (
        navLinks &&
        navLinks.classList.contains("active") &&
        !nav.contains(e.target)
      ) {
        navLinks.classList.remove("active");
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup
    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  );
}
