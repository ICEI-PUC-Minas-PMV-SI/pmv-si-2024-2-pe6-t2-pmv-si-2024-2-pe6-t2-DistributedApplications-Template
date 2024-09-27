const express = require('express');
const prestadorController = require('./controllers/prestadorController');
const router = express.Router();

router.get('/prestador', prestadorController.getAll);


module.exports = router;