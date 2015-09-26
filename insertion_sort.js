// Creates two subarrays, one starts with a single element, to which all the elements
//  in the second subarray are compared against.  As the first subarray grows, incoming
//  elements from the second subarray are inserted into their correct position within
//  the first subarray.
var sample = [5, 6, 2, 99, 65, 76, 34, 1, 19, 85, 90, 33, 37, 12];
var sample2 = [56, 44, 21, 45, 21, 88, 101, 1, 2, 3];

function insertionSort(array) {
debugger;
  for (var i = 1; i < array.length; i++) {
    var temp = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}
insertionSort(sample);
