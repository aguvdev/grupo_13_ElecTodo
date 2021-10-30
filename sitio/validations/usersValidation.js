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
                return Promise.reject('Correo o contraseña inválidos')
            }
        })
    })
]
const registerValidation = [
    check('name')
    .notEmpty().withMessage('Debes escribir un nombre').bail()
    .isString().withMessage('El nombre debe contener solo letras').bail()
    .isLength({min: 2}).withMessage('El noombre debe tener al menos 2 caracteres'),
    
    check('email')
    .notEmpty().withMessage('Debes escribir un correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un correo electrónico válido').bail()
    .custom((value,{req}) => {
        return db.User.findOne({
            where :{
                email : value
            }
        }).then(userEmail =>{ 
            if (userEmail){
                return Promise.reject('Este email ya está registrado')
            }
        })
        
    }) ,
    
    body('emailagain')
    .custom((value,{req}) => {
        if(value !== req.body.email){
            return false
        }
        return true
    }).withMessage('Los correos no coinciden'),
    
    check('password')
    .notEmpty().withMessage('Debes escribir una contraseña').bail()
    .isLength({min: 8}).withMessage('La contraseña debe contener al menos 8 caracteres'),

    body('passwordagain')
    .notEmpty().withMessage('Debes confirmar tu contraseña').bail()
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
]
const editValidation = [
    check('name')
    .notEmpty().withMessage('Debes escribir un nombre').bail()
    .isString().withMessage('El nombre debe contener solo letras').bail()
    .isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    check('password')
    .notEmpty().withMessage('Debes escribir tu contraseña').bail()
    .isLength({min: 8}).withMessage('La contraseña debe contener al menos 8 caracteres')
]

module.exports = {loginValidation, registerValidation, editValidation}