// ========== File: pages/index.js ==========
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import '../styles/globals.css';


export default function Home() {
  // dark mode state (hydration-safe)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('axl-dark')
    if (saved) setDark(saved === 'true')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('axl-dark', dark)
  }, [dark])

  return (
    <>
      <Head>
        <title>A-X-L Data | Janes Barros Lino</title>
        <meta name="description" content="Janes Barros Lino - Analista de Dados, especialista em Machine Learning, Power BI, Python e SQL." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.app}>
        <Nav dark={dark} setDark={setDark} />
        <main className={styles.main}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
