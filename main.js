function telephoneCheck(str) {

  let invalid = /[?]/g;
  console.log(str)
  if (invalid.test(str)) {
    return false
  }

  let openParenthesis = 0;
  let closeParenthesis = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openParenthesis++;
    } else if (str[i] === ")") {
      closeParenthesis++;
      if (closeParenthesis > openParenthesis) {
        return false;
      }
    }
  }
  if (openParenthesis !== closeParenthesis) {
    return false;
  }

  let newStr = str.replace(/[^\d+]/g, "");
  console.log(typeof newStr, newStr)

  let num = parseInt(newStr, 10);

  console.log(typeof num, num);

  return (num > 1000000000 && num < 9999999999
    || num > 10000000000 && num < 19999999999);
}

let result = telephoneCheck("555-555-5555");
console.log(result);