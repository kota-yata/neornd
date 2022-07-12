import crypto from 'crypto';
import { getRandomNumber } from './getRandomNumber.js';

const MAX_BYTELENGTH = 1073741824; // 2^30

export const getRandomBigInt = (minByteLen, maxByteLen) => {
  const byteLength = getRandomNumber(minByteLen, maxByteLen, 0);
  console.log('Byte length:', byteLength);
  const quotient = Math.floor(byteLength / MAX_BYTELENGTH);
  const remainder = byteLength % 30;
  let result = 0n;
  for (let i = 0; i < quotient; i++) {
    const buffer = crypto.randomBytes(MAX_BYTELENGTH);
    const bigint = buffer.readBigUInt64LE();
    result = bigint + (result << MAX_BYTELENGTH);
    console.log(result);
  }
  if (remainder < 1) return result;
  const rBuffer = crypto.randomBytes(remainder);
  const rBigint = rBuffer.readBigUInt64LE();
  result = rBigint + (result << BigInt(remainder));
  return result;
};
