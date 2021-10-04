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
            db.User.findOne({
                where : {
                    email
                }
            }).then(user=>{
                req.session.userLogin = {
                id : user.id,
                name : user.name,
                rol : user.rol,
                email: user.email
            }
            })
            
            if(recordar){
                res.cookie('elecTodo',req.session.userLogin,{maxAge: 1000 * 600})
                return res.redirect('/')
            }
            
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
            const result = validationResult(req);

            
            let {name, password,rol_id, email,phone,address_id}= req.body;
            if(result.isEmpty()){

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
                return res.redirect("/users/login")
            }).catch(error => console.log(error)) 
        }else{
            return res.render('../views/users/register', {
                errors: result.mapped(),
                oldData: req.body
            })
        }
            
    },


    logout : (req,res) =>{
        req.session.destroy();
        res.cookie('elecTodo',null,{maxAge:-1})
        return res.redirect('/')
    },
    profile: (req,res) => {
        if(req.session.userLogin){
            db.User.findOne(req.session.userLogin.email)
            .then(user => res.render('../views/users/profile', {
                user 
            })).catch(error => console.log(error)) 
        }else{
            return res.redirect('/users/login')
        }
    }
}