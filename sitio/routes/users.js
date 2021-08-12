var express = require('express');
var router = express.Router();
const {login,register, processLogin, processRegister} = require('../controllers/userController')

/* GET /users listing. */
router.get('/login', login);
router.post('/login', processLogin)

router.get('/register', register);
router.post('/register', processRegister);

module.exports = router;
