var express = require('express');
var router = express.Router();

const {product} = require("../controllers/productController")

/* GET users listing. */
router.get("/", product)


module.exports = router;