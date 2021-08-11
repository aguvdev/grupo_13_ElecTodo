var express = require('express');
var router = express.Router();

const {validarPago, validacionFinal, validarDireccion, terminosCondiciones} = require('../validations/cartValidation')
const {carrito, metodoDePago, confirmacion, pagar, eliminar, terminar, agregarDireccion} = require('../controllers/cartController')
/* /cart */ 
/*Vista carrito de compras*/ 
router.get('/', carrito)
/* proceso informacion de la dirección, acepto términos y condiciones*/
router.post('/', validarDireccion,terminosCondiciones, agregarDireccion)

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