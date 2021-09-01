module.exports = (req,res,next) => {
    if(req.cookies.elecTodo){
        req.session.userLogin = req.cookies.elecTodo;
    }
    next()
}