'use strict';

function digitsToArray(digits) {
  if(typeof digits === 'object') {
    return digits.reverse();
  } else {
    return digits.toString().split('').reverse().map((digit) => parseInt(digit, 10));
  }// if
}// digitsToArray

function evenIndexedDigits(digits) {
  const digitsArray = digitsToArray(digits);
  let evenDigits = [];

  for(let i = 0; i < digitsArray.length; i++) {
    let currentDigit = digitsArray[i];
    if ((i % 2) === 0)  {
      evenDigits.push(currentDigit);
    }// if
  }// for

  return evenDigits;
}// evenIndexedDigits

function oddIndexedDigits(digits) {
  const digitsArray = digitsToArray(digits);
  let oddDigits = [];

  for(let i = 0; i < digitsArray.length; i++) {
    let currentDigit = digitsArray[i];
    if ((i % 2) !== 0)  {
      oddDigits.push(currentDigit);
    }// if
  }// for

  return oddDigits;
}// oddIndexedDigits

const valueForEvenIndexedDigit = (digits) => {
  const evenDigits = digitsToArray(digits);
  let sum = 0;

  for(let i = 0; i < evenDigits.length; i++) {
    let currentDigit = evenDigits[i];
    let product = currentDigit * 2;
    sum += sumDigits(product);
  }// for

  return sum;
}// valueForEvenIndexedDigit

const valueForOddIndexedDigit = (digits) => {
  const oddDigits = digitsToArray(digits);
  let sum = 0;

  for(let i = 0; i < oddDigits.length; i++) {
    let currentDigit = oddDigits[i];
    sum += sumDigits(currentDigit);
  }// for

  return sum;
};// valueForOddIndexedDigit

const sumDigits = (digits) => {
  let digitsSum = 0;
  if(digits > 9)  {
    digitsToArray(digits).forEach((digit) => {
      digitsSum += digit;
    });// forEach
  } else {
    return digitsSum = digits;
  }// if

  return digitsSum;
};// sumDigits

const getAccountNumberValue = (digits) => {
}// getAccountNumberValue

const generateCheckDigit = (digits) => {
  const evenDigits = evenIndexedDigits(digits);
  const sumEvenDigits = valueForEvenIndexedDigit(evenDigits);

  const oddDigits = oddIndexedDigits(digits);
  const sumOddDigits = valueForOddIndexedDigit(oddDigits);

  return ((sumEvenDigits + sumOddDigits) * 9) % 10;
}// generateCheckDigit

module.exports = {
  valueForOddIndexedDigit,
  valueForEvenIndexedDigit,
  sumDigits,
  getAccountNumberValue,
  generateCheckDigit
};
