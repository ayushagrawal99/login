const express = require('express');
const router = express.Router();
const login = require('../controllers/login');

// log-in route.
router.get("/login", login.logIn);

module.exports = router;