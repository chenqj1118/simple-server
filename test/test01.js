'use strict';
require('should');
const xx = require('../src/index');
describe('xx模块', () => {
  it('should get "xx模块"', () => {
    console.log(xx);
    xx.should.be.eql(xx);
  });
});
