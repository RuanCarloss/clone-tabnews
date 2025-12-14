import databases from "../../../../infra/databases.js";

async function status(request, response) {
  response.status(200).json({ Chave: "Testes" });
  const result = await databases.query("SELECT 'Ruan' as Nome;");
  console.log(result.rows);
}

export default status;
