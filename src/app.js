const express = require('express');
// const productRouter = require('./Routes/productsRoutes');
const listProductsController = require('./controllers/listProductsController');
const salesController = require('./controllers/salesController');
const { verifyProductNameMidd, verifyProductIdMidd } = require('./middlewares/productNameMidd');
const { verifyProductIdMidd2,
  verifyQuantityMidd, verifySales } = require('./middlewares/salesMidd');

const app = express();
app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', listProductsController.getProducts);

app.get('/products/:id', verifyProductIdMidd, listProductsController.getProductsById);

app.post('/products', verifyProductNameMidd, listProductsController.createNewProduct);

app.post('/sales', verifyProductIdMidd2, verifyQuantityMidd, salesController.newSale);

app.get('/sales', salesController.getAllSales);

app.get('/sales/:id', verifySales, salesController.getSalesById);

app.put('/products/:id',
  verifyProductIdMidd, verifyProductNameMidd, listProductsController.updateProduct);

app.delete('/products/:id', verifyProductIdMidd, listProductsController.deleteProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;