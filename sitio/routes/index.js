var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

const {index, terminos, pago, envios, costo} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.get('/terminos-y-condiciones', terminos);
router.get('/medios-de-pago', pago);
router.get('/metodos-de-envio', envios);
router.get('/costos-de-envios', costo);


module.exports = router;
