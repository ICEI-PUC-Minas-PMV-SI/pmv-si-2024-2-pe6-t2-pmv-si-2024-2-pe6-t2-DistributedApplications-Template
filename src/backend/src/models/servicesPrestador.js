const Prestador = require("./prestadorModel");


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
    remove,
};