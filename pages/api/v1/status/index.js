import database from "../../../../infra/database.js";

async function status(request, response) {
  try {
    const result = await database.query("SELECT 1 + 1 as sum;");
    console.log(result.rows);
    response.status(200).json({ chave: "São acima da média" });
  } catch (error) {
    console.error("Erro no endpoint /status:", error);
    response.status(500).json({ error: "Erro interno no servidor" });
  }
}

export default status;
