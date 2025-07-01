// Controller (entrada) usa as ferramentas disponíveis

import database from "infra/database.js";

// Teste de query simples
async function status(request, response) {
  const updatedAt = new Date().toISOString();
  `
  `;
  // Versão do PostgreSQL
  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  // Máximo de conexões permitidas
  const databaseMaxConnectionResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionValue =
    databaseMaxConnectionResult.rows[0].max_connections;

  // Conexões ativas no momento
  const databaseName = process.env.POSTGRES_DB;
  // Enviando objeto abaixo para método query
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const databaseOpenedConnectionValue =
    databaseOpenedConnectionsResult.rows[0].count;
  // View manipula resposta e retorna
  // Interface pública http://localhost:3000/api/v1/status

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionValue),
        opened_connections: databaseOpenedConnectionValue,
      },
    },
  });
}

export default status;
