/**
 * https://www.hackerrank.com/challenges/solve-me-first/
 * 
 * Complete the function solveMeFirst to compute the sum of two integers.

Example
a = 7
b = 3


Return 10.

Function Description

Complete the solveMeFirst function in the editor below.

solveMeFirst has the following parameters:

int a: the first value
int b: the second value
Returns
- int: the sum of a and b
 */

function solveMeFirst(a, b) {
  return sumOfTwoInts(a, b);
}

function sumOfTwoInts(firstInt, secondInt){
  if(firstInt === NaN || secondInt === NaN){
    throw Error('At least one argument is not a number.');
  }
  return firstInt + secondInt;

}