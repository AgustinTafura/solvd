import { createJWT } from './jwt.js'; 
const secret = "a167f1b12d1081cde4b72debb6ed01ebbff94257c760206a27a7d2c83c9f757a";
const payload = {
    id: 1,
    roles: ['ADMIN'],
    exp: Math.floor(Date.now() / 1000) + 60 * 60, 
};

const token = createJWT({ alg: 'HS256', typ: 'JWT' }, payload, secret);

console.log(token)
