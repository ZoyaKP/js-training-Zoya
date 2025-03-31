// Task 1: Get String Length
// Requirement: Write a function that receives
// a string as input and returns the length of the string.
// Write your code here!

function calculateStringLength(name) {
  
  return name.length;
}
console.log(calculateStringLength('Zoya'));

// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.
// Write your code here!

function printStringCharacter(lastName) {
  if (typeof lastName !== 'string') {
    console.log('Invalid input');
    return; // A return statement is needed here to stop the function execution if the validation fails.
 
  }
  if (lastName.length < 1 || lastName.length > 50) {
    console.log('Invalid character count');
    return; // A return statement is needed here to stop the function execution if the validation fails.
  }
 for (let i = 0; i < lastName.length; i++) {
  console.log(lastName[i]);
 }
}
printStringCharacter('Karapetyan');
printStringCharacter(12);
printStringCharacter('');

// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).
// Write your code here!

function capitalizeNameSurname (fullName) {
  if (typeof fullName !== 'string') {
  console.log('Invalid input');
    return; // A return statement is needed here to stop the function execution if the validation fails.
  };
  const spaceIndex = fullName.indexOf(' ');
  if (spaceIndex == -1){
    console.log('A part of input is missing');
  } else {
    const firstName = fullName.substring(0, spaceIndex);
    const lastName = fullName.substring(spaceIndex + 1);
    if (lastName.includes(' ')) {
      console.log('Input shall consist of two parts');
    } else {
      const finalFirstName = firstName[0].toUpperCase() + firstName.substring(1);
      const finalLastName = lastName[0].toUpperCase() + lastName.substring(1);
      console.log(finalFirstName + ' ' + finalLastName);
      return finalFirstName + ' ' + finalLastName;
    }
  }
}
capitalizeNameSurname('zoya karapetyan');
;
// Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.
// Write your code here!

function alternateCase (color) {
  if (color.length < 10 || color.length > 20){
    console.log('Invalid character count');
    return; // A return statement is needed here to stop the function execution if the validation fails.
  }
  let result = '';
  for (let i = 0; i < color.length; i++) {
    if (i % 2 === 0) {
        result += color[i].toUpperCase();  
    } else {
        result += color[i].toLowerCase();  
    }
}
return result;
}
console.log(alternateCase('purplecolor'));
alternateCase('blue');
alternateCase('morethantwentycharactersvalidation');
// Task 5: Check Palindrome
// Requirement: Write a function that receives a string and checks if the string is a palindrome
// (i.e., the string is the same forwards and backwards).
// The function should return true if the string is a palindrome and false otherwise.
// Ignore spaces and punctuation.
// Example:
// Input: "racecar"
// Output: true
// Explanation: The string "racecar" is the same forwards and backwards, so the output is true.
// Write your code here!

function palindrome (string) {
  for (i = 0, j = string.length - 1; i < Math.floor(string.length / 2); i++, j--) {
    console.log('iteration', i);
   if (string[i] !== string[j]) {
    return false;
   } else {
    continue
   };
  }
  return true;
};
console.log (palindrome('laol'));
console.log (palindrome('raccar'));
console.log (palindrome('racecar'));


// Task 6: Count Specific Character in String
// Requirement: Write a function that receives two values: a main string and a character.
// The function should return how many times the specified character appears in the string.
// Write your code here!

function characterCount(string, character) {
  let characterCount = 0;
  for (i = 0; i < string.length; i++){
   if (string[i] == character) {
    characterCount = characterCount + 1;
   }
  }
  return characterCount;
}
console.log(characterCount('window', 'w'));
console.log(characterCount('window', 'a'));
