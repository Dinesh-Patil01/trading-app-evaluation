const Order = require('../models/Order');

exports.createOrder = async (orderData, userId) => {
  const order = new Order({ ...orderData, user: userId });
  return await order.save();
};


