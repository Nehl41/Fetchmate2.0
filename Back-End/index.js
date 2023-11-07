// 3rd Party Libraries Import
const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()

// Router Imports
const authRouter=require('./routers/auth')
const blogRouter=require('./routers/blog')

// Utility Imports
const asyncWrapper=require('./utils/asyncWrapper')
const errorHandler = require('./middlewares/errorHandler')


const app=express()

app.use(cors())

app.use(bodyParser.urlencoded({extended:true,limit:'5mb'}))
app.use(bodyParser.json({limit:'5mb'}))

app.use('/auth',authRouter)

app.use('/blog',blogRouter)

app.use(asyncWrapper(async (req,res,next)=>{
    res.status(404).json({error:"Route Not Found"})
}))

app.use(errorHandler);

mongoose.connect(process.env.MONGODB_URI).then(()=>app.listen(3000,()=>{
    console.info("Server Online!");
})).catch(()=>{
    console.error("Database Connection Unsuccessful!")
})
