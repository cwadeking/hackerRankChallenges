/*
https://www.hackerrank.com/challenges/between-two-sets/problem
There will be two arrays of integers. Determine all integers that
satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered

The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many
such numbers exist.

Function Description

Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

int a[n]: an array of integers
int b[m]: an array of integers
Returns

int: the number of integers that are between the sets
*/
let testArrayOne = [2, 4];
let testArrayTwo = [16, 32, 96];

let result = getTotalX(testArrayOne, testArrayTwo);
console.log(result);


function getTotalX(firstArray, secondArray){
  let arrayOfNumbersBetween = [];
  for(let i = 0; i <= 100; i++){//creates integers
    if(isAllElementsInArrayAFactorOfNumber(i, firstArray)){
      if(isNumberFactorOfAllElementsInArray(i, secondArray)){
        arrayOfNumbersBetween.push(i);
      }
    }
  }
  console.log(arrayOfNumbersBetween, arrayOfNumbersBetween.length);
  return arrayOfNumbersBetween.length;
}


function isNumberFactorOfAllElementsInArray(number, arrayToCheck){
  let tempArrayOfFactorNumbers = [];
  for(let i = 0; i < arrayToCheck.length; i++){
    if(arrayToCheck[i] % number == 0){
      tempArrayOfFactorNumbers.push(arrayToCheck[i]);
    }
  }
  if(tempArrayOfFactorNumbers.length === arrayToCheck.length){
    return true;
  }
  return false;
}
function isAllElementsInArrayAFactorOfNumber(number, arrayToCheck){
  let tempArrayOfFactorNumbers = [];
  for(let i = 0; i < arrayToCheck.length; i++){
    if(number % arrayToCheck[i] == 0){
      tempArrayOfFactorNumbers.push(arrayToCheck[i]);
    }
  }
  if(tempArrayOfFactorNumbers.length === arrayToCheck.length){
    console.log(`Number ${number} is a factor of both elements of the first array`);
    return true;
  }
  return false;
}