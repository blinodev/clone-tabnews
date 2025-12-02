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
        // Se o link é para uma âncora externa (como WhatsApp), não faz scroll
        if (this.getAttribute("href").includes("http")) return;

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
      // Usando o atributo de estilo do StyleX para identificar o menu
      const navLinks = nav?.querySelector("ul");

      if (
        navLinks &&
        navLinks.style.display === "flex" &&
        !nav.contains(e.target)
      ) {
        // Reseta o estilo para esconder o menu
        navLinks.style.display = "";
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Scroll effect para navbar
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.5)";
      } else {
        nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
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
