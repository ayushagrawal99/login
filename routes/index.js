const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signup');
const logIn = require('../controllers/login');
const userData = require('../controllers/userData');
const { signupSchema, logInSchema } = require('../requests/signupSchema');
const validationMiddleware = require('../middlewares/validationMiddleware');
const tokenVerification = require('../middlewares/tokenVerification');

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

// All users route
router.get(
    '/all-users',
    tokenVerification(),
    userData.userData
);

module.exports = router;