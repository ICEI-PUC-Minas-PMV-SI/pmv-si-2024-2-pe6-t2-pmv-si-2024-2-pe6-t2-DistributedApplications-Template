const agendamentosModel = require('../models/agendamentoModel');

const getAll = async (_request, response) => {
  const agendamentos = await agendamentosModel.getAll();
  return response.status(200).json(agendamentos);
};

const createAgendamento = async (request, response) => {
  const createdAgendamento = await agendamentosModel.createAgendamento(request.body);
  return response.status(201).json(createdAgendamento);
};

const deleteAgendamento = async (request, response) => {
  const { id } = request.params;

  await agendamentosModel.deleteAgendamento(id);
  return response.status(204).json();
};

const updateAgendamento = async (request, response) => {
  const { id } = request.params;

  await agendamentosModel.updateAgendamento(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createAgendamento,
  deleteAgendamento,
  updateAgendamento,
};
