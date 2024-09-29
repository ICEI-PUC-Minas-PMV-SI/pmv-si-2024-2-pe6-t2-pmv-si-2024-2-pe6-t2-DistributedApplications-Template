const Prestador = require('../models/prestadorModel');

const getAllPrestador = async (req, res) => {
    try {
        const prestadores = await Prestador.getAll();
        return res.status(200).json(prestadores);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createPrestador = async (req, res) => {
    if (!nome || !cnpj || !email) {
        return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
      }

    try {
        const { nome, cnpj, telefone } = req.body;
        const novoPrestador = await Prestador.create({ nome, cnpj, telefone });
        return res.status(201).json(novoPrestador);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updatePrestador = async (req, res) => {

    try {
        const { id } = req.params;
        const { nome, cnpj, telefone } = req.body;
        const novoPrestador = await Prestador.update(id, { nome, cnpj, telefone });
        return res.status(200).json(novoPrestador);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deletePrestador = async (req, res) => {
    try {
        const { id } = req.params;
        await Prestador.remove(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllPrestador,
    createPrestador,
    updatePrestador,
    deletePrestador
};
