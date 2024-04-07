const blogService=require("../services/blogService")

const addBlog=async(req,res)=>{
    try {
        const {title,description}=req.body;
        const userId=req.user.id;
        const blog=await blogService.createBlog({title,description,userId});
        res.status(201).json({blog})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const getAllBlogs= async (req,res)=>{
    try {
        const userId=req.user.id;
        const blog=await blogService.getAllBlogs(userId)
        res.status(200).json(blog);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateBlog=async (req,res)=>{
    try {
        const {id}=req.params;
        const userId=req.user.id;

        const updateData= req.body
        const blog =await blogService.updateBlog(id,userId,updateData);
        if(!blog){
            return res.status(404).json({message:"blog not found."});
        }

        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteBlog=async(req,res)=>{
    try {
        const {id}=req.params;
        const userId=req.user.id;
        const success= await blogService.deleteBlogPost(id,userId)

        if(!success){
          return res.status(404).json({message:"blog not found"})
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={addBlog, getAllBlogs,updateBlog, deleteBlog}