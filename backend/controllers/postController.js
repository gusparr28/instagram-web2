const postController = {};

const Post = require('../models/Post');

postController.createPost = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(422).json({ message: "Please complete all fields" });
    } else {
        req.user.password = undefined;
        const newPost = new Post({
            title,
            description,
            author: req.user
        });
        const result = await newPost.save();
        res.json({ post: result });
    };
};

postController.getPosts = (req, res) => {
    Post.find()
        .populate("author", "_id name")
        .then(posts => res.json({ posts }))
        .catch(err => console.error(err));
};

postController.getUserPosts = (req, res) => {
    Post.find({ author: req.user._id })
        .populate("author", "_id name")
        .then(userPosts => {
            res.json({userPosts})
        })
        .catch(err => {
            console.log(err);
        });
};  

module.exports = postController;