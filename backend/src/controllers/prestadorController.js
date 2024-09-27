const prestadorModel = require('../models/prestadorModel');


const getAll = async (req, res) => {
    const prestador = await prestadorModel.getAll();
    return res.status(200).json(prestador);
};

module.exports = {
    getAll
};