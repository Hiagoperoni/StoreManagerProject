const listProductsService = require('../services/listProductsService');

const getProducts = async (req, res) => {
  const products = await listProductsService.getProducts();
  return res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const idNumber = Number(id);
  const productsById = await listProductsService.getProductsById(idNumber);
  return res.status(200).json(productsById);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  const newProduct = await listProductsService.createNewProduct(name);
  return res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedProduct = await listProductsService.updateProduct(id, name);
  return res.status(200).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await listProductsService.deleteProduct(id);
  return res.status(204).end();
};

module.exports = {
  getProducts,
  getProductsById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};