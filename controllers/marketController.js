const marketService = require('../services/marketService');

exports.getMarketData = async (req, res) => {
  try {
    const data = await marketService.fetchMarketData(req.query.stock);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve market data' });
  }
};

exports.getMarketSummary = async (req, res) => {
  try {
    const summary = await marketService.generateMarketSummary();
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve market summary' });
  }
};
