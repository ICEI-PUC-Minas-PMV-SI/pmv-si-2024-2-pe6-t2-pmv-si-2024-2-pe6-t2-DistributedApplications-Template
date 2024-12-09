const financeiroModel = require('../models/financeiroModel');

const getFaturamentoDia = async (req, res) => {
    const { id, data } = req.params;

    try {
        const faturamentoDia = await financeiroModel.getFaturamentoDia(prestador, id, data);
        return res.status(200).json(faturamentoDia);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao obter faturamento do dia', error });
    }
};

const getFaturamentoPorIntervalo = async (req, res) => {
    const { prestador, id } = req.params;
    const { dataInicial, dataFinal } = req.query;

    try {
        const faturamentoIntervalo = await financeiroModel.getFaturamentoPorIntervalo(id, dataInicial, dataFinal);
        return res.status(200).json(faturamentoIntervalo);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao obter o faturamento do intervalo informado', error }); 
    }
}

module.exports = {
  getFaturamentoDia,
  getFaturamentoPorIntervalo,
};
