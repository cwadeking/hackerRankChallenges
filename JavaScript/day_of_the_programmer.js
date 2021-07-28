'use strict';

/*
https://www.hackerrank.com/challenges/day-of-the-programmer/problem

Function Description

Complete the dayOfProgrammer function in the editor below. It should return a 
string representing the date of the 256th day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer
Input Format

A single integer denoting year y.

Constraints

1700 \le y \le 2700
Output Format

Print the full date of Day of the Programmer during year  in the format 
dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and 
yyyy is y.

Steps to complete-
1) Create a calendar array of objects.  Each month with days of the month.
2) Alter that array based on the year.
 a.Create conditional statements that will create a leap year if the year is
  divisible by 4, and not divisible by 100 or is divisible by 400.
3) Count down to the 256th day by iterating through the array and subtracting the
day amounts from each object, but only if the amount is lower that whats left from
the 256th day variable.
 
*/

function grabYearArray(){
  let dayCountByMonth = 
  [
    {month: "01", days: 31},
    {month: "02", days: 28},
    {month: "03", days: 31},
    {month: "04", days: 30},
    {month: "05", days: 31},
    {month: "06", days: 30},
    {month: "07", days: 31},
    {month: "08", days: 31},
    {month: "09", days: 30},
    {month: "10", days: 31},
    {month: "11", days: 30},
    {month: "12", days: 31},
  ];
  return dayCountByMonth;
}
function switchOverYearException(){
  return '26.09.1918';
}
function dayOfProgrammer(year) {
  if(year === 1918){
    return switchOverYearException();
  }
  let yearlyArray = grabYearArray();
  if(determineIfLeapYearForRussia(year)){
    yearlyArray[1].days = 29;
  }
  let foundDate = findDateOfPrgrammerFromArray(yearlyArray);
  return `${foundDate}.${year}`;
}

function findDateOfPrgrammerFromArray(yearlyArray){
  let dayOfProgrammer = 256;
  for(let i = 0; i < yearlyArray.length; i++){
    if(dayOfProgrammer > 0){
      if(yearlyArray[i].days < dayOfProgrammer){
        dayOfProgrammer -= yearlyArray[i].days;
        continue;
      }
    }
    return `${dayOfProgrammer}.${yearlyArray[i].month}`;
  }
}

function determineIfLeapYearForRussia(year){
  if(((year < 1917) && (year % 4 === 0)) || ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)){
    return true;
  }
  return false;
}

//console.log(dayOfProgrammer(1900));
console.log(dayOfProgrammer(1800));
//console.log(dayOfProgrammer(1984));
//console.log(dayOfProgrammer(2000));