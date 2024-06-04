# Blog Article: Understanding Merge Sort with Visual Steps

## Introduction:

Merge Sort is a classic divide-and-conquer algorithm used to sort an array. It works by recursively splitting the array into halves, sorting each half, and then merging the sorted halves back together. This article will walk you through the Merge Sort algorithm step-by-step using the array `[8, 4, 23, 42, 16, 15]`. We will provide visual representations of each step to aid your understanding.

## Pseudocode:

Before diving into the example, let's review the pseudocode for Merge Sort:

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
## Example with Visuals:

Initial Array:
We start with the array [8, 4, 23, 42, 16, 15].

[8, 4, 23, 42, 16, 15]

### Step 1: Split the Array:
Split the array into two halves.

Left:  [8, 4, 23]
Right: [42, 16, 15]

### Step 2: Split the Left Half
Continue splitting the left half [8, 4, 23].

Left:  [8]

Right: [4, 23]

### Step 3: Split the Right Half of the Left Half
Split the right half of the left half [4, 23].

Left:  [4]

Right: [23]

### Step 4: Merge [4] and [23]
Since [4] and [23] are already sorted, merge them.

Merged: [4, 23]

### Step 5: Merge [8] and [4, 23]
Merge [8] and [4, 23].

Merged: [4, 8, 23]

### Step 6: Split the Right Half
Split the right half [42, 16, 15].

Left:  [42]

Right: [16, 15]

### Step 7: Split the Right Half of the Right Half
Split the right half of the right half [16, 15].

Left:  [16]

Right: [15]

### Step 8: Merge [16] and [15]

Since [16] and [15] are not sorted, merge them in sorted order.
Merged: [15, 16]

### Step 9: Merge [42] and [15, 16]
Merge [42] and [15, 16].

Merged: [15, 16, 42]

### Step 10: Merge the Two Halves
Finally, merge [4, 8, 23] and [15, 16, 42].

Final Merged: [4, 8, 15, 16, 23, 42]

## Conclusion:

By following the pseudocode and implementing it in JavaScript, you can understand how Merge Sort works and how to apply it to sort arrays. The provided tests ensure that the implementation is working correctly across different scenarios. Happy coding!
