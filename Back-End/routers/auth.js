const router=require('express').Router()

const {logInUser,signUpUser}=require('../controllers/auth')

router.post('/signup',signUpUser)

router.post('/login',logInUser)

module.exports=router