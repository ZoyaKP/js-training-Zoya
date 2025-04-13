//Implement customForEach
// Description:
// Create a function customForEach that takes an array and a callback function.
// It should loop over each element of the array and apply the callback to each element — just like the built-in forEach() method.
// Requirements:
// Use a regular for loop or a while loop (do not use .forEach()).
// The callback should receive 3 arguments: currentValue, index, and array.

function customForEach(array, callback) {

  for (i = 0; i < array.length; i ++) {
    callback(array[i], i, array)
  }
}

// ✅ Task 2: Implement customMap
// Description:
// Write a function customMap that works like Array.prototype.map().
// It should return a new array with the results of applying a given function to every element in the input array.
// Requirements:
// Do not use .map().
// Use your own logic with a loop.
// Must return a new array (do not modify the original array).

function customMap(array, callback) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
   let result = callback(array[i]);
   newArray.push(result);
  }
  return newArray;
}
console.log(customMap(['banana', 'apple', 'orange'], (item) => item.length));
// ✅ Task 3: Implement customReverse
// Description:
// Create a function customReverse that reverses the elements of an array and returns the reversed array.
// Requirements:
// Do not use .reverse().
// You may use a loop or swap elements manually.
// Should not use built-in methods that directly reverse arrays.

function customReverse(array) {
  let arrayReverse = [];
  for (i = array.length - 1; i >= 0; i --){
    arrayReverse.push(array[i]);
  }
  return arrayReverse;
  }
console.log(customReverse([1, 2, 3, 4]));
// ✅ Task 4: Implement Bubble Sort
// Description:
// Write a function that sorts an array of numbers using the bubble sort algorithm.
// Requirements:
// Do not use .sort().
// Implement the bubble sort algorithm using loops.
// Return the sorted array.
// [4. 9. 1, 5]  [9,4,5]
function bubbleSort(array) {
  let bubbleArray =  [...array];
  for (i = 0; i < bubbleArray.length - 1; i++){
    for (j = 0; j < bubbleArray.length - 1 - i; j++) {
      if (bubbleArray[j] > bubbleArray[j + 1]) {
        let arrayTmp = bubbleArray[j];
        bubbleArray[j] = bubbleArray[j + 1];
        bubbleArray[j + 1] = arrayTmp;
      }
    }
  }
return bubbleArray;
}
console.log(bubbleSort([4, 4, 9, 1 ,5]));

// ✅ Task 5: Implement customReduce
// Description:
// Create a function customReduce that takes an array, a callback function, and an optional initial value.
// It should apply the callback to accumulate a single result from the array elements — just like the built-in reduce() method.
//
// Requirements:
// - If an initialValue is provided, use it as the starting accumulator and begin iteration from index 0.
// - If no initialValue is provided, use the first element of the array as the accumulator and start from index 1.
// - The callback should receive 4 arguments: accumulator, currentValue, index, and array.
// - Return the final accumulated value.
// - Do not use the built-in .reduce() method.
// - If the array is empty and no initialValue is provided, return undefined.

function customReduce(array, callback, initialValue) {
  if (array.length === 0 && !initialValue) {
    return undefined;
  } else {
    let startingIndex;
    let accumulator;
    if (initialValue) {
      startingIndex = 0;
      accumulator = initialValue;
    } else {
      startingIndex = 1;
      accumulator = array[0];
    }
    for (let i  = startingIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i , array);
    }
    return accumulator;
  }
}
console.log(customReduce([5,6,10], (a,b) => a+b, 3));