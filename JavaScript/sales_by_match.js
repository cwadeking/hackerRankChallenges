'use strict';

const { findFrequencyOfSortedArray } = require('./migratory_birds');

console.log(findFrequencyOfSortedArray);
/*
https://www.hackerrank.com/challenges/sock-merchant/problem

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs

Steps to complete-

1) Sort the array.
2) Compare each digit to the previous.
3) Create a counter for pairs and a counter for current value.
4) Have a conditional check that resets the counter for current value
if it's 2, and adds to the pair counter.
*/
var re = /quick\s(brown).+?(jumps)/ig;
var str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
var res = re.exec(str);
console.log(res);
let testArray = [44, 55, 11, 15, 4, 72, 72];//, 91, 80, 14, 43, 78, 70, 75, 36, 83, 78, 91, 17, 17, 54, 65, 60, 21, 58, 98, 87, 45, 75, 97, 81, 18, 51, 43, 84, 54, 66, 10, 44, 45, 23, 38, 22, 44, 65, 9, 78, 42, 100, 94, 58, 5, 11, 69, 26, 20, 19, 64, 64, 93, 60, 96, 10, 10, 39, 94, 15, 4, 3, 10, 1, 77, 48, 74, 20, 12, 83, 97, 5, 82, 43, 15, 86, 5, 35, 63, 24, 53, 27, 87, 45, 38, 34, 7, 48, 24, 100, 14, 80, 54];//4 pairs

//sockMerchant(testArray.length, testArray);
function sockMerchant(n, ar) {
  if(ar.length <= 1){
    return 0;
  }
  ar.sort(function(a, b){
    return a - b;
  })

  let arrayOfFrequencyObjects = findFrequencyOfSortedArray(ar);
  let numberOfPairs = findNumberOfPairsInObjectArray(arrayOfFrequencyObjects);
}

function findNumberOfPairsInObjectArray(objectsArray){
  let numberOfPairs = 0;
  for(let i = 0; i < objectsArray.length; i++){
    numberOfPairs += Math.floor(objectsArray[i].frequency / 2);
  }
  return numberOfPairs;
}