const { getAllSales } = require('../models/salesModel');
const { getProducts } = require('../models/listProductsModel');

const verifyProductIdMidd2 = async (req, res, next) => {
  const products = req.body;
  console.log('passando no vpm2');
  const allProducts = await getProducts();
  for (let i = 0; i < products.length - 1; i += 1) {
    if (!products[i].productId) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    if ((allProducts.some((eachProduct) => eachProduct
      .id === products[i].productId)) === false) {
      return res.status(404).json({ message: 'Product not found' });
    }
  }
  next();
};

const verifyQuantityMidd = async (req, res, next) => {
  const products = req.body;
  console.log('passando no vqm');
  for (let i = 0; i < products.length - 1; i += 1) {
    if (!products[i].quantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (products[i].quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  }
  next();
};

const verifySales = async (req, res, next) => {
  const { id } = req.params;
  const allSales = await getAllSales();
  const idExists = allSales.some((eachSale) => eachSale.saleId === id);
  if (idExists === false) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = {
  verifyProductIdMidd2,
  verifyQuantityMidd,
  verifySales,
};