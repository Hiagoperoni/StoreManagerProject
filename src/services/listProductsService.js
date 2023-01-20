const listProductsModel = require('../models/listProductsModel');

const getProducts = async () => {
  const products = await listProductsModel.getProducts();
  return products;
};

const getProductsById = async (id) => {
  const [productsById] = await listProductsModel.getProductsById(id);
  return productsById;
};

const createNewProduct = async (name) => {
  const newProductId = await listProductsModel.createNewProduct(name);
  const objectProduct = {
    id: newProductId,
    name,
  };
  return objectProduct;
};

const updateProduct = async (id, name) => {
  await listProductsModel.updateProduct(id, name);
  const objectProduct = {
    id,
    name,
  };
  return objectProduct;
};

const deleteProduct = async (id) => {
  await listProductsModel.deleteProduct(id);
};

module.exports = {
  getProducts,
  getProductsById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};