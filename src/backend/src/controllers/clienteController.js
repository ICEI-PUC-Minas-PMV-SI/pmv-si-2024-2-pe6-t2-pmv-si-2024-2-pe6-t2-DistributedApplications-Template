const clienteModel = require('../models/clienteModel');

// Criar um novo cliente POST
const createCliente = async (req, res) => {
  const { nome, telefone, email } = req.body;

  if (!nome || !telefone || !email) {
    return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
  }

  try {
    const novoCliente = await clienteModel.addCliente({
      nome,
      telefone,
      email
    });
    res.status(201).json({ cliente: novoCliente, mensagem: 'Cliente criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar cliente.', erro: error.message });
  }
};

// Obter todos os clientes GET
const getAllClientes = async (req, res) => {
  try {
    const clientes = await clienteModel.getAllClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter clientes.', erro: error.message });
  }
};

// Obter um cliente específico pelo ID
const getClienteById = async (req, res) => {
  try {
    const cliente = await clienteModel.findClienteById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter cliente.', erro: error.message });
  }
};

// Atualizar um cliente
const updateCliente = async (req, res) => {
  try {
    const cliente = await clienteModel.updateCliente(req.params.id, req.body);
    if (!cliente) {
      return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
    }
    res.json({ cliente, mensagem: 'Cliente atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar cliente.', erro: error.message });
  }
};

// Deletar um cliente DELETE
const deleteCliente = async (req, res) => {
  try {
    const deleted = await clienteModel.deleteCliente(req.params.id);
    if (!deleted) {
      return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
    }
    res.json({ mensagem: 'Cliente deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar cliente.', erro: error.message });
  }
};

module.exports = {
  createCliente,
  getAllClientes, //toda lista de cliente 
  getClienteById,//ID especifico 
  updateCliente,
  deleteCliente
};
