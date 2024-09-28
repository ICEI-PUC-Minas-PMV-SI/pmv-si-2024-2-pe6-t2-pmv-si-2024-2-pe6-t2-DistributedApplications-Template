const clienteModel = require('../models/clienteModel');

// Criar um novo cliente POST
const createCliente = (req, res) => {
  const { nome, telefone, email } = req.body;

  if (!nome || !telefone || !email) {
    return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
  }

  const novoCliente = clienteModel.addCliente({ 
    nome: 'gabriel',
     telefone: '43434',
     email: 'diasda@ddaf'
     });
  res.status(201).json(novoCliente);
};

// Obter todos os clientes GET
const getAllClientes = (req, res) => {
  const clientes = clienteModel.getAllClientes();
  res.json(clientes);
};

// Obter um cliente específico pelo ID
const getClienteById = (req, res) => {
  const cliente = clienteModel.findClienteById(parseInt(req.params.id));

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
  }

  res.json(cliente);
};

// Atualizar um cliente
const updateCliente = (req, res) => {
  const cliente = clienteModel.updateCliente(parseInt(req.params.id), req.body);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
  }

  res.json(cliente);
};

// Deletar um cliente DELETE
const deleteCliente = (req, res) => {
  const deleted = clienteModel.deleteCliente(parseInt(req.params.id));

  if (!deleted) {
    return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
  }

  res.json({ mensagem: 'Cliente deletado com sucesso!' });
};

module.exports = {
  createCliente,
  getAllClientes,
  getClienteById,
  updateCliente,
  deleteCliente
};
