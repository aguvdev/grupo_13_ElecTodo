const fs = require("fs");
const path = require("path");
const {validationResult} = require('express-validator');
const db =require('../database/models');
const {Op} = require('sequelize'); /* operador de seuqelize para el buscador search */



module.exports={    
    carga : (req,res) => {
        db.Categories.findAll()
        .then(Categorias => res.render("carga",{ /* ese Categorias tiene q ser el mismo q esta en la vista de carga el foreach */
            Categorias
        })).catch(error => console.log(error))
    },

    save : (req,res) => {
        let result = validationResult(req);

        if(result.isEmpty()){
            const { name,description,price,discount,stock,category_id,created_at,updated_at,sub_category_id,brand_id} = req.body;

        db.Products.create({
            ...req.body,
            discount : +discount,
            sub_category_id : 1,
            brand_id : 1
        }).then(products =>{

            if(req.files){
                console.log(req.files)
                var imag = []
                var imagenes = req.files.map(imagen => imagen.filename);/* video 00:31 */
                imagenes.forEach(img => {
                    var image = {
                        name : img,
                        product_id : products.id,
                        /* created_at : new Date,
                        updated_at : new Date */

                    }
                    imag.push(image)
                    console.log(image)
                    db.images.create({...image}).then((image) => console.log(image))
                })
                /* console.log(imag)
                db.images.bulkCreate(imag,{validate : true})
                    .then( ()=> console.log('imagenes agregadas')) */
        }

            return res.redirect("/")
        }).catch(error => console.log(error))

    }else{
        db.Categories.findAll()
        .then(Categories =>{
            res.render("carga",{
                Categories,
                errors: result.mapped(),
                oldData: req.body
            })
        }).catch(error => console.log(error))
       
    }
        },
        
        product : (req,res) => { 
            db.Products.findOne({     /* este va aca el de models associacion: "Products".belongsTo(models.Categories,{ */
                where : {
                    id : req.params.id
                },
                include : [
                    {association : 'images'},
                    {association : 'Categories'}
                ]
            }).then(products => {/*  este va aca el q esta en la vista <h1><%= "products".name %> </h1>  */
                    console.log(products);
                    db.Categories.findOne({
                        where : {
                            id : products.category_id
                        },
                        include : [
                            {
                                association : 'Products',
                                include : [
                                    {association : 'images'}
                                ]
                            }
                        ]
                    }).then(Categories =>{
                        return res.render('detalle-product',{
                            products,
                            relacionados : Categories.Products
                })
            })
            }).catch(error => console.log(error))    
    

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