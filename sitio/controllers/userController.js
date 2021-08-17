const {usuarios, guardar} = require('../data/user_db');
const {validationResult} = require('express-validator');

module.exports = {
    login : (req,res) => {
        return res.render('login')
    },
    processLogin : (req,res) => {
        const result = validationResult(req);
        if(result.errors.length > 0){
            return res.render('login', {
                errors: result.mapped(),
                oldData: req.body
            })
        }
    },
    register : (req,res) => {
        return res.render('register')
    },
    processRegister : (req,res) => {
        const result = validationResult(req);
        if(result.errors.length > 0){
            return res.render('register', {
                errors: result.mapped(),
                oldData: req.body
            })
        }
        return res.redirect('/')
    }
}