const express = require('express');
const listProductsController = require('./listProductsController');

const productRouter = express.Router();

productRouter.get('/products', listProductsController.getProducts);

productRouter.get('/products/:id', listProductsController.getProductsById);

module.exports = productRouter;