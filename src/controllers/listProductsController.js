const listProductsService = require('../services/listProductsService');

const getProducts = async (req, res) => {
  const products = await listProductsService.getProducts();
  return res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const productsById = await listProductsService.getProductById(id);
  if (productsById.length < 1) {
    return res.status(401).json({ message: 'Product not found' });
  }
  return res.status(200).json(productsById);
};

module.exports = {
  getProducts,
  getProductsById,
};