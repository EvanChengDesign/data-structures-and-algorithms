const { repeatedWords, wordCount, mostFrequentWords } = require('../index');

describe('repeatedWords', () => {
  test('should return the first repeated word', () => {
    expect(repeatedWords("this is a test this is only a test")).toBe("this");
    expect(repeatedWords("hello world hello")).toBe("hello");
    expect(repeatedWords("no repeats here")).toBe(null);
  });

  test('should handle case sensitivity correctly', () => {
    expect(repeatedWords("Hello hello")).toBe("hello");
  });

  test('should handle edge cases', () => {
    expect(repeatedWords("")).toBe(null);
    expect(repeatedWords("singleword")).toBe(null);
  });
});

describe('wordCount', () => {
  test('should return a count of each word', () => {
    expect(wordCount("this is a test this is only a test")).toEqual({
      this: 2,
      is: 2,
      a: 2,
      test: 2,
      only: 1
    });
    expect(wordCount("hello hello world")).toEqual({
      hello: 2,
      world: 1
    });
  });
});

describe('mostFrequentWords', () => {
  test('should return a list of the most frequently used words', () => {
    expect(mostFrequentWords("this is a test this is only a test")).toEqual(["this", "is", "a", "test"]);
    expect(mostFrequentWords("hello hello world")).toEqual(["hello"]);
  });
});
