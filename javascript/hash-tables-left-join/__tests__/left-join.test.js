const leftJoin = require('../index'); // Import the leftJoin function

test('leftJoin with matching keys', () => {
  const synonyms = {
    diligent: 'employed',
    fond: 'enamored',
    guide: 'usher',
    outfit: 'garb',
    wrath: 'anger'
  };

  const antonyms = {
    diligent: 'idle',
    fond: 'averse',
    guide: 'follow',
    flow: 'jam',
    wrath: 'delight'
  };

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([
    ['diligent', 'employed', 'idle'],
    ['fond', 'enamored', 'averse'],
    ['guide', 'usher', 'follow'],
    ['outfit', 'garb', null],
    ['wrath', 'anger', 'delight']
  ]);
});

test('leftJoin with no matching keys', () => {
  const synonyms = {
    fast: 'quick',
    slow: 'sluggish'
  };

  const antonyms = {
    diligent: 'idle',
    fond: 'averse'
  };

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([
    ['fast', 'quick', null],
    ['slow', 'sluggish', null]
  ]);
});

test('leftJoin with empty hashmaps', () => {
  const synonyms = {};
  const antonyms = {};

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([]);
});

test('leftJoin with partial matching keys', () => {
  const synonyms = {
    diligent: 'employed',
    fond: 'enamored',
    guide: 'usher',
    outfit: 'garb',
    wrath: 'anger'
  };

  const antonyms = {
    diligent: 'idle',
    guide: 'follow'
  };

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([
    ['diligent', 'employed', 'idle'],
    ['fond', 'enamored', null],
    ['guide', 'usher', 'follow'],
    ['outfit', 'garb', null],
    ['wrath', 'anger', null]
  ]);
});

test('leftJoin with null values in synonyms', () => {
  const synonyms = {
    diligent: null,
    fond: 'enamored'
  };

  const antonyms = {
    diligent: 'idle',
    fond: 'averse'
  };

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([
    ['diligent', null, 'idle'],
    ['fond', 'enamored', 'averse']
  ]);
});

test('leftJoin with special characters and case sensitivity', () => {
  const synonyms = {
    'Hello!': 'Hi',
    'Goodbye!': 'Farewell',
    'key': 'lock'
  };

  const antonyms = {
    'Hello!': 'Goodbye',
    'goodbye!': 'Hello',
    'Key': 'Unlock'
  };

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([
    ['Hello!', 'Hi', 'Goodbye'],
    ['Goodbye!', 'Farewell', null],
    ['key', 'lock', null]
  ]);
});

test('leftJoin with large inputs', () => {
  const synonyms = {};
  const antonyms = {};

  for (let i = 0; i < 1000; i++) {
    synonyms[`key${i}`] = `synonym${i}`;
    if (i % 2 === 0) {
      antonyms[`key${i}`] = `antonym${i}`;
    }
  }

  const result = leftJoin(synonyms, antonyms);
  for (let i = 0; i < 1000; i++) {
    if (i % 2 === 0) {
      expect(result).toContainEqual([`key${i}`, `synonym${i}`, `antonym${i}`]);
    } else {
      expect(result).toContainEqual([`key${i}`, `synonym${i}`, null]);
    }
  }
});
