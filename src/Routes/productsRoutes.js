const express = require('express');
const { getProducts, getProductsById,
  createNewProduct } = require('../controllers/listProductsController');
const productNameMidd = require('../middlewares/productNameMidd');

const productRouter = express.Router();

productRouter.get('/products', async () => getProducts);

productRouter.get('/products/:id', async () => getProductsById);

productRouter.post('/products', productNameMidd, async () => createNewProduct);

module.exports = productRouter;