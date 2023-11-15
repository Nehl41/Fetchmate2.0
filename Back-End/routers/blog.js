const router=require('express').Router()
const {addBlog, addProduct}=require('../controllers/blog')

const cloudinary = require("cloudinary").v2;
const multer=require('multer')
const {CloudinaryStorage}=require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
  });
  
  const storage=new CloudinaryStorage({
    cloudinary,
    params:{
      folder:'products'
    }
  })
  
  const upload=multer({storage})

router.post('/',upload.single('image'),addBlog);

router.post('/add-product',upload.single('image'),addProduct)


module.exports=router