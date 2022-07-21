import crypto from 'crypto';
import { getRandomNumber } from './getRandomNumber';

const MAX_BYTELENGTH = 1073741824; // 2^30

export const getRandomBigInt = (minByteLen: number, maxByteLen: number): bigint => {
  const byteLength: number = getRandomNumber(minByteLen, maxByteLen, 0);
  const quotient: number = Math.floor(byteLength / MAX_BYTELENGTH);
  const remainder: number = byteLength % MAX_BYTELENGTH;
  let result = 0n;
  for (let i = 0; i < quotient; i++) {
    const buffer: Buffer = crypto.randomBytes(MAX_BYTELENGTH);
    const bigint: bigint = buffer.readBigUInt64LE();
    result = bigint + (result << BigInt(MAX_BYTELENGTH));
  }
  if (remainder < 1) return result;
  const rBuffer: Buffer = crypto.randomBytes(remainder);
  const rBigInt = BigInt('0x' + rBuffer.toString('hex'));
  result = rBigInt + (result << BigInt(remainder * 8));
  return result;
};
