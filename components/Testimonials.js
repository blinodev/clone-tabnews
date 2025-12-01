import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    text: "Trabalhar com este profissional foi decisivo para elevar a maturidade analítica do nosso time. Sua capacidade de transformar dados complexos em insights práticos gerou impacto direto na tomada de decisão. Sempre comprometido, colaborativo e com forte visão estratégica.",
    author: "Gerente de Projetos",
  },
  {
    text: "Além do excelente conhecimento técnico em Python, SQL e Power BI, sua comunicação clara facilita muito o trabalho em equipe. Explica conceitos complexos de forma simples, o que ajuda stakeholders a compreenderem o impacto das soluções propostas.",
    author: "Product Owner",
  },
  {
    text: "Trabalhar com ele foi inspirador. Sempre atualizado com tendências de Data Science e pronto para propor soluções inovadoras. O cuidado com a qualidade técnica e a precisão dos modelos elevou o padrão dos nossos projetos.",
    author: "Diretora de Tecnologia",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className={styles.testimonialsSection}>
      <div className="container">
        <h2 className="section-title">
          <span>Depoimentos</span> e Recomendações
        </h2>
        <div className="title-underline"></div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <p className={styles.testimonialAuthor}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
