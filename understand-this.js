// console.log(this);

// function printThis() {
//     console.log(this);
// }
// printThis();

// function Person() {
//     console.log(this);
// }

// new Person();


function printThis(a,b) {
    console.log(a, b);
    console.log(this);
}

function Person(name) {
    this.name = name;
}

let p1 = new Person('abcd');

// call
// printThis.call(p1, 1, 2);
// apply
// printThis.apply(p1, [1, 2]);
// bind
// let printThisBoundToP1 = printThis.bind(p1);
// printThisBoundToP1(1, 2)