function sortByMostRecentYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortByTitleAlphabetically(movies) {
  return movies.sort((a, b) => a.title.localeCompare(b.title));
}

module.exports = { sortByMostRecentYear, sortByTitleAlphabetically };
