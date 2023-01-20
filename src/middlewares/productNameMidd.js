const { getProducts } = require('../models/listProductsModel');

const verifyProductIdMidd = async (req, res, next) => {
  const { id } = req.params;
  const idNumber = Number(id);
  const allProducts = await getProducts();
  // const productsIds = await allProducts.map((eachProduct) => eachProduct.id);
  const productExists = allProducts.some((eachProduct) => eachProduct.id === idNumber);
  // if (!productsIds.includes(idNumber)) {
  //   return res.status(404).json({ message: 'Product not found' });
  // }
    if (!productExists) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const verifyProductNameMidd = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  verifyProductNameMidd,
  verifyProductIdMidd,
};