const express = require('express');
const router = express.Router();

const prestadorController = require('./controllers/prestadorController');
const servicoController = require('./controllers/servicosController');
const agendamentosController = require('./controllers/agendamentosController');
const clienteController = require('./controllers/clienteController');

router.get('/prestador', prestadorController.getAll);
router.post('/prestador', prestadorController.register);
router.delete('/prestador', prestadorController.delete);
router.patch('/prestador', prestadorController.patch);

router.post('/servicos', servicoController.createServico);
router.put('/servicos/:id', servicoController.updateServico);

//Agendamentos
router.get('/agendamentos', agendamentosController.getAll);
router.post('/agendamentos/createAgendamento', agendamentosController.createAgendamento);
router.delete('/agendamentos/deleteAgendamento/:id', agendamentosController.deleteAgendamento);
router.put('/agendamentos/updateAgendamento/:id', agendamentosController.updateAgendamento);


// Rotas do CRUD de Clientes
router.post('/clientes', clienteController.createCliente);
router.get('/clientes', clienteController.getAllClientes);
router.get('/clientes/:id', clienteController.getClienteById);
router.put('/clientes/:id', clienteController.updateCliente);
router.delete('/clientes/:id', clienteController.deleteCliente);

module.exports = router;