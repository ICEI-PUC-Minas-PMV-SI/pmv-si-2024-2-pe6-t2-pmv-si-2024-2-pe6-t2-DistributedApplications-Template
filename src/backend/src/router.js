const express = require('express');
const router = express.Router();

const prestadorController = require('./controllers/prestadorController');

router.get('/prestador', prestadorController.getAll);
router.post('/prestador', prestadorController.register);
router.delete('/prestador', prestadorController.delete);
router.patch('/prestador', prestadorController.patch);

module.exports = router;