module.exports = (req,res,next) => { /* todo esto sirve para q un usuario normal no ponga local3000/products/carga y le aparesca eso. solo lo hace el admin */
    if(req.session.userLogin && req.session.userLogin.rol === "user"){
        next()
    }else{
        res.redirect("/img/ah.gif")
    }
}