'use strict';
const calcNumber = require('./calcNumber.js');

/**
 * Sort argument string randomly
 * @param {string} str - String you want to sort randomly
 * @return {string} Return string sorted randomly
 */
const sortArray = (str) => {
  const targetArray = [...str];
  const endOfArray = targetArray.length - 1;
  for (let i = endOfArray; i > 0; i--) {
    const randomIndexNumber = calcNumber.GetRandomWithSpecifiedDigits(0, endOfArray, 0);
    [targetArray[randomIndexNumber], targetArray[i]] = [targetArray[i], targetArray[randomIndexNumber]];
  }
  const resultString = targetArray.join('');
  return resultString;
};

module.exports = {
  sortArray,
};
