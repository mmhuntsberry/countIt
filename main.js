'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const countIt = (str) => {
  console.log('BOOMS', str.length)
}


const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    countIt(str);
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  // describe('#mastermind()', () => {
  //   it('should register a guess and generate hints', () => {
  //     mastermind('aabb');
  //     assert.equal(board.length, 1);
  //   });
  //   it('should be able to detect a win', () => {
  //     assert.equal(mastermind(solution), 'You guessed it!');
  //   });
  // });

  // describe('#generateHint()', () => {
  //   it('should generate hints', () => {
  //     assert.equal(generateHint('abdc'), '2-2');
  //   });
  //   it('should generate hints if solution has duplicates', () => {
  //     assert.equal(generateHint('aabb'), '1-1');
    // });

  // });

} else {

  getPrompt();
}