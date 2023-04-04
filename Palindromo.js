function checkPalindrome(str) {
    let reversedStr = '';
    
    for(let i = str.length-1; i >= 0; i--) {
      reversedStr += str[i];
    }
    console.log(str.split(" ").join(""));
    console.log(reversedStr.split(" ").join(""));
    if (str.split(" ").join("") === reversedStr.split(" ").join("")) {
      return `The word or sentence, "${str}", is a palindrome!`;
    } else {
      return `The word or sentence, "${str}", is not a palindrome.`;
    }
  }
  
  console.log(checkPalindrome('may a moody baby doom a yam'));