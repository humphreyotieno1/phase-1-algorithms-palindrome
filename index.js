function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  let left = 0;
  let right= lowerCaseWord.length -1;

  while (left < right) {
    if (lowerCaseWord[left] !== lowerCaseWord[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Pseudocode
  - Convert input to lowercase
  - Initialise two pointers, one at the start and one at the end of the word
  - While the left is less than the right pointer:
    - If characters at current pointers are not equal, return false (not a palindrome)
    - Move the left pointer to the right and right to the left
  - If the loop completes without returning false, return true (a palindrome)
*/

/*
  The function uses a case-insensitive approach by converting the input word to lowercase.
  Then, it employs a two-pointer technique to compare characters from the 
  beginning and end of the word simultaneously, moving towards the center. 
  If at any point the characters at the current pointers are not equal, 
  the function concludes that the word is not a palindrome and returns false. Otherwise, 
  if the loop completes without returning false, the word is recognized 
  as a palindrome, and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
