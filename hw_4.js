
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    updateInfo: (newInfo)=>{
        for (let prop in newInfo) {
            if (this.hasOwnProperty(prop)) {
                this[prop] = newInfo[prop];
            }
        }
    }
}

Object.defineProperties(person, {
firstName: {writable: false},
lastName: {writable: false},
age: {writable: false},
email: {writable: false}
});

console.log(person)

person.updateInfo({ firstName: "Jane", age: 32 })
console.log(person)
