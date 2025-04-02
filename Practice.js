//let planet = 'Mars';
//let welcomeMessage = 'Welcome to ' + planet + '!';
//console.log(welcomeMessage);  // Prints: "Welcome to Mars!"


/*
 * Task: Comment Validation
 * Implement a function called validateComment(comment)
 * that checks whether a given comment contains any harassing or
 * offensive words from a predefined list.
 * The function should ensure input validation and detect harmful words using a simple for loop.
 *
 * 📋 **Requirements:**
 *
 * 1. The function must accept a single argument, comment.
 * 2. If the input is not a string, return the message:
 *    "Invalid input: Comment must be a string."
 * 3. The function should check whether comment contains any word from a predefined
 *    list of harassment-related words:
 *    ["idiot", "loser", "moron", "stupid", "dumb", "fool", "bully", "creep"]
 * 4. The check must be case-insensitive, meaning "Idiot" and "idiot" should be treated the same.
 * 5. Use a simple for loop for iteration (do not use array methods like .some(), .filter(), or .find()).
 *
 * ⚠️ If the comment contains any harassing word, return the message:
 *    "This comment can't be posted as it contains the word: '<bad word>'"
 *    The message should include the first detected harassing word.
 * 6. If the comment does not contain any offensive words, return the original comment prefixed with:
 *    "Comment posted successfully! " + comment
 */
function validateComment(comment) {

  const harrassingWords = ["idiot", "loser", "moron", "stupid", "dumb", "fool", "bully", "creep"];

  if (typeof comment !== 'string') {
    console.log('Invalid input: Comment must be a string');
  };
    for (i = 0; i < harrassingWords.length; i++) {
    if (comment.includes(harrassingWords[i].toLowerCase)) {
      console.log(`This comment can't be posted as it contains the word: ${harrassingWords[0]}`)
    } else
    {
      console.log('Comment posted successfully' + comment);
    }  
  }
  
  console.log(validateComment(moron));
}