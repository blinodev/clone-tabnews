export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Cabeçalho */}
      <header
        style={{
          backgroundColor: "#0070f3",
          color: "white",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>🔬 A X L Data</h1>
        <p>Transformando dados em insights</p>
      </header>

      <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
        {/* Seção Sobre */}
        <section style={{ marginBottom: "50px" }}>
          <h2>👋 Consultoria</h2>
          <p>
            Sejam Bem vindo <strong> A-X-L Data</strong>, Cientista de Dados
            apaixonado por análise, machine learning e visualização de
            informações para gerar valor real.
          </p>
        </section>

        {/* Projetos */}
        <section style={{ marginBottom: "50px" }}>
          <h2>📊 Projetos</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3>📈 Análise de Vendas</h3>
              <p>Dashboard interativo para entender padrões de consumo.</p>
            </div>
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3>🖼️ Classificação de Imagens</h3>
              <p>Modelo de deep learning para identificar objetos.</p>
            </div>
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3>📉 Séries Temporais</h3>
              <p>Predição de demanda usando ARIMA e LSTM.</p>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section style={{ marginBottom: "50px" }}>
          <h2>🛠️ Habilidades</h2>
          <p>
            Python, Pandas, NumPy, Scikit-learn, TensorFlow, SQL, Power BI,
            Estatística, Machine Learning, Visualização de Dados.
          </p>
        </section>

        {/* Contato */}
        <section>
          <h2>📬 Contato</h2>
          <p>
            Email: <a href="mailto:seuemail@mail.com">blinodev@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/seulinkedin"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/linoj
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noreferrer"
            >
              github.com/blinodev
            </a>
          </p>
        </section>
      </main>

      {/* Rodapé */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#eee",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} - A-X-L Data
      </footer>
    </div>
  );
}
