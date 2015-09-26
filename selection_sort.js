//Sorting achieved by identifying the smallest element in an array and setting
// that element at index 0, with subsequent iterations identifying and setting
// the lowest remaining elements in their respective indices until the entire
// array is sorted.

var sample = [5, 6, 2, 99, 65, 76, 34, 1, 19, 85, 90, 33, 37, 12];
var sample2 = [56, 44, 21, 45, 21, 88, 101, 1, 2, 3];




function selectionSort(array) {

  // create reference marker
  var marker;

  // traverse array with marker
  for (i = 0; i < array.length; i++) {
    marker = i;

    // analyze array element to the right of the marker
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[marker]) {

        // reassign marker as j if element to right is less than marker
        marker = j;
      }
    }

    // if marker position changes, exchange
    if (i != marker) {
      exchange(array, i, marker);
    }
  }
  return array;
}

function exchange(array, original, next) {

  // original saves to temp
  var temp = array[original];

  // next takes position of original
  array[original] = array[next];

  // original gets moved to next
  array[next] = temp;
}

selectionSort(sample);
// console.log(selectionSort(sample2));