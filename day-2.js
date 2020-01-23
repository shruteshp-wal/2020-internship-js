const primes = [2, 3, 5, 7];

for (const prime of primes) {
    console.log(prime)
}

for (let index = 0; index < primes.length; index++) {
    const prime = primes[index];
    console.log(prime)
}

// OBJECT
let emptyObject = {}
let animal = {
    species: 'bird'
}

// add properties
animal.isAlive = true;
animal['is sleeping'] = true;

// console.log(animal['is sleeping'])


let objectToLoop = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
}

let keys = Object.keys(objectToLoop);
console.log(keys);
let values = Object.values(objectToLoop);
console.log(values);
let entries = Object.entries(objectToLoop);
console.log(entries);

for (const key in objectToLoop) {
    const value = objectToLoop[key];
    console.log(`${key} : ${value}`)
}

/**
FUNCTIONS
*/

// Declare a function
function myAwesomeFunction(a, b, c, d) {
    console.log("I do awesome stuff");
    console.log(`a was ${a}`);
    console.log(`b was ${b}`);
    console.log(`c was ${c}`);
    console.log(`d was ${d}`);
}

function myAwesomeFunction() {
    console.log('Evil function')
}

function myAwesomeFunction(a, a, a, a) {
    console.log(`a was ${a}`);
}
// Invoke the function
myAwesomeFunction()
myAwesomeFunction('a', 'b', 'd');


function addOne(a) {
    return a + 1;
}
const addOne = (a) => { 
    return a + 1;
}
const addOne = a => {
    return a + 1;
}
const addOne = a => a + 1;


const addOne = (number, shouldReturnParams) => {
    let result = number + 1;
    
    if(shouldReturnParams) {
        return {
            number: number,
            result: result,
        }
    } else {
        return result;
    }
}

// console.log(addOne(2, true))
// console.log(addOne(2))



/*
OOJS
*/
function Person (name) {
    console.log('Person constructor executed!!')
    this.name = name;
}

// let p1 = new Person('abcd');
// console.log(p1)
// console.log(Person('abcd'))

// Abstraction: Hiding implementation
// Inheritance: 
// Polymorphism: 
// Encapsulation: 


function Animal (numLegs) {
    this.numLegs = numLegs;

    this.shout = function () {
        console.log(`My name is ${this.name}. I don't know how to shout`);
    }

    this.setName = function (name) {
        this.name = name;
    }
}

Animal.prototype.isAlive = true;

// console.log(Animal.prototype);

// let a1 = new Animal(2);
// console.log(a1.isAlive);
// a1.shout();
// a1.setName('abcd');
// a1.shout();


function Dog(color) {
    this.color = color;
    Animal.call(this, 4);

    this.shout = function () {
        console.log(`Howl! My name is ${this.name}`)
    }
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog


// let d1 = new Dog('blue');
// d1.setName('Scooby');
// d1.shout();
// console.log(d1);

// ES6
class Es6Animal {
    constructor(numLegs) {
        this.numLegs = numLegs;
        
        this.shout = function () {
            console.log(`My name is ${this.name}. I don't know how to shout`);
        }
    
        this.setName = function (name) {
            this.name = name;
        }
    }

    get isAlive () {
        return true;
    }
}

class Es6Dog extends Es6Animal {
    constructor(color) {
        super(4);
        this.color = color;
    }
}

let d1 = new Es6Dog('blue');
d1.setName('Scooby');
d1.shout();
console.log(d1);
