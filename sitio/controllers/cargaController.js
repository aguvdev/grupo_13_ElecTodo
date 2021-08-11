const cargas = require("../data/carga_db");
const categorias = require("../data/category_db");


module.exports = {
    carga : (req,res) => {
        return res.render('carga',{
            cargas,
            categorias
        });
    }
}
