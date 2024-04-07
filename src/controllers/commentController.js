const commentService=require("../services/commentService")

const addComment = async (req, res) => {
    try {
        const { comments} = req.body;
        const { id: blogId } = req.params;
        const userId = req.user.id;

        const comment = await commentService.addComment({ comments, userId, blogId });
        res.status(201).json({ comment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCommentsForBlog = async (req, res) => {
    try {
        const { id: blogId } = req.params;

        const comments = await commentService.getCommentsForBlog(blogId);
        res.status(200).json({ comments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports={addComment,getCommentsForBlog}