var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

const {index} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);



module.exports = router;
