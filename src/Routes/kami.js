const { Router } = require('express');
const PedidoController = require('../controllers/PedidoController.js');

const pedidoController = new PedidoController();

const router = Router();


router.post('/kami', (req, res) => pedidoController.aCriar(req, res));


module.exports = router;