'use strict';

import { getRandomNumber } from './getRandomNumber.js';

/**
 * Default parameters of neornd.string()
 */
export const optionsDefaultObject = {
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
export const getRandomString = (length, optionsObject) => {
  const usableString = MakeUsableString(optionsObject);
  const lastIndexOfUsableString = usableString.length - 1;
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomInt = getRandomNumber(0, lastIndexOfUsableString, 0);
    randomString += usableString[randomInt];
  }
  return randomString;
};
