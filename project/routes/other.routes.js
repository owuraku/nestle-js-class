const express = require('express');
const router = express.Router();

const { handleApplyForWar, handleViewGoodies, handleGetToken, handleWelcome } = require('../controllers/user-controller');
const { sexMiddleware, ageMiddleware, authMiddleware } = require('../middlewares');

router.get('/applyforwar', [sexMiddleware, handleApplyForWar]);
router.get('/viewgoodies', [ageMiddleware ,handleViewGoodies]);
// router.get('/get-token', handleGetToken );
router.get('/welcome',authMiddleware , handleWelcome );
router.post('/login', handleGetToken );




module.exports = router;
