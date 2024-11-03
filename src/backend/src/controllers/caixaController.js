const { getAll, create, update, remove } = require("../models/servicesCaixa.js"); // Importa o serviço com as funções

const getAllCaixa = async (req, res) => {
    try {
        const { dataInicio, dataFim } = req.query;
        const idUsuario = req.query.userId; // Obtém o userId da query string
        const caixa = await getAll(dataInicio, dataFim, idUsuario); // Passa idUsuario ao serviço
        return res.status(200).json(caixa);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


const createCaixa = async (req, res) => {
    try {
        const { valor, idUsuario, cnpj, titulo } = req.body;
        const novoCaixa = await create({ valor, idUsuario, cnpj, titulo });    
        return res.status(201).json(novoCaixa);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateCaixa = async (req, res) => {
    try {
        const { id } = req.params;
        const { valor, titulo } = req.body; // Inclui o campo 'titulo' para atualização

        const caixaAtualizado = await update(id, { valor, titulo });
        return res.status(200).json(caixaAtualizado);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteCaixa = async (req, res) => {
    try {
        const { id } = req.params;
        await remove(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCaixa,
    createCaixa,
    updateCaixa,
    deleteCaixa
};
