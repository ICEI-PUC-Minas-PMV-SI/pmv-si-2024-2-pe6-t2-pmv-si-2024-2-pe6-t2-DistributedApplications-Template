const agendamentosModel = require('../models/agendamentoModel');

const getAll = async (_request, response) => {
  const agendamentos = await agendamentosModel.getAll();
  return response.status(200).json(agendamentos);
};

const createAgendamento = async (request, response) => {
  try {
    const createdAgendamento = await agendamentosModel.createAgendamento(request.body);
    return response.status(201).json(createdAgendamento); 
  } catch (error) {
    return response.status(500).json({ message: 'Erro ao criar agendamento', error: error.message }); 
  }
};


const deleteAgendamento = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedAgendamento = await agendamentosModel.deleteAgendamento(id);
    
    if (!deletedAgendamento) {
      return response.status(404).json({ message: 'Agendamento não encontrado' });
    }

    return response.status(200).json({ message: 'Agendamento removido com sucesso' });
  } catch (error) {
    return response.status(500).json({ message: 'Erro ao remover agendamento', error: error.message });
  }
};


const updateAgendamento = async (request, response) => {
  try {
    const { id } = request.params;
    const updatedAgendamento = await agendamentosModel.updateAgendamento(id, request.body);
    
    if (!updatedAgendamento) {
      return response.status(404).json({ message: 'Agendamento não encontrado' });
    }

    return response.status(200).json(updatedAgendamento);
  } catch (error) {
    return response.status(500).json({ message: 'Erro ao atualizar agendamento', error: error.message });
  }
};


module.exports = {
  getAll,
  createAgendamento,
  deleteAgendamento,
  updateAgendamento,
};
