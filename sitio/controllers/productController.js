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
        const { id,name,description,price,discount,stock,image_id,category_id,created_at,updated_at,sub_category_id} = req.body;
        db.Products.create({
            id,
            name,
            description,
            price,
            discount : +discount,
            stock,
            image_id : 1,
            category_id,
            created_at,
            updated_at,
            sub_category_id : 1
        }).then(products =>{
            console.log(products)
            return res.redirect("/")
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
        db.Products.destroy({
            where : {
                id : req.params.id
            }
        }).then(response => {
            console.log(response)
            return res.redirect('/')
        }).catch(error => console.log(error))
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