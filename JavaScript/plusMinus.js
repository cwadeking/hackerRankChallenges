'use strict';
/*
The problem is: Given an array of integers, calculate the ratios of it's
elements that are positive, negative, and zero.  Print the decimal value
of each fraction on a new line with 6 places after the decimal.

Steps to complete-
1) Create a function that takes in an array.
2) Create variables to hold the number (counter) of positive, negative, 
and zero values
3) Create a for loop to iterate over the array.
4) Create conditional statements that will increase variable counters based
based on value.
5) Reassign values to fractions based off of length of array, and make sure
the float value has 6 digits (look up method for creation.)
*/

let demoArray = [1, 1, 0, -1, -1];

function findNumberOfNegativePositiveAndZeroValues(arrayOfIntegers){
  let numberOfNegativeNumbers = 0;
  let numberOfPositiveNumbers = 0;
  let numberOfZeroValues = 0;
    
  for(let i =0; i < arrayOfIntegers.length; i++){
    if(arrayOfIntegers[i] === 0){
      numberOfZeroValues++;
    }else if(arrayOfIntegers[i] < 0){
      numberOfNegativeNumbers++;
    }else if(arrayOfIntegers[i] > 0){
      numberOfPositiveNumbers++;
    }
  }

  console.log(returnDecimalValueOfFractionWithSixDigits(numberOfPositiveNumbers,arrayOfIntegers.length));
  console.log(returnDecimalValueOfFractionWithSixDigits(numberOfNegativeNumbers,arrayOfIntegers.length));
  console.log(returnDecimalValueOfFractionWithSixDigits(numberOfZeroValues,arrayOfIntegers.length));
  
}

function returnDecimalValueOfFractionWithSixDigits(numberToConvert, arrayLength){
  return (numberToConvert/arrayLength).toFixed(6);
}

findNumberOfNegativePositiveAndZeroValues(demoArray);