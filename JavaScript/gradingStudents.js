'use strict';

/*
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from  to .
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade
according to these rules:

If the difference between the grade and the next multiple of 5 is less than
3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will
still be a failing grade.

Examples

grade = 84 round to 85(85 - 84 is less than 3)
grade = 29 do not round (result is less than 40)
grade = 57 do not round (60 - 57 is 3 or higher)
Given the initial value of  for each of Sam's  students, write code to automate
the rounding process.

Steps to complete-
1)Need a helper function that will take the student's grade, and find the next
multiple of 5.
2)Create another helper function to see if the difference between the grade and
the next multiple is less than 3.
3)Create a variable to represent the failing grade value
4)If the difference is less than 3, and is more than 40, round up to the value
found by helper function.
*/

function gradingStudents(grades){//takes in array of grades
  for(let i = 0; i < grades.length; i++){
    let updatedGrade = roundGrade(grades[i]);
    grades[i] = updatedGrade;
  }
  return grades;
}

function roundGrade(grade){
  let failingGrade = 40;
  let nextMultiple = nextMultipleOfFive(grade);

  if(isDifferenceLessThanThree(grade,nextMultiple) && nextMultiple >= failingGrade){
    return nextMultiple;
  }
  return grade;
}
function nextMultipleOfFive(grade){
  let value = Math.floor(grade / 5);
  value++;
  value *= 5;
  return value;  
}

function isDifferenceLessThanThree(grade, nextValue){
  if(nextValue - grade < 3){
    return true;
  }
  return false;
}


