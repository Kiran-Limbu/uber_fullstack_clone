const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const isLoggedIn = require('../middlewares/auth.middlewere')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min:3 }).withMessage
    ('First name must be at least 4 characters long'),
    body('password').isLength({ min:6 }).withMessage('Password must be at least 6 characters long')
], 
    userController.registerUser
)


router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)

router.get('/profile', isLoggedIn.authUser , 
    userController.getUserProfile
);

router.get('/logout', isLoggedIn.authUser, 
    userController.logoutUser
)

module.exports = router;