<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio Data Science</title>

    <style>
        /* RESET */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #f7f7f7;
            color: #333;
            line-height: 1.6;
        }

        /* CABEÇALHO */
        header {
            background: #0B5ED7;
            padding: 20px 40px;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        header h1 {
            font-size: 1.5rem;
            font-weight: bold;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-size: 1rem;
        }

        /* HERO */
        .hero {
            padding: 70px 20px;
            text-align: center;
            background: white;
        }

        .hero h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .hero p {
            font-size: 1.2rem;
            color: #555;
        }

        /* SESSÃO SOBRE */
        .sobre {
            padding: 60px 20px;
            display: flex;
            justify-content: center;
        }

        .sobre-conteudo {
            max-width: 900px;
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        /* HABILIDADES */
        .habilidades {
            padding: 60px 20px;
            text-align: center;
        }

        .habilidades h3 {
            margin-bottom: 20px;
            font-size: 1.8rem;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            margin-top: 20px;
        }

        .tag {
            background: #0B5ED7;
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 0.95rem;
        }

        /* PROJETOS */
        .projetos {
            padding: 60px 20px;
            text-align: center;
        }

        .projetos h3 {
            font-size: 2rem;
            margin-bottom: 30px;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
        }

        .card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }

        .card h4 {
            margin-bottom: 10px;
            font-size: 1.3rem;
        }

        /* RODAPÉ */
        footer {
            background: #0B5ED7;
            color: white;
            padding: 20px;
            text-align: center;
            margin-top: 40px;
        }

        /* MOBILE */
        @media (max-width: 600px) {
            .hero h2 {
                font-size: 2rem;
            }

            header {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }

            nav a {
                margin: 0 10px;
            }
        }
    </style>
</head>
<body>

    <!-- CABEÇALHO -->
    <header>
        <h1>Data Science Portfolio</h1>
        <nav>
            <a href="#sobre">Sobre</a>
            <a href="#habilidades">Skills</a>
            <a href="#projetos">Projetos</a>
        </nav>
    </header>

    <!-- HERO -->
    <section class="hero">
        <h2>Olá, eu sou Cientista de Dados</h2>
        <p>Transformo dados em decisões estratégicas usando Python, Machine Learning e Visualização.</p>
    </section>

    <!-- SOBRE -->
    <section id="sobre" class="sobre">
        <div class="sobre-conteudo">
            <h3>Sobre mim</h3>
            <p>
                Sou apaixonado por entender padrões, criar modelos preditivos e desenvolver soluções com impacto real.
                Trabalho com Python, Pandas, Machine Learning, SQL e visualizações profissionais (Power BI / Matplotlib / Plotly).
            </p>
        </div>
    </section>

    <!-- HABILIDADES -->
    <section id="habilidades" class="habilidades">
        <h3>Habilidades Técnicas</h3>
        <div class="tags">
            <div class="tag">Python</div>
            <div class="tag">Pandas</div>
            <div class="tag">NumPy</div>
            <div class="tag">SQL</div>
            <div class="tag">Machine Learning</div>
            <div class="tag">Scikit-Learn</div>
            <div class="tag">Power BI</div>
            <div class="tag">Plotly</div>
            <div class="tag">Matplotlib</div>
            <div class="tag">Deep Learning</div>
        </div>
    </section>

    <!-- PROJETOS -->
    <section id="projetos" class="projetos">
        <h3>Projetos em Destaque</h3>
        <div class="cards">
            <div class="card">
                <h4>📊 Previsão de Vendas</h4>
                <p>Modelo de regressão que estima vendas futuras usando dados históricos.</p>
            </div>

            <div class="card">
                <h4>🤖 Classificação de Clientes</h4>
                <p>Clusterização usando K-Means para segmentação de público.</p>
            </div>

            <div class="card">
                <h4>📈 Análise de Mercado</h4>
                <p>Dashboard completo com visualizações e insights estratégicos.</p>
            </div>
        </div>
    </section>

    <!-- RODAPÉ -->
    <footer>
        <p>© 2025 — Portfólio Data Science</p>
    </footer>

</body>
</html>
