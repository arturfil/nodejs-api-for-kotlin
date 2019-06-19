const express = require('express');
const router = express.Router();

const User = require('../models/User');

// GET/api/Login
router.get('/login', (req, res, next) => {
  res.send('login endpoint');
});

router.get('/register', (req, res, next) => {
  res.send("register end point")
})

module.exports = router;