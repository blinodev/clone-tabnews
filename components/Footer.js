import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Marca + Logo */}
        <div className={styles.footerBrand}>
          <div className={styles.brandRow}>
            <h3>A-X-L Data</h3>
          </div>

          <p>
            Transformando dados em decisões estratégicas que geram resultados
            reais.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4>Links Rápidos</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        {/* Contatos */}
        <div>
          <h4>Contato</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=5548992465508&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:contato@axldata.com.br">
                ✉️ contato@axldata.com.br
              </a>
            </li>
            <li>
              <a
                href="http://www.axldata.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 www.axldata.com.br
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/linoj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2024 A-X-L Data. Todos os direitos reservados.</p>
        <p>Desenvolvido com foco em excelência e inovação.</p>
      </div>
    </footer>
  );
}
