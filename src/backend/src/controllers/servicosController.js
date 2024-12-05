const { Servico } = require('../models/servicoModel.js');

const getAllServicos = async (req, res) => {
  try {
    const servicos = await Servico.find({ prestadorId: req.prestador._id });
    return res.status(200).json(servicos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createServico = async (req, res) => {
  //console.log('createServico chamado');
  try {
    const { descricao, preco, duracao } = req.body;
    if (!descricao || !preco || !duracao) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    const novoServico = await Servico.create({ descricao, preco, duracao, prestadorId: req.prestador._id });
    return res.status(201).json(novoServico);
  } catch (error) {
    console.error('Erro ao criar serviço:', error);
    return res.status(500).json({ error:'Erro ao criar serviço.' });
  }
};


const updateServico = async (req, res) => {
  //console.log('updateServico chamado');
  try {
    const { id } = req.params;
    const { descricao, preco, duracao } = req.body;
    if (!descricao || !preco || !duracao) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios'});
    }
    const servicoAtualizado = await Servico.findOneAndUpdate(
      { _id: id, prestadorId: req.prestador._id },
      { descricao, preco, duracao },
      { new: true }
    );
    if (!servicoAtualizado) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }
    return res.status(200).json(servicoAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    return res.status(500).json({ error: 'Erro ao atualizar serviço.' });
  }
};

const deleteServico = async (req, res) => {
  try {
    const { id } = req.params;
    const servico = await Servico.findOneAndDelete({ _id: id, prestadorId: req.prestador._id });
    if (!servico) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar serviço:', error);
    return res.status(500).json({ error: 'Erro ao deletar serviço.' });
  }
};

const getAllServicosByPrestador = async (req, res) => {
  try {
    const servicos = await Servico.find({prestadorId: req.prestador._id });
    return res.status(200).json(servicos);
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    return res.status(500).json({ error: 'Erro ao buscar serviços.' });
  }
};

module.exports = {
  getAllServicos,
  createServico,
  updateServico,
  deleteServico,
  getAllServicosByPrestador
};
