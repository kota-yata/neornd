'use strict';
const calcNumber = require('./calcNumber.js');

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
