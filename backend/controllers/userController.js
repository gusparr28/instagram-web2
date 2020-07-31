const userController = {};

const User = require('../models/User');
const Post = require('../models/Post');

userController.getUserProfile = (req, res) => {
    console.log(req.params.id);
    User.findOne({ _id: req.params.id })
        .select("-password")
        .then(user => {
            console.log(user);
            Post.find({ author: req.params.id })
                .populate("author", "_id name")
                .exec((err, posts) => {
                    if (err) {
                        res.status(422).json({ error: err })
                    }
                    res.json({ user, posts })
                })
        }).catch(err => {
            return res.status(404).json({ error: "User not found" })
        });
};

userController.followUser = (req, res) => {
    User.findByIdAndUpdate(req.body.followId, {
        $push: { followers: req.user._id }
    }, {
        new: true
    }, (err, result) => {
        if (err) {
            res.status(422).json({ error: err })
        }
        User.findByIdAndUpdate(req.user._id, {
            $push: { following: req.body.followId }
        }, {
            new: true
        })
            .then(result => {
                res.json(result);
            }).catch(err => {
                return res.status(422).json({ error: err })
            });
    });
};

userController.unfollowUser = (req, res) => {
    User.findByIdAndUpdate(req.body.unfollowId, {
        $pull: { followers: req.user._id }
    }, {
        new: true
    }, (err, result) => {
        if (err) {
            res.status(422).json({ error: err })
        }
        User.findByIdAndUpdate(req.user._id, {
            $pull: { following: req.body.unfollowId }
        }, {
            new: true
        })
            .then(result => {
                res.json(result);
            }).catch(err => {
                return res.status(422).json({ error: err })
            });
    });
};

module.exports = userController;
