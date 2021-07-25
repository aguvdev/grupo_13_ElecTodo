var express = require('express');
var router = express.Router();

const {carrito, metodo, confirmacion} = require('../controllers/cartController')

router.get('/', carrito)
router.get('/metodoDePago', metodo)
router.get('/confirmacionDeLaCompra', confirmacion)

module.exports = router