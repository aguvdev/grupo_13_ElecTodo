const fs = require("fs");
const path = require("path");
const productos = require("../data/products_db");
const description = require("../data/description_db");
const relacionados = require("../data/relacionados_db");

module.exports={    
    carga : (req,res) => {
        return res.render('carga');
    },
    save : (req,res) => {
        const {id,image,name,category,category1,description,price,discount} = req.body;

        let producto = {
            id : productos[productos.length - 1].id + 1,
            image ,
            name,
            category,
            category1,
            description,
            price,
            discount,
            
            
        }
        productos.push(producto)
        fs.writeFileSync(path.join(__dirname,"..","data","indexProducts.json"),JSON.stringify(productos,null,2),"utf-8")
        return res.redirect("/")
    },

    product : (req,res) => {
        let product = productos.find(producto => producto.id === +req.params.id);
        return res.render("detalle-product",{
            product,
            productos,
            description,
            relacionados
            
        })
    },
    edit : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);
        return res.render ("productEdit",{
            
            producto,
            productos
        })
    }

    
}