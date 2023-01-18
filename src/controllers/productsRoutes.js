const express = require('express');
const { getProducts, getProductsById, createNewProduct } = require('./listProductsController');
const productNameMidd = require('../middlewares/productNameMidd');

const productRouter = express.Router();

productRouter.get('/products', getProducts);

productRouter.get('/products/:id', getProductsById);

productRouter.post('/products', productNameMidd, createNewProduct);

module.exports = productRouter;