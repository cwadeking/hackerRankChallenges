/**
 * https://www.hackerrank.com/challenges/simple-array-sum
 * 
 * Given an array of integers, find the sum of its elements.

For example, if the array ar = [1,2,3], 1 + 2 + 3 = 6, so return 6.

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, n , denoting the size of the array.
The second line contains n space-separated integers representing the array's elements.
 */

function simpleArraySum(ar) {
  let sumHolder = 0;
  for(const value of ar){
    if(value === NaN){
      throw Error(`${value} is not a number`);
    }
    sumHolder += value;
  }

  return sumHolder;

}