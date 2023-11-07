const cloudinary = require("cloudinary").v2;

const Blog = require("../models/Blog");
const asyncWrapper = require("../utils/asyncWrapper");

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

// exports.getCloudinarySignature = asyncWrapper(async (req, res, next) => {
//   const timeStamp = Math.round(new Date().getTime() / 1000);
//   const signature = cloudinary.utils.api_sign_request(
//     {
//       timeStamp,
//     },
//     cloudinaryConfig.api_secret
//   );
//   res.json({ timeStamp, signature });
// });

exports.addBlog = asyncWrapper(async (req, res, next) => {
  const { content, title, image } = req.body;

  console.log("Path Add Blog Visited!");

  if (image) {
    const uploadResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "mj5njgt8",
    });
    if (uploadResponse) {
      const blog = await Blog({ title, content, image:uploadResponse.url });
      res.status(200).json(blog);
    }
  }
});

exports.getAllBlogs = asyncWrapper(async (req, res, next) => {
    const blogs=await Blog.find()
    res.json(blogs)
});

exports.getMyBlogs = asyncWrapper(async (req, res, next) => {});
