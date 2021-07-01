/*
https://www.hackerrank.com/challenges/the-birthday-bar/problem

Two children, Lily and Ron, want to share a chocolate bar. Each of the squares
has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

Function Description

Complete the birthday function in the editor below.

birthday has the following parameter(s):

int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month
Returns

int: the number of ways the bar can be divided
*/

let testArray = [1, 2, 1, 3, 2];
let testValue = birthday(testArray, 3, 2);
console.log(testValue);

function birthday(squares, day, month) {
  let counter = 0;
  for(let i = 0; i < squares.length; i++){
    let endOfSegment = i + month;
    let tempArray = squares.slice(i, endOfSegment);
    if(day == addAllNumbersInArray(tempArray)){
      counter++;
    }
  }
  return counter;
}

function addAllNumbersInArray(slicedArray){
  let tempNumber = 0;
  for(let i = 0; i < slicedArray.length; i++){
    tempNumber += slicedArray[i];
  }
  return tempNumber;
}