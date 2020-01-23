// Variables
// Compare Variables
// Types
// Arrays, Object
// Compare JS with JAVA
// Functions

// Variables
// ES5
var myFirstVariable;
var mySecondVariable = 10;
var myThirdVariable = "ship";
var myForthVariable = [];
var myFifthVariable = null;

// console.log(myFirstVariable) 
// Expect 
// 1. Value is not defined X
// 2. undefined
// 3. No output X
// 4. Any default value if it exists X

// console.log("myFifthVariable is " + myFifthVariable);
// console.log(myFifthVariable)
// Expect
// 1. null
// 2. undefined X
// 3. No output X

// console.log(myNonExistentVariable);
// Expect:
// 1. Error

console.log(myNonExistentVariable);
var myNonExistentVariable = 100;

// var myNonExistentVariable;
// console.log(myNonExistentVariable);
// myNonExistentVariable = 100;

// Expect:
// 1. Error
// 2. Prints 100 X

console.log("mySecondVariable is " + mySecondVariable);
// Expect:
// 1. mySecondVariable is concatenated

// ES6+
let myFuturisticVariable;
const myStubbornVariable = 1;
// Block scoping
// var vs let

console.log(`mySecondVariable is ${mySecondVariable}`)

