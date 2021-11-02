var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

const {index, terminos} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.get('/terminos-y-condiciones', terminos);



module.exports = router;
