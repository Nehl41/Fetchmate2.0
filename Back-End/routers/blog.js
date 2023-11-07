const router=require('express').Router()
const {addBlog,getCloudinarySignature}=require('../controllers/blog')

// router.get('/',)

// router.get('/:id/blogs',)

router.post('/',addBlog);


module.exports=router