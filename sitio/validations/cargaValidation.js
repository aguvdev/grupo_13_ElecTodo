const {check}=require('express-validator')

const validacionCarga = [
    check('name').notEmpty().withMessage('Indicar el nombre del producto'),
    check('stock').notEmpty().withMessage('Debes indicar el stock disponible'),
    check('category_id').notEmpty().withMessage('Elegir categoría'),
    check('price').notEmpty().withMessage('Indicar precio del producto'),
    check('discount').notEmpty().withMessage('Si el producto no tiene descuento, debe indicar el valor 0'),
    check('description').notEmpty().withMessage('Se precisa una descripción del producto')
]
module.exports = {validacionCarga}