const express=require("express");


const router=express.Router();
const authToken=require("../middleware/authToken")
const blogController=require("../controllers/blogController")

//create blog
router.post("/",authToken,blogController.addBlog)

//get all blogs
router.get("/",authToken,blogController.getAllBlogs)

//blog update
router.put("/:id",authToken,blogController.updateBlog)

//delete blog
router.delete("/:id",authToken,blogController.deleteBlog)

module.exports=router;