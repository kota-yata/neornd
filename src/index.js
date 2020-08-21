'use strict';

const format = require('biguint-format');
const crypto = require('crypto');

const COLOR_RESET = '\u001b[0m';
const COLOR_MAGENTA = '\u001b[35m';
const COLOR_RED = '\u001b[31m';

/**
 * Get random number with random digits
 * @param {number} quantity - Number of byte to make random decimal
 * @return {number} Return random number
 */
const GetRandomDecimal = (quantity) => {
  const x_byte_buffer = crypto.randomBytes(quantity);
  return format(x_byte_buffer, 'dec');
};

/**
 * Get random number with specified digits after decimal point.
 * @param {number} min - Min arg inherited from neornd()
 * @param {number} max - Max arg inherited from neornd()
 * @param {number} round - Round arg inherited from neornd()
 * @return {number} Return random number with specified digits certainly.
 */
const GetRandomWithSpecifiedDigits = (min, max, round) => {
  const MAX_VALUE_OF_4BYTES = 4294967295; // Math.pow(2, 32) - 1 (32bits)
  const number_for_rounding = Math.pow(10, round);
  const num_in_range =
    Math.round(((GetRandomDecimal(4) / MAX_VALUE_OF_4BYTES) * (max - min) + min) * number_for_rounding) /
    number_for_rounding;
  if (isCorrectDigits(num_in_range, round)) return num_in_range;
  return GetRandomWithSpecifiedDigits(min, max, round);
};

/**
 * Check if the number of digits after decimal point of 1st arg is same as the number of 2nd arg.
 * @param {number} rndnum - Random number you generated
 * @param {number} digits - Number of digits you want
 * @return {boolean} If the number of digits after decimal point  of 1st arg is the same as the number of 2nd arg, return true.
 */
const isCorrectDigits = (rndnum, digits) => {
  const REGEX_TO_GET_DIGIT = /\.(.+?)$/;
  const numAfterDecimalPoint = rndnum.toString().match(REGEX_TO_GET_DIGIT);
  let lengthOfDigits = 0;
  if (numAfterDecimalPoint !== null) lengthOfDigits = numAfterDecimalPoint[1].length;
  if (lengthOfDigits === digits) return true;
  return false;
};

/**
 * Notify argument error
 * @param {string} str - Words you want to show in red
 * @return {NaN} Return NaN
 */
const ErrorDetect = (str) => {
  console.error(`${COLOR_MAGENTA}Error from neornd!! : ${COLOR_RED}${str}${COLOR_RESET}`);
  return NaN;
};

/**
 * @module neornd
 * @example
 * const neornd = require('neornd');
 */
module.exports = class neornd {
  /**
   * Convert random number generated at GetRandomDecimal() to number in specified range
   * @param {number} min - Minimam number you want
   * @param {number} max - Maximam number you want
   * @param {number} round - The number of digits to appear after the decimal point.
   * @return {number} Return random number with number of digits you want
   **/
  static get(min, max, round) {
    if (round < 0) return ErrorDetect('The minimum number of 3rd argument is 0.');
    if (round > 16) return ErrorDetect('3rd argument is too big. Maximum call stack size may be exceeded.');
    if (min > max) return ErrorDetect('1st argument must be smaller than 2nd argument.');
    const result = GetRandomWithSpecifiedDigits(min, max, round);
    return result;
  }
};
