// export function multiplicar(a, b) {
//     return a * b;
//   }
  
//   export function dividir(a, b) {
//     return a / b;
//   }
import { multiplicar, dividir } from './funciones-ES6.js';
console.log(multiplicar(5, 3)); // Salida: 15
console.log(dividir(6, 2)); // Salida: 3

// export default function saludar(nombre) {
//     console.log(`Hola, ${nombre}!`);
// }
import saludar from './funciones-ES6-default.js';
saludar('Juan'); // Salida: Hola, Juan!


// export { sumar, restar };
import { sumar, restar } from './funciones-ES6-multiple.js';
console.log(sumar(5, 3)); 
console.log(restar(5, 3));



// export default {
//     primera,
//     segunda,
// };  
import funciones from './funciones-ES6-multiple-common.js';
funciones.primera()
funciones.segunda()