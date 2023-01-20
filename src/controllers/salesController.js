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
  const saleById = await salesService.getSalesById(Number(id));
  return res.status(200).json(saleById);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  await salesService.deleteSale(id);
  res.status(204).end();
};

module.exports = {
  newSale,
  getAllSales,
  getSalesById,
  deleteSale,
};