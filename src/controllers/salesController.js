const salesService = require('../services/salesService');

const newSale = async (req, res) => {
  const sale = req.body;
  const doneSale = await salesService.newSale(sale);
  return res.status(201).json(doneSale);
};

const getAllSales = async (req, res) => {
  const sales = await salesService.getAllSales();
  return res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const saleById = await salesService.getSalesById(Number(id));
  console.log(saleById);
  return res.status(200).json(saleById);
};

module.exports = {
  newSale,
  getAllSales,
  getSalesById,
};