const router = require('express').Router();
const userRoutes = require('./user.routes');
const bookRoutes = require('./book.routes');
const authRoutes = require('./auth.routes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
