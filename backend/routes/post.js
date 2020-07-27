const { Router } = require('express');
const router = Router();

const requireSignIn = require('../middleware/requireSignIn');

const { createPost, getPosts, getUserPosts } = require('../controllers/postController');

router.route('/create')
    .post(requireSignIn, createPost)

router.route('/posts')
    .get(requireSignIn, getPosts)

router.route('/userPosts')
    .get(requireSignIn, getUserPosts)

module.exports = router;

