const {usuarios, guardar} = require('../data/user_db');

module.exports = {
    login : (req,res) => {
        return res.render('login')
    }
}