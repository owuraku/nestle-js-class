
const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const otherRoutes = require('./other.routes');
const { authMiddleware } = require('../middlewares');

router.use('/', otherRoutes);
router.use('/users', authMiddleware, userRoutes);

module.exports = router;

/*
**

{
  "token": "eyJhbGciOiJIUzI1NiJ9.aGVsbG8.UYmO_lPAY5V0Wf4KZsfhiYs1SxqXPhxvjuYqellDV5A"
}

{
  "token": "eyJhbGciOiJIUzI1NiJ9.aGVsbG8.UYmO_lPAY5V0Wf4KZsfhiYs1SxqXPhxvjuYqellDV5A"
}
*/