const {usuarios, guardar} = require('../data/user_db');

module.exports = {
    login : (req,res) => {
        return res.render('login')
    },
    processLogin : (req,res) => {
        return res.redirect('/')
    },
    register : (req,res) => {
        return res.render('register')
    },
    processRegister : (req,res) => {
        return res.redirect('/')
    },
}