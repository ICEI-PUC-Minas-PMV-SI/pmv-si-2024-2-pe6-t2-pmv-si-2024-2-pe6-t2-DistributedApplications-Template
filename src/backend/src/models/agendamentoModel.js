const mongoose = require('mongoose');


const agendamentoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  preco: { type: Number, require: true },
  duracao: { type: Number, required: true }
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);


const getAll = async () => {
  return await Agendamento.find();
};

const createAgendamento = async (data) => {
  const novoAgendamentoo = new Agendamento(data);
  return await novoAgendamentoo.save();
};

const deleteAgendamento = async (id) => {
  return await Agendamento.findByIdAndDelete(id);
};


const updateAgendamento = async (id, data) => {
  return await Agendamento.findByIdAndUpdate(id, data, { new: true });
};


module.exports = {
  getAll,
  createAgendamento,
  deleteAgendamento,
  updateAgendamento,
};
