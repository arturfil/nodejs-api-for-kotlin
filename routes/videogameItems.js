const express = require('express');
const router = express.Router();

// GET/api/videogames
router.get('/', (req,res,next) => {
  res.send("videogames route")
})

module.exports = router;