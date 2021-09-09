module.exports = (req,res,next) => { /* todo esto sirve para q un usuario normal no ponga local3000/products/carga y le aparesca eso. solo lo hace el admin */
    if(req.session.userLogin){//si esta levantado session en login
        res.locals.userLogin = req.session.userLogin
    }
    next()
    
}