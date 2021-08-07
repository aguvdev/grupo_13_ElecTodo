const {validationResult} = require('express-validator');

module.exports = {
    carrito : (req, res) => {
        return res.render('carrito')
    },
    agregarDireccion : (req, res) =>{
        const result = validationResult(req);
        if(result.errors.length > 0){
            return res.render('carrito', {
                errors: result.mapped(),
                oldData: req.body
            })
        }
    },
    eliminar : (req, res) =>{

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
        }
    }
}