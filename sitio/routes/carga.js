var express = require('express');
var router = express.Router();
const {carga} = require("../controllers/cargaController")

/* GET home page. */
router.get('/', carga);

module.exports = router;
