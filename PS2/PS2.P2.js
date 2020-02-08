// Author: Masayoshi Iwasa (U14652615)
// File: Problem 2 (PS2.P2.js) - spit words from sentence using generator

// Write a generator that is initialized with a sentence and that emits each word of the sentence in
// turn.
// Use the generator to print the words, one per line, of the string “All I know is something like a
// bird within her sang”.


// Generator that returns a word of a sentence at a time
function *wordsFromSentence(sentence) {
    // create an array of words using string split with " "
    let splitted = sentence.split(" ");
    while (true) {
        // use string shift to obtain the first
        yield splitted.shift()
    }
}
// TEST wordsFromSentence generator by printing out every word from the sentence
wordGen = wordsFromSentence("All I know is something like a bird within her sang");
count = 11;
while (count --> 0) {
 console.log(wordGen.next().value)
} 