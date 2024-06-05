## Sorting

### SortByMostRecentYear

The sortByMostRecentYear function takes an array of movie objects and sorts them in descending order based on the year they were released. It uses the sort method of arrays in JavaScript, which accepts a comparator function. This comparator function subtracts the year of the second movie from the year of the first movie, ensuring that movies with more recent years come first in the sorted array.

    function sortByMostRecentYear(movies):
    // Sort the movies array in place using the sort method
    movies.sort(function(a, b):
        // Compare the year properties of the movies
        // Return the difference b.year - a.year
        return b.year - a.year
    )

    // Return the sorted movies array
    return movies

### sortByTitleAlphabetically

The sortByTitleAlphabetically function takes an array of movie objects and sorts them in alphabetical order based on their titles. It uses the sort method of arrays in JavaScript, which accepts a comparator function. This comparator function compares the titles of two movies using the localeCompare method, which handles string comparison according to the default locale.

Pseudo Code

    function sortByTitleAlphabetically(movies):

    // Sort the movies array in place using the sort method
    movies.sort(function(a, b):
        // Compare the title properties of the movies using localeCompare
        return a.title.localeCompare(b.title)
    )

    // Return the sorted movies array
    return movies
