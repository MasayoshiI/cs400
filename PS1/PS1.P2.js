// Author: Masayoshi Iwasa
// File: PS1P2

// Write a function that takes as input each of the following strings in turn:
// ‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’
// This function should
// Determine the operator (+, *, -, or /) embedded in the string
// Return a function to implement the input operator that returns the result
// For example, if the input string is ‘8%3’, return (left, right) => left % right

const stringCalc = equation => eval(equation)

console.log(`All letters in string is: ${stringCalc('1 + 3')}`) 