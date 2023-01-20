const express = require('express');
const listProductsController = require('./controllers/listProductsController');
const salesController = require('./controllers/salesController');
const { verifyProductNameMidd, verifyProductIdMidd } = require('./middlewares/productNameMidd');
const {
  verifyExistsQuantity,
  verifyExistsProductId,
  verifyProductId,
  verifyQuantity,
  verifySales } = require('./middlewares/salesMidd');

const app = express();
app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', listProductsController.getProducts);

app.get('/products/:id', verifyProductIdMidd, listProductsController.getProductsById);

app.post('/products', verifyProductNameMidd, listProductsController.createNewProduct);

app.put('/products/:id',
  verifyProductIdMidd, verifyProductNameMidd, listProductsController.updateProduct);

app.get('/sales', salesController.getAllSales);
  
app.get('/sales/:id', verifySales, salesController.getSalesById);

app.post('/sales',
  verifyExistsProductId,
  verifyExistsQuantity,
  verifyQuantity,
  verifyProductId,
  salesController.newSale);

app.delete('/sales/:id', verifySales, listProductsController.deleteProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;