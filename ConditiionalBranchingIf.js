const { userInput } = require("./UserInput");
// Note: For all the tasks in this file, use only conditional branching (if).
// Task 1: Check Positive, Negative, or Zero
// Write a program that takes a number as input and checks if it is positive, negative, or zero.
// Write your code here
const input = 10;
if (input > 0) {
  console.log("Positive number", input);
} else if (input < 0) {
  console.log("Negative number", input);
} else {
  console.log(`Number is ${input}`)
}
// Task 2: Grade Calculator
// Write a program that takes a student's score (0-100) and assigns a letter grade:
// 90-100 → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// < 60 → F
// Write your code here
const studentScore = 0;
if (studentScore >= 90 && studentScore <= 100) {
  console.log("Grade A");
} else if (studentScore >= 80 && studentScore <= 89) {
  console.log("Grade B");
} else if (studentScore >= 70 && studentScore <= 79) {
  console.log("Grade C");
} else if (studentScore >= 60 && studentScore <= 69) {
  console.log("Grade D");
} else if (studentScore < 60) {
  console.log("Grade F");
} else {
  console.log("Invalid score");
}
// Task 3: Weekend Checker
// Ask the user to enter a day of the week (e.g., "Monday", "Saturday").
// Print "It's the weekend!" if it's Saturday or Sunday, otherwise print "It's a weekday".
// Write your code here
const weekDay = userInput("Enter a day of the week").toLowerCase();
if (weekDay === "saturday" || weekDay === "sunday") {
  console.log("Its the weekend!"); 
} else if (weekDay === "monday" || weekDay === "tuesday" || weekDay === "wednesday" || weekDay === "thursday" || weekDay === "friday") {
  console.log("Its a weekday");
} else {
  console.log("Invald input");
}

// Task4: Game Score Adjuster
// Problem Statement:
// You are developing a simple game where the player starts with 10 points.
// If they answer a question correctly, their score increases by 1 (++).
// If they answer incorrectly, their score decreases by 1 (--).
// The program should check if the player’s score has reached 0 and print "Game Over" if true.
// Steps to Implement:
// Initialize score = 10.
// Ask the user if their answer is correct (true/false).
// Use if-else with ++ and -- to update the score.
// If the score reaches 0, print "Game Over".
// Otherwise, print the updated score.
// Write your code here
let score = 10;
let answer = userInput("Please provide an answer, true or false");
if (answer === "true") {
  score++;
} else if (answer === "false") {
  score--;
}
if (score === 0) {
  console.log("Game Over")
} else {
  console.log("The score is " + score);
}

