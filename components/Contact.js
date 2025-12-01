import styles from "../styles/Contact.module.css";

const contactMethods = [
  {
    label: "Contato Principal",
    value: "WhatsApp",
    icon: "💬",
    link: "https://api.whatsapp.com/send/?phone=5548992465508&text&type=phone_number&app_absent=0",
    primary: true,
  },
  {
    label: "E-mail",
    value: "blinodev@gmail.com",
    icon: "✉️",
    link: "mailto:blinodev@gmail.com",
    primary: false,
  },
  {
    label: "Website",
    value: "www.axldata.com.br",
    icon: "🌐",
    link: "http://www.axldata.com.br",
    primary: false,
  },
  {
    label: "LinkedIn",
    value: "Lino J",
    icon: "💼",
    link: "https://www.linkedin.com/in/linoj/",
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <h2 className="section-title">
          Vamos <span>Conversar?</span>
        </h2>
        <div className="title-underline"></div>
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`${styles.contactBtn} ${method.primary ? styles.primary : ""}`}
              >
                <div className={styles.contactIcon}>{method.icon}</div>
                <div className={styles.contactInfo}>
                  <div className={styles.contactLabel}>{method.label}</div>
                  <div className={styles.contactValue}>{method.value}</div>
                </div>
              </a>
            ))}
          </div>
          <p className={styles.contactNote}>
            Respondo rapidamente e estou sempre aberto para novos desafios e
            oportunidades
          </p>
        </div>
      </div>
    </section>
  );
}
