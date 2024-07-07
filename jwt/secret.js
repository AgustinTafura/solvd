import { randomBytes } from 'crypto';

// Generate a 256-bit (32 bytes) secret key
const secret = randomBytes(32).toString('hex');

console.log(`Generated secret: ${secret}`);
