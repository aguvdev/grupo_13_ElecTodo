const fs = require("fs");
const path = require("path");

const db =require('../database/models');
const {Op} = require('sequelize'); /* operador de seuqelize para el buscador search */
const Products = require("../database/models/Products");



module.exports={    
    carga : (req,res) => {
        db.Categories.findAll()
        .then(Categorias => res.render("carga",{
            Categorias
        })).catch(error => console.log(error))
    },

    save : (req,res) => {
            db.Products.create({
    
                ...req.body
    
            }).then(Products => {
                console.log(Products)
                return res.redirect('/')
            })
            .catch(error => console.log(error))
        },
        
    
    product : (req,res) => {                  /* detalle producto es show que me muestre una pelicula de a uno, entonces tengo que tener el id en routes*/
        db.Products.findByPk(req.params.id)/* esto me va a devolver una pelicula */
        .then(products => res.render('detalle-product',{/* una pelicula(movie) la mando a la vista movies_show */
            products
        }))
        .catch(error => console.log(error))

    },
    edit : (req,res) => {
        let categorias = db.Categories.findAll()
        let producto =  db.Products.findByPk(req.params.id)
        Promise.all([producto,categorias])
        .then(([producto,categorias]) => res.render("productEdit",{
            categorias,
            producto
        })).catch(error => console.log(error))
    },

    update : (req,res) => {
        db.Products.update(
            {
                ...req.body
            },
            {
                where : {
                    id : req.params.id
                }
            }
        ).then( response => {
            console.log(response)
            return res.redirect('/')
        }).catch(error => console.log(error))
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
        let Producto = db.Products.findAll({
            where : {
                name : {
                    [Op.substring] : req.query.search /* para q me busque ej : auris, micro etc.. */
                }
            }
        })
        let Categories = db.Categories.findAll()
        Promise.all([Producto,Categories])
        .then(([Producto,Categories])=> res.render('resultSearch',{
                Producto,
                Categories,
                name : req.query.search
            }))


        }
        
      
}