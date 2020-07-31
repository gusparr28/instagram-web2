const { Router } = require('express');
const router = Router();

const requireSignIn = require('../middleware/requireSignIn');

const { getUserProfile, followUser, unfollowUser } = require('../controllers/userController');

router.route('/user/:id')
    .get(requireSignIn, getUserProfile)

router.route('follow')
    .put(requireSignIn, followUser)

router.route('unfollow')
    .put(requireSignIn, unfollowUser)

module.exports = router;
