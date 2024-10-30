function isPalindrome(s: string): boolean {
  let validChars = s.toLowerCase().match(/[a-z0-9]/g);
  
  // If validChars is null then that means there were no alphanumeric characters
  // return true because an empty string is a palindrome
  if(!validChars) {
      return true;
  }
  const filteredString = validChars.join('');
  validChars.reverse();
  const reversedString = validChars.join('');

  return reversedString === filteredString;
};