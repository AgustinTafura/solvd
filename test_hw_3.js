import functions from './hw_3.js';

const array = [100, 50, 30];
console.log('Test - Task 1')
console.log(array, 'array')
console.log('calculateDiscountedPrice',functions.calculateDiscountedPrice(array, 10));
console.log('calculateTotalPrice', functions.calculateTotalPrice(array));
console.log(array, 'array')
console.log('--------------------------------------')

console.log('Test - Task 2')
const person = {
    firstName: 'Juan',
    lastName: 'Perez',
}
console.log('getFullName', functions.getFullName(person))
const str = 'The qu;ick; -brown :fox dog`s jumps over the lazy dog.';
console.log('filterUniqueWords', functions.filterUniqueWords(str))
console.log('--------------------------------------')

console.log('Test - Task 3')
const counter = functions.createCounter();

const repeatCounter = functions.repeatFunction(counter, 3);
console.log(repeatCounter())
repeatCounter()
console.log('--------------------------------------')

console.log('Test - Task 4')
console.log('calculateFactorial', functions.calculateFactorial(5));
console.log('power', functions.power(2, 3)); 


const arr = [1, 2, 3, 4, 5];
const mappedGenerator = functions.lazyMap(arr, x => x * 2);

for (let index = 0; index < arr.length; index++) {
    let value = mappedGenerator.next().value
    console.log('mappedGenerator value:', value)
    
}

const fibonacciIterator = functions.fibonacciGenerator();

// Get the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(`fibonacciIterator:`, fibonacciIterator.next().value);
}