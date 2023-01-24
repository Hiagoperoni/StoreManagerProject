const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const salesServ = require('../../../src/services/salesService');
const salesCont = require('../../../src/controllers/salesController');
const salesMock = require('../../Mocks/salesMock');

chai.use(sinonChai);
const { expect } = chai;

describe('Testa a Camada Controller da Sales', function () {
  describe('Testa a função getAllSales', function () {
    const req = {};
    const res = {};
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    it('Testa se retorna status 200 com todas as Sales', async function () {
      sinon.stub(salesServ, 'getAllSales').resolves(salesMock.allSales);
      const result = await salesCont.getAllSales(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(salesMock.allSales);
    });
  });

  describe('Testa a função newSale', function () {
    const req = {};
    const res = {};
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    it('Testa se retorna status 201 com nova Sale', async function () {
      req.body = salesMock.newSaleBody;
      sinon.stub(salesServ, 'newSale').resolves(salesMock.newSale);
      const result = await salesCont.newSale(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithExactly(salesMock.newSale);
    });
  });

  describe('Testa a função deleteSale', function () {
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
      sinon.stub(salesServ, 'deleteSale').resolves();
      const result = await salesCont.deleteSale(req, res);
      expect(res.status).to.have.been.calledWith(204);
      expect(res.end).to.have.been.calledOnce;
    });
  });

  describe('Testa a função getSaleById', function () {
    const req = {};
    const res = {};
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    it('Testa se retorna status 200 com Sale por Id', async function () {
      req.params = { id: 2 };
      sinon.stub(salesServ, 'getSalesById').resolves(salesMock.getSalesById);
      const result = await salesCont.getSalesById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(salesMock.getSalesById);
    });
  });
});