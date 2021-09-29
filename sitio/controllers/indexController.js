 const db =require('../database/models');

module.exports = {
    index : (req,res) => {
        let Producto = db.Products.findAll()
        let accesorios = db.Categories.findOne({
            where : {
                name : 'accesorios'
            },
            include : [
                {association : 'Products'}
            ]
        });
        let celulares_y_tablets = db.Categories.findOne({
            where : {
                name : 'celulares_y_tablets'
            },
            include : [
                {association : 'Products'}
            ]
        });
        let informatica = db.Categories.findOne({
            where : {
                name : 'informatica'
            },
            include : [
                {association : 'Products'}
            ]
        })

        let Categories = db.Categories.findAll()
        Promise.all([Producto,Categories,accesorios,celulares_y_tablets,informatica])
        .then(([Producto,Categories,accesorios,celulares_y_tablets,informatica]) => {
            return res.render('index',{
                Producto,
                Categories,
                accesorios : accesorios.Products,
                celulares_y_tablets : celulares_y_tablets.Products,
                informatica : informatica.Products
            })
            
        }).catch(error => console.log(error))
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