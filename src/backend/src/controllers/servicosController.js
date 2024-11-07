const Servico = require('../models/servicoModel.js');

const getAllServicos = async (req, res) => {
  try {
    const servicos = await Servico.find({ prestadorId: req.prestador._id });
    return res.status(200).json(servicos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createServico = async (req, res) => {
  console.log('createServico chamado');
  try {
    const { descricao, preco, duracao } = req.body;
    const novoServico = await Servico.create({ descricao, preco, duracao, prestadorId: req.prestador._id });
    return res.status(201).json(novoServico);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateServico = async (req, res) => {
  console.log('updateServico chamado');
  try {
    const { id } = req.params;
    const { descricao, preco, duracao } = req.body;
    const servicoAtualizado = await Servico.findOneAndUpdate(
      { _id: id, prestadorId: req.prestador._id },
      { descricao, preco, duracao },
      { new: true }
    );
    return res.status(200).json(servicoAtualizado);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteServico = async (req, res) => {
  try {
    const { id } = req.params;
    await Servico.findOneAndDelete({ _id: id, prestadorId: req.prestador._id });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllServicos,
  createServico,
  updateServico,
  deleteServico
};
