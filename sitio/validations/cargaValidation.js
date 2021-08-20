const {check}=require('express-validator')

const validacionCarga = [
    check('name').notEmpty().withMessage('Indicar el nombre del producto'),
    check('model').notEmpty().withMessage('Indicar el modelo del producto'),
    check('category').notEmpty().withMessage('Elegir categoría'),
    check('price').notEmpty().withMessage('Indicar precio del producto'),
    check('description').notEmpty().withMessage('Se precisa una descripción del producto')
]
module.exports = {validacionCarga}