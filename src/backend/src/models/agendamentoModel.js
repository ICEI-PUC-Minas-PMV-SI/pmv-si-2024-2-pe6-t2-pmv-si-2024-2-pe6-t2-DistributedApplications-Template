const mongoose = require('mongoose');


const agendamentoSchema = new mongoose.Schema({
  nomePrestador: { type: String, required: true },
  data: { type: Date, required: true },
  horario: { type: Number, required: true },
  //idPrestador: {type: Number, required: true}
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);


const getAll = async () => {
  return await Agendamento.find();
};

const createAgendamento = async (data) => {
  try {
    const createdAgendamento = new Agendamento(data);
    return await createdAgendamento.save(); 
  } catch (error) {
    throw error; 
  }
};


const deleteAgendamento = async (id) => {
  try {
    const deletedAgendamento = await Agendamento.findByIdAndDelete(id);
    return deletedAgendamento;
  } catch (error) {
    throw error; 
  }
};



const updateAgendamento = async (id, data) => {
  try {
    const updatedAgendamento = await Agendamento.findByIdAndUpdate(id, data, { new: true, runValidators: true });
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
