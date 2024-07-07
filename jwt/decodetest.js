import { verifyJWT } from './jwt.js'; 

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZXMiOlsiQURNSU4iXSwiZXhwIjoxNzIwMzAzNDk4fQ.jpMZO3kzpWJ2XK4cZLn0G8h5YqJ77_IMs8DUdah9KZg"
const secret = "a167f1b12d1081cde4b72debb6ed01ebbff94257c760206a27a7d2c83c9f757a";
try {
    const decoded = verifyJWT(token, secret);
    console.log(decoded)
    console.log(decoded.payload)
} catch (error) {
    console.log("ERROR", error)
}