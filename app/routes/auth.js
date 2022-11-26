
const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth');

// TEST
router.get('/', function (req, res) {
    res.send('This is the auth route!');
})

// REGISTER
router.post('/register', auth.register);

// LOGIN
router.post('/login', auth.login);

module.exports = router;