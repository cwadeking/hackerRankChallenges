/**
 * https://www.hackerrank.com/challenges/diagonal-difference
 * 
 * 
 * 
 * 
 * 
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, n , the number of rows and columns in the square matrix arr .
Each of the next n lines describes a row, arr[i] , and consists of n space-separated integers arr[i][j] .

Constraints

-100 <= arr[i][j] <= 100

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
 * 
 * 
 */

function difference(firstInt, secondInt){
  if(isNaN(firstInt) || isNaN(secondInt)) throw Error('At least one value is not a number.')

  let diff = firstInt - secondInt;

  return diff;
}

function diagonalDifference(arr) {
  const lengthOfRows = arr[0].length;
  let negCounter = lengthOfRows - 1;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for(let posCounter = 0; posCounter < lengthOfRows; posCounter++, negCounter--){
    primaryDiagonal += arr[posCounter][posCounter];
    secondaryDiagonal += arr[negCounter][posCounter];
  }

  let diff = difference(primaryDiagonal, secondaryDiagonal);

  return Math.abs(diff);
}