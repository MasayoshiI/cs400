// Author: Masayoshi Iwasa
// File: PS1P3

// Write a function that accepts two input parameters: a string, and a function. The function
// should execute the passed function with the passed string and return the result.

// Next, write two expressions that call this function. For the first, pass the string
// ‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
// fragments of the input string broken on the character ‘c’. For the input string
// ‘supercalifragilisticexpialidocious’, you should get
// [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]


// For the second, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
// replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
// string, the modified string, the total number of As in the modified string, and the overall length
// of the modified string:
// {
// 	 	 originalString: xxx,
// 	 	 modifiedString: xxx,
// 	 	 numberReplaced: xxx,
// 	 	 length:		 	 xxx
// }
// Print the data from the returned object on the console.


// const adder7 = (left, right, cb) => cb(left + right);
// let result = adder7(15, 6,
//  sum => sum*2
//  )
// console.log(result) 

const inputf = (input,f) => f(input)

let result1 = inputf("supercalifragilisticexpialidocious", breakAtC => breakAtC.split(/(?=c)/g)) 

let result2 = inputf("supercalifragilisticexpialidocious", breakAtA => {
    let modified = breakAtA.replace('a','A');
    let numReplaced = breakAtA.split("a").length-1;
    let length = modified.length;
    
    let retobj = {
        originalString:  breakAtA,
        modifiedString: modified,
        numberReplaced: numReplaced,
        length: length
      };

    return retobj
    })

    
console.log(result1) 
console.log(result2) 
// const baz = ('supercalifragilisticexpialidocious', inputf) => inputf()