const indexProducts=require('../data/indexProducts.js');
const productos=require('../data/products_db.js');
const description = require("../data/description_db");
const relacionados = require("../data/relacionados_db");

module.exports = {
    index : (req,res) => {
        return res.render('index', {
            Gaming : indexProducts.filter(product => product.category === "gaming"),
            Celulares : indexProducts.filter(product => product.category === "Celulares"),
            Notebooks : indexProducts.filter(product => product.category === "laptops"),
            
        }
        );
    },
    detail : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id)
        return res.render('detalle-product',{
            producto,
            productos,
            description,
            relacionados
        })
    }
}