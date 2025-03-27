// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here

function calculateSquare(n, callback) {
  const square = n * n;
  callback(square);
}

calculateSquare(5, function(argument) {
  console.log('Squared number is:', argument)
});

// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here

function credentialsCheck(username, password, callback) {

  const correctUsername = 'Zoya';
  const correctPassword = 'onetwothree';

  if (username === correctUsername && password === correctPassword) {
    callback('Login successful!');
  } else {
    callback('Incorrect username or password.');
  }
}
credentialsCheck('Zoya', 'password123', function(message) {
  console.log(message); 
});


// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here