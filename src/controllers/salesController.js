const salesService = require('../services/salesService');

const newSale = async (req, res) => {
  const sale = req.body;
  console.log('passou aqui');
  const doneSale = await salesService.newSale(sale);
  return res.status(201).json(doneSale);
};

module.exports = {
  newSale,
};