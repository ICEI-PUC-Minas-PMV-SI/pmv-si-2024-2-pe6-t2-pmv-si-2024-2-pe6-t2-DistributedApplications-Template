const express = require('express');
const prestadorController = require('./controllers/prestadorController');
const servicoController = require('./controllers/servicoController');
const router = express.Router();

router.get('/prestador', prestadorController.getAll);
router.post('/servicos', servicoController.createServico);
router.put('/servicos/:id', servicoController.updateServico);



module.exports = router;