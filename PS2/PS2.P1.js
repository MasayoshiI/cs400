// Auhtor: Masayoshi Iwasa (U14652615)
// Problem 1 (PS2.P1.js) - even fibonacci generator

// Write two generators that together implement a series of even Fibonacci numbers. The first
// generator should return the series of fibonacci numbers starting from 0. The series F is defined
// as
// F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
// The second generator should use the first to obtain the next number in the sequence, rejecting
// it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
// Use the generators to print out the first 6 even Fibonacci numbers.



//  first generator: returns the series of fibonacci numbers starting from 0.
function *fibonacci() {
    let current = 0;
    let next = 1;

    while (true) {
      yield current;
    //   Update current and next values
      [current, next] = [next, current + next];
    }
  }

// TESTING fibonacci generator (using lecture example)
// myFibs = fibonacci();
// let count = 5;
// while (count --> 0) {
//  console.log(myFibs.next().value)
// } 


// second generator: returns even fibonacci numbers using the first generator
function *evenFibonacci() {
    // initialize the first generator
    let fibs = fibonacci()
    while(true) {
        // get next val
        let next = fibs.next().value
        // check if it is even number (exclude 0 too) if so return next; ohterwise continue
        if (next % 2 == 0 && next != 0){
            yield next;
        }
    }
}

// TESTING evenFibonacci generator by printing out first 6 numbers
myEvenFibs = evenFibonacci();
count = 6;
while (count --> 0) {
 console.log(myEvenFibs.next().value)
} 