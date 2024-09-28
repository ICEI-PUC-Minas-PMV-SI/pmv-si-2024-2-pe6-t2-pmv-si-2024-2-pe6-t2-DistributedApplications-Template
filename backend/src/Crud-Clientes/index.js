const express = require('express');
const app = express();
const port = 3333;

// Middleware para permitir JSON nas requisições
app.use(express.json());

// Simulando um banco de dados na memória (array)
let clientes = [];

// Função para encontrar cliente pelo ID
const findCliente = (id) => {
  return clientes.find(cliente => cliente.id === id);
};

// Create de um novo cliente 
app.post('/clientes', (req, res) => {
  console.log(req.body);
  const { nome, telefone, email } = req.body;

  if (!nome || !telefone || !email) {
    return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
  }

  const novoCliente = {
    id: clientes.length + 1, // ID simples baseado no comprimento do array
    nome: "fernando",
    telefone:"1111111" ,
    email:"sdjas@sdjfosd.com" 
    
  };
  

  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
});

// Rota para obter todos os clientes (Read - Get all)
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// Consulta de um cliente especifico (Read - Get one)
app.get('/clientes/:id', (req, res) => {
  console.log(clientes);
  const cliente = findCliente(parseInt(req.params.id));
  if (!cliente) {
    return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
  }
  res.json(cliente);
});

// Atualização de cliente (Update)
app.put('/clientes/:id', (req, res) => {
  const cliente = findCliente(parseInt(req.params.id));
  if (!cliente) {
    return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
  }

  const { nome, telefone, email } = req.body;
  cliente.nome = nome || cliente.nome;
  cliente.telefone = telefone || cliente.telefone;
  cliente.email = email || cliente.email;

  res.json(cliente);
});

// Deletar cliente (Delete)
app.delete('/clientes/:id', (req, res) => {
  const clienteIndex = clientes.findIndex(cliente => cliente.id === parseInt(req.params.id));
  if (clienteIndex === -1) {
    return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
  }

  clientes.splice(clienteIndex, 1);
  res.json({ mensagem: 'Cliente deletado com sucesso!' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
