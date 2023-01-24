const allSales = [
  {
    "saleId": 3,
    "date": "2023-01-23T19:42:33.000Z",
    "productId": 1,
    "quantity": 1
  },
  {
    "saleId": 3,
    "date": "2023-01-23T19:42:33.000Z",
    "productId": 1,
    "quantity": 5
  }
]

const newSaleBody = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const newSale = {
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
};

const getSalesById = [
  {
    "date": "2023-01-24T01:02:44.000Z",
    "productId": 1,
    "quantity": 1
  },
  {
    "date": "2023-01-24T01:02:44.000Z",
    "productId": 3,
    "quantity": 5
  }
]

module.exports = {
  allSales,
  newSaleBody,
  newSale,
  getSalesById,
};