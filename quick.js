/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[start];
    let pivotIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotValue) {
        pivotIndex++;
        swap(arr, pivotIndex, i);
      }
    }
  
    swap(arr, start, pivotIndex);
    return pivotIndex;
  }
  
  /*
  quickSort accepts an array, left index, and right index
  */
  
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = pivot(arr, left, right);
      // Recursively sort the left and right partitions
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  // Helper function to swap elements in an array
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  module.exports = {quickSort, pivot};
  