const { getAllSales } = require('../models/salesModel');
const { getProducts } = require('../models/listProductsModel');

const verifyExistsProductId = async (req, res, next) => {
  const products = req.body;
  if (!products[0].productId) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  const workMap = products.filter((eachSell) => eachSell.productId);
  if (workMap.length < products.length) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};

const verifyExistsQuantity = async (req, res, next) => {
  const products = req.body;
  if (products[0].quantity === 0) {
    return next();
  }
  if ((!products[0].quantity)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const workFilter = products.filter((eachSell) => eachSell.quantity);
  if (workFilter.length < products.length) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};

const verifyProductId = async (req, res, next) => {
  const allProducts = await getProducts();
  const products = req.body;
  if (products.length === 1) {
    const { productId } = products[0];
    const exists = allProducts.some((eachProduct) => eachProduct.id === Number(productId));
    if (!exists) {
      return res.status(404).json({ message: 'Product not found' });
    }
  }
  const workMapProducts = allProducts.map((eachProduct) => eachProduct.id);
  const workMapRequest = products.map((eachRequest) => eachRequest.productId);
  const response = workMapRequest.map((eachRequest) => workMapProducts
    .some((eachProduct) => eachProduct === eachRequest));
  const response2 = response.some((eachResponse) => eachResponse === false);
  if (response2) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const verifyQuantity = async (req, res, next) => {
  const products = req.body;
  if (products[0].quantity < 1) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  const allQuants = products.map((eachProduct) => eachProduct.quantity);
  const response = allQuants.some((eachQuant) => eachQuant < 1);
  if (response) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const verifySales = async (req, res, next) => {
  const { id } = req.params;
  const allSales = await getAllSales();
  const idExists = allSales.some((eachSale) => eachSale.saleId === Number(id));
  if (!idExists) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = {
  verifyExistsQuantity,
  verifyExistsProductId,
  verifyProductId,
  verifyQuantity,
  verifySales,
};