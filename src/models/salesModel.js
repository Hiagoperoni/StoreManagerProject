const { connection } = require('./connection');

const getAllSales = async () => {
  const query = `SELECT salesProducts.sale_id AS saleid,
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
  sale.map(async (eachSale) => {
    const [returnedSale] = await connection
      .execute(query, [dateSale.insertId, eachSale.productId, eachSale.quantity]);
    return returnedSale;
  });
  return dateSale.insertId;
};

module.exports = {
  newSale,
  getAllSales,
};