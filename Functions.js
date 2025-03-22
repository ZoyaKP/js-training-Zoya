// Task 1: Function Declaration
// Requirement: Declare a function using the function declaration syntax.
// The function should accept two parameters: 'firstName' and 'lastName',
// and return a full name by combining both parameters with a space in between.
// Write your code here
function nameDeclaration(firstName, lastName){
  let fullName = firstName + ' ' + lastName;
  return fullName;
}
console.log(nameDeclaration('Zoya', 'Karapetyan'));
// Task 2: Function Expression
// Requirement: Declare a function using a function expression.
// The function should accept a number as a parameter and return whether the number is even or odd.
// Write your code here
const checkIfNumberIsEven = function(number){
  if (number % 2 === 0) {
  return true;
  } else {
  return false;
  }
}

console.log('Number is even:', checkIfNumberIsEven(8));
console.log('Number is even:', checkIfNumberIsEven(4));
console.log('Number is even:', checkIfNumberIsEven(9));

// Task 3: Default Value with an Optional Parameter
// Requirement: Create a function that accepts a 'discount' parameter for an item price.
// If no 'discount' is provided, it should default to 0%. The function should calculate and return the final price after applying the discount.
// Write your code here

function priceCalculation (itemPrice, discount = 0){
 let finalPrice = itemPrice - itemPrice * discount / 100;
 return finalPrice;
}
console.log(priceCalculation(500));
console.log(priceCalculation(500, 10));