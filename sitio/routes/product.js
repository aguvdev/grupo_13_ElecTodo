var express = require('express');
var router = express.Router();

const {detail} = require("../controllers/productController")

/* GET products listing. */
router.get("/detalle-product/:id", product);

module.exports = router;