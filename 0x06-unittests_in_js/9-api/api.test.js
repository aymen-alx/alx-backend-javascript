const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const BASE_URL = 'http://localhost:7865';

  it('testing correct response', (done) => {
    request.get(`${BASE_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('testing correct response for valid :id', (done) => {
    request.get(`${BASE_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('testing 404 response for negative number values in :id', (done) => {
    request.get(`${BASE_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('testing returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${BASE_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
