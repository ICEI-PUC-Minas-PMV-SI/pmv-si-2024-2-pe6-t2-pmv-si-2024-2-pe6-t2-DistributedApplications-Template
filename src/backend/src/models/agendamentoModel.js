const mongoose = require('mongoose');


const agendamentoSchema = new mongoose.Schema({
  nomePrestador: { type: String, required: true },
  data: { type: Date, require: true },
  horario: { type: Number, required: true },
  idPrestador: {type: Number, required: true}
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
