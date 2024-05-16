const validateBrackets = require('../index.js');

describe('validateBrackets', () => {
  const tests = [
    { input: "{}", expected: true },
    { input: "{}(){}", expected: true },
    { input: "()[[Extra Characters]]", expected: true },
    { input: "(){}[[]]", expected: true },
    { input: "{}{Code}[Fellows](())", expected: true },
    { input: "[({}]", expected: false },
    { input: "(]", expected: false },
    { input: "{(})", expected: false },
    { input: "{", expected: false },
    { input: ")", expected: false },
    { input: "[}", expected: false },
    { input: "(((())))", expected: true },
    { input: "((({}))", expected: false },
    { input: "{[()()]}", expected: true },
    { input: "{[(])}", expected: false },
    { input: "", expected: true }, // edge case: empty string
    { input: "no brackets here", expected: true }, // edge case: no brackets
    { input: "[[[", expected: false }, // edge case: only opening brackets
    { input: "]]]", expected: false }, // edge case: only closing brackets
    { input: "[{({[{}]})}]", expected: true } // complex nested brackets
  ];

  tests.forEach((testCase, index) => {
    test(`Test ${index + 1}: validateBrackets("${testCase.input}") should return ${testCase.expected}`, () => {
      expect(validateBrackets(testCase.input)).toBe(testCase.expected);
    });
  });
});

