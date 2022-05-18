'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//this is a new line

// sup doods








const countIt = (str) => {
  console.log('BOOMS', str.length)

// given you a string, count the letters without the space
// note the frequency of the individual letter appear
// palidrom - regex 
// lowercase all character

  let lower = str.toLowerCase();
  let cleanString = lower.replace(/[^A-Za-z0-9]/g, "");
  let obj = {} //empty object 

  for(let i = 0; i<cleanString.length; i++){
    //push

    if(!obj[cleanString[i]]){//if false
      console.log([cleanString[i]])
      obj[cleanString[i]] = 1
    }
    else {//if true
      console.log([cleanString[i]])
      obj[cleanString[i]] = obj[cleanString[i]] +1
    }
  }
  console.log(obj)


}



const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    countIt(str);
    getPrompt();
  });
}

if (typeof describe === 'function') {
  describe('#countIt()', () => {
    it('should be of type function', () => {
      
      assert.equal(typeof countIt, "function");
    });
  });
} else {
  getPrompt();
}