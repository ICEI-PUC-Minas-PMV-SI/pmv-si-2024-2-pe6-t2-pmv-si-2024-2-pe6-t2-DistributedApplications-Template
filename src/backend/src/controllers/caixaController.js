const Caixa = require ('../models/caixaModel.js');


const getAllCaixa = async (require, request) => {
try {
    const caixa = await Caixa.getAll();
    return request.status(200).json(caixa);
}catch (error) {
    return request.status(500).json({ error: "Internal server error" });
    }
};

const createCaixa = async (require, request) => {
    console.log(createCaixa);
try {
    const { valor } = require.body;
    const novoCaixa = await Caixa.create ({ valor })
    return request.status(201).json(novoCaixa);
    }catch (error) {
        return request.status(500).json({ error: "Internal server error" });
    }
};

const updateCaixa = async (require, request) => {
    console.log('updateCaixa');
    try {
        const { id } = request.params;
        const { valor } = require.body;
        const caixaAtualizado = await Caixa.update( id, { valor });
        return request.status(200).json(caixaAtualizado);
    }catch (error) {
        return request.status(500).json({ error: "Internal server error" });
    }
};

const deleteCaixa = async ( require, request ) => {
    try {
        const { id } = require.params;
        await Caixa.remove(id);
        return request.status(204).send();
    }catch (error) {
        return request.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    getAllCaixa,
    createCaixa,
    updateCaixa,
    deleteCaixa
};