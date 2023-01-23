const { expect } = require('chai');
const sinon = require('sinon');
const listProductsModel = require('../../../src/models/listProductsModel');
const connection = require('../../../src/models/connection');
const mockListProd = require('../../Mocks/listProducts');

describe('Camada Model do ListProducts', function () {
  describe('Testando a função getProducts', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar todos os produtos', async function () {
      sinon.stub(connection, 'execute').resolves([mockListProd.allProducts]);
      const result = await listProductsModel.getProducts();
      expect(result).to.be.deep.equal(mockListProd.allProducts)
    });
  });
  describe('Testando a função getProductsById', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar o Produto com o Id correto', async function () {
      sinon.stub(connection, 'execute').resolves([mockListProd.getProdById]);
      const result = await listProductsModel.getProductsById(2);
      expect(result).to.be.deep.equal(mockListProd.getProdById);
    });
  });
  describe('Testando a função createProducts', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar um objeto com o Id e o nome do Produto', async function () {
      const newProduct = 'ProdutoX';
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
      const result = await listProductsModel.createNewProduct(newProduct);
      expect(result).to.be.equal(4);
    });
  });
    describe('Testando a função updateProducts', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar um objeto com o Id e o Novo nome', async function () {
      const newProduct = 'Martelo do Batman';
      const newProductId = 2;
      sinon.stub(connection, 'execute').resolves([{ changedRows: 1 }]);
      const result = await listProductsModel.updateProduct(newProductId, newProduct);
      expect(result).to.be.deep.equal({ changedRows: 1 });
    });
  });
    describe('Testando a função deleteProducts', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar um objeto com o Id e o Novo nome', async function () {
      const newProductId = 2;
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
      const result = await listProductsModel.deleteProduct(newProductId);
      expect(result).to.be.deep.equal({ affectedRows: 1 });
    });
  });
});