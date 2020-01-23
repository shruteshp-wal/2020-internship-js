const multiply = (a, b) => a * b;

for (let index = 0; index < 10; index++) {
    multiply(5, index);
}

multiply(5, 200);

multiply(
    x,
    y, 
    z, 
    a,
    b,
    c,
)

myMultiplier = (x) => multiply(
    2,
    5, 
    8, 
    5,
    4,
    x,
)

const fiveMultiplier = (x) => multiply(5, x);

const sum = (a,b,c) => a + b+ c;

const curried = (a) => (b) => (c) => sum(a,b,c)

// function curried (a) {
//     return function (b) {
//         return function (c) {
//             return args3(a,b,c)
//         }
//     }
// }
