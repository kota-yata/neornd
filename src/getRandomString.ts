import { getRandomNumber } from './getRandomNumber';

export type optionsObjectKeys = 'lowercase' | 'uppercase' | 'number' | 'symbol';

export interface optionsObjectInterface {
  lowercase?: boolean;
  uppercase?: boolean;
  number?: boolean;
  symbol?: boolean;
}

/**
 * Default parameters of neornd.string()
 */
export const optionsDefaultObject: optionsObjectInterface = {
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
const MakeUsableString = (obj: optionsObjectInterface): string => {
  const LOWERCASES = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const NUMBERS = '0123456789';
  const SYMBOLS = '~!@#$%^&*()_+-={}[]|:;<>,.?/';
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
export const getRandomString = (length: number, optionsObject: optionsObjectInterface): string => {
  const usableString: string = MakeUsableString(optionsObject);
  const lastIndexOfUsableString: number = usableString.length - 1;
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomInt: number = getRandomNumber(0, lastIndexOfUsableString, 0);
    randomString += usableString[randomInt];
  }
  return randomString;
};
