var express = require('express');
var router = express.Router();
const {validacionCarga, validacionEdit} =require('../validations/productValidation')
const {product,carga,save,edit,update,remove,search,filter} = require("../controllers/productController")
const multer = require("multer");
const path = require ("path");

const storage = multer.diskStorage({ /* almacenar archivos */
    destination : (req,file,callback) => {/* donde se almacena  */
        callback(null,"public/img/products")
    },
    filename : (req,file,callback) => {/*  de que manera se almacena */
        callback(null,file.fieldname + "-" + + Date.now() + path.extname(file.originalname))/* para el .png .jpg etc */
    }
})

const upload = multer ({
    storage,
})

const rolAdmin = require("../middlewares/rolAdmin") /* requiero el rol admin para identicar quien es el  admin */

/* GET products listing. */
router.get('/carga',rolAdmin, carga);/* antes que me lleve al metodo de carga verifica 1ro si es admin */
router.post('/carga',upload.array("images"),validacionCarga, save);
router.get("/detalle-product/:id", product);
router.get("/edit/:id",rolAdmin,edit);/* aplico rol admin para q aca en edit tambien no ingrese cualquiera solo el admin */
router.put("/edit/:id",validacionEdit, update);
router.delete("/remove/:id",remove);
router.get("/search", search);
router.get("/filter", filter);

module.exports = router;