const { sortByMostRecentYear, sortByTitleAlphabetically } = require('../index');

test('sortByMostRecentYear sorts movies by most recent year first', () => {
  const movies = [
    { title: 'Movie A', year: 2000, genres: ['Action'] },
    { title: 'Movie B', year: 2010, genres: ['Drama'] },
    { title: 'Movie C', year: 2005, genres: ['Comedy'] },
  ];

  const sortedMovies = sortByMostRecentYear(movies);

  expect(sortedMovies).toEqual([
    { title: 'Movie B', year: 2010, genres: ['Drama'] },
    { title: 'Movie C', year: 2005, genres: ['Comedy'] },
    { title: 'Movie A', year: 2000, genres: ['Action'] },
  ]);
});

test('sortByTitleAlphabetically sorts movies alphabetically by title', () => {
  const movies = [
    { title: 'The Matrix', year: 1999, genres: ['Sci-Fi'] },
    { title: 'A Beautiful Mind', year: 2001, genres: ['Biography'] },
    { title: 'Inception', year: 2010, genres: ['Action'] },
    { title: 'An American Tail', year: 1986, genres: ['Animation'] },
  ];

  const sortedMovies = sortByTitleAlphabetically(movies);

  expect(sortedMovies).toEqual([
    { title: 'A Beautiful Mind', year: 2001, genres: ['Biography'] },
    { title: 'An American Tail', year: 1986, genres: ['Animation'] },
    { title: 'Inception', year: 2010, genres: ['Action'] },
    { title: 'The Matrix', year: 1999, genres: ['Sci-Fi'] },
  ]);
});
