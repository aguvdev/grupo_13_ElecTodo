const {usuarios, guardar} = require('../data/user_db');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const db =require('../database/models');


module.exports = {
    login : (req,res) => {
        return res.render('../views/users/login', {
            usuarios
        })
    },
    processLogin : (req,res) => {
        const result = validationResult(req);
        const {email, recordar} = req.body
        if(result.isEmpty()){
            let usuario = usuarios.find(usuario => usuario.email === email)
            req.session.userLogin = {
                nombre : usuario.nombre,
                rol : usuario.rol
            }
            res.locals.userLogin = req.session.userLogin
            if(recordar){
                res.cookie('elecTodo',req.session.userLogin,{maxAge: 1000 * 60})
                req.session.userLogin = req.cookies.elecTodo
            }
            return res.redirect('/')/*aca poner el vista perfil*/
        }else{
            return res.render('../views/users/login', {
                errors: result.mapped(),
                oldData: req.body
            })
        }
    },
    register : (req,res) => {
        return res.render('../views/users/register')
    },
    processRegister : (req,res) => {
         
            let {name, password,rol_id, email,phone,address_id}= req.body;
            db.User.create({
            name,
            password : bcrypt.hashSync(password, 10),
            email,
            rol : "user",
            phone,
            address_id,
            avatar : 'foto-de-perfil-default.png'
            }).then(users =>{
                console.log(users)
                return res.redirect("/")
            }).catch(error => console.log(error))
    },


    logout : (req,res) =>{
        req.session.destroy();
        res.cookie('elecTodo',null,{maxAge:-1})
        return res.redirect('/')
    },
    profile: (req,res) => {
        
        if(req.session.userLogin){
            
                res.render('../views/users/profile');
        }else{
            res.redirect('/users/login')
        }
        
    }
}