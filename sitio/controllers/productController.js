const fs = require("fs");
const path = require("path");
const productos = require("../data/indexProducts");
const description = require("../data/description_db");
const relacionados = require("../data/relacionados_db");
const categorias = require("../data/categories_db");

module.exports={    
    carga : (req,res) => {
        return res.render('carga',{
            categorias
        });
    },
    save : (req,res) => {
        const {id,image,name,category,category1,description,price,discount} = req.body;

        let producto = {
            id : productos[productos.length - 1].id + 1,
            image : "default-image.png",
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
        let producto = productos.find(producto => producto.id === +req.params.id);
        return res.render("detalle-product",{
            producto,
            description,
            relacionados
            
        })
    },
    edit : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);
        return res.render ("productEdit",{
            producto,
            productos,
            categorias
        })
    },
    update : (req,res) => {
        res.send(req.body)
        return res.redirect('/');
    },
    
    remove : (req, res) =>{
        productos.forEach(producto => {
            if(producto.id === +req.params.id){
				let eliminar = productos.indexOf(producto)
                productos.splice(eliminar, 1)
                }
        });
        fs.writeFileSync(path.join(__dirname, '../data/indexProducts.json'), JSON.stringify(productos,null,2),'utf-8');
		return res.redirect('/');

    }  
}