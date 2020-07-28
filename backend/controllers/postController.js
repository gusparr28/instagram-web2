const postController = {};

const Post = require('../models/Post');

postController.createPost = async (req, res) => {
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
        return res.status(422).json({ error: "Please complete all fields" });
    } else {
        req.user.password = undefined;
        const newPost = new Post({
            title,
            description,
            image,
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
            res.json({ userPosts })
        })
        .catch(err => {
            console.log(err);
        });
};

postController.likePosts = (req, res) => {
    Post.findOneAndUpdate(req.body.postId, {
        $push: { likes: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err });
        } else {
            res.json(result);
        }
    });
};

postController.unlikePosts = (req, res) => {
    Post.findOneAndUpdate(req.body.postId, {
        $pull: { likes: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err });
        } else {
            res.json(result);
        }
    });
};

module.exports = postController;
