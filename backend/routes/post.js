const { Router } = require('express');
const router = Router();

const requireSignIn = require('../middleware/requireSignIn');

const { createPost, getPosts, getUserPosts, likePosts, unlikePosts, commentPosts, deletePosts } = require('../controllers/postController');

router.route('/create')
    .post(requireSignIn, createPost)

router.route('/posts')
    .get(requireSignIn, getPosts)

router.route('/userPosts')
    .get(requireSignIn, getUserPosts)

router.route('/like')
    .put(requireSignIn, likePosts)

router.route('/unlike')
    .put(requireSignIn, unlikePosts)

router.route('/comments')
    .put(requireSignIn, commentPosts)

router.route('/deletePost/:postId')
    .delete(requireSignIn, deletePosts)

module.exports = router;
