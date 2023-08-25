const express=require('express')
const cors=require('cors')
const {test,registerUser,loginUser,getPrfile}=require('../controller/authController')

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

module.exports = router 