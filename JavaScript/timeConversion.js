'use strict';
/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Steps to complete-
1) Write a function that takes in a string of a formatted time.
2) Deconstruct (slice?) the string to find out if it's AM or PM
3) Based on if it's AM or PM, and if the first two numbers are less than or 
more than 12, the string will have the first two characters replaced.
4) Deconstruct same string to pull out first two digits, convert to number
and see if larger or smaller than 12.
*/

let testString = '07:00:00PM';
let testString1 = '07:01:00PM';
let testString2 = '04:59:59AM';
let testString3 = '07:01:00AM';

function convertToMilitaryTime(formattedString){
  let amOrPmIdentifier = formattedString.slice(-2);
  let leftOverFormat = formattedString.slice(2, -2);
  let hourAsNumber = parseInt(formattedString.slice(0,2));
  let militaryTime;

  if(amOrPmIdentifier === "PM"){
    if(hourAsNumber < 12){
      hourAsNumber += 12;
    }
  }else if(amOrPmIdentifier === "AM"){
    if(hourAsNumber === 12){
      hourAsNumber = '00';
    }else if(hourAsNumber.toString().length == 1){
      hourAsNumber = '0' + hourAsNumber;
    }
  }
  militaryTime = hourAsNumber + leftOverFormat;
  return militaryTime;
}

convertToMilitaryTime(testString);
convertToMilitaryTime(testString1);
convertToMilitaryTime(testString2);
convertToMilitaryTime(testString3);
