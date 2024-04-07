const express=require("express");
const router=express.Router();
const commentController=require("../controllers/commentController")
const authToken=require("../middleware/authToken")
// Create comment
router.post("/:id/comments", authToken, commentController.addComment);

// Get comments for blog
router.get("/:id/comments", authToken, commentController.getCommentsForBlog);
module.exports=router