function calculateDiscountedPrice(products, discountPercentage) {
  return products.map(product => (product * (1 - discountPercentage / 100)));
}
  
function calculateTotalPrice(products) {
  return products.reduce((total, product) => total + product, 0);
}

const getFullName = person => `${person.firstName} ${person.lastName}`;

const filterUniqueWords = text =>
  text
    .toLowerCase()
    .split(/\W+/)
    .filter((item, index, arr) => item !== "" && arr.indexOf(item) === index)
    .sort();


function createCounter() {
  let count = 0; // Variable count dentro del ámbito de createCounter

  function counter() {
    count++; // Incrementa la variable count en cada llamada
    return count; // Devuelve el valor actualizado de count
  }

  return counter; // Devuelve la función interna counter como un closure
}

function repeatFunction(func, times) {
  return () => {
    if (times < 0) {
      while (true) {
        func();
      }
    } else {
      for (let i = 0; i < times; i++) {
        func()
      }
    }
  };
}

function calculateFactorial(n, acc = 1) {
  if (n === 0) {
    return acc; // Caso base: cuando n es 0, devuelve el acumulador
  } else {
    return calculateFactorial(n - 1, acc * n); // Llamada recursiva con optimización de la llamada final
  }
}

function power(base, exponent) {
  if (exponent === 0) {
    console.log('exponenet return 1')
    return 1; // Caso base: cualquier número elevado a 0 es 1
  } else {
    console.log( '--', base, exponent - 1, '--')
    return base * power(base, exponent - 1); // Llamada recursiva para calcular la potencia
  }
}

function* yieldLazyMap(array, mappingFunction) {
  for (let i = 0; i < array.length; i++) {
    yield mappingFunction(array[i]);
  }
}

function lazyMap(array, mappingFunction) {
  let index = 0;
  return {
    next: function() {
      if (index < array.length) {
        const result = mappingFunction(array[index]);
        index++;
        return { value: result, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

function* yieldFibonacciGenerator() {
  let prev = 0;
  let current = 1;
  while (true) {
    yield current;
    [prev, current] = [current, prev + current]; // Destructuring assignment to update prev and current
  }
}

function fibonacciGenerator() {
  let prev = 0;
  let current = 1;
  return {
    next: function() {
      const result = current;
      [prev, current] = [current, prev + current];
      return { value: result, done: false };
    }
  };
}

export default {
    calculateDiscountedPrice,
    calculateTotalPrice,
    getFullName,
    filterUniqueWords,
    createCounter,
    repeatFunction,
    calculateFactorial,
    power,
    lazyMap,
    fibonacciGenerator,
  }