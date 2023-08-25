const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')  

const dotenv=require('dotenv')
dotenv.config();

//import middleware
const router=require('./routes/authRoutes')

//configure data from .env file
const port=process.env.PORT;
const db=process.env.MONGODB_URL;

//create express app
const app=express()

//use middleware
// app.use(cors()) 
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

//user defined middleware
app.use('/',router)

mongoose.connect(db).then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port} and Connected to db`);
    })
})

