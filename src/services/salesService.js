const salesModel = require('../models/salesModel');

const newSale = async (sale) => {
  const doneSaleId = await salesModel.newSale(sale);
  const objectSale = {
    id: doneSaleId,
    itemsSold: sale,
  };
  return objectSale;
};

module.exports = {
  newSale,
};