const test = require('../test-boilerplate');

//input: string
//output: boolean
function validWord(word) {

  let validWord = [];
  let boolTest;
  let alphabet = "'abcdefghijklmnopqrstuvwxyzåäöæø";
    
  var arrayOfAlphabet = alphabet.split('');

  word = word.toLowerCase();
  for (let val of word) {
    boolTest = arrayOfAlphabet.includes(val);
  }
  return boolTest;

}


console.log('test1: ', test(validWord('hello'), true));
console.log('test2: ', test(validWord("Bömasdf"), true));
console.log('test3: ', test(validWord("Foo1"), false));
console.log('test4: ', test(validWord("I'll"), true));
