const bcryptjs = require("bcryptjs");
const Prestador = require("../models/prestadorModel");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.CHAVE_JWT;

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Procura o usuário pelo e-mail
        const prestador = await Prestador.findOne({ email });
        if (!prestador) {
            return res.status(404).json({ error: "Usuário não encontrado!" });
        }

        // Compara a senha inserida com o hash armazenado
        const isPasswordCorrect = await bcryptjs.compare(password, prestador.password);
        console.log("Senha correta?", isPasswordCorrect);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Credenciais inválidas!" });
        }

        // Sucesso no login: gere o token
        const token = jwt.sign({ id: prestador._id }, SECRET_KEY, { expiresIn: "1h" }); // Gera o token

        // Retorna o token junto com os dados do usuário (opcional)
        return res.status(200).json({ message: "Login bem-sucedido!", token, user: prestador });
        
    } catch (error) {
        res.status(500).json({ error: "Erro no servidor: " + error.message });
    }
};
