
const Blog=require("../models/blog");


const createBlog=async(blogData)=>{
    try {
        const blogs= await Blog.create(blogData);

        return blogs;
    } catch (error) {
        throw error
    }
}

const getAllBlogs=async (userId)=>{
    try {
        const blogs= await Blog.find({userId});
        return blogs;
    } catch (error) {
        throw error
    }
}

const updateBlog=async (blogId,userId,updateData)=>{
    try {
        const blog =await Blog.findOneAndUpdate(
            {_id:blogId  ,userId:userId},
            {$set : updateData},
            {new:true}
        );
        return blog;
    } catch (error) {
        throw error
    }
}

const deleteBlogPost=async(blogId ,userId)=>{
    try {
        const blog = await Blog.findOneAndDelete({_id: blogId , userId:userId})
        return blog;
        
    } catch (error) {
        throw error
    }
}
module.exports={createBlog ,getAllBlogs ,updateBlog ,deleteBlogPost}