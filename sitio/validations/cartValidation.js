const {check}=require('express-validator')

const validacionFinal = [
    check('email')
        .notEmpty().withMessage('Debes escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un correo electrónico válido'),
    check('nombre').notEmpty().withMessage('Debes escribir tu nombre'),
    check('apellido').notEmpty().withMessage('Debes escribir tu apellido'),
    check('dni').notEmpty().withMessage('Debes escribir tu número de DNI'),
    check('contacto').notEmpty().withMessage('Debes escribir un número de contacto')
]
const validarPago = [
    check('pago').notEmpty().withMessage('Debes seleccionar un método de pago')
]
const validarDireccion = [
    check('direccion').notEmpty().withMessage('Debes introducir una dirección')
]

module.exports = {
    validacionFinal, validarPago, validarDireccion
}