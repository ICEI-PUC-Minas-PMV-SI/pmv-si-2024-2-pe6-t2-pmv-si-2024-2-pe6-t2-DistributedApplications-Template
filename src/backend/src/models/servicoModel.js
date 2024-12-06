const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  preco: { type: Number, required: true, min: 0 },
  duracao: { type: Number, required: true, min: 0 },
 // prestadorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prestador', required: true },
});

const Servico = mongoose.model('Servico', servicoSchema);

const getAllServicos = async () => {
  return await Servico.find();
};

const addServico = async (data) => {
  const novoServico = new Servico(data);
  return await novoServico.save();
};

const findServicoById = async (id) => {
  return await Servico.findById(id);
};

const updateServico = async (id, data) => {
  return await Servico.findByIdAndUpdate(id, data, { new: true });
};

const deleteServico = async (id) => {
  return await Servico.findByIdAndDelete(id);
};

module.exports = {
  getAllServicos,
  addServico,
  findServicoById,
  updateServico,
  deleteServico
};
