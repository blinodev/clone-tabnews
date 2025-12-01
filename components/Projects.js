import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "People Analytics (RH)",
    description:
      "Mapear o perfil dos colaboradores e orientar decisões de recrutamento, capacitação e sucessão com base em dados de gênero, formação, idade, setor, cargo e localização.",
    image: "https://i.ibb.co/TqgZQsGt/rh.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiN2ZhNDJhZDgtMzc3Ny00MDJkLThmMGQtNzU5YTEyNzNhMWViIiwidCI6IjhiNTEwMjFkLTAxZWItNDFhMy05MjY4LWU5NWExMDE5Njk0NSJ9",
  },
  {
    title: "Performance de Produtos",
    description:
      "Monitorar receita, metas, sazonalidade por cliente e performance por vendedor para priorizar contas e campanhas.",
    image: "https://i.ibb.co/C3K3Ypsj/produto.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNDM5NTE0N2MtNzE5Zi00NzEyLTkwYzktN2E2NWUxODhjOTNmIiwidCI6IjhiNTEwMjFkLTAxZWItNDFhMy05MjY4LWU5NWExMDE5Njk0NSJ9",
  },
  {
    title: "Acidentes de Trânsito",
    description:
      "Identificar causas, períodos críticos e tipos de pista com maior incidência de acidentes para orientar políticas preventivas e estratégias de fiscalização.",
    image: "https://i.ibb.co/Lz0tVZnv/acidentes.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOGU2OWJkYjItNTA5YS00NjU3LWFjMTItMmQzM2NmYjJhMzU3IiwidCI6IjhiNTEwMjFkLTAxZWItNDFhMy05MjY4LWU5NWExMDE5Njk0NSJ9",
  },
  {
    title: "SAC (Serviço de Atendimento ao Cliente)",
    description:
      "Gerir a operação de atendimento por status, setor, localização e histórico, priorizando pendências e otimizando a alocação de recursos.",
    image: "https://i.ibb.co/60ysgyf8/dashbord-sac.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNTNiYWVlOTMtMDllYy00ZWM2LThhZjMtN2UxMGIwZTI0MGFjIiwidCI6IjhiNTEwMjFkLTAxZWItNDFhMy05MjY4LWU5NWExMDE5Njk0NSJ9",
  },
];

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <h2 className="section-title">
          Meus <span>Projetos</span>
        </h2>
        <div className="title-underline"></div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
