// Creates two subarrays, one starts with a single element, to which all the elements
//  in the second subarray are compared against.  As the first subarray grows, incoming
//  elements from the second subarray are inserted into their correct position within
//  the first subarray.
var sample = [5, 6, 2, 99, 65, 76, 34, 1, 19, 85, 90, 33, 37, 12];
var sample2 = [56, 44, 21, 45, 21, 88, 101, 1, 2, 3];

function insertionSort(array) {

  for (var i = 1; i < array.length; i++) {
    // initializes temp with the value at index 1
    var temp = array[i];

    // first iteration starts with j at 0
    // if j is greater than or equal to 0, and the value at index[j]
    //    is greater than the stored value in temp, compare from right to left
    //       -if the element being analyzed(j) is less than the stored element (i), move it
    //       -continue until the the moved number is greater in value than the element to
    //        the left, and less than the element to its right
    // if either condition is not true (if index[j] is less than temp), the elements
    //    are not changed
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}
insertionSort(sample);
