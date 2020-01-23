const calculator = require('./calculator');

function recurseMe(count) {
    let nextCount = count + 1;
    
    if (nextCount % 1000 == 0) {
        console.log(nextCount);
    }

    recurseMe(nextCount);
}

recurseMe(0);