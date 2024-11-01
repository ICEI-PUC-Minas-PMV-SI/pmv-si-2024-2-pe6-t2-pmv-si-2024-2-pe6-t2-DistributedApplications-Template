const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  duracao: { type: Number, required: true },
  prestadorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prestador', required: true }
});

const Servico = mongoose.model('Servico', servicoSchema);

module.exports = Servico;