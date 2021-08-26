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
                nombre : usuario.nombre
            }
            res.locals.userLogin = req.session.userLogin
            return res.redirect('/')
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
                image : req.file ? req.file.filename : 'default-image.png'
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
    }
}