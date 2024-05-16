'use strict';

function validateBrackets(input) {
  const stack = [];
  const matchingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of input) {
    if (char === '(' || char === '[' || char === '{'){
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}


module.exports = validateBrackets;
