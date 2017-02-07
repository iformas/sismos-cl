const should = require('chai').should();
const expect = require('chai').expect();
const sismos = require('../index');
const _ = require('lodash')

describe('#test', function () {
  it('Verifiaca que el módulo funcione de forma correcta', function () {
    expect(function () {
      sismos().then(function (sismos) {});
    }).to.not.throw(Error);
  });
});