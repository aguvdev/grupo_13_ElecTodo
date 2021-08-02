var express = require('express');
var router = express.Router();

const {product} = require("../controllers/productController")

/* GET products listing. */
router.get("/detalle-product", product);

module.exports = router;