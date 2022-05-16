'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// write code to Ramp-Numbers here
const numOfRampsBelow = (num) => {
  // your code goes here
// turn num to string?
let numToString = num.toString();
for (let i = 0; i <= numToString.length; i++){

}

}







const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    countIt(str);
    getPrompt();
  });
}

// if (typeof describe === 'function') {
//   describe('#countIt()', () => {
//     it('should be of type function', () => {
      
//       assert.equal(typeof countIt, "function");
//     });
//   });
// } else {
//   getPrompt();
// }