// Note: For all the tasks in this file, write the code using both and the conditional branching (if) and the ternary operator(?).
// Task 1: Even or Odd Number
// Write a program that checks if a number is even or odd.
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here
let number = 10;
if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

number % 2 === 0 ? console.log("Even number") : console.log("Odd number");
// Task 2: Pass or Fail
// Ask the user for their exam score (0-100).
// If the score is 50 or above, print "Pass"; otherwise, print "Fail".
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here
let examScore = 90; 
if (examScore < 0 || examScore > 100) {
  console.log("Invalid exam score");
} else {
  if (examScore >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

examScore >= 50 && examScore <= 100 ? console.log("Pass") : examScore < 50 && examScore >= 0 ? console.log("Fail") : console.log ("Invalid exam score");