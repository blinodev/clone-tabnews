import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Analista de Dados</h1>
            <h2>
              Especialista em Machine Learning | Python | SQL | Excel e Power BI
            </h2>
            <p className={styles.heroTagline}>
              Transformando dados em decisões estratégicas que geram resultados
              reais.
            </p>
            <p className={styles.heroSubtitle}>
              Análises precisas, estratégias inteligentes e impacto mensurável
              para sua empresa.
            </p>
            <div className={styles.heroButtons}>
              <a
                href="https://api.whatsapp.com/send/?phone=5548992465508&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 Entre em Contato
              </a>
              <a href="#projetos" className="btn-outline">
                Ver Projetos
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://i.ibb.co/fzTBR429/logo.png"
              alt="Lino J."
              className={styles.profileImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
