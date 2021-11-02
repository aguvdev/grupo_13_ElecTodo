var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

const {index, terminos, pago} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.get('/terminos-y-condiciones', terminos);
router.get('/medios-de-pago', pago);



module.exports = router;
