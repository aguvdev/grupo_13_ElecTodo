var express = require('express');
var router = express.Router();

const {loginValidation, registerValidation} = require('../validations/usersValidation')
const {login,register, processLogin, processRegister} = require('../controllers/userController')

/* GET /users listing. */
router.get('/login', login);
router.post('/login',loginValidation, processLogin)

router.get('/register', register);
router.post('/register', registerValidation, processRegister);

module.exports = router;
