'use strict';

const format = require('biguint-format');
const crypto = require('crypto');

/**
 * @param {number} quantity - Number of byte to make random decimal
 * @return {number} Return random number
 */
const GetRandomDecimal = (quantity) => {
  const x_byte_buffer = crypto.randomBytes(quantity);
  return format(x_byte_buffer, 'dec');
};

const reset = '\u001b[0m';
const magenta = '\u001b[35m';
const red = '\u001b[31m';

/**
 * @param {number} min - Minimam number you want
 * @param {number} max - Maximam number you want
 * @param {number} round - The number of digits to appear after the decimal point.
 * @return {number} Return random number with number of digits you want
 **/
const neornd = (min, max, round) => {
  if (round < 0) {
    console.error(`${magenta}Warning from neornd : ${red}The minimum number of 3rd argument is 0.${reset}`);
    return NaN;
  }
  if (round > 307) {
    console.error(`${magenta}Warning from neornd : ${red}The maximum number of 3rd argument is 307.${reset}`);
    return NaN;
  }
  if (min > max) {
    console.error(`${magenta}Warning from neornd : ${red}1st argument must be smaller than 2nd argument.${reset}`);
    return NaN;
  }
  const max_value_of_4byte = 4294967295; // Math.pow(2, 32) - 1 (32bits)
  const number_for_rounding = Math.pow(10, round);
  const num_in_range =
    Math.round(((GetRandomDecimal(4) / max_value_of_4byte) * (max - min) + min) * number_for_rounding) /
    number_for_rounding;
  return num_in_range;
};

module.exports = {
  get: neornd,
};
