const salesService = require('../services/salesService');

const newSale = async (req, res) => {
  const sale = req.body;
  console.log(req.body);
  const doneSale = await salesService.newSale(sale);
  return res.status(201).json(doneSale);
};

module.exports = {
  newSale,
};