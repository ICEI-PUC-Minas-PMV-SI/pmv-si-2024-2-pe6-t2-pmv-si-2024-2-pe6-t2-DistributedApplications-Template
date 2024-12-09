const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const prestadorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cnpj: { type: String, required: true, unique: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    password: { type: String, required: true },
});


// Middleware pré-save para criptografar a senha antes de salvar no banco
prestadorSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const salt = await bcryptjs.genSalt();
        this.password = await bcryptjs.hash(this.password, salt);
    }
    next();
});

const Prestador = mongoose.model("Prestador", prestadorSchema);

module.exports = Prestador;
