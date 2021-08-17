var express = require('express');
var router = express.Router();
const {product,carga,save,edit,update,remove,search} = require("../controllers/productController")
const multer = require("multer");
const path = require ("path");

const storage = multer.diskStorage({ /* almacenar archivos */
    destination : (req,file,callback) => {/* donde se almacena  */
        callback(null,"public/img")
    },
    filename : (req,file,callback) => {/*  de que manera se almacena */
        callback(null,file.fieldname + "-" + + Date.now() + path.extname(file.originalname))/* para el .png .jpg etc */
    }
})

const upload = multer ({
    storage,
})

/* GET products listing. */
router.get('/carga', carga);
router.post('/carga',upload.single("image"),save);
router.get("/detalle-product/:id", product);
router.get("/edit/:id",edit);
router.put("/edit/:id",update);
router.delete("/remove/:id",remove);
router.get("/search", search);

module.exports = router;