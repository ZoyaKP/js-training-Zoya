// Task 1. Convert to Arrow Functions
// Requirement: Convert the given regular functions into arrow functions.

function multiply(a, b) {
  return a * b;
}
// Writhe your code here
let multiplication = (a,b) => a * b;
console.log(multiplication(5,7));

function cube(n) {
  return n * n * n;
}

// Writhe your code here
let cubeTwo = (n) => n * n * n
console.log(cubeTwo(3));

function sayHello(name) {
  return "Hello, " + name + "!";
}
// Writhe your code here
let sayHelloTwo = (name) => "Hello, "+ name + "!";
console.log(sayHelloTwo('Zoya'));

// Task 2. Arrow Function with Default Parameters
// Requirement:
// Create an arrow function greet that takes a name parameter.
// The parameter should have a default value of "Guest".
// The function should return "Hello, [name]!".
// Writhe your code here

let greet = (from, name = "Guest") => "Hello, "+ name;
console.log(greet());

// Task 3. Calculate Percentage
// Requirement:
// Write an arrow function that takes two arguments:
// total: the total value
// percentage: the percentage to calculate
// The function should return the calculated percentage of the total.
// Writhe your code here

let valueCalculation = (totalValue, percentage) => totalValue * percentage / 100;
console.log(valueCalculation(1800, 10));