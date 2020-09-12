'use strict';

const calcNumber = require('./calcNumber.js');
const generateString = require('./generateString.js');
const sort = require('./sort.js');

const COLOR_RESET = '\u001b[0m';
const COLOR_MAGENTA = '\u001b[35m';
const COLOR_RED = '\u001b[31m';

/**
 * Notify argument error
 * @param {string} str - Words you want to show in red
 * @return {undefined} Return undefined
 */
const ErrorDetect = (str) => {
  console.error(`${COLOR_MAGENTA}Error from neornd!! : ${COLOR_RED}${str}${COLOR_RESET}`);
  return undefined;
};

/**
 * @module neornd
 * @example
 * const neornd = require('neornd');
 */
module.exports = class neornd {
  /**
   * Generate random number with number of digits after decimal point you want
   * @param {number} min - Minimam number you want
   * @param {number} max - Maximam number you want
   * @param {number} round - The number of digits to appear after the decimal point
   * @return {number} Return random number with number of digits after decimal point you want
   **/
  static number(min, max, round) {
    if (round < 0) return ErrorDetect('The minimum number of 3rd argument is 0.');
    if (round > 10) return ErrorDetect('3rd argument is too big. Maximum call stack size may be exceeded.');
    if (min > max) return ErrorDetect('1st argument must be smaller than 2nd argument.');
    const result = calcNumber.GetRandomWithSpecifiedDigits(min, max, round);
    return result;
  }

  /**
   * Generate random string with specified length
   * @param {number} length - Length of string you want to get
   * @param {object} options - Types you want to include in string [lowercase, uppercase, number, symbol]
   * @return {string} Return random string including specified types
   */
  static string(length, options = generateString.optionsDefaultObject) {
    if (length < 0 || !Number.isInteger(length)) return ErrorDetect('1st argument length is invalid.');
    const optionsObject = generateString.optionsDefaultObject;
    for (const [key, value] of Object.entries(options)) {
      if (optionsObject[key] === undefined) return ErrorDetect(`Option key '${key}' is invalid.`);
      if (typeof value !== 'boolean')
        return ErrorDetect(`Options value '${value} is not boolean. Value of options must be boolean.'`);
      optionsObject[key] = value;
    }
    return generateString.GetRandomStringWithSpecifiedLength(length, optionsObject);
  }

  /**
   * Sort input string randomly
   * @param {string} str - String you want to sort randomly
   * @return {string} Return string sorted randomly
   */
  static sort(str) {
    if (typeof str !== 'string') return ErrorDetect('Argument must be string type.');
    const result = sort.sortArray(str);
    return result;
  }
};
