// 'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// write code to Ramp-Numbers here
const numOfRampsBelow = (nums) => {
  // your code goes here
  const numsArr = String(nums).split("");
  let counter = 0;
  for (let i = 1; i <= nums; i++) {
    let splitIndex = String(i).split("");
    console.log(splitIndex);
    if (splitIndex.length === 1) {
      counter++;
      console.log(true, "1");
    } else if (
      splitIndex[0] <= splitIndex[1] &&
      splitIndex[1] <= splitIndex[2] 
    ) {
      counter++;
      console.log(true, "2");
    } else if (splitIndex.length > 2) {
      console.log(false)
    } else if (splitIndex[0] <= splitIndex[1]) {
      counter++;
      console.log(true, "3");
    } else {
      console.log(false);
    }
  }
  return counter;
}

let input = '';
const textInput = document.getElementById("numInput");
console.log(textInput)
const button = document.getElementById("button");
const textOutPut = document.getElementById("display-element");

textInput.addEventListener('keyup', (event) => {
  input = event.target.value
  console.log(input)
})

button.addEventListener('click', (e) => {
  e.preventDefault()
  let number = numOfRampsBelow(input)
  textOutPut.innerText = `There are ${number} total ramp numbers less than ${input}!!`

  console.log(numOfRampsBelow(input))
  console.log(`There are ${number} total ramp numbers less than ${input}`)
})








// const getPrompt = () =>  {
//   rl.question('Enter your string to count the characters: ', (str) => {
//     countIt(str);
//     getPrompt();
//   });
// }

// if (typeof describe === 'function') {
//   describe('#countIt()', () => {
//     it('should be of type function', () => {
      
//       assert.equal(typeof countIt, "function");
//     });
//   });
// } else {
//   getPrompt();
// }