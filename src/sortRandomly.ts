import { getRandomNumber } from './getRandomNumber';

/**
 * Sort argument string randomly
 * @param {string} str - String you want to sort randomly
 * @return {string} Return string sorted randomly
 */
export const sortRandomly = (str: string): string => {
  const targetArray: string[] = [...str];
  const endOfArray: number = targetArray.length - 1;
  for (let i = endOfArray; i > 0; i--) {
    const randomIndexNumber: number = getRandomNumber(0, endOfArray, 0);
    [targetArray[randomIndexNumber], targetArray[i]] = [targetArray[i], targetArray[randomIndexNumber]];
  }
  const resultString: string = targetArray.join('');
  return resultString;
};
