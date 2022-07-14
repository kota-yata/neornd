import { getRandomNumber } from './getRandomNumber.js';
import { getRandomString, optionsDefaultObject } from './getRandomString.js';
import { sortRandomly } from './sortRandomly.js';
import { getRandomBigInt } from './getRandomBigInt.js';

/**
 * Notify error
 * @param {string} str - Words to show in red
 * @return {undefined} Return undefined
 */
const ErrorWrapper = (str) => {
  console.error(`Error from neornd!! : ${str}`);
  return undefined;
};

/**
 * @module neornd
 * @example
 * import neornd from 'neornd'
 */
export default class neornd {
  /**
   * Generate random BigInt in the range of specified minimum byte length and maximum
   * @param {number} minByteLen - Minimum byte length
   * @param {number} maxByteLen - Maximum byte length
   * @return {bigint} Return random bigint
   */
  static bigint(minByteLen, maxByteLen) {
    if (minByteLen < 1) return ErrorWrapper('Minimum byte length cannot be smaller than 1.');
    const result = getRandomBigInt(minByteLen, maxByteLen);
    return result;
  }
  /**
   * Generate random number with number of digits after decimal point you want
   * @param {number} min - Minimum number you want
   * @param {number} max - Maximum number you want
   * @param {number} round - The number of digits to appear after the decimal point
   * @return {number} Return random number with number of digits after decimal point you want
   **/
  static number(min, max, round = 0) {
    if (round < 0) return ErrorWrapper('Minimum number of 3rd argument is 0.');
    if (round > 10) return ErrorWrapper('3rd argument is too big. Maximum call stack size will be exceeded.');
    if (min > max) return ErrorWrapper('1st argument must be smaller than 2nd argument.');
    const result = getRandomNumber(min, max, round);
    return result;
  }

  /**
   * Generate random string with specified length
   * @param {number} length - Length of string you want to get
   * @param {object} options - Types you want to include in string [lowercase, uppercase, number, symbol]
   * @return {string} Return random string including specified types
   */
  static string(length, options = optionsDefaultObject) {
    if (length < 0 || !Number.isInteger(length)) return ErrorWrapper('1st argument length is invalid.');
    for (const [key, value] of Object.entries(options)) {
      if (optionsDefaultObject[key] === undefined) return ErrorWrapper(`Option key '${key}' is invalid.`);
      if (typeof value !== 'boolean')
        return ErrorWrapper(`Options value '${value} is not boolean. Value of options must be boolean.'`);
      optionsDefaultObject[key] = value;
    }
    return getRandomString(length, optionsDefaultObject);
  }

  /**
   * Sort input string randomly
   * @param {string} str - String you want to sort randomly
   * @return {string} Return string sorted randomly
   */
  static sort(str) {
    if (typeof str !== 'string') return ErrorWrapper('Argument must be string type.');
    const result = sortRandomly(str);
    return result;
  }
}
