const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  stock: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['buy', 'sell'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
