function status(request, response) {
  response.status(200).json({ Chave: "Testes" });
}

export default status;
