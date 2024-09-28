const Servico = require('../models/servicoModel.js');

const getAllServicos = async (req, res) => {
    try {
        const servicos = await Servico.getAll();
        return res.status(200).json(servicos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createServico = async (req, res) => {
    console.log('createServico chamado');
    try {
        const { descricao, preco, duracao } = req.body;
        const novoServico = await Servico.create({ descricao, preco, duracao });
        return res.status(201).json(novoServico);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateServico = async (req, res) => {
    console.log('updateServico chamado');
    try {
        const { id } = req.params;
        const { descricao, preco, duracao } = req.body;
        const servicoAtualizado = await Servico.update(id, { descricao, preco, duracao });
        return res.status(200).json(servicoAtualizado);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllServicos,
    createServico,
    updateServico
};
