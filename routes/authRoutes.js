const express=require('express')
const cors=require('cors')
const {test,registerUser,loginUser,getPrfile}=require('../controller/authController');
const passport = require('passport');
const passportSetup=require('../config/passport-setup')

const router=express.Router();

//middleware
router.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

// router.get('/',test);
router.post('/register',registerUser) 
router.post('/login',loginUser)
router.get('/profile',getPrfile)
router.get('/google',passport.authenticate('google',{
    scope:['profile']
    
}))

module.exports = router 