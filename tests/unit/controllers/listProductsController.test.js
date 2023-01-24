const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const listProdServ = require('../../../src/services/listProductsService');
const listProdCont = require('../../../src/controllers/listProductsController');
const listProdMock = require('../../Mocks/listProducts');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa a Camada de Controller do ListProducts', function () {
  describe('Testa a função getProducts', function () {
    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se retorna todos os Produtos', async function () {
      sinon.stub(listProdServ, 'getProducts').resolves(listProdMock.allProducts);
      const result = await listProdCont.getProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(listProdMock.allProducts);
    });
  });

  describe('Testa a função getProductsById', function () {
    const req = {};
    const res = {};
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se o Produto do Id correto', async function () {
      req.params = { id: 2 };
      sinon.stub(listProdServ, 'getProductsById').resolves(listProdMock.getProdById);
      const result = await listProdCont.getProductsById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(listProdMock.getProdById);
    });
  });

  describe('Testa a função createNewProduct', function () {
    const req = {};
    const res = {};
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se foi criado o novo produto', async function () {
      req.params = { id: 4 };
      req.body = { name: 'ProdutoX' };
      sinon.stub(listProdServ, 'createNewProduct').resolves(listProdMock.createProd);
      const result = await listProdCont.createNewProduct(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithExactly(listProdMock.createProd);
    });
  });

  describe('Testa a função createNewProduct', function () {
    const req = {};
    const res = {};
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se foi criado o novo produto', async function () {
      req.params = { id: 4 };
      req.body = { name: 'Martelo do Batman' };
      sinon.stub(listProdServ, 'updateProduct').resolves(listProdMock.updatedProduct);
      const result = await listProdCont.updateProduct(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(listProdMock.updatedProduct);
    });
  });

  describe('Testa a função deleteProduct', function () {
    const req = {};
    const res = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      res.end = sinon.stub().returns(res);
    });
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se retorna status 204', async function () {
      req.params = { id: 2 };
      sinon.stub(listProdServ, 'deleteProduct').resolves();
      const result = await listProdCont.deleteProduct(req, res);
      expect(res.status).to.have.been.calledWith(204);
      expect(res.end).to.have.been.calledOnce;
    });
  });
});