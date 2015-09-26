//find midpoint of array by dividing by two and rounding down
//continue splitting until subarrays consist of only a single element
//merge subarrays (1+1), (2+2), (4+4), etc.

var sample = [5, 6, 2, 99, 65, 76, 34, 1, 19, 85, 90, 33, 37, 12];
var sample2 = [56, 44, 21, 45, 21, 88, 101, 1, 2, 3];

function mergeSort(array) {

  // if array length is 1, it is sorted - return
  if (array.length === 1) {
    return array;

  // if array length is 2, sort
  } else if (array.length === 2) {

    // if first element is less than second, it is sorted - return
    if (array[0] < array[1]) {
      return array;
    } else {

      // otherwise, return second element, then first
      return [array[1], array[0]];
    }
  } else {

    // divide arrays larger than 2 elements in half
    // for uneven array lengths, halfway point will be rounded down
    var arrayPre = mergeSort(array.slice(0, Math.floor(array.length / 2)));

    // slice the rest of the array
    var arrayPost = mergeSort(array.slice(Math.floor(array.length / 2)));

    // set reference to start of each subarray
    var preStart = 0;
    var postStart = 0;

    // create empty array to store sorted data
    var temp = [];

    // set condition to analyze as long as index is less than array length
    while (preStart < arrayPre.length && postStart < arrayPost.length) {

      // if the value at a given index in the first subarray is less than the corresponding index in the second
      if (arrayPre[preStart] < arrayPost[postStart]) {

        // push that value into the temp array, and increment index by one
        temp.push(arrayPre[preStart]);
        preStart += 1;

        // if the value in the second array is smaller, push that value and increment index
      } else {
        temp.push(arrayPost[postStart]);
        postStart += 1;
      }
    }

    // sets individual condition for first subarray
    while (preStart < arrayPre.length) {
      temp.push(arrayPre[preStart]);
      preStart++;
    }

    //sets individual condition for second subarray
    while (postStart < arrayPost.length) {
      temp.push(arrayPost[postStart]);
      postStart++;
    }

    return temp;
  }

}


// mergeSort(sample);
// console.log(mergeSort(sample));