const mongoose=require("mongoose")

const blogsSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
},{timestamps:true})

const Blog= mongoose.model("blog",blogsSchema)

module.exports= Blog;