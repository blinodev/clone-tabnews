import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          A-X-L Data | Analista Data Science Analytics | Especialista em Machine
          Learning
        </title>
        <meta
          name="description"
          content="Janes Barros Lino - Analista de Dados com 15+ anos transformando informações em decisões estratégicas. Especialista em Python, SQL, Excel, Power BI e Machine Learning."
        />
        <meta
          name="keywords"
          content="Data Science, Machine Learning, Power BI, Python, SQL, Excel, Análise de Dados, Business Intelligence, Visualização de Dados"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
