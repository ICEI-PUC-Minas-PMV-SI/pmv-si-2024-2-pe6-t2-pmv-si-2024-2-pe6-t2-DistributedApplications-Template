const Caixa = require("./caixaModel");

const getAll = async (dataInicio, dataFim, idUsuario) => {
    const filter = {};

    // Filtro por data
    if (dataInicio && dataFim) {
        const inicio = new Date(dataInicio);
        inicio.setUTCHours(0, 0, 0, 0); // Define a hora de início do dia
        const fim = new Date(dataFim);
        fim.setUTCHours(23, 59, 59, 999); // Define a hora de fim do dia
        
        filter.data = {
            $gte: inicio,
            $lte: fim
        };
    }

    // Filtro pelo id do usuário
    if (idUsuario) {
        filter.idUsuario = idUsuario;
    }

    return await Caixa.find(filter);
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
    remove,
};
