import DataTransformer from './libraries/dataTransformer.js';


console.log(DataTransformer.addValues(5, 10)); // Suma de números: 15
// console.log(DataTransformer.addValues('5', 'g')); // Concatenación de cadenas: "510"
// console.log(DataTransformer.addValues(5, '10')); // Concatenación de cadenas: "510"
// console.log(DataTransformer.addValues('Hello ', 'world')); // Concatenación de cadenas: "Hello world"
// console.log(DataTransformer.addValues(true, false)); // Suma de booleanos: 1
// console.log(DataTransformer.addValues('5', true)); // Concatenación de cadenas: "5true"
// console.log(DataTransformer.addValues(5, true)); // Suma de números: 6
console.log(DataTransformer.addValues(5, '5')); // Error: Addition not possible for the provided types.
