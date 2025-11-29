// ========== File: components/Hero.js ==========
import styles from '../styles/Home.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.gradientTitle}>Analista Data Science Analytics</h1>
            <h2 className={styles.subtitle}>Especialista em Machine Learning | Python | SQL | Excel e Power BI</h2>
            <p className={styles.heroTagline}>Transformando dados em decisões estratégicas que geram resultados reais</p>
            <p className={styles.heroSubtitle}>Análises precisas, estratégias inteligentes e impacto mensurável para sua empresa</p>

            <div className={styles.heroButtons}>
              <a className={styles.btnPrimary} href="https://api.whatsapp.com/send/?phone=5548992465508&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">💬 Entre em Contato</a>
              <a className={styles.btnOutline} href="#projetos">Ver Projetos</a>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img src="https://i.ibb.co/HDKJ0Wc/1733408686458.jpg" alt="Janes Barros Lino" className={styles.profileImg} />
          </div>
        </div>
      </div>
    </section>
  )
}
