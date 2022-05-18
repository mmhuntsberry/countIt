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
// turn num to string?
// let numToString = num.toString();
// for (let i = 0; i <= numToString.length; i++) {

// }const rampNumbers = (nums) => {
  let numsArr = String(nums).split("");
  for (let i = 0; i < numsArr.length - 1; i++) {
    if (numsArr[i] < numsArr[i + 1]) {
      // console.log(numsArr[i], numsArr[i + 1]);
      // console.log(true);
    } else {
      return console.log("not a ramp number");
    }
  }

  let counter = 0;
  let rampNums = [];

  while (counter < nums) {
    counter++;
    let counterArr = String(counter).split("");
    for (let i = 0; i < counterArr.length - 1; i++) {
      if (counterArr[i] <= counterArr[i + 1] || counterArr.length === 1) {
        console.log(counter);
        // console.log(numsArr[i], numsArr[i + 1]);
        console.log(true);
      }
    }
    rampNums.push(counter);
    console.log(rampNums.length);
  }

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
  textOutPut.innerText = number
  console.log(numOfRampsBelow(input))
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