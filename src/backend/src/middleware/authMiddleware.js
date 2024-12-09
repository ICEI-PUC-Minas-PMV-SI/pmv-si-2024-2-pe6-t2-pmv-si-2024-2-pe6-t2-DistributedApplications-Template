const jwt = require('jsonwebtoken');
const Prestador = require('../models/prestadorModel');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.CHAVE_JWT);
    const prestador = await Prestador.findOne({ _id: decoded.id, 'tokens.token': token });

    if (!prestador) {
      throw new Error();
    }

    req.token = token;
    req.prestador = prestador;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Autenticação falhou.' });
  }
};

module.exports = authMiddleware;
