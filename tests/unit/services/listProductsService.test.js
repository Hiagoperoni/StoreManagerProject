const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const listProductsModel = require('../../../src/models/listProductsModel');
const listProductsService = require('../../../src/services/listProductsService');
const productsMock = require('../../Mocks/listProducts');

chai.use(sinonChai);
const { expect } = chai;

describe('Testes na Camada Service de ListProducts', function () {
  describe('Lista todos os Products', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar todos os produtos', async function () {
      sinon.stub(listProductsModel, 'getProducts').resolves([productsMock.allProducts]);
      const result = await listProductsService.getProducts();
      expect(result).to.be.deep.equal([productsMock.allProducts]);
    });
  });

  describe('Testando a função getProductsById', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar o Produto com o Id correto', async function () {
      sinon.stub(listProductsModel, 'getProductsById').resolves([productsMock.getProdById]);
      const result = await listProductsService.getProductsById(2);
      expect(result).to.be.deep.equal(productsMock.getProdById);
    });
  });

  describe('Testando a função createProducts', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar um objeto com o Id e o nome do Produto', async function () {
      const newProduct = 'ProdutoX';
      sinon.stub(listProductsModel, 'createNewProduct').resolves(productsMock.createProd);
      const { id } = await listProductsService.createNewProduct(newProduct);
      expect(id).to.be.equal(productsMock.createProd);
    });
  });

  describe('Testando a função updateProducts', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve retornar um objeto com o Id e o Novo nome', async function () {
      const newProduct = 'Martelo do Batman';
      const newProductId = 4;
      sinon.stub(listProductsModel, 'updateProduct').resolves(productsMock.updatedProduct);
      const result = await listProductsService.updateProduct(newProductId, newProduct);
      expect(result).to.be.deep.equal(productsMock.updatedProduct);
    });
  });

  describe('Testando a função deleteProducts', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Deve deletar o produto do BD', async function () {
      const newProductId = 2;
      sinon.stub(listProductsModel, 'deleteProduct').resolves();
      const result = await listProductsService.deleteProduct(4);
      expect(result).to.be.undefined;
    });
  });
});