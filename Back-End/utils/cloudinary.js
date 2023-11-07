require('dotenv').config()

const cloudinary=require('cloudinary').v2


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDNAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})

module.exports=cloudinary