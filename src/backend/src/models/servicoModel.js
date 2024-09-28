const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    duracao: { type: Number, required: true }
});

const Servico = mongoose.model('Servico', servicoSchema);

const getAll = async () => {
    return await Servico.find();
};

const create = async (data) => {
    const novoServico = new Servico(data);
    return await novoServico.save();
};

const update = async (id, data) => {
    return await Servico.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
    getAll,
    create,
    update
};
