const express = require('express');
const router = express.Router();

const receitaController = require('../Controllers/receita.controller');
const basicAuth = require('../middleware/basicAuth');

router.get('/', basicAuth, receitaController.getReceitas);
router.get('/:id', basicAuth, receitaController.getReceitaById);
router.post('/', basicAuth, receitaController.createReceita);
router.delete('/:id', basicAuth, receitaController.deleteReceita);
router.put('/:id', basicAuth, receitaController.updateReceita);

module.exports = router;
