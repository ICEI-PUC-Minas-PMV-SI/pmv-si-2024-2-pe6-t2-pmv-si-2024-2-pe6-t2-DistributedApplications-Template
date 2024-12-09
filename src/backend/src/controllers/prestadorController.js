const Prestador = require("../models/prestadorModel"); // Para o schema do MongoDB
const { getAll, create, update, remove } = require("../models/servicesPrestador"); // Importa o serviço com as funções



const getAllPrestador = async (req, res) => {
    try {
        const prestadores = await getAll(); // Chama diretamente a função getAll do serviço
        return res.status(200).json(prestadores);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createPrestador = async (req, res) => {
    const { nome, email, cnpj, telefone, endereco, password, confirmpassword } = req.body;
    
    const existingPrestador = await Prestador.findOne({
        $or: [
            { email },
            { telefone },
            { cnpj }
        ]
    });

    if (existingPrestador) {
        return res.status(409).json({
            error: "Já existe um prestador cadastrado com o mesmo e-mail, telefone ou CNPJ."
        });
    }

    if (password !== confirmpassword) {
        return res.status(400).json({ error: "A confirmação de senha não corresponde à senha." });
    }

    try {
        const novoPrestador = await create({ nome, email, cnpj, telefone, endereco, password });
        return res.status(201).json({message: "Cadastro concluído com sucesso!"});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updatePrestador = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, cnpj, telefone, endereco, password } = req.body;
        const novoPrestador = await update(id, { nome, email, cnpj, telefone, endereco, password });
        return res.status(200).json(novoPrestador);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deletePrestador = async (req, res) => {
    try {
        const { id } = req.params;
        await remove(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllPrestador,
    createPrestador,
    updatePrestador,
    deletePrestador,
};
