const mongoose=require("mongoose")

const commmnetSchema= new mongoose.Schema({
        comments:{
            type:String,
            required:true
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User",
        },
        blogId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Blog",
        }
},{timestamps:true})

const Comment=mongoose.model("Comment",commmnetSchema);

module.exports=Comment;