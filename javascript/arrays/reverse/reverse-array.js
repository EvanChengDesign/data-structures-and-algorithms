// Alternative Approach, different than whiteboard code

function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements at left and right indices
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move towards the center of the array
    left++;
    right--;
  }

  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
