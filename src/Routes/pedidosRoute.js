const { Router } = require('express');
const PedidoController = require('../controllers/PedidoController.js');

const pedidoController = new PedidoController();

const router = Router();

router.get('/pedidos', (req, res) => pedidoController.pegaTodos(req, res));
router.post('/pedidos', (req, res) => pedidoController.criaNovo(req, res));
router.post('/pedidoss', (req, res) => pedidoController.aCriar(req, res));


module.exports = router;