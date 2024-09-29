const express = require('express');
const router = express.Router();

const prestadorController = require('./controllers/prestadorController');
const servicoController = require('./controllers/servicosController');
const agendamentosController = require('./controllers/agendamentosController');
const financeiroController = require('./controllers/financeiroContoller')
const clienteController = require('./controllers/clienteController');

// Cad. de Prestadores de Serviços
router.get('/prestador', prestadorController.getAllPrestador);
router.post('/prestador', prestadorController.createPrestador);
router.delete('/prestador/:id', prestadorController.deletePrestador);
router.put('/prestador/:id', prestadorController.updatePrestador);

// Serviços
router.get('/servicos', servicoController.getAllServicos);
router.post('/servicos', servicoController.createServico);
router.put('/servicos/:id', servicoController.updateServico);
router.delete('/servicos/:id', servicoController.deleteServico);

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

// Rotas dos relatórios
router.get('/financeiro/:id/faturamento/:data', financeiroController.getFaturamentoDia);
router.get('/financeiro/:id/faturamento', financeiroController.getFaturamentoPorIntervalo);

module.exports = router;