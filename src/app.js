const express = require('express');
// const productRouter = require('./controllers/productsRoutes');
const listProductsController = require('./controllers/listProductsController');
const productNameMidd = require('./middlewares/productNameMidd');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', listProductsController.getProducts);

app.get('/products/:id', listProductsController.getProductsById);

app.post('/products', productNameMidd, listProductsController.createNewProduct);

// app.use(productRouter);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;