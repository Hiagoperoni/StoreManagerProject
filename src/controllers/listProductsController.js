const listProductsService = require('../services/listProductsService');

const getProducts = async (req, res) => {
  const products = await listProductsService.getProducts();
  return res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const productsById = await listProductsService.getProductById(id);
  return res.status(200).json(productsById);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  const newProduct = await listProductsService.createNewProduct(name);
  return res.status(201).json(newProduct);
};

module.exports = {
  getProducts,
  getProductsById,
  createNewProduct,
};