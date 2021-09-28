 const db =require('../database/models');
const Products = require('../database/models/Products');

module.exports = {
    index : (req,res) => {
        let Producto = db.Products.findAll({
            include : [
                {association : 'Categories'}
            ]
        })
        let Categories = db.Categories.findAll()
        Promise.all([Producto,Categories])
        .then(([Producto,Categories])=>{
            return res.render('index',{
                Producto,
                Categories
            })
            
        })

        .catch(error => console.log(error))
    },
    filter : (req,res) => {
        let productito = db.Producto.findAll({
            where : {
                category_id : req.query.Categories
            }
            })
            let categoria = db.Categories.findAll()
            Promise.all([productito,categoria])
            .then(productito => res.render('index',{
                categoria,
                productito
        }))
    }
}

    
 


 /* const indexProducts=require('../data/indexProducts.js');

module.exports = {
    index : (req,res) => {
        return res.render('index', {
            Gaming : indexProducts.filter(product => product.category === "gaming"),
            Celulares : indexProducts.filter(product => product.category === "Celulares"),
            Notebooks : indexProducts.filter(product => product.category === "laptops"),
            
        });
        
    },
}  */