/*
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

Maria plays college basketball and wants to go pro. Each season she maintains
a record of her play. She tabulates the number of times she breaks her season
record for most points and least points in a game. Points scored in the first
game establish her record for the season, and she begins counting from there.

Given the scores for a season, determine the number of times Maria breaks her 
records for most and least points scored during the season.

Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

int scores[n]: points scored per game
Returns

int[2]: An array with the numbers of times she broke her records. Index 0 is for
breaking most points records, and index 1 is for breaking least points records.
*/

function breakingRecords(scores){
  let timesLowScoreBroke = 0;
  let timesHighScoreBroke = 0;
  let currentHighScore = scores[0];
  let currentLowScore = scores[0];

  for(let i = 1; i < scores.length; i++){
    if(scores[i] < currentLowScore){
      currentLowScore = scores[i];
      timesLowScoreBroke++;
    }
    if(scores[i] > currentHighScore){
      currentHighScore = scores[i];
      timesHighScoreBroke++;
    }
  }
  let arrayOfBrokenRecords = [];
  arrayOfBrokenRecords.push(timesHighScoreBroke);
  arrayOfBrokenRecords.push(timesLowScoreBroke);
  return arrayOfBrokenRecords;
}