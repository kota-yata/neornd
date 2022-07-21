import crypto from 'crypto';

/**
 * Get random number with random digits
 * @param {number} quantity - Number of byte to make random decimal
 * @return {number} Return random number
 */
const GetRandomDecimal = (quantity: number): number => {
  const x_byte_buffer: Buffer = crypto.randomBytes(quantity);
  const hex: string = x_byte_buffer.toString('hex');
  return parseInt(hex, 16);
};

/**
 * Check if the number of digits after decimal point of 1st arg is same as the number of 2nd arg.
 * @param {number} rndnum - Random number you generated
 * @param {number} digits - Number of digits you want
 * @return {boolean} True if the number of digits after decimal point is the same as that of 2nd arg
 */
const isCorrectDigits = (rndnum: number, digits: number): boolean => {
  const REGEX_TO_GET_DIGIT = /\.(.+?)$/;
  const numAfterDecimalPoint: RegExpMatchArray | null = rndnum.toString().match(REGEX_TO_GET_DIGIT);
  let lengthOfDigits = 0;
  if (numAfterDecimalPoint !== null) lengthOfDigits = numAfterDecimalPoint[1].length;
  if (lengthOfDigits === digits) return true;
  return false;
};

/**
 * Get random number with specified digits after decimal point.
 * @param {number} min - Min arg inherited from neornd.number()
 * @param {number} max - Max arg inherited from neornd.number()
 * @param {number} round - Round arg inherited from neornd()
 * @return {number} Return random number with specified digits certainly.
 */
export const getRandomNumber = (min: number, max: number, round: number): number => {
  const MAX_VALUE_OF_4BYTES = 4294967295; // Math.pow(2, 32) - 1 (32bits)
  const number_for_rounding: number = Math.pow(10, round);
  const num_in_range: number =
    Math.round(((GetRandomDecimal(4) / MAX_VALUE_OF_4BYTES) * (max - min) + min) * number_for_rounding) /
    number_for_rounding;
  if (isCorrectDigits(num_in_range, round)) return num_in_range;
  return getRandomNumber(min, max, round);
};
