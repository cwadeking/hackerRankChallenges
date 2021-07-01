/*
https://www.hackerrank.com/challenges/kangaroo/problem

Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

int x1, int v1: starting position and jump distance for kangaroo 1
int x2, int v2: starting position and jump distance for kangaroo 2
Returns

string: either YES or NO
*/

function kangaroo(joeyOne, joeyOneJumpDistance, joeyTwo, joeyTwoJumpDistance){
  for(let i = 0; i <= 10000; i++){
    joeyOne += joeyOneJumpDistance;
    joeyTwo += joeyTwoJumpDistance;
    if(joeyOne == joeyTwo){
      return "YES";
    }
  }
  return "NO";
}