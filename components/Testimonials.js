// ========== File: components/Testimonials.js ==========
import styles from '../styles/Home.module.css'

const testimonials = [
  { text: 'Trabalhar com este profissional foi decisivo para elevar a maturidade analítica do nosso time.', author: '— Gerente de Projetos' },
  { text: 'Além do excelente conhecimento técnico, sua comunicação clara facilita muito o trabalho em equipe.', author: '— Product Owner' },
  { text: 'Sempre atualizado com tendências de Data Science e pronto para propor soluções inovadoras.', author: '— Diretora de Tecnologia' },
]

export default function Testimonials(){
  return (
    <section id="depoimentos" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}><span>Depoimentos</span> e Recomendações</h2>
        <div className={styles.titleUnderline}></div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t,i)=> (
            <div className={styles.testimonialCard} key={i}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.testimonialText}>{t.text}</p>
              <p className={styles.testimonialAuthor}>{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
