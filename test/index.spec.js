const chai = require('chai');
const neornd = require('../src/index');

describe('neornd.number() : Min Check', () => {
  for (let i = 0; i < 100; i++) {
    it('Basic : 1-100-0', () => {
      chai.assert.isAtLeast(neornd.number(1, 100, 0), 1);
    });
    it('1st arg is negative : -4321-5432-10', () => {
      chai.assert.isAtLeast(neornd.number(-4321, 5432, 10), -4321);
    });
    it('2nd arg is big num : 21-19191919-4', () => {
      chai.assert.isAtLeast(neornd.number(21, 19191919, 4), 21);
    });
    it('3rd arg is maximum : 1-2-14', () => {
      chai.assert.isAtLeast(neornd.number(1, 2, 14), 1);
    });
  }
});

describe('neornd.number() : Max Check', () => {
  for (let i = 0; i < 100; i++) {
    it('Basic : 1-100-0', () => {
      chai.assert.isAtMost(neornd.number(1, 100, 0), 100);
    });
    it('1st arg is negative : -4321-5432-10', () => {
      chai.assert.isAtMost(neornd.number(-4321, 5432, 10), 5432);
    });
    it('2nd arg is big num : 21-19191919-4', () => {
      chai.assert.isAtMost(neornd.number(21, 19191919, 4), 19191919);
    });
    it('3rd arg is maximum : 1-2-14', () => {
      chai.assert.isAtMost(neornd.number(1, 2, 14), 2);
    });
  }
});

describe('neornd.number() : Digits Check', () => {
  const CheckDigits = (min, max, round) => {
    const target = neornd.number(min, max, round);
    const REGEX = /\.(.+?)$/;
    const numAfterDecimalPoint = target.toString().match(REGEX);
    if (numAfterDecimalPoint === null) return 0;
    return numAfterDecimalPoint[1].length;
  };
  for (let i = 0; i < 100; i++) {
    it('Basic : 1-100-4', () => {
      chai.assert.deepEqual(CheckDigits(1, 100, 4), 4);
    });
    it('Maximum : 234-2000-14', () => {
      chai.assert.deepEqual(CheckDigits(234, 2000, 14), 14);
    });
    it('Minimum : 34566-687544-0', () => {
      chai.assert.deepEqual(CheckDigits(34566, 687544, 0), 0);
    });
  }
});

describe('neornd.number() : Error Detection', () => {
  for (let i = 0; i < 100; i++) {
    it('Error! 1st arg is greater than 2nd arg : 1--2-10', () => {
      chai.assert.deepEqual(neornd.number(1, -2, 10), undefined);
    });
    it('Error! 1st arg is greater than 2nd arg : 42800-234-10', () => {
      chai.assert.deepEqual(neornd.number(42800, 234, 10), undefined);
    });
    it('Error! 3rd arg is greater than maximum number : -1-2-15', () => {
      chai.assert.deepEqual(neornd.number(-1, 2, 15), undefined);
    });
    it('Error! 3rd arg is greater than maximum number : 1-2--1000', () => {
      chai.assert.deepEqual(neornd.number(-11, 2, -1000), undefined);
    });
    it('Error! 3rd arg is smaller than minimum number : -11-2--1', () => {
      chai.assert.deepEqual(neornd.number(-11, 2, -1), undefined);
    });
    it('Error! 3rd arg is smaller than minimum number : -11-2--1000', () => {
      chai.assert.deepEqual(neornd.number(-11, 2, -1000), undefined);
    });
  }
});

describe('neornd.string() : Length Check', () => {
  for (let i = 0; i < 100; i++) {
    it('Great : 10000-none', () => {
      chai.assert.deepEqual(neornd.string(10000).length, 10000);
    });
    it('Small : 1-lowercase', () => {
      chai.assert.deepEqual(neornd.string(1, { lowercase: true }).length, 1);
    });
  }
});

describe('neornd.string() : Error Detection', () => {
  for (let i = 0; i < 100; i++) {
    it('Error! 1st argument is negative', () => {
      chai.assert.deepEqual(neornd.string(-10), undefined);
    });
    it('Error! Options key is invalid', () => {
      chai.assert.deepEqual(neornd.string(1, { Unko: true }), undefined);
    });
    it('Error! Options value is not boolean', () => {
      chai.assert.deepEqual(neornd.string(1, { uppercase: 'Unko' }), undefined);
    });
  }
});
