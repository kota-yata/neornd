'use strict';

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
  const hex = x_byte_buffer.toString('hex');
  return parseInt(hex, 16);
};

/**
 * Get random number with specified digits after decimal point.
 * @param {number} min - Min arg inherited from neornd.number()
 * @param {number} max - Max arg inherited from neornd.number()
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
 * @return {undefined} Return undefined
 */
const ErrorDetect = (str) => {
  console.error(`${COLOR_MAGENTA}Error from neornd!! : ${COLOR_RED}${str}${COLOR_RESET}`);
  return undefined;
};

/**
 * Default parameters of neornd.string()
 */
const optionsDefaultObject = {
  lowercase: true,
  uppercase: true,
  number: true,
  symbol: true,
};

/**
 * Generate string that include all types of string you want to include
 * @param {object} obj - Object that specify what types of value must be in random string
 * @return Return string that include all types of string you want to include
 */
const MakeUsableString = (obj) => {
  const LOWERCASES = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const NUMBERS = '0123456789';
  const SYMBOLS = '~˜!@#$%^&*()_+-={}[]|:;"\'<>,.?/';
  let strings = '';
  if (obj.lowercase) strings += LOWERCASES;
  if (obj.uppercase) strings += UPPERCASES;
  if (obj.number) strings += NUMBERS;
  if (obj.symbol) strings += SYMBOLS;

  return strings;
};

/**
 * Generate random string with specified length
 * @param {number} length - Length arg inherited from neornd.string()
 * @param {*} optionsObject - Options arg inherited from neornd.string()
 * @return Return neornd.string() a random string with specified length
 */
const GetRandomStringWithSpecifiedLength = (length, optionsObject) => {
  const usableString = MakeUsableString(optionsObject);
  const lastIndexOfUsableString = usableString.length - 1;
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomInt = GetRandomWithSpecifiedDigits(0, lastIndexOfUsableString, 0);
    randomString += usableString[randomInt];
  }
  return randomString;
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
    if (round > 14) return ErrorDetect('3rd argument is too big. Maximum call stack size may be exceeded.');
    if (min > max) return ErrorDetect('1st argument must be smaller than 2nd argument.');
    const result = GetRandomWithSpecifiedDigits(min, max, round);
    return result;
  }

  /**
   * Generate random string with specified length
   * @param {number} length - Length of string you want to get
   * @param {object} options - Types you want to include in string [lowercase, uppercase, number, symbol]
   * @return {string} Return random string including specified types
   */
  static string(length, options = optionsDefaultObject) {
    if (length < 0 || !Number.isInteger(length)) return ErrorDetect('1st argument length is invalid.');
    const optionsObject = optionsDefaultObject;
    for (const [key, value] of Object.entries(options)) {
      if (optionsObject[key] === undefined) return ErrorDetect(`Option key '${key}' is invalid.`);
      if (typeof value !== 'boolean')
        return ErrorDetect(`Options value '${value} is not boolean. Value of options must be boolean.'`);
      optionsObject[key] = value;
    }
    return GetRandomStringWithSpecifiedLength(length, optionsObject);
  }
};
