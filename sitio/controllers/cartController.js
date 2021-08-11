const fs = require('fs');
const path = require('path');
const cartProducts = require('../data/cartProducts');
const {validationResult} = require('express-validator');

module.exports = {
    carrito : (req, res) => {
        return res.render('carrito', {
            cartProducts
        })
    },
    agregarDireccion : (req, res) =>{
        const result = validationResult(req);
        if(result.errors.length > 0){
            return res.render('carrito', {
                cartProducts,
                errors: result.mapped(),
                oldData: req.body
            })
        }
    },
    eliminar : (req, res) =>{
        cartProducts.forEach(product => {
            if(product.id === +req.params.id){
				let eliminar = cartProducts.indexOf(product)
                cartProducts.splice(eliminar, 1)
                }
        });
        fs.writeFileSync(path.join(__dirname, '../data/cartProducts.json'), JSON.stringify(cartProducts,null,2),'utf-8');
		return res.redirect('/cart')
    },
    metodoDePago : (req, res) => {
        return res.render('metodoDePago')
    },
    pagar : (req, res) =>{
        const resultado = validationResult(req);
        if(resultado.errors.length > 0){
            return res.render('metodoDePago', {
                errors: resultado.mapped()
            })
    }
},
    confirmacion : (req, res) => {
        return res.render('confirmacion')
    },
    terminar : (req, res) =>{
        const resultado = validationResult(req);
        if(resultado.errors.length > 0){
            return res.render('confirmacion', {
                errors: resultado.mapped(),
                oldData: req.body
            })
        } return res.redirect('/')
    }
}