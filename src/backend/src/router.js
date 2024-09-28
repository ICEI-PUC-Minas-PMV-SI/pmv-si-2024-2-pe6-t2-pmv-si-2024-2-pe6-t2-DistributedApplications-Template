const express = require('express');
const router = express.Router();

const prestadorController = require('./controllers/prestadorController');
const servicoController = require('./controllers/servicosController');
const agendamentosController = require('./controllers/agendamentosController')

router.get('/prestador', prestadorController.getAll);
router.post('/prestador', prestadorController.register);
router.delete('/prestador', prestadorController.delete);
router.patch('/prestador', prestadorController.patch);

router.post('/servicos', servicoController.createServico);
router.put('/servicos/:id', servicoController.updateServico);

router.get('/agendamentos', agendamentosController.getAll);
router.post('/agendamentos', agendamentosController.createAgendamento);
router.delete('/agendamentos/:id', agendamentosController.deleteAgendamento);

module.exports = router;