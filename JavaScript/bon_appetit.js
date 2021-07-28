'use strict';

/*

https://www.hackerrank.com/challenges/bon-appetit/problem

Function Description

Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill
*/
let testBill = [3, 10, 2, 9];
bonAppetit(testBill, 1, 7);

function bonAppetit(bill, k, b){
  bill.splice(k, 1);
  let billToBeSplit = addArrayOfIntgers(bill);
  let ammountAnnaOwes = billToBeSplit / 2;
  if(ammountAnnaOwes === b){
    console.log("Bon Appetit");
    return;
  }
  let annaChange = b - ammountAnnaOwes
  console.log(annaChange);
}

function addArrayOfIntgers(arrayOfIntegers){
  let result = 0;
  for(let i = 0; i < arrayOfIntegers.length; i++){
    result += arrayOfIntegers[i];
  }
  return result;
}