function merge(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1, if any
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2, if any
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  return arr;
}

function mergeSort(arr) {
  // Base case: if the array has 0 or 1 elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const mid = Math.floor(arr.length / 2);

  // Recursively split the array into left and right halves
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort the left and right halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted left and right halves
  return merge(sortedLeft, sortedRight);
}

module.exports = { merge, mergeSort };
