const should = require('chai').should();
const expect = require('chai').expect;
const sismos = require('../index');

describe('#test', function () {
  it('Verifiaca que el módulo funcione de forma correcta', function () {
    expect(function () {
      sismos().then(function (sismos) {
      console.log(sismos);
      });
    }).to.not.throw(Error);
  });
});