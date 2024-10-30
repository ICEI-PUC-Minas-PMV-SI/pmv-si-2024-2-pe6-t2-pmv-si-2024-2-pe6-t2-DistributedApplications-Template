// controllers/authController.js
const bcryptjs = require("bcryptjs");
const Prestador = require("../models/prestadorModel");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Procura o usuário pelo e-mail
        const prestador = await Prestador.findOne({ email });
        if (!prestador) {
            return res.status(404).json({ error: "Email não encontrado!" });
        }

        // Compara a senha inserida com o hash armazenado
        const isPasswordCorrect = await bcryptjs.compare(password, prestador.password);
        console.log("Senha correta?", isPasswordCorrect);

        if (!isPasswordCorrect) {
            console.log(401)
            return res.status(401).json({ error: "Credenciais inválidas!" });
            
        }

        // Sucesso no login
        req.session.user = prestador; // Armazena o prestador na sessão

        return res.status(200).json({ message: "Login bem-sucedido!", user: prestador }); // Retorna a resposta com sucesso

    } catch (error) {
        res.status(500).json({ error: "Erro no servidor: " + error.message });
        
    }
};
