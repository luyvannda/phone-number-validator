function telephoneCheck(str) {

  let invalid = /[a-zA-Z!@#$%&*_?]/g;
  if (invalid.test(str)) {
    return false
  }
  // Check if the input string has a balanced pair of parentheses around the area code
  let openParenthesis = 0;
  let closeParenthesis = 0;
  let areaCode = false; // flag to indicate if the area code is found
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openParenthesis++;
      if (openParenthesis > 1) {
        return false;
      }
      areaCode = true; // set the flag to true when the area code starts
    } else if (str[i] === ")") {
      closeParenthesis++;
      if (closeParenthesis > openParenthesis) {
        return false;
      }
      areaCode = false;
    } else if (str[i] >= "0" && str[i] <= "9") {
      if (areaCode) {
        // check if the area code has exactly three digits
        let digits = str.slice(i, i + 3); // get the next three characters from the string
        if (digits.length !== 3 || /\D/.test(digits)) {
          return false; // return false if the area code is not three digits or contains non-digit characters
        }
        i += 2; // skip the next two characters
      }
    }
  }
  if (openParenthesis !== closeParenthesis) {
    return false;
  }

  let validFormat = /^(1)?\s?\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})/

  let newStr = str.replace(/[^\d+]/g, "");
  console.log(typeof newStr, newStr)

  let num = parseInt(newStr, 10);
  console.log(typeof num, num);
  // Check if the number is a valid 10-digit number or a valid 11-digit number starting with 1
  if (num > 1000000000 && num < 9999999999
    || num > 10000000000 && num < 19999999999) {
    return validFormat.test(str);
  } else {
    return false
  }
};

let result = telephoneCheck("27576227382");
console.log(result);