const Transaction = require('../models/Transaction');
const transactionService = require('../services/transactionService');

exports.recordTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.recordTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Transaction recording failed' });
  }
};

exports.getTransactionHistory = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transaction history' });
  }
};
