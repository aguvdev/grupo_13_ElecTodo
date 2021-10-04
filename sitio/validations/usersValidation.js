const {check, body}=require('express-validator');
const {usuarios} = require('../data/user_db');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

const loginValidation = [
    body('email')
    .custom((value,{req}) => {
        return db.User.findOne({
            where : {
                email: value
            }
        }).then(user => {
            if(!user || !bcrypt.compareSync(req.body.password, user.password)){
                return Promise.reject()
            }
        }).catch(() => Promise.reject('Correo o contraseña inválidos'))
    })
]
const registerValidation = [
    check('name')
    .notEmpty().withMessage('Debes escribir un nombre').bail()
    .isAlpha().withMessage('El nombre debe contener solo letras'),
    
    check('email')
    .notEmpty().withMessage('Debes escribir un correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un correo electrónico válido'),
    
    body('emailagain')
    .custom((value,{req}) => {
        if(value !== req.body.email){
            return false
        }
        return true
    }).withMessage('Los correos no coinciden'),
    
    check('password')
    .notEmpty().withMessage('Debes escribir una contraseña').bail()
    .isLength({min: 6}).withMessage('La contraseña debe contener al menos 6 caracteres'),

    body('passwordagain')
    .notEmpty().withMessage('Debes confirmar tu contraseña').bail()
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
]


module.exports = {loginValidation, registerValidation}