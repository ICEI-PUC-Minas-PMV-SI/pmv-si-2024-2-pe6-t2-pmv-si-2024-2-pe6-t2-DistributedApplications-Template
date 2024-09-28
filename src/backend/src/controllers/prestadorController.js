const prestadorModel = require('../models/prestadorModel.js');


exports.getAll = async (req, res) => {
    const prestador = await prestadorModel.getAll();
    return res.status(200).json(prestador);
};


exports.register = async function(req, res) {
    console.log('Seu usuário foi criado com sucesso.');
    return res.status(200).send('Usuário criado com sucesso');
  }

  exports.delete = async function(req, res) {
    try {
        // Supondo que tenha um serviço ou função para deletar o usuário, como deleteUserById
        
        console.log('Usuário excluído com sucesso.');
        return res.status(200).send('Usuário excluído com sucesso.');
    } catch (error) {
        console.error('Erro ao excluir o usuário:', error);
        return res.status(500).send('Erro ao excluir o usuário.');
    }
};

exports.patch = async function(req, res) {
    try {
        // Supondo que  tenha um serviço ou função para deletar o usuário, como deleteUserById
            
        console.log('Usuário editado com sucesso.');
        return res.status(200).send('Usuário editado com sucesso');
    } catch (error) {
        console.error('Erro ao editar o usuário:', error);
        return res.status(500).send('Erro ao editar o usuário.');
    }
};