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

const createNewProduct = async (name) => {
  const newProductId = await listProductsModel.createNewProduct(name);
  return { newProductId, name };
};

module.exports = {
  getProducts,
  getProductsById,
  createNewProduct,
};