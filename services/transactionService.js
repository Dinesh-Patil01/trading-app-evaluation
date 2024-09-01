const Transaction = require('../models/Transaction');

exports.recordTransaction = async (transactionData) => {
  const transaction = new Transaction(transactionData);
  return await transaction.save();
};


