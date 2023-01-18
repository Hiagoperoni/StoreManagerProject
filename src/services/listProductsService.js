const listProductsModel = require('../models/listProductsModel');

const getProducts = async () => {
  const products = await listProductsModel.getProducts();
  console.log(products);
  return products;
};

const getProductsById = async (id) => {
  const productsById = await listProductsModel.getProductById(id);
  return productsById;
};

module.exports = {
  getProducts,
  getProductsById,
};