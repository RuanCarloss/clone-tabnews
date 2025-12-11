import databases from "../../../../infra/databases.js";

async function status(request, response) {
  response.status(200).json({ Chave: "Testes" });
  const result = await databases.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
}

export default status;
