// ========== File: components/Footer.js ==========
import styles from '../styles/Home.module.css'

export default function Footer(){
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <h3>A-X-L Data</h3>
          <p style={{color:'var(--text-secondary)'}}>Transformando dados em decisões estratégicas que geram resultados reais.</p>
        </div>

        <div>
          <h4 style={{marginBottom:15, color:'var(--text-primary)'}}>Links Rápidos</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{marginBottom:15, color:'var(--text-primary)'}}>Contato</h4>
          <ul className={styles.footerLinks}>
            <li><a href="https://api.whatsapp.com/send/?phone=5548992465508&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">💬 WhatsApp</a></li>
            <li><a href="mailto:blinodev@gmail.com">✉️ blinodev@gmail.com</a></li>
            <li><a href="http://www.axldata.com.br" target="_blank" rel="noreferrer">🌐 www.axldata.com.br</a></li>
            <li><a href="https://www.linkedin.com/in/linoj/" target="_blank" rel="noreferrer">💼 LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} A-X-L Data. Todos os direitos reservados.</p>
        <p style={{marginTop:10}}>Desenvolvido com foco em excelência e inovação.</p>
      </div>
    </footer>
  )
}
