import styles from "../styles/Skills.module.css";

const skills = [
  { icon: "📊", name: "Excel" },
  { icon: "📈", name: "Power BI" },
  { icon: "🧠", name: "Inteligência Artificial" },
  { icon: "💾", name: "Análise de Dados" },
  { icon: "👁️", name: "Visualização de Dados" },
  { icon: "💡", name: "Resolução de Problemas" },
  { icon: "💼", name: "Conhecimento de Negócio" },
  { icon: "💬", name: "Comunicação" },
];

export default function Skills() {
  return (
    <section id="habilidades" className={styles.skillsSection}>
      <div className="container">
        <h2 className="section-title">
          <span>Habilidades</span>
        </h2>
        <div className="title-underline"></div>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <div className={styles.skillName}>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
