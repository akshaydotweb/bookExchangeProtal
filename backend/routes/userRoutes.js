const express = require('express');
const router = express.Router();

const { createUser, loginUser } = require('../controllers/userController');

// Route to register a new user
router.post('/register', createUser);

// Route for user login
router.post('/login', loginUser);

module.exports = router;