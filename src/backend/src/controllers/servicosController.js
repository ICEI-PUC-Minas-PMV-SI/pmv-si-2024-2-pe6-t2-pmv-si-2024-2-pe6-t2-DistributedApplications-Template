const servicoModel = require('../models/servicoModel.js');

const createServico = async (req, res) => {
  const { descricao, preco, duracao } = req.body;

  if (!descricao || !preco || !duracao) {
    return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
  }

  try {
    const novoServico = await servicoModel.addServico({
      descricao, 
      preco, 
      duracao, 
      //prestadorId: req.prestador._id 
    });
    res.status(201).json( {servico: novoServico, mensagem: 'Serviço criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem:'Erro ao criar serviço.', erro: error.message });
  }
};


const getAllServicos = async (req, res) => {
  try {
    const servicos = await servicoModel.getAllServicos();
    res.json(servicos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter serviços.', erro: error.message });
  }
};


const getServicoById = async (req, res) => {
  try {
    const servico = await servicoModel.findServicoById(req.params.id);
    if (!servico) {
      return res.status(404).json({ mensagem: 'Serviço não encontrado!' });
    }
    res.json(servico);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter serviço.', erro: error.message });
  }
};


const updateServico = async (req, res) => {
  try {
    const servico = await servicoModel.updateServico(req.params.id, req.body);
    if (!descricao) {
      return res.status(404).json({ mensagem: 'Serviço não encontrado!'});
    }
    res.json({ servico, mensagem: 'Serviço atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar serviço.', erro: error.message });
  }
};


const deleteServico = async (req, res) => {
  try {
    const deleted = await servicoModel.deleteServico(req.params.id);
    if (!deleted) {
      return res.status(404).json({ mensagem: 'Serviço não encontrado' });
    }
    res.json({ mensagem: 'Cliente deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar serviço.', erro: error.mesage });
  }
};

// const getAllServicosByPrestador = async (req, res) => {
//   try {
//     const servicos = await Servico.find({prestadorId: req.prestador._id });
//     return res.status(200).json(servicos);
//   } catch (error) {
//     console.error('Erro ao buscar serviços:', error);
//     return res.status(500).json({ error: 'Erro ao buscar serviços.' });
//   }
// };

module.exports = {
  createServico,
  getAllServicos,
  getServicoById,
  updateServico,
  deleteServico
};
