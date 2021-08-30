const {usuarios, guardar} = require('../data/user_db');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

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
        const result = validationResult(req);
        
        let emailRegistrado = usuarios.find(usuario => usuario.email === req.body.email)
        if(emailRegistrado){
            return res.render('../views/users/register', {
                errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
            })
        }

        if(result.isEmpty()){  
            let {nombre, lastname, email}= req.body
            let newUser = {
                userId : usuarios.length > 0 ? usuarios[usuarios.length - 1].userId + 1 : 1,
                nombre,
                lastname,
                email,
                password : bcrypt.hashSync(req.body.password, 10),
                image : req.file ? req.file.filename : 'foto-de-perfil-default.png',
                rol : "user"
            }
            usuarios.push(newUser);
            guardar(usuarios);

            req.session.userLogin = {
                userId : newUser.userId,
                nombre : newUser.nombre
            }

            return res.redirect('/')
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
            
                res.render('../views/users/profile');
        }else{
            res.redirect('/users/login')
        }
        
    }
}