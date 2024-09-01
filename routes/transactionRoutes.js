const express = require('express');
const { recordTransaction, getTransactionHistory } = require('../controllers/transactionController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, recordTransaction);
router.get('/', authMiddleware, getTransactionHistory);

module.exports = router;
