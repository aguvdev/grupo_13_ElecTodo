const { usuarios, guardar } = require('../data/user_db');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');


module.exports = {
    login: (req, res) => {
        db.User.findAll()
            .then(user => res.render('../views/users/login', { user }))
    },
    processLogin: (req, res) => {
        const result = validationResult(req);
        const { email, recordar } = req.body
        if (result.isEmpty()) {
            db.User.findOne({
                where: {
                    email
                }
            }).then(user => {
                req.session.userLogin = {
                    id: user.id,
                    name: user.name,
                    rol: user.rol,
                    email: user.email,
                    avatar: user.avatar
                }
                req.session.cart = []
                recordar && res.cookie('elecTodo', req.session.userLogin, { maxAge: 1000 * 600 })
                return res.redirect('/')
            })
        }
        else {
            return res.render('../views/users/login', {
                errors: result.mapped(),
                oldData: req.body
            })
        }
    },
    register: (req, res) => {
        return res.render('../views/users/register')
    },
    processRegister: (req, res) => {
        const result = validationResult(req);
        let { name, password, rol_id, email, phone, address_id } = req.body;
        if (result.isEmpty()) {

            db.User.create({
                name,
                password: bcrypt.hashSync(password, 10),
                email,
                rol: "user",
                phone,
                address_id,
                avatar: 'foto-de-perfil-default.png'
            }).then(users => {
                console.log(users)
                return res.redirect("/users/login")
            }).catch(error => console.log(error))
        } else {
            return res.render('../views/users/register', {
                errors: result.mapped(),
                oldData: req.body
            })
        }

    },


    logout: (req, res) => {
        req.session.destroy();
        res.cookie('elecTodo', null, { maxAge: -1 })
        return res.redirect('/')
    },
    profile: (req, res) => {
        if (req.session.userLogin) {
            db.User.findByPk(req.session.userLogin.id)
                .then(user => res.render('../views/users/profile', {
                    user
                })).catch(error => console.log(error))
        } else {
            return res.redirect('/users/login')
        }
    },
    edit: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => res.render('../views/users/profileEdit', { user }))
            .catch(error => console.log(error))
    },
    update: (req, res) => {
        let result = validationResult(req);
        const {name, phone, password, avatar} = req.body
        if (result.isEmpty()) {
            db.User.update(
                {
                    avatar: req.file && req.file.filename,
                    name: name,
                    phone: +phone,
                    password: password != " " && bcrypt.hashSync(password, 10)
                },
                {
                    where: {
                        id: req.params.id
                    }
                })
                .then(response => {
                    console.log(response)
                    return res.redirect('/users/profile')
                }).catch(error => console.log(error))
        } else {
            db.User.findByPk(req.params.id)
                .then(user => res.render('../views/users/profileEdit', { 
                    user,
                    errors: result.mapped(),
                    oldData: req.body
                }))
                .catch(error => console.log(error))
        }
    },
    destroy: (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(response => {
            console.log(response)
            req.session.destroy(),
                res.cookie('elecTodo', null, { maxAge: -1 }),
                res.redirect('/')

        }).catch(error => console.log(error))
    }
}