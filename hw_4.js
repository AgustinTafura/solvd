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

person.updateInfo = function(newInfo) {
    for (let prop in newInfo) {
        if (this.hasOwnProperty(`_${prop}`)) {
            this[`_${prop}`] = newInfo[prop];
        }
    }
};

console.log(444, person)

person.updateInfo({ firstName: "Jane", age: 32 })
console.log(person.firstName)
person._firstName = "lala"
console.log(person.firstName)
