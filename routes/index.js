const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signup');
const { signupSchema } = require('../requests/signupSchema');
const validationMiddleware = require('../middlewares/validationMiddleware');

// sign-up route
router.post(
    '/sign-up',
    validationMiddleware(signupSchema),
    signUp.signUp
);

module.exports = router;