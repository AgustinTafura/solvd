// Task 1:
const person = {
    _firstName: "John",
    _lastName: "Doe",
    _age: 30,
    _email: "john.doe@example.com",
};

Object.defineProperties(person, {
    firstName: {
        get() {
            return this._firstName;
        },
        enumerable: true
    },
    lastName: {
        get() {
            return this._lastName;
        },
        enumerable: true
    },
    age: {
        get() {
            return this._age;
        },
        enumerable: true
    },
    email: {
        get() {
            return this._email;
        },
        enumerable: true
    }
});

person.updateInfo = function (newInfo) {
    for (let prop in newInfo) {
        if (this.hasOwnProperty(`_${prop}`)) {
            this[`_${prop}`] = newInfo[prop];
        }
    }
};

Object.defineProperty(person, "address", {
    value: '',
    writable: true,
    enumerable: false,
    configurable: false
});


//   Task 2:
const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};

Object.defineProperties(product, {
    price: {
        value: 1000,
        writable: false,
        enumerable: false
    },
    quantity: {
        value: 5,
        writable: false,
        enumerable: false
    }
});

function getTotalPrice(product) {
    const priceDescriptor = Object.getOwnPropertyDescriptor(product, "price");
    const quantityDescriptor = Object.getOwnPropertyDescriptor(product, "quantity");

    if (!priceDescriptor || !quantityDescriptor) {
        throw new Error("Cannot calculate total price. Missing price or quantity property.");
    }

    const totalPrice = priceDescriptor.value * quantityDescriptor.value;
    return totalPrice;
}

function deleteNonConfigurable(obj, propName) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propName);

    if (!descriptor) {
        throw new Error(`Property '${propName}' does not exist in the object.`);
    }

    if (!descriptor.configurable) {
        throw new Error(`Cannot delete non-configurable property '${propName}'.`);
    }

    delete obj[propName];
}

// Task 3:
const bankAccount = {
    _balance: 1000,

    get formattedBalance() {
        return `$${this._balance}`;
    },

    set balance(newBalance) {
        if (typeof newBalance !== 'number' || newBalance < 0) {
            throw new Error("Balance must be a non-negative number");
        }
        this._balance = newBalance;
    },
    transfer: function (targetAccount, amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }

        if (this._balance < amount) {
            throw new Error("Insufficient funds");
        }

        this._balance -= amount;
        targetAccount._balance += amount;
    }
};

// Task 4:
function createImmutableObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const immutableObj = Array.isArray(obj) ? [] : {};

    for (let prop in obj) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            immutableObj[prop] = createImmutableObject(obj[prop]);
        } else {
            Object.defineProperty(immutableObj, prop, {
                value: obj[prop],
                writable: false,
                enumerable: descriptor.enumerable,
                configurable: descriptor.configurable
            });
        }
    }

    return immutableObj;
}


// Task 5:
function observeObject(obj, callback) {
    return new Proxy(obj, {
        get(target, prop, receiver) {
            callback(prop, 'get');
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
            callback(prop, 'set');
            return Reflect.set(target, prop, value, receiver);
        }
    });
}

function logChanges(prop, action) {
    console.log(`Property '${prop}' was ${action}`);
}

const observedPerson = observeObject(person, logChanges);
console.log(person.age)
observedPerson.updateInfo({
    age: 35
});
observedPerson.firstName
console.log(person.age)

// Task 6:
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}


// Task 7
function validateObject(obj, schema) {
    if (typeof obj !== 'object' || typeof schema !== 'object' || obj === null || schema === null) {
        throw new Error('Both obj and schema must be objects');
    }

    for (let key in schema) {
        if (obj.hasOwnProperty(`_${key}`)) {
            if (typeof obj[`_${key}`] !== schema[key]) {
                return false;
            }
        }
    }
    return true;
}

const schema = {
    firstName: 'string',
    age: 'number',
    email: 'string'
};

console.log(validateObject(person, schema));



//testing Task 4
const originalObject = {
    name: "Example Object",
    details: {
        numbers: [1, 2, 3]
    }
};
console.log('--------------------------------------------------------------------')
const immObj = createImmutableObject(originalObject)
console.log(originalObject.details.numbers)
console.log(immObj.details.numbers)
immObj.details.numbers.push(100);
immObj.details.numbers[1] = 10; // it should return an error, because immObj returns a new object with all its properties made read-only and non-writable
console.log(originalObject.details.numbers)
console.log(immObj.details.numbers)