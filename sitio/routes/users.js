var express = require('express');
var router = express.Router();
const {login} = require('../controllers/userController')

/* GET /users listing. */
router.get('/login', login);
router.post('/login', login)

module.exports = router;
