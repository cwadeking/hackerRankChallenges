//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

'use strict';
/*
You are in charge of the cake for a child's birthday. You have decided the cake
will have one candle for each year of their total age. They will only be able
to blow out the tallest of the candles. Count how many candles are tallest.

Steps to complete-
1) Create a function that takes in an array of integers. Each integer is an
amount of how tall each candle is.
2) Create two variables.  One for the tallest/highest amount, the second for
how frequent that amount is in the array.
3) Create a for loop to iterate over the array and check the following 
conditions:
  a-is this number larger than the largest number so far? If it is, reassign
  the largest number, and reset the frequency counter;
  b-is this number equal to the largest number? If so, increase the counter
4) Output the counter.
*/


let demoArray = [3, 2, 1, 3];

function findHighestNumberAndFrequencyOfArray(arrayOfIntegers){
  let highestNumber = arrayOfIntegers[0];
  if(arrayOfIntegers.length === 0){
    return 0;
  }
  let frequency = 0;

  for(let i = 0; i < arrayOfIntegers.length; i++){
    if(arrayOfIntegers[i] > highestNumber){
      highestNumber = arrayOfIntegers[i];
      frequency = 1;
    }else if(arrayOfIntegers[i] === highestNumber){
      console.log(highestNumber,frequency);
      frequency++;
    }
  }
  return frequency;
}

findHighestNumberAndFrequencyOfArray(demoArray);