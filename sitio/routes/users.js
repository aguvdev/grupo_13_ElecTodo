var express = require('express');
var router = express.Router();
const multer=require('multer')
const path=require('path')
const {loginValidation, registerValidation,editValidation} = require('../validations/usersValidation')
const {login,register, processLogin, processRegister,logout, profile,edit, update, destroy} = require('../controllers/userController')


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img/users')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadFile = multer({storage})

/* GET /users listing. */
router.get('/login', login);
router.post('/login',loginValidation, processLogin)

router.get('/register', register);
router.post('/register', registerValidation, processRegister);

router.get('/logOut',logout);

router.get('/profile', profile);

router.get('/profileEdit/:id', edit);
router.put('/profileEdit/:id', uploadFile.single('avatar'), editValidation, update);
router.delete('/profile/:id', destroy);


module.exports = router;
