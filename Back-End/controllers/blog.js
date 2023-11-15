const Blog = require("../models/Blog");
const Product = require("../models/Product");
const asyncWrapper = require("../utils/asyncWrapper");

// const cloudinary = require("cloudinary").v2;
// const multer=require('multer')
// const {CloudinaryStorage}=require('multer-storage-cloudinary')

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUDNAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET,
//     secure: true,
//   });
  
//   const storage=new CloudinaryStorage({
//     cloudinary,
//     params:{
//       folder:'myFolder'
//     }
//   })
  
//   const upload=multer({storage}).single('image')



exports.addBlog = asyncWrapper(async (req, res, next) => {
 
  const { content, title,author } = req.body;

  const path=req.file.path

  
const blog=await Blog.create({
  content,title,image:path,author
})

res.json(blog)

  
});

exports.getAllBlogs = asyncWrapper(async (req, res, next) => {
    const blogs=await Blog.find()
    res.json(blogs)
});

exports.getMyBlogs = asyncWrapper(async (req, res, next) => {});


exports.addProduct=asyncWrapper(async (req,res,next)=>{
  const {name,price,stock,category}=req.body
  const image=req.file.path

  const newProduct= await Product.create({name,price,stock,imageLink:image,category})

  res.json(newProduct)
})
