# Code Challenge 03: Array - Binary Search

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

The search algorithm used in your function should be a binary search.

## Whiteboard Process:

### [Live Figma Link:](https://www.figma.com/file/fhvRmU7r2FikW7e404etTQ/Whiteboard%3A-Array---Binary-Search?type=whiteboard&node-id=0%3A1&t=Lcy4KeRnOwV8hQNe-1)

![Whiteboard](./ArrayBinarySearch.png)

## Approach & Efficiency:

Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

---
### Big O:

Time Complexity: The time complexity of binarySearch is O( log n) because each step cuts the search space in half, hence the log base 2 of n iterations in the worst case.

Space Complexity: The space complexity is O(1) because it uses constant space as it modifies the pointers within the input array without using additional significant memory.

### Solution Code:

    function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // Print the current state of left, right, and mid
        console.log(`Checking between indexes ${left} and ${right}, middle index is ${mid}`);

        if (arr[mid] === key) {
            console.log(`Key ${key} found at index ${mid}`);
            return mid;
        } else if (arr[mid] < key) {
            console.log(`Key ${key} is greater than middle element ${arr[mid]} (index ${mid}), searching the right half`);
            left = mid + 1;
        } else {
            console.log(`Key ${key} is less than middle element ${arr[mid]} (index ${mid}), searching the left half`);
            right = mid - 1;
        }
    }

    console.log(`Key ${key} not found in the array`);
    return -1;
    }
