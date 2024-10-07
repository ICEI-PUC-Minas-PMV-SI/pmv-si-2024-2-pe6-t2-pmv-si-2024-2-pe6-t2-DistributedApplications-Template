const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');


const prestadorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cnpj: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    password: { type: String, required: true }
});


prestadorSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcryptjs.genSalt();
        this.password = await bcryptjs.hash(this.password, salt);
    }
    next();
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
