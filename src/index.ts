import { getRandomNumber } from './getRandomNumber';
import { getRandomString, optionsDefaultObject, optionsObjectKeys } from './getRandomString';
import { sortRandomly } from './sortRandomly';
import { getRandomBigInt } from './getRandomBigInt';

/**
 * Throw an error
 * @param {string} str - Words to show in red
 * @return {never} Return nothing
 */
const ErrorWrapper = (str: string): never => {
  throw new Error(`Error from neornd!! : ${str}`);
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
  static bigint(minByteLen: number, maxByteLen: number): bigint {
    if (minByteLen < 1) return ErrorWrapper('Minimum byte length cannot be smaller than 1.');
    return getRandomBigInt(minByteLen, maxByteLen);
  }
  /**
   * Generate random number with number of digits after decimal point you want
   * @param {number} min - Minimum number you want
   * @param {number} max - Maximum number you want
   * @param {number} round - The number of digits to appear after the decimal point
   * @return {number} Return random number with number of digits after decimal point you want
   **/
  static number(min: number, max: number, round = 0): number {
    if (round < 0) return ErrorWrapper('Minimum number of 3rd argument is 0.');
    if (round > 10) return ErrorWrapper('3rd argument is too big. Maximum call stack size will be exceeded.');
    if (min > max) return ErrorWrapper('1st argument must be smaller than 2nd argument.');
    return getRandomNumber(min, max, round);
  }
  /**
   * Generate random string with specified length
   * @param {number} length - Length of string you want to get
   * @param {object} options - Types you want to include in string [lowercase, uppercase, number, symbol]
   * @return {string} Return random string including specified types
   */
  static string(length: number, options = optionsDefaultObject): string {
    if (length < 0 || !Number.isInteger(length)) return ErrorWrapper('1st argument length is invalid.');
    for (const [key, value] of Object.entries(options) as [optionsObjectKeys, boolean][]) {
      if (optionsDefaultObject[key] === undefined) return ErrorWrapper(`Option key '${key}' is invalid.`);
      if (typeof value !== 'boolean') {
        return ErrorWrapper(`Options value '${value} is not boolean. Value of options must be boolean.'`);
      }
      optionsDefaultObject[key] = value;
    }
    return getRandomString(length, optionsDefaultObject);
  }
  /**
   * Sort input string randomly
   * @param {string} str - String you want to sort randomly
   * @return {string} Return string sorted randomly
   */
  static sort(str: string): string {
    if (typeof str !== 'string') return ErrorWrapper('Argument must be string type.');
    return sortRandomly(str);
  }
}
