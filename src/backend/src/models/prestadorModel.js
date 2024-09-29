const mongoose = require('mongoose');

const prestadorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cnpj: { type: Number, required: true },
    telefone: { type: Number, required: true }
});

const Prestador = mongoose.model('Prestador', prestadorSchema);

const getAll = async () => {
    return await Prestador.find();
};

const create = async (data) => {
    const novoPrestador = new Prestador(data);
    return await novoPrestador.save();
};

const update = async (id, data) => {
    return await Prestador.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
    return await Prestador.findByIdAndDelete(id);
};

module.exports = {
    getAll,
    create,
    update,
    remove
};
