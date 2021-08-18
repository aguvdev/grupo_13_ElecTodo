const fs = require("fs");
const path = require("path");
const productos = require("../data/indexProducts");
const description = require("../data/description_db");
const relacionados = require("../data/relacionados_db");
const categorias = require("../data/categories_db");
const {validationResult} = require('express-validator');

module.exports={    
    carga : (req,res) => {
        return res.render('carga',{
            categorias
        });
    },
    save : (req,res) => {
        const result = validationResult(req);
        if(result.errors.length > 0){
            return res.render('carga', {
                categorias,
                errors: result.mapped(),
                oldData: req.body
            })
        }
        const {id,image,name,category,category1,description,price,discount} = req.body;

        let producto = {
            id : productos[productos.length - 1].id + 1,
            image : req.file ? req.file.filename : "default-image.png", /* si viene algo por file de lo comtrario guarda un img default */
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
        const {id,image,name,category,category1,description,price,discount} = req.body;

        productos.forEach(producto => {
            if(producto.id === +req.params.id){/* recorro y si me toco con el id correspondiente hago la modificacion */
                producto.id = +req.params.id
                producto.name = name,
                producto.image = req.file ? req.file.filename : producto.image,
                producto.category = category,
                producto.description = description,
                producto.price = price,
                producto.discount = discount
            }
        });
        fs.writeFileSync(path.join(__dirname,"..","data","indexProducts.json"),JSON.stringify(productos,null,2),"utf-8")
        return res.redirect('/product/detalle-product/' + req.params.id);
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

    },
    search : (req,res) =>{
        if(req.query.search.trim() != ""){/* para no tocar la busqueda  si no escribi nada me aparesca el else no todo la lista */
            let result = productos.filter(producto => producto.name.toLowerCase().includes(req.query.search.toLowerCase().trim()));
            return res.render("resultSearch",{
                result,
                productos,
                busqueda : req.query.search
            })
        }else{
            res.send("DEBE ESCRIBIR ALGUN PRODUCTO QUE DESEA BUSCAR... ")
        }


        }
      
}