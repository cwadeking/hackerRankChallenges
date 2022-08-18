/**
 * https://www.hackerrank.com/challenges/compare-the-triplets
 * 
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

Function Description

Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating
Return

int[2]: Alice's score is in the first position, and Bob's score is in the second.
 */

function compareTriplets(a, b) {
  if(a.length !== b.length){
    throw Error("Arrays must be the same length");
  }
  let firstScore = 0;
  let secondScore = 0;

  for(let i = 0; i < a.length; i++){
    let result = findHigherOrEqual(a[i], b[i]);
    if(result === 'First Value'){
      firstScore++;
    }else if(result === 'Second Value'){
      secondScore++;
    }else{
      continue;
    }
  }
  return [firstScore, secondScore];
}

function findHigherOrEqual(firstInt, secondInt){
  if(firstInt === NaN || secondInt === NaN){
    throw Error("At least one value is not a number");
  }

  const firstValue = 'First Value';
  const secondValue = 'Second Value';
  const tie = "Tie";
  if(firstInt > secondInt){
    return firstValue;
  }else if(secondInt > firstInt){
    return secondValue;
  }else{
    return tie;
  }
}