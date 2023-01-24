const connection = require('./connection');

const getAllSales = async () => {
  const query = `SELECT salesProducts.sale_id AS saleId,
  salesDate.date AS date,
  salesProducts.product_id AS productId,
  salesProducts.quantity AS quantity
  FROM StoreManager.sales_products AS salesProducts
  INNER JOIN StoreManager.sales AS salesDate
  ON salesProducts.sale_id = salesDate.id
  GROUP BY salesProducts.sale_id, salesProducts.product_id, salesProducts.quantity
  ORDER BY salesProducts.sale_id, salesProducts.product_id;`;
  const [doneSales] = await connection.execute(query);
  return doneSales;
};

const newSale = async (sale) => {
  const insertDate = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [dateSale] = await connection.execute(insertDate);
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
  const ok = await sale.map((eachSale) => connection
      .execute(query, [dateSale.insertId, eachSale.productId, eachSale.quantity]));
  await Promise.all(ok);
  return dateSale.insertId;
};

const deleteSale = async (id) => {
  const deleteSalesQuery = 'DELETE FROM StoreManager.sales WHERE id = ?';
  const [deletedSales] = await connection.execute(deleteSalesQuery, [id]);
  const deleteSalesProductsQuery = 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?';
  const [deletedSalesProducts] = await connection.execute(deleteSalesProductsQuery, [id]);
  console.log([deletedSales, deletedSalesProducts]);
  return [deletedSales, deletedSalesProducts];
};

const fetchSalesById = async (id) => {
  const queryById = 'SELECT * FROM StoreManager.sales WHERE id = ?';
  const [deletedById] = await connection.execute(queryById, [id]);
  return deletedById;
};

module.exports = {
  newSale,
  getAllSales,
  deleteSale,
  fetchSalesById,
};