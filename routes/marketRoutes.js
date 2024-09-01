const express = require('express');
const { getMarketData, getMarketSummary } = require('../controllers/marketController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/data', authMiddleware, getMarketData);
router.get('/summary', authMiddleware, getMarketSummary);

module.exports = router;
