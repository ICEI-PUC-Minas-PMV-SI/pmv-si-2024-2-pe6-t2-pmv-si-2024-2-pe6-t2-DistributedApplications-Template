const agendamentosModel = require('../models/agendamentoModel');

const getAll = async (_request, response) => {
  try {
    const agendamentos = await agendamentosModel.getAll(_request.prestador._id);
    return response.status(200).json(agendamentos);
  } catch (error) {
    return response.status(500).json( {error: error.message });
  }
};

const createAgendamento = async (request, response) => {
  try {
    const { nomeCliente, nomePrestador, data, horario } = request.body;
    const novoAgendamento = await agendamentosModel.createAgendamento({
      nomeCliente,
      nomePrestador,
      data,
      horario,
      prestadorId: request.prestador._id
    });
    return response.status(201).json(novoAgendamento); 
  } catch (error) {
    return response.status(500).json({ message: 'Erro ao criar agendamento', error: error.message }); 
  }
};

const deleteAgendamento = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedAgendamento = await agendamentosModel.deleteAgendamento(id, request.prestador._id);
    
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
    const { nomeCliente, nomePrestador, data, horario } = request.body;
    const updatedAgendamento = await agendamentosModel.updateAgendamento(
      id,
      { nomeCliente, nomePrestador, data, horario, prestadorId: request.prestador._id }
    );
    
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
