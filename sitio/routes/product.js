var express = require('express');
var router = express.Router();
const {product,carga,save,edit} = require("../controllers/productController")

/* GET products listing. */
router.get("/detalle-product/:id", product);
router.get('/carga', carga);
router.post('/carga', save);
router.get("/edit/:id",edit);

module.exports = router;