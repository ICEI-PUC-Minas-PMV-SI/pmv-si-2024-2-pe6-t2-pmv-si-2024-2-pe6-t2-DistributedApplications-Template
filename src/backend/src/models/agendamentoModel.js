const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  nomeCliente: { type: String, required: true },
  nomePrestador: { type: String, required: true },
  data: { type: Date, required: true },
  horario: { type: String, required: true },
  prestadorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prestador', required: true}
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

const getAll = async (prestadorId) => {
  return await Agendamento.find({ prestadorId });
};

const createAgendamento = async (data) => {
  try {
    const createdAgendamento = new Agendamento(data);
    return await createdAgendamento.save(); 
  } catch (error) {
    throw error; 
  }
};

const deleteAgendamento = async (id, prestadorId) => {
  try {
    const deletedAgendamento = await Agendamento.findOneAndDelete({ _id: id, prestadorId });
    return deletedAgendamento;
  } catch (error) {
    throw error; 
  }
};

const updateAgendamento = async (id, data) => {
  try {
    const updatedAgendamento = await Agendamento.findOneAndUpdate(
      { _id: id, prestadorId: data.prestadorId },
      data,
      { new: true, runValidators: true }
    );
    return updatedAgendamento; 
  } catch (error) {
    throw error; 
  }
};

module.exports = {
  getAll,
  createAgendamento,
  deleteAgendamento,
  updateAgendamento,
};
