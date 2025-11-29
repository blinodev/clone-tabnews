
// ========== File: components/Projects.js ==========
import styles from '../styles/Home.module.css'

const projects = [
  {
    img: 'https://i.ibb.co/Z12qSjZ/Dashboard-RH.png',
    title: 'People Analytics (RH)',
    desc: 'Mapear o perfil dos colaboradores e orientar decisões de recrutamento, capacitação e sucessão.'
  },
  {
    img: 'https://i.ibb.co/MkwRM4s/Dashboard-Produtos.png',
    title: 'Performance de Produtos',
    desc: 'Monitorar receita, metas, sazonalidade por cliente e performance por vendedor.'
  },
  {
    img: 'https://i.ibb.co/GzMypr6/Dashboard-Acidentes-de-Transito.png',
    title: 'Acidentes de Trânsito',
    desc: 'Identificar causas, períodos críticos e tipos de pista com maior incidência de acidentes.'
  },
  {
    img: 'https://i.ibb.co/nqLYdn9/Dashboard-SAC.png',
    title: 'SAC (Atendimento)',
    desc: 'Gerir a operação de atendimento por status, setor, localização e histórico.'
  }
]

export default function Projects() {
  return (
    <section id="projetos">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Meus <span>Projetos</span></h2>
        <div className={styles.titleUnderline}></div>
        <div className={styles.projectsGrid}>
          {projects.map((p) => (
            <a key={p.title} className={styles.projectCard} href="#" onClick={(e)=>e.preventDefault()}>
              <img src={p.img} alt={p.title} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDescription}>{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
