const Comment=require("../models/comments");

const addComment = async (commentData) => {
    try {
        const comment = await Comment.create(commentData);
        return comment;
    } catch (error) {
        throw error;
    }
}

const getCommentsForBlog = async (blogId) => {
    try {
        const comments = await Comment.find({ blogId });
        return comments;
    } catch (error) {
        throw error;
    }
}
module.exports={addComment ,getCommentsForBlog}