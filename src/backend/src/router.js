const express = require('express');
const router = express.Router();

const prestadorController = require('./controllers/prestadorController');
const servicoController = require('./controllers/servicosController');

router.get('/prestador', prestadorController.getAll);
router.post('/prestador', prestadorController.register);
router.delete('/prestador', prestadorController.delete);
router.patch('/prestador', prestadorController.patch);

router.post('/servicos', servicoController.createServico);
router.put('/servicos/:id', servicoController.updateServico);
module.exports = router;