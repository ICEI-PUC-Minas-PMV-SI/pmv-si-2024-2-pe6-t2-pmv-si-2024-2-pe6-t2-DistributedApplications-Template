const Servico = require('../models/servicoModel');

const createServico = async (req, res) => {
    const { descricao, preco, duracao } = req.body;
    const novoServico = await Servico.create({ descricao, preco, duracao });
    return res.status(201).json(novoServico);
};

const updateServico = async (req, res) => {
    const { id } = req.params;
    const { descricao, preco, duracao } = req.body;
    const servicoAtualizado = await Servico.update(id, { descricao, preco, duracao });
    return res.status(200).json(servicoAtualizado);
};

module.exports = {
    createServico,
    updateServico
};
