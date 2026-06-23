import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <h2 className="section-title">
          Quem <span>somos</span>
        </h2>
        <div className="title-underline"></div>
        <div className={styles.aboutContent}>
          <p>
            <span className={styles.highlight}>
             A-X-L Data </span>é uma empresa orientada por dados, especializada em Engenharia de Dados, Ciência de Dados e Gestão de Projetos. Atuamos com soluções em análise avançada, inteligência artificial e machine learning, desenvolvendo produtos e processos que apoiam a tomada de decisão baseada em evidências.          </p>
          <p>
            Contamos com expertise em <span className={styles.highlight}> Excel, Power BI e IA aplicada,</span> atuando desde a coleta e modelagem até a visualização e comunicação de insights. Nosso compromisso é transformar dados em valor real, combinando excelência técnica, inovação e foco em resultados para impulsionar o crescimento sustentável dos nossos clientes.          </p>
          <p>
           <span className={styles.highlight}>
              
            </span>{" "}
                      </p>
          <p>
            Nosso compromisso é transformar dados em valor real para os negócios, combinando excelência técnica, inovação e foco em resultados para apoiar decisões mais inteligentes e impulsionar o crescimento sustentável de nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
