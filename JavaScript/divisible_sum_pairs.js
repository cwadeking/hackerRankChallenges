/*
https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array 
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs

 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */


let testArray = [1, 2, 3, 4, 5, 6];
let testDivisor = 5;
let testResult = divisibleSumPairs(testArray.length, testDivisor, testArray);
console.log(testResult);

function divisibleSumPairs(arrayLength, divisor, arrayOfInts){
  let counter = 0;
  for(let i = 0; i < arrayLength; i++){
    for(let j = i + 1; j < arrayLength; j++){
      let sumOfPair = arrayOfInts[i] + arrayOfInts[j];
      if(sumOfPair % divisor == 0){
        counter++;
      }
    }
  }
  return counter;
} 