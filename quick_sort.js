function quickSort(arr) {
  debugger;
//if array is empty
  if (arr.length === 0) {
  return [];
};
  var left = [];
  var right = [];

  // set pivot to the value of index 0
  var pivot = arr[0];
  var count = 0;

  //go through each element in array
  for (var i = 1; i < arr.length; i++) {
    count++;

    // push values lower than pivot value to left, higher to right
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // concatenate left, pivot value, and right into single array
  return quickSort(left).concat(pivot, quickSort(right));
}

var sample = [5, 6, 2, 99, 65, 76, 34, 1, 19, 85, 90, 33, 37, 12];
quickSort(sample);
