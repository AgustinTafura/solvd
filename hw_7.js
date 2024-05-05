function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let resolvedCount = 0;
        const results = [];

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((result) => {
                    results[index] = result;
                    resolvedCount++;
                    if (resolvedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}

// Example
const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

promiseAll(promises)
    .then((results) => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch((error) => {
        console.error("At least one promise rejected:", error);
    });


// task 2
function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        const settledPromises = [];

        promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    settledPromises[index] = {
                        status: "fulfilled",
                        value
                    };
                })
                .catch((reason) => {
                    settledPromises[index] = {
                        status: "rejected",
                        reason
                    };
                })
                .finally(() => {
                    // Verificamos si todas las promesas se han establecido
                    if (settledPromises.length === promises.length) {
                        resolve(settledPromises);
                    }
                });
        });
    });
}

// Example
const promises2 = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];

promiseAllSettled(promises2)
    .then(results => {
        console.log("All promises settled:", results);
        // Expected: [{ status: 'fulfilled', value: 1 },
        //            { status: 'rejected', reason: 'Error occurred' },
        //            { status: 'fulfilled', value: 3 }]
    });


//task 3
function chainPromises(functionsArray) {
    let promiseChain = Promise.resolve();

    for (const func of functionsArray) {
        promiseChain = promiseChain.then(func);
    }

    return promiseChain;
}

//Example
function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
    .then(result => {
        console.log("Chained promise result:", result);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
        console.error("Chained promise error:", error);
    });


//task 4
function promisify(callbackStyleFunction) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            callbackStyleFunction(...args, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

// Example
function callbackStyleFunction(value, callback) {
  setTimeout(() => {
    if (value > 0) {
      callback(null, value * 2);
    } else {
      callback("Invalid value", null);
    }
  }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
  .then(result => {
    console.log("Promised function result:", result); // Expected: 6
  })
  .catch(error => {
    console.error("Promised function error:", error);
  });