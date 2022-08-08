//https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem

'use strict';
/**
 * 
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.


Example
arr = [1, 3, 5, 7, 9]

The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24 . The function prints

16 24

Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of 5 integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

Input Format

A single line of five space-separated integers.

Constraints

1 <= arr[i] <=10^9
Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5

Sample Output

10 14

Steps to complete-
1)Array should be sorted.
2)For min, send everything but the last index.
3)For max, send everything but the first index.
4)Reassign values as not to mutate the array.
*/

miniMaxSum([1,2,3,4,5]);

function miniMaxSum(arr) {
  let copiedArray = arr.slice();
  let sortedArray = copiedArray.sort();

  let minArray = sortedArray.slice();
  minArray.pop();
  let maxArray = sortedArray.slice();
  maxArray.shift();

  console.log(addAllValuesOfArray(minArray), addAllValuesOfArray(maxArray));


}

function addAllValuesOfArray(arr){
  let numberValue = 0;
  for(const value of arr){
    numberValue += value;
  }

  return numberValue;
}

