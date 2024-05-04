// Task 1:
function customFilterUnique(array, callback) {
    const uniqueArray = [];
    array.forEach(item => {
        var filteredItem = callback(item)
        const found = uniqueArray.some(uniqItem => {
            if (typeof uniqItem === 'object') {
                return JSON.stringify(uniqItem) === JSON.stringify(item);
            } else {
                return uniqItem === item;
            }
        });
        if (filteredItem && !found) {
            uniqueArray.push(item);
        }
    });
    return uniqueArray;
}


const objects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'John' },
    { id: 1, name: 'Pep' },
    { id: 3, name: 'Alice' }
];

// const callbackById = (a, b) => a.id === b.id;
// const callbackByName = (a, b) => a.name === b.name;

// const uniqueObjectsById = customFilterUnique(objects, callbackById);
// console.log("Unique objects by ID:", uniqueObjectsById);

// const uniqueObjectsByName = customFilterUnique(objects, callbackByName);
// console.log("Unique objects by Name:", uniqueObjectsByName);

// Task 2:
function chunkArray(array, chunkSize) {
    const chunkedArray = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }

    return chunkedArray;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const chunkedArray = chunkArray(originalArray, chunkSize);


// Task 3:
function customShuffle(array) {
    const shuffledArray = [...array]; 

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray;
}


const originalArr = [1, 2, 3, 4, 5];
const shuffledArray = customShuffle(originalArr);
console.log(shuffledArray);


// Task 4:
function getArrayIntersection(array1, array2) {
    const intersection = array1.filter(element => array2.includes(element));
    return intersection;
}

function getArrayUnion(array1, array2) {
    const unionSet = new Set([...array1, ...array2]);
    const union = Array.from(unionSet);
    return union;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = getArrayIntersection(array1, array2);
console.log("Intersection:", intersection);

const union = getArrayUnion(array1, array2);
console.log("Union:", union);


// Task 5:
function measureArrayPerformance(func, ...args) {
    const startTime = performance.now();
    func(...args);
    const endTime = performance.now();
    return endTime - startTime;
}


const array = Array.from({ length: 100000 }, (_, index) => index + 1); 


// const customFilterUniqueByIdPerformance = measureArrayPerformance(customFilterUnique, objects, callbackById);
// const customFilterUniqueByNamePerformance = measureArrayPerformance(customFilterUnique, objects, callbackByName);
// console.log("CustomFilterUnique by ID Performance:", customFilterUniqueByIdPerformance, "milliseconds");
// console.log("CustomFilterUnique by Name Performance:", customFilterUniqueByNamePerformance, "milliseconds");

const chunkArrayPerformance = measureArrayPerformance(chunkArray, array, chunkSize);
console.log("ChunkArray Performance:", chunkArrayPerformance, "milliseconds");

const customShufflePerformance = measureArrayPerformance(customShuffle, array);
console.log("CustomShuffle Performance:", customShufflePerformance, "milliseconds");

const array11 = Array.from({ length: 10000 }, (_, index) => index + 1); 
const array22 = Array.from({ length: 10000 }, (_, index) => index + 5000);
const getArrayIntersectionPerformance = measureArrayPerformance(getArrayIntersection, array11, array22);
const getArrayUnionPerformance = measureArrayPerformance(getArrayUnion, array1, array2);
console.log("getArrayIntersection Performance:", getArrayIntersectionPerformance, "milliseconds");
console.log("getArrayUnion Performance:", getArrayUnionPerformance, "milliseconds");



//testing Task 1
console.log('--------------------------------------------------------------------')
let arrayOfObjects = [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { a: 5, b: 6 },
    { e: 7, f: 8 },
    { g: 9, h: 0 }
  ];
  
  const filterByPropertyA = (obj) => {
    if (!obj || typeof obj !== "object") throw new Error("pass an object as parameter")
    return Object.keys(obj).includes("a") ? obj : undefined
  }

  console.log(customFilterUnique(arrayOfObjects, filterByPropertyA))