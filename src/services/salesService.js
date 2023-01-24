const salesModel = require('../models/salesModel');

const newSale = async (sale) => {
  const doneSaleId = await salesModel.newSale(sale);
  const objectSale = {
    id: doneSaleId,
    itemsSold: sale,
  };
  return objectSale;
};

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return allSales;
};

const getSalesById = async (id) => {
  const allSales = await salesModel.getAllSales();
  const salesById = await allSales.filter((eachSale) => eachSale.saleId === Number(id));
  const saleById = await salesById.map((eachSale) => {
    const { date, productId, quantity } = eachSale;
    const newObject = {
      date,
      productId,
      quantity,
    };
    return newObject;
  });
  return saleById;
};

const deleteSale = async (id) => {
  await salesModel.deleteSale(id);
};

module.exports = {
  newSale,
  getAllSales,
  getSalesById,
  deleteSale,
};