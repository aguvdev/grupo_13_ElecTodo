var express = require('express');
var router = express.Router();

const {validarPago, validacionFinal, validarDireccion} = require('../validations/cartValidation')
const {carrito, metodoDePago, confirmacion, pagar, eliminar, terminar, agregarDireccion} = require('../controllers/cartController')
const rolUser = require("../middlewares/rolUser")
/* /cart */ 
/*Vista carrito de compras*/ 
router.get('/',rolUser, carrito)

/* proceso informacion de la dirección*/
router.post('/', validarDireccion, agregarDireccion)

router.delete('/delete/:id', eliminar)

/*vista formulario metodo de pago*/ 
router.get('/metodoDePago', metodoDePago)
/*proceso formulario metodo de pago*/ 
router.post('/metodoDePago', validarPago, pagar)

/*vista confirmación de la compra*/ 
router.get('/confirmacionDeLaCompra', confirmacion)
/* proceso formulario de confirmacion*/
router.post('/confirmacionDeLaCompra', validacionFinal, terminar)

module.exports = router