 const db =require('../database/models');

module.exports = {
    index : (req,res) => {
        let Producto = db.Products.findAll()
        let videojuegos = db.Categories.findOne({
            where : {
                name : 'videojuegos'
            },
            include : [
                {
                    association : 'Products',
                    include : [
                        {association : 'images'}
                    ]
                }
            ]
        });
        let celulares_y_tablets = db.Categories.findOne({
            where : {
                name : 'celulares_y_tablets'
            },
            include : [
                {
                    association : 'Products',
                    include : [
                        {association : 'images'}
                    ]
                }
            ]
        });
        let informatica = db.Categories.findOne({
            where : {
                name : 'informatica'
            },
            include : [
                {
                    association : 'Products',
                    include : [
                        {association : 'images'}
                    ]
                }
            ]
        })

        let Categories = db.Categories.findAll()
        Promise.all([Producto,Categories,videojuegos,celulares_y_tablets,informatica])
        .then(([Producto,Categories,videojuegos,celulares_y_tablets,informatica]) => {
            return res.render('index',{
                Producto,
                Categories,
                videojuegos : videojuegos.Products,
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
    },
    terminos: (req,res) => {
        return res.render('terminosYCondiciones')
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