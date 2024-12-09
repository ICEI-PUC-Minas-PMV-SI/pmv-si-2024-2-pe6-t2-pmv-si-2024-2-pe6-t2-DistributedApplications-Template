const mongoose = require('mongoose');

const caixaSchema = new mongoose.Schema({
    valor: { type: Number, required: true},
    idUsuario: { type: String, required: true },
    cnpj: { type: String, required: true },
    titulo: { type: String, required: true },
    data: {
        type: Date,
        default: () => {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            return now;
        }
    }
});

const Caixa = mongoose.model('Caixa', caixaSchema);

module.exports = Caixa;
