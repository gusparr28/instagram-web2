const { Router } = require('express');
const router = Router();

const { signUp, signIn } = require('../controllers/authController');

router.route('/signup')
    .get()
    .post(signUp)

router.route('/signin')
    .get()
    .post(signIn)


module.exports = router;