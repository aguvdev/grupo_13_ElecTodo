var express = require('express');
var router = express.Router();
const {product,carga,save,edit,update,remove} = require("../controllers/productController")

/* GET products listing. */
router.get('/carga', carga);
router.post('/carga', save);
router.get("/detalle-product/:id", product);
router.get("/edit/:id",edit);
router.put("/edit/:id",update);
router.delete("/remove/:id",remove);

module.exports = router;