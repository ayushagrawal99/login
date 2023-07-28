const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signup');
const logIn = require('../controllers/login');
const { signupSchema, logInSchema } = require('../requests/signupSchema');
const validationMiddleware = require('../middlewares/validationMiddleware');

// sign-up route
router.post(
    '/sign-up',
    validationMiddleware(signupSchema),
    signUp.signUp
);

// Log-in route
router.post(
    '/log-in',
    validationMiddleware(logInSchema),
    logIn.logIn
);

module.exports = router;