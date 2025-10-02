function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>🔬 Data Science Hub</h1>
      <p>
        Bem-vindo ao meu site de Data Science! Aqui você encontra conteúdos
        sobre análise de dados, estatística, machine learning e inteligência
        artificial.
      </p>

      <h2>📊 O que você vai aprender:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>✅ Python para Data Science</li>
        <li>✅ Visualização de Dados</li>
        <li>✅ Machine Learning</li>
        <li>✅ Inteligência Artificial</li>
      </ul>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#0070f3",
          color: "white",
        }}
        onClick={() => alert("Obrigado pelo joinha! 🚀")}
      >
        👍 Dar um joinha
      </button>
    </div>
  );
}

export default Home;
