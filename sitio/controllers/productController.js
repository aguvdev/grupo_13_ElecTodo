const productos = require("../data/products_db");
const description = require("../data/description_db");
const relacionados = require("../data/relacionados_db");

module.exports={
    product : (req,res) => {
        let product = productos.find(producto => producto.id === +req.params.id);
        return res.render("product",{
            producto,
            productos,
            description,
            relacionados
            
        })
    }

    
}