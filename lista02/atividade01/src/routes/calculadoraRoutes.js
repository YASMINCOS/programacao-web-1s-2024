const express = require('express');
const router = express.Router();
const calculadoraController = require('../controllers/calculadoraContoller');

router.post('/calcular', calculadoraController.calcular);

module.exports = router;
