const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const salesMock = require('../../Mocks/salesMock');

chai.use(sinonChai);
const { expect } = chai;

describe('Teste da Camada Service de Sales:', function () {
  describe('Testa a função getAllSales', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se retorna todas as vendas', async function () {
      sinon.stub(salesModel, 'getAllSales').resolves([salesMock.allSales]);
      const result = await salesService.getAllSales();
      expect(result).to.be.deep.equal([salesMock.allSales]);
    });
  });

  describe('Testa a função newSale', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se cadastra uma nova venda corretamente', async function () {
      sinon.stub(salesModel, 'newSale').resolves(salesMock.newSale);
      const { id } = await salesService.newSale(salesMock.newSaleBody);
      expect(id).to.be.deep.equal(salesMock.newSale);
    });
  });

  describe('Testa a função deleteSale', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se deleta uma venda corretamente', async function () {
      sinon.stub(salesModel, 'deleteSale').resolves();
      const result = await salesService.deleteSale(4);
      expect(result).to.be.undefined;
    });
  });

  describe('Testa a função getSalesById', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se capta as infos da venda pelo Id corretamente', async function () {
      sinon.stub(salesModel, 'fetchSalesById').resolves([salesMock.getSalesById]);
      const [result] = await salesService.getSalesById(2);
      expect(result).to.have.all.keys('date', 'productId', 'quantity');
    });
  });
});