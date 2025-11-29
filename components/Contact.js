
// ========== File: components/Contact.js ==========
import styles from '../styles/Home.module.css'

export default function Contact(){
  return (
    <section id="contato">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Vamos <span>Conversar?</span></h2>
        <div className={styles.titleUnderline}></div>
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            <a href="https://api.whatsapp.com/send/?phone=5548992465508&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className={`${styles.contactBtn} ${styles.primary}`}>
              <div className={styles.contactIcon}>💬</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>Contato Principal</div>
                <div className={styles.contactValue}>WhatsApp</div>
              </div>
            </a>

            <a href="mailto:blinodev@gmail.com" className={styles.contactBtn}>
              <div className={styles.contactIcon}>✉️</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>E-mail</div>
                <div className={styles.contactValue}>blinodev@gmail.com</div>
              </div>
            </a>

            <a href="http://www.axldata.com.br" target="_blank" rel="noreferrer" className={styles.contactBtn}>
              <div className={styles.contactIcon}>🌐</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>Website</div>
                <div className={styles.contactValue}>www.axldata.com.br</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/linoj/" target="_blank" rel="noreferrer" className={styles.contactBtn}>
              <div className={styles.contactIcon}>💼</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>LinkedIn</div>
                <div className={styles.contactValue}>Lino J</div>
              </div>
            </a>
          </div>

          <p style={{textAlign:'center', color:'var(--text-secondary)', marginTop:20, fontSize:14}}>
            Respondo rapidamente e estou sempre aberto para novos desafios e oportunidades
          </p>
        </div>
      </div>
    </section>
  )
}
