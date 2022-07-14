// import chai from 'chai';
import neornd from '../src/index.js';

// describe('neornd.number() : Min Check', () => {
//   for (let i = 0; i < 10; i++) {
//     it('Basic : 1-100-0', () => {
//       chai.assert.isAtLeast(neornd.number(1, 100, 0), 1);
//     });
//     it('1st arg is negative : -4321-5432-10', () => {
//       chai.assert.isAtLeast(neornd.number(-4321, 5432, 10), -4321);
//     });
//     it('2nd arg is big num : 21-19191919-4', () => {
//       chai.assert.isAtLeast(neornd.number(21, 19191919, 4), 21);
//     });
//     it('3rd arg is maximum : 1-2-14', () => {
//       chai.assert.isAtLeast(neornd.number(1, 2, 10), 1);
//     });
//   }
// });

// describe('neornd.number() : Max Check', () => {
//   for (let i = 0; i < 10; i++) {
//     it('Basic : 1-100-0', () => {
//       chai.assert.isAtMost(neornd.number(1, 100, 0), 100);
//     });
//     it('1st arg is negative : -4321-5432-10', () => {
//       chai.assert.isAtMost(neornd.number(-4321, 5432, 10), 5432);
//     });
//     it('2nd arg is big num : 21-19191919-4', () => {
//       chai.assert.isAtMost(neornd.number(21, 19191919, 4), 19191919);
//     });
//     it('3rd arg is maximum : 1-2-14', () => {
//       chai.assert.isAtMost(neornd.number(1, 2, 10), 2);
//     });
//   }
// });

// describe('neornd.number() : Digits Check', () => {
//   const CheckDigits = (min, max, round) => {
//     const target = neornd.number(min, max, round);
//     const REGEX = /\.(.+?)$/;
//     const numAfterDecimalPoint = target.toString().match(REGEX);
//     if (numAfterDecimalPoint === null) return 0;
//     return numAfterDecimalPoint[1].length;
//   };
//   for (let i = 0; i < 10; i++) {
//     it('Basic : 1-100-4', () => {
//       chai.assert.deepEqual(CheckDigits(1, 100, 4), 4);
//     });
//     it('Maximum : 234-2000-14', () => {
//       chai.assert.deepEqual(CheckDigits(234, 2000, 10), 10);
//     });
//     it('Minimum : 34566-687544-0', () => {
//       chai.assert.deepEqual(CheckDigits(34566, 687544, 0), 0);
//     });
//   }
// });

// describe('neornd.number() : Error Detection', () => {
//   for (let i = 0; i < 10; i++) {
//     it('Error! 1st arg is greater than 2nd arg : 1--2-10', () => {
//       chai.assert.deepEqual(neornd.number(1, -2, 10), undefined);
//     });
//     it('Error! 1st arg is greater than 2nd arg : 42800-234-10', () => {
//       chai.assert.deepEqual(neornd.number(42800, 234, 10), undefined);
//     });
//     it('Error! 3rd arg is greater than maximum number : -1-2-11', () => {
//       chai.assert.deepEqual(neornd.number(-1, 2, 11), undefined);
//     });
//     it('Error! 3rd arg is smaller than minimum number : -11-2--1', () => {
//       chai.assert.deepEqual(neornd.number(-11, 2, -1), undefined);
//     });
//     it('Error! 3rd arg is smaller than minimum number : -11-2--10', () => {
//       chai.assert.deepEqual(neornd.number(-11, 2, -10), undefined);
//     });
//   }
// });

// describe('neornd.string() : Length Check', () => {
//   for (let i = 0; i < 10; i++) {
//     it('Great : 10000-none', () => {
//       chai.assert.deepEqual(neornd.string(10000).length, 10000);
//     });
//     it('Small : 1-lowercase', () => {
//       chai.assert.deepEqual(neornd.string(1, { lowercase: true }).length, 1);
//     });
//   }
// });

// describe('neornd.string() : Error Detection', () => {
//   for (let i = 0; i < 10; i++) {
//     it('Error! 1st argument is negative', () => {
//       chai.assert.deepEqual(neornd.string(-10), undefined);
//     });
//     it('Error! Options key is invalid', () => {
//       chai.assert.deepEqual(neornd.string(1, { Unko: true }), undefined);
//     });
//     it('Error! Options value is not boolean', () => {
//       chai.assert.deepEqual(neornd.string(1, { uppercase: 'Unko' }), undefined);
//     });
//   }
// });

// describe('neornd.sort() : Length Check', () => {
//   for (let i = 0; i < 10; i++) {
//     it('Great : as^f34%6ne{gE3W:fv/w?>MWw4RC8m3q8FF^S90sdfg#@!qqqqqqqqqq', () => {
//       chai.assert.deepEqual(neornd.sort('as^f34%6ne{gE3W:fv/w?>MWw4RC8m3q8FF^S90sdfg#@!qqqqqqqqqq').length, 56);
//     });
//     it('Small : a', () => {
//       chai.assert.deepEqual(neornd.sort('as').length, 2);
//     });
//   }
// });

// describe('neornd.sort() : Error Detection', () => {
//   it('Error! Argument must not be float', () => {
//     chai.assert.deepEqual(neornd.sort(102304.444), undefined);
//   });
//   it('Error! Argument must not be object', () => {
//     chai.assert.deepEqual(neornd.sort({ Unko: true, Shonben: false }), undefined);
//   });
// });

for (let i = 0; i < 10; i++) {
  it('Small: 45bytes to 60bytes', () => {
    const valToCheck = neornd.bigint(128, 256);
    const isOver =
      valToCheck >
      179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216n;
    const isUnder =
      valToCheck >
      179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216n;
    if (!isOver) {
      console.error('Test Failed: the result is too small!!');
      return;
    } else if (!isUnder) {
      console.error('Test Failed: the result is too big!!');
      return;
    }
    return;
  });
}
