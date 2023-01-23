const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const salesMock = require('../../Mocks/salesMock');
const salesModel = require('../../../src/models/salesModel');

describe('Camada Model da Sales', function () {
  describe('Testando a funçao getAllSales', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se retorna todas as vendas efetuadas', async function () {
      sinon.stub(connection, 'execute').resolves([salesMock.allSales]);
      const result = await salesModel.getAllSales();
      expect(result).to.be.deep.equal(salesMock.allSales);
    });
  });

  describe('Testando a função newSale', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se cadastra uma nova venda corretamente', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 3 }]);
      const result = await salesModel.newSale(salesMock.newSaleBody);
      expect(result).to.be.deep.equal(3);
    });
  });

  describe('Testando a função deleteSale', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se cadastra uma nova venda corretamente', async function () {
      sinon.stub(connection, 'execute').resolves([[{ affectedRows: 1 }]]);
      const [result] = await salesModel.deleteSale(2);
      expect(result).to.be.deep.equal([{ affectedRows: 1 }]);
    });
  });

  describe('Testando a função fetchSalesById', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa se retorna uma venda por Id corretamente', async function () {
      sinon.stub(connection, 'execute').resolves([salesMock.getSalesById]);
      const result = await salesModel.fetchSalesById(3);
      expect(result).to.be.deep.equal(salesMock.getSalesById);
    });
  });
});
