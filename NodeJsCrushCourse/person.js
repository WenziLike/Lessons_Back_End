
const person = {
    name: 'John Doe',
    age: 30
}

class Person {
    name;
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = ({
    person,
    Person
})