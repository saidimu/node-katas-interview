'use strict';

module.exports = (input) => {
  if(typeof input === 'number') {
    if(!(input % 15)) {
      return 'FizzBuzz';
    } else if (!(input % 3)) {
      return 'Fizz';
    } else if (!(input % 5)) {
      return 'Buzz';
    } else {
      return input;
    }
  } else {
    throw Error('expected a number as input');
  }
}
