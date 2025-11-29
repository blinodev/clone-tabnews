// ========== File: components/Nav.js ==========
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Nav({ dark, setDark }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.logo}>A-X-L Data</a>

        <button
          className={styles.menuToggle}
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <ul className={`${styles.navLinks} ${open ? styles.active : ''}`} id="navLinks">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#sobre" onClick={() => setOpen(false)}>Sobre</a></li>
          <li><a href="#habilidades" onClick={() => setOpen(false)}>Habilidades</a></li>
          <li><a href="#projetos" onClick={() => setOpen(false)}>Projetos</a></li>
          <li><a href="#depoimentos" onClick={() => setOpen(false)}>Depoimentos</a></li>
          <li><a href="#contato" onClick={() => setOpen(false)}>Contato</a></li>
          <li>
            <button
              className={styles.themeToggle}
              onClick={() => setDark((d) => !d)}
              aria-label="Alternar tema"
            >
              {dark ? '🌙 Dark' : '☀️ Light'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}