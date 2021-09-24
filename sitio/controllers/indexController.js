/* const db =require('../database/models');

module.exports = {
    index : (req,res) => {
        db.Producto.findAll()
        .then(products => res.send(products))
        .catch(error => console.log(error))
        
    }
} */


 const indexProducts=require('../data/indexProducts.js');

module.exports = {
    index : (req,res) => {
        return res.render('index', {
            Gaming : indexProducts.filter(product => product.category === "gaming"),
            Celulares : indexProducts.filter(product => product.category === "Celulares"),
            Notebooks : indexProducts.filter(product => product.category === "laptops"),
            
        });
        
    },
} 