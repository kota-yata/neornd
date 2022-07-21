import neornd from '../src';

describe('neornd.number() : Min Check', () => {
  for (let i = 0; i < 10; i++) {
    it('Basic : 1-100-0', () => {
      expect(neornd.number(1, 100, 0)).toBeGreaterThanOrEqual(1);
    });
    it('1st arg is negative : -4321-5432-10', () => {
      expect(neornd.number(-4321, 5432, 10)).toBeGreaterThanOrEqual(-4321);
    });
    it('2nd arg is big num : 21-19191919-4', () => {
      expect(neornd.number(21, 19191919, 4)).toBeGreaterThanOrEqual(21);
    });
  }
});

describe('neornd.number() : Max Check', () => {
  for (let i = 0; i < 10; i++) {
    it('Basic : 1-100-0', () => {
      expect(neornd.number(1, 100, 0)).toBeLessThanOrEqual(100);
    });
    it('1st arg is negative : -4321-5432-10', () => {
      expect(neornd.number(-4321, 5432, 10)).toBeLessThanOrEqual(5432);
    });
    it('2nd arg is big num : 21-19191919-4', () => {
      expect(neornd.number(21, 19191919, 4)).toBeLessThanOrEqual(19191919);
    });
  }
});

describe('neornd.number() : Digits Check', () => {
  const CheckDigits = (min: number, max: number, round: number): number => {
    const target = neornd.number(min, max, round);
    const REGEX = /\.(.+?)$/;
    const numAfterDecimalPoint = target.toString().match(REGEX);
    if (numAfterDecimalPoint === null) return 0;
    return numAfterDecimalPoint[1].length;
  };
  for (let i = 0; i < 10; i++) {
    it('Basic : 1-100-4', () => {
      expect(CheckDigits(1, 100, 4)).toEqual(4);
    });
    it('Maximum : 234-2000-14', () => {
      expect(CheckDigits(234, 2000, 10)).toEqual(10);
    });
    it('Minimum : 34566-687544-0', () => {
      expect(CheckDigits(34566, 687544, 0)).toEqual(0);
    });
  }
});

describe('neornd.string() : Length Check', () => {
  for (let i = 0; i < 10; i++) {
    it('Great : 10000-none', () => {
      expect(neornd.string(10000).length).toEqual(10000);
    });
    it('Small : 1-lowercase', () => {
      expect(neornd.string(1, { lowercase: true }).length).toEqual(1);
    });
  }
});

describe('neornd.sort() : Length Check', () => {
  for (let i = 0; i < 10; i++) {
    it('Great : as^f34%6ne{gE3W:fv/w?>MWw4RC8m3q8FF^S90sdfg#@!qqqqqqqqqq', () => {
      expect(neornd.sort('as^f34%6ne{gE3W:fv/w?>MWw4RC8m3q8FF^S90sdfg#@!qqqqqqqqqq').length).toEqual(56);
    });
    it('Small : a', () => {
      expect(neornd.sort('as').length).toEqual(2);
    });
  }
});
