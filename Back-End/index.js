// 3rd Party Libraries Import
const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()

// Router Imports
const authRouter=require('./routers/auth')
const blogRouter=require('./routers/blog')
const petRouter=require('./routers/pet')
const serviceRouter=require('./routers/service')

// Utility Imports
const protectRoute=require('./middlewares/routeProtect')
const asyncWrapper=require('./utils/asyncWrapper')
const errorHandler = require('./middlewares/errorHandler')

// express app initialisation
const app=express()

// Middle wares
app.use(cors())
app.use(bodyParser.urlencoded({extended:true,limit:'5mb'}))
app.use(bodyParser.json({limit:'5mb'}))

// API routes
app.use('/auth',authRouter)

app.use('/pet',protectRoute,petRouter)

app.use('/service',protectRoute,serviceRouter)

app.use('/blog',blogRouter)

// Route Not Found Middleware
app.use(asyncWrapper(async (req,res,next)=>{
    res.status(404).json({error:"Route Not Found"})
}))

// Express-Error-Handler Midlleware
app.use(errorHandler);

// connecting to DB than Starting the Server
mongoose.connect(process.env.MONGODB_URI).then(()=>app.listen(3000,()=>{
    console.info("Server Online!");
})).catch((err)=>{
    console.error(err)
})
