const express = require('express');
// const productRouter = require('./controllers/productsRoutes');
const { getProducts,
  getProductsById, createNewProduct } = require('./controllers/listProductsController');
const productNameMidd = require('./middlewares/productNameMidd');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getProducts);

app.get('/products/:id', getProductsById);

app.post('/products', productNameMidd, createNewProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;