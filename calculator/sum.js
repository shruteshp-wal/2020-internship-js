const add2 = x => 2;

/**
 * Calculates the sum of the numbers provided
 * @param  {...number} nums The numbers to be added.
 * @return {number} The sum of the numbers provided.
 */
const sum = (...nums) => nums.reduce((p, c) => p + c, 0);

// exports.sum = sum;
// exports.add2 = add2;

// module.exports.sum = sum;
// module.exports.add2 = add2;

// module.exports = exports =  sum;
// exports.add2 = add2;

// export default sum;
// export const add2 = (x) => x + 2;