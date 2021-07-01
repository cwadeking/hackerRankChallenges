'use strict';
/*
https://www.hackerrank.com/challenges/apple-and-orange/problem

Function Description

Complete the countApplesAndOranges function in the editor below. 
It should print the number of apples and oranges that land on Sam's
house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
*/

function countApplesAndOranges(startHouse, endHouse, appleTree, orangeTree,
   apples, oranges) {
  let appleCounter = 0;
  let orangeCounter = 0;

  for(let i = 0; i < apples.length || i < oranges.length; i++){
    if(i < apples.length){
      if(apples[i] + appleTree >= startHouse && apples[i] + appleTree <= endHouse){
        appleCounter++;
      }
    }
    if(i < oranges.length){
      if(oranges[i] + orangeTree >= startHouse && oranges[i] + orangeTree <= endHouse){
        orangeCounter++;
      }
    }
  }
  console.log(appleCounter);
  console.log(orangeCounter);
}