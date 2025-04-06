// Task 1: Get the First and Last Elements of an Array
// Write a function getFirstAndLast(arr) that returns
// the first and last elements of the given array as separate values.
// Requirements:
// The function should return two values: the first and last elements.
// If the array has only one element, return that element as both the first and last element.
// Assume the array will always have at least one element.
// Write you code here

function getFirstAndLast(animals) {
  let firstElement = animals[0];
  let lastElement= animals.at(-1);

 if (animals.length === 1) {
return animals; 
 }
return [firstElement, lastElement];
};
console.log(getFirstAndLast(['pig','frog','cow']));
console.log(getFirstAndLast(['pig']));


// Task 2: Get the Second Element in an Array
// Write a function getSecondElement(arr) that returns the second element of the array.
// Requirements:
// The second element is at index 1.
// If the array has fewer than two elements,
// throw an error with the message "Array should have a minimum of 2 elements.".
// Write you code here

function getSecondElement(colors) {
let secondElement = colors[1];

  if (colors.length < 2) {
    return ('Array should have a minimum of 2 elements');
  }
return secondElement;
}
console.log(getSecondElement(['blue', 'pink', 'red']));
console.log(getSecondElement(['blue']));

// Task 3: Access the First Element That is Greater Than 10
// Write a function getFirstGreaterThanTen(arr)
// that returns the first element from the array that is greater than 10.
// Requirements:
// Use indexing to access each element.
// If no elements are greater than 10, return undefined.
// Stop once the first element greater than 10 is found.
// Write you code here

function getFirstGreaterThanTen(numbers) {

  for (i = 0; i < numbers.length; i ++) {
    if (numbers[i] > 10) {
      return numbers[i];
    }
  }
    return undefined;
  }
  console.log(getFirstGreaterThanTen([2,3,10,4,2,4,12,,33,11,33]));
