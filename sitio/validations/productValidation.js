const {check}=require('express-validator')

const validacionCarga = [
    check('name')
    .notEmpty().withMessage('Indicar el nombre del producto').bail()
    .isLength({min: 5}).withMessage('El nombre debe contener al menos 5 caracteres'),
    check('stock').notEmpty().withMessage('Debes indicar el stock disponible'),
    check('category_id').notEmpty().withMessage('Elegir categoría'),
    check('price').notEmpty().withMessage('Indicar precio del producto'),
    check('discount').notEmpty().withMessage('Si el producto no tiene descuento, debe indicar el valor 0'),
    check('description')
    .notEmpty().withMessage('Se precisa una descripción del producto').bail()
    .isLength({min: 20}).withMessage('La descripción debe contener al menos 20 caracteres')
]
const validacionEdit = [
    check('name')
    .notEmpty().withMessage('Indicar el nombre del producto').bail()
    .isLength({min: 5}).withMessage('El nombre debe contener al menos 5 caracteres'),
    check('category_id').notEmpty().withMessage('Elegir categoría'),
    check('price').notEmpty().withMessage('Indicar precio del producto'),
    check('discount').notEmpty().withMessage('Si el producto no tiene descuento, debe indicar el valor 0'),
    check('description')
    .notEmpty().withMessage('Se precisa una descripción del producto').bail()
    .isLength({min: 20}).withMessage('La descripción debe contener al menos 20 caracteres')
]
module.exports = {validacionCarga, validacionEdit}