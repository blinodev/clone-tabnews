// ========== File: components/About.js ==========
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <section id="sobre">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Sobre <span>Mim</span></h2>
        <div className={styles.titleUnderline}></div>
        <div className={styles.aboutContent}>
          <p>
            Sou <span className={styles.highlight}>Janes Barros Lino</span>, Analista de Dados com mais de 15 anos de experiência 
            transformando informações em decisões estratégicas. Minha trajetória combina 
            conhecimento técnico sólido e visão de negócio, permitindo criar soluções de 
            análise que realmente impactam resultados.
          </p>

          <p>
            Sou graduado em <span className={styles.highlightPurple}>Engenharia Telecom</span>, pós-graduado em <span className={styles.highlightPurple}>Ciência de Dados</span> e 
            <span className={styles.highlightPurple}>Gestão de Projetos</span> — formações que me capacitam a unir tecnologia, estratégia e 
            inovação em cada projeto.
          </p>

          <p className={styles.highlight}>
            Meu compromisso é transformar dados em valor real para o negócio, unindo 
            técnica, criatividade e foco em resultados.
          </p>
        </div>
      </div>
    </section>
  )
}
