const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  preco: { type: Number, required: true, min: 0 },
  duracao: { type: Number, required: true, min: 0 },
  prestadorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prestador', required: true },
});

const Servico = mongoose.model('Servico', servicoSchema);

const getAllServicos = async () => {
  try{
    return await Servico.find();
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    throw error;
  }
};

const addServico = async (data) => {
  try{
    const novoServico = new Servico(data);
    return await novoServico.save();
  } catch (error){
    console.error('Erro ao adicionar serviço:', error);
    throw error;
  }
};

const findServicoById = async (id) => {
  try {
    return await Servico.findById(id);
  } catch (error) {
    console.error('Erro ao buscar serviço por ID:', error);
    throw error;
  }
};

const updateServico = async (id, data) => {
  try {
    return await Servico.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    throw error;
  }
};

const deleteServico = async (id) => {
  try {
    return await Servico.findByIdAndDelete(id);
  } catch (error) {
    console.error('Erro ao deletar serviço:', error);
    throw error;
  }
};

module.exports = {
  getAllServicos,
  addServico,
  findServicoById,
  updateServico,
  deleteServico,
  Servico
};
