// Author: Masayoshi Iwasa
// File: PS1P1 

// Write a function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
// your function using the string ‘supercalifragilisticexpialidocious’.

const letters = word => 
    { 
        let chars = word.split('').sort();
    chars = chars.filter((a, b) => chars.indexOf(a) === b).join();
    return chars
}

console.log(`All letters in string is: ${letters('supercalifragilisticexpialidocious')}`);