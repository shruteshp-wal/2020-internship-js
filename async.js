const fs = require('fs');

// function addOne() {

// }

// const addOne = function (x) {
//     return x + 1;
// }

// const addOne = (x) => {return x + 1;}

// const addOne = x => {return x + 1;}

// const addOne = x => {
//     return {sum: x + 1}
// }

// const addOne = x => (
//     {sum: x + 1}
// )

// Async
// console.log("Program Started");
// setTimeout(function () {
//     console.log("Program executing")
// }, 2000);
// console.log("Program Ended");


// async function
const printLazily = (text, afterPrint) => {
    setTimeout(function () {
        console.log(text);
        if (afterPrint) {
            afterPrint();
        }
    }, 2000);
}

// console.log("Program Started");
// printLazily(
//     "Program executing",
//     () => {
//         printLazily("Program Ended", () => { 
//             console.log("Program quitting") 
//         })
//     },
// )

// 1. Print "Program Started"
// 2. Print content of file 1 lazily, 
// 3. Print content of file 2 lazily, 
// 4. Print if both files have same content lazily
// 5. Print "Program ended"


console.log("Program started");

fs.readFile(
    './sample-file.txt',
    { encoding: 'utf-8' },
    (error, contents1) => {
        printLazily(contents1, () => {
            fs.readFile(
                './file-to-compare.txt',
                { encoding: 'utf-8' },
                (error, contents2) => {
                    printLazily(contents2, () => {
                        const isSame = contents1 === contents2;
                        const printProgEnded = () => {
                            console.log("Program ended")
                        }
                        if (isSame) {
                            printLazily("Same Contents", printProgEnded)
                        } else {
                            printLazily("Diff Contents", printProgEnded)
                        }
                    })
                }
            )
        })
    }
)


const promisedPrintLazily = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(text);
            resolve();
        }, 2000);
    });
}

fs.readFile(
    './sample-file.txt',
    { encoding: 'utf-8' },
    (error, contents1) => {
        promisedPrintLazily(contents1)
            .then(() => {
                fs.readFile(
                    './file-to-compare.txt',
                    { encoding: 'utf-8' },
                    (error, contents2) => {
                        promisedPrintLazily(contents2)
                            .then(() => {
                                const isSame = contents1 === contents2;
                                const printProgEnded = () => {
                                    console.log("Program ended")
                                }
                                let printPromise = null;

                                if (isSame) {
                                    printPromise = promisedPrintLazily("Same Contents")
                                } else {
                                    printPromise = promisedPrintLazily("Diff Contents")
                                }

                                printPromise.then(printProgEnded);
                            })
                    }
                )
            })
    }
)

const promisedReadFile = (path) => {
    return Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

promisedReadFile('./sample-file.txt')
    .then((contents1) => {
        return promisedPrintLazily(contents1)
    })
    .then(() => {
        return promisedReadFile('./file-to-compare.txt')
    })
    .then((contents2) => {
        return promisedPrintLazily(contents2)
    })
    .then(() => {
        const isSame = contents1 === contents2;
        const printProgEnded = () => {
            console.log("Program ended")
        }
        let printPromise = null;

        if (isSame) {
            printPromise = promisedPrintLazily("Same Contents")
        } else {
            printPromise = promisedPrintLazily("Diff Contents")
        }

        printPromise.then(printProgEnded);
    })

// Global variables
// Changing execution scope

promisedReadFile('./sample-file.txt')
    .then((contents1) => {
        return new Promise((resolve, reject) => {
            promisedPrintLazily(contents1).then(() => {
                resolve({
                    contents1: contents1
                })
            })
        })
    })
    .then((data) => {
        return new Promise((resolve, reject) => {
            promisedReadFile('./file-to-compare.txt')
                .then((contents2) => {
                    resolve(Object.assign(data, { contents2: contents2 }))
                })
        })
    })
    .then((data) => {
        return new Promise((resolve, reject) => {
            promisedPrintLazily(data.contents2)
                .then(() => {
                    resolve(data);
                })
        })

    })
    .then((data) => {
        const isSame = data.contents1 === data.contents2;
        const printProgEnded = () => {
            console.log("Program ended")
        }
        let printPromise = null;

        if (isSame) {
            printPromise = promisedPrintLazily("Same Contents")
        } else {
            printPromise = promisedPrintLazily("Diff Contents")
        }

        printPromise.then(printProgEnded);
    })



function work() {
    let globalC1;
    let globalC2;
    promisedReadFile('./sample-file.txt')
        .then((contents1) => {
            globalC1 = contents1;
            return promisedPrintLazily(contents1)
        })
        .then(() => {
            return promisedReadFile('./file-to-compare.txt')
        })
        .then((contents2) => {
            globalC2 = contents2;
            return promisedPrintLazily(contents2)
        })
        .then(() => {
            const isSame = globalC1 === globalC2;
            const printProgEnded = () => {
                console.log("Program ended")
            }
            let printPromise = null;

            if (isSame) {
                printPromise = promisedPrintLazily("Same Contents")
            } else {
                printPromise = promisedPrintLazily("Diff Contents")
            }

            printPromise.then(printProgEnded);
        })
        .catch((error) => {
            console.error(error)
        })
}

work();

// async function work () {

// }

const work = async () => {
    try {
        const contents1 = await promisedReadFile('./sample-file.txt')
        await promisedPrintLazily(contents1)
        const contents2 = await promisedReadFile('./file-to-compare.txt')
        await promisedPrintLazily(contents2)
        const isSame = contents1 === contents2;

        let printPromise = null;

        if (isSame) {
            printPromise = promisedPrintLazily("Same Contents")
        } else {
            printPromise = promisedPrintLazily("Diff Contents")
        }

        await printPromise;

    } catch (error) {
        console.error(error)
    } finally {
        console.log("Program ended")
    }
}

const added = [1,2,3].map((x)=>{
    return x + 1;
})
// [2,3,4]
const doSum = (prev, current) => {
    return prev + current;
}
const sum = [1,2,3].reduce(doSum, 0)

// Arrays .map
// Ternary
// bool ? ifTrue : ifFalse
// String
// camelCasing
// Document

// Destructuring
// rest
// imports

data = {
    content1,
    content2,
    content3,
    content4,
}

const content1 = data.content1;
const content2 = data.content2;
const content3 = data.content3;

const {
    content1: specialVar, content2, content3, ...rest,
} = data;


function sum(multiplier, ...spread) {
    return spread.reduce(doSum, 0) * multiplier;
}


