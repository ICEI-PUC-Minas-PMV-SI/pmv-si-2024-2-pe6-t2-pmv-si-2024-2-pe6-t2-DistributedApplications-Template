const mongoose = require('mongoose');

const caixaSchema = new mongoose.Schema({
    valor: { type: Number, required: true},
});

const Caixa = mongoose.model('Caixa', caixaSchema);

const getAll = async () => {
    return await Caixa.find();
};

const create = async (data) => {
    const novoCaixa = new Caixa(data);
    return await novoCaixa.save();
};

const update = async (id, data) => {
    return await Caixa.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
    return await Caixa.findByIdAndDelete(id);
};

module.exports = {
    getAll,
    create,
    update,
    remove
};