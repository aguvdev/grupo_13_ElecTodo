const productos = require("../data/products_db");
const description = require("../data/description_db");
const relacionados = require("../data/relacionados_db");

module.exports={
    product : (req,res) => {
        
        return res.render("product",{
            productos,
            description,
            relacionados
            
        })
    }

    
}