const {check, body}=require('express-validator');
const {usuarios} = require('../data/user_db');
const bcrypt = require('bcryptjs');

const loginValidation = [
    body('email')
    .notEmpty().withMessage('Debes escribir un correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un correo electrónico válido')
    .custom((value,{req}) => {
        let usuario = usuarios.find(usuario => usuario.email === value);
        if (usuario){
            return true
        }else{
            return false
        }
    }).withMessage('Correo o contraseña incorrecta'),
    body('password')
    .notEmpty().withMessage('Debes escribir una contraseña').bail()
    .custom((value, {req})=> {
        let user = usuarios.find(user => user.email === req.body.email)
        if (bcrypt.compareSync(req.body.password, user.password)){
            return true
        }else{
            return false
        }
    }).withMessage('Correo o contraseña incorrecta'),
]
const registerValidation = [
    check('nombre')
    .notEmpty().withMessage('Debes escribir un nombre').bail()
    .isAlpha().withMessage('El nombre debe contener solo letras'),
    check('lastname')
    .notEmpty().withMessage('Debes escribir un apellido').bail()
    .isAlpha().withMessage('El apellido debe contener solo letras'),
    
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
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')

]


module.exports = {loginValidation, registerValidation}