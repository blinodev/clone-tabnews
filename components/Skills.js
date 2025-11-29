// ========== File: components/Skills.js ==========
import styles from '../styles/Home.module.css'

const skills = [
  { icon: '📊', name: 'Excel' },
  { icon: '📈', name: 'Power BI' },
  { icon: '🧠', name: 'Inteligência Artificial' },
  { icon: '💾', name: 'Análise de Dados' },
  { icon: '👁️', name: 'Visualização de Dados' },
  { icon: '💡', name: 'Resolução de Problemas' },
  { icon: '💼', name: 'Conhecimento de Negócio' },
  { icon: '💬', name: 'Comunicação' },
]

export default function Skills() {
  return (
    <section id="habilidades" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}><span>Habilidades</span></h2>
        <div className={styles.titleUnderline}></div>
        <div className={styles.skillsGrid}>
          {skills.map((s) => (
            <div key={s.name} className={styles.skillCard}>
              <div className={styles.skillIcon}>{s.icon}</div>
              <div className={styles.skillName}>{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
