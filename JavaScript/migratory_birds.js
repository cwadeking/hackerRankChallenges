//https://www.hackerrank.com/challenges/migratory-birds/problem
'use strict';
/*
Function description-
Given an array of bird sightings where every element represents a bird type id, 
determine the id of the most frequently sighted type. If more than 1 type has 
been spotted that maximum amount, return the smallest of their ids.

Example

arr = [1, 1, 2, 2, 3]

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower 
of the two types seen twice: type 1.

Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted
Returns

int: the lowest type id of the most frequently sighted birds
Input Format

The first line contains an integer, , the size of .
The second line describes  as  space-separated integers, each a type number of 
the bird sighted.


Steps to solve.

1)Sort by numerical type.
  a.Quick sort being the most efficient
  b.Find pivot point index
  c.Find left and right pointers.
  d.Create swap function.
2)Create a new array with value and counter.
3)Find which counter is more and grab that type/number

*/

let testArray= [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,20,1,2,3,4,5,6,7,8,9,30,1,2,3,4,5,6,7,8,9,40,1,2,3,4,5,6,7,8,9,50,1,2,3,4,5,6,7,8,9,60,1,2,3,4,5,6,7,8,9,70,1,2,3,4,5,6,7,8,9,80,1,2,3,4,5,6,7,8,9,90,1,2,3,4,5,6,7,8,9,100,1,2,3,4,5,6,7,8,9,110,1,2,3,4,5,6,7,8,9,120,1,2,3,4,5,6,7,8,9,130,1,2,3,4,5,6,7,8,9,140,1,2,3,4,5,6,7,8,9,150,1,2,3,4,5,6,7,8,9,160,1,2,3,4,5,6,7,8,9,170,1,2,3,4,5,6,7,8,9,180,1,2,3,4,5,6,7,8,9,190,1,2,3,4,5,6,7,8,9,200];
let testArrayTwo = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,20,1,2,3,4,5,6,7,8,9,30,1,2,3,4,5,6,7,8,9,40,1,2,3,4,5,6,7,8,9,50,1,2,3,4,5,6,7,8,9,60,1,2,3,4,5,6,7,8,9,70,1,2,3,4,5,6,7,8,9,80,1,2,3,4,5,6,7,8,9,90,1,2,3,4,5,6,7,8,9,100];

function migratoryBirds(arrayOfIntegers){
  arrayOfIntegers.sort(function(a, b){
    return a - b;
  });  
  let arrayOfObjects = findFrequencyOfSortedArray(arrayOfIntegers);
  let frequencyOfObjects = findHighestFrequencyInArrayOfObjects(arrayOfObjects);
  console.log(frequencyOfObjects[0].typeValue);
  return frequencyOfObjects[0].typeValue;
}

function findHighestFrequencyInArrayOfObjects(arrayOfObjects){
  let currentHighestFrequency = 0;
  
  for(let i = 0; i < arrayOfObjects.length; i ++){
    if(arrayOfObjects[i]["frequency"] > currentHighestFrequency){
      currentHighestFrequency = arrayOfObjects[i]["frequency"];
    }
  }
  
  let arrayOfHighestFrequencyObjects = arrayOfObjects.filter(function(el){
    if(el.frequency === currentHighestFrequency){
      return true;
    }
  })
  
  return arrayOfHighestFrequencyObjects;
}

function findFrequencyOfSortedArray(sortedArray){
  let newArrayOfObjects = [];
  let currentValue = sortedArray[0];
  let counter = 0;
  
  if(sortedArray.length > 0){
    for(let i = 1; i <= sortedArray.length + 1; i++){      
      if(currentValue === sortedArray[i - 1]){
        if(i <= sortedArray.length - 1){// && currentValue === sortedArray[i - 1]){
          counter++;
        }
        if(i === sortedArray.length){
          counter++;
        }
      }else if(currentValue !== sortedArray[i - 1]){
        newArrayOfObjects.push({"typeValue":currentValue, "frequency": counter});
        currentValue = sortedArray[i - 1];
        counter = 1;
      }


    }
  }

  return newArrayOfObjects;
}

exports.findFrequencyOfSortedArray = findFrequencyOfSortedArray;

// let startTime = new Date().getTime();
//migratoryBirds(testArrayTwo);
// let endTime = new Date().getTime();
// let totalTime = endTime - startTime;
// console.log(`${totalTime} milliseconds`);
