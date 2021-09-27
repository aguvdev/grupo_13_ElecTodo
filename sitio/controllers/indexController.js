 const db =require('../database/models');

module.exports = {
    index : (req,res) => {
        let Producto = db.Product.findAll({
            include : [
                {association : 'Categories'}
            ]
        })
        let Categories = db.Category.findAll()
        Promise.all([Producto,Categories])
        .then(([Producto,Categories])=>{
            return res.render('index',{
                Producto,
                Categories
            })
            
        })

        .catch(error => console.log(error))
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