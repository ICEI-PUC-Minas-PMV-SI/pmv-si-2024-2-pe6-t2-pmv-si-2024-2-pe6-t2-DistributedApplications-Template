const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // email único
});

const Cliente = mongoose.model('Cliente', clienteSchema);


const getAllClientes = async () => {
    return await Cliente.find();
};

const addCliente = async (data) => {
    const novoCliente = new Cliente(data);
    return await novoCliente.save();
};

const findClienteById = async (id) => {
    return await Cliente.findById(id);
};

const updateCliente = async (id, data) => {
    return await Cliente.findByIdAndUpdate(id, data, { new: true });
};

const deleteCliente = async (id) => {
    return await Cliente.findByIdAndDelete(id);
};

module.exports = {
    getAllClientes,
    addCliente,
    findClienteById,
    updateCliente,
    deleteCliente
};