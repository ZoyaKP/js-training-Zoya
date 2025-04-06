// Task 1: Check for a Forbidden Word (Using includes)
// Write a function containsForbiddenWord(text, forbiddenWord)
// that checks if a given string contains a specific forbidden word.
// The function should return true if the word is found, otherwise false.
// Requirements:
// The function should be case-insensitive.
// Use includes() to check for the word presence.
// Write your code here


const forbiddenWord = 'black';

function containsForbiddenWord(text, forbiddenWord) {
  for (i = 0; i < text.length; i++) {
    if (text.toLowerCase().includes(forbiddenWord.toLowerCase())) {
    return true;
    }
  }
      return false;
    }
  console.log(containsForbiddenWord('Man', forbiddenWord));
  console.log(containsForbiddenWord('Black Man', forbiddenWord));

// Task 2: Get Last N Characters of a String (Using slice)
// Write a function getLastNCharacters(text, n)
// that extracts the last n characters of a string using slice().
// Requirements:
// If n is greater than the string length, return the full string.
// Use slice() to extract the portion.
// Write your code



function getLastNCharacters(text, n) {

 if (n > text.length) {
  return text;
 };
return text.slice(text.length - n);
}
console.log(getLastNCharacters('characters', 3));

// Task 3: Extract the Middle Part of a String (Using substring)
// Write a function extractMiddle(text) that returns the middle portion of a string.
// If the string length is even, return the middle two characters.
// If the string length is odd, return only the middle character.
// Requirements:
// Use substring() to extract the middle part of the string.
// The function should handle both even and odd lengths.
// Write your code


function extractMiddle(text) {
let middleIndex = Math.floor(text.length / 2);

if (text.length % 2 === 0) {
  return text.substring(middleIndex - 1, middleIndex + 1);
}
else {
  return text[middleIndex];
}
}
console.log(extractMiddle('homework')); //even
console.log(extractMiddle('cypress'));//odd
