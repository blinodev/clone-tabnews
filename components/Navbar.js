import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.5)";
      } else {
        nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.logo}>
          A-X-L Data
        </a>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.navLinks} ${menuActive ? styles.active : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#habilidades" onClick={closeMenu}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={closeMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#depoimentos" onClick={closeMenu}>
              Depoimentos
            </a>
          </li>
          <li>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
