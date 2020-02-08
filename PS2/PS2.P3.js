// Author: Masayoshi Iwasa (U14652615)
// File: Problem 3 (PS2.P3.js) - cube of each valyues of an array

// Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
// code to call the function on each value of the array [1,2,3,4,5,6,7].
// Note: The .map() method on Array is your friend here

// A function that returns cube of an input x
function cube(x) {
    return Math.pow(x,3)
}

console.log([1,2,3,4,5,6,7].map(x => cube(x)));

