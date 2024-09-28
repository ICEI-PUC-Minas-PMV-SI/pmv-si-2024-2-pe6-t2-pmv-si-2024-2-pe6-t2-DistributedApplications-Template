const express = require('express');
const router = express.Router();

const prestadorController = require('./controllers/prestadorController');
const servicoController = require('./controllers/servicosController');
const agendamentosController = require('./controllers/agendamentosController');
const financeiroController = require('./controllers/financeiroContoller')

router.get('/prestador', prestadorController.getAll);
router.post('/prestador', prestadorController.register);
router.delete('/prestador', prestadorController.delete);
router.patch('/prestador', prestadorController.patch);

router.post('/servicos', servicoController.createServico);
router.put('/servicos/:id', servicoController.updateServico);

router.get('/agendamentos', agendamentosController.getAll);
router.post('/agendamentos', agendamentosController.createAgendamento);
router.delete('/agendamentos/:id', agendamentosController.deleteAgendamento);

router.get('/financeiro/:id/faturamento/:data', financeiroController.getFaturamentoDia);
router.get('/financeiro/:id/faturamento', financeiroController.getFaturamentoPorIntervalo);

module.exports = router;