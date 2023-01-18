const { connection } = require('./connection');

const getProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

const getProductsById = async (id) => {
  const queryById = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [productsById] = await connection.execute(queryById, [id]);
  return productsById;
};

const createNewProduct = async (name) => {
  const insertNewProduct = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [newProduct] = await connection.execute(insertNewProduct, [name]);
  return newProduct.insertId;
};

module.exports = {
  getProducts,
  getProductsById,
  createNewProduct,
};