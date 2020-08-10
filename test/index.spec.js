const chai = require('chai');
const neornd = require('../src/index');

describe('Min Check', () => {
  for (let i = 0; i < 1000; i++) {
    it('Basic : 1-100-0', () => {
      chai.assert.isAtLeast(neornd.get(1, 100, 0), 1);
    });
    it('1st arg is negative : -4321-5432-10', () => {
      chai.assert.isAtLeast(neornd.get(-4321, 5432, 10), -4321);
    });
    it('2nd arg is big num : 21-19191919-100', () => {
      chai.assert.isAtLeast(neornd.get(21, 19191919, 100), 21);
    });
    it('3rd arg is maximum : 1-2-307', () => {
      chai.assert.isAtLeast(neornd.get(1, 2, 307), 1);
    });
  }
});

describe('Max Check', () => {
  for (let i = 0; i < 1000; i++) {
    it('Basic : 1-100-0', () => {
      chai.assert.isAtMost(neornd.get(1, 100, 0), 100);
    });
    it('1st arg is negative : -4321-5432-10', () => {
      chai.assert.isAtMost(neornd.get(-4321, 5432, 10), 5432);
    });
    it('2nd arg is big num : 21-19191919-100', () => {
      chai.assert.isAtMost(neornd.get(21, 19191919, 100), 19191919);
    });
    it('3rd arg is maximum : 1-2-307', () => {
      chai.assert.isAtMost(neornd.get(1, 2, 307), 2);
    });
  }
});

describe('Error Detection', () => {
  for (let i = 0; i < 1000; i++) {
    it('Error! 1st arg is greater than 2nd arg : 1--2-308', () => {
      chai.assert.deepEqual(neornd.get(1, -2, 10), NaN);
    });
    it('Error! 1st arg is greater than 2nd arg : 1--2-308', () => {
      chai.assert.deepEqual(neornd.get(42800, 234, 10), NaN);
    });
    it('Error! 3rd arg is greater than maximum number : -1-2-308', () => {
      chai.assert.deepEqual(neornd.get(-1, 2, 308), NaN);
    });
    it('Error! 3rd arg is greater than maximum number : 1-2-1000', () => {
      chai.assert.deepEqual(neornd.get(-11, 2, -1000), NaN);
    });
    it('Error! 3rd arg is smaller than minimum number : 1-2--1', () => {
      chai.assert.deepEqual(neornd.get(-11, 2, -1), NaN);
    });
    it('Error! 3rd arg is smaller than minimum number : 1-2--1000', () => {
      chai.assert.deepEqual(neornd.get(-11, 2, -1000), NaN);
    });
  }
});
