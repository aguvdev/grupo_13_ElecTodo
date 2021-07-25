module.exports = {
    carrito : (req, res) => {
        return res.render('carrito')
    },
    metodo : (req, res) => {
        return res.render('metodoDePago')
    },
    confirmacion : (req, res) => {
        return res.render('confirmacion')
    }
}