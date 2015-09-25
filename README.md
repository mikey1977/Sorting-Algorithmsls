# Sorting-Algorithmsls

BUBBLE SORT

An algorithm that sorts an array by comparing two adjacent elements at a time.  Classified as an O(n2) / double time algorithm, meaning processing times are double that of O(1) / linear time algorithms, which have processing times that are linearly proportional to the number of elements being analyzed.

  1.  Compares starting index to next index
  2a.  If starting index is lower than next, there is no re-sorting.
  2b.  If starting index is higher than next, starting index is saved to a variable, second index is reassigned as first index, and saved value is reassigned as second index.
  3.  After comparison of first two indices, comparison shifts to second and third indices.
  4.  Second and third indices are sorted, as above.
  5.  Iterations continue until all elements are sorting.


MERGE SORT

An O(log n) sorting algorithm - slower than constant time, but faster than linear time.  Analyzes 10-fold increases in array lengths with linear increases in processing time.  If analysis of 10 elements takes 1 sec, 100 elements would take 2 sec, 1000 elements would take 3 sec, etc.

  1.  Split array into two subarrays, each subarray into their own subarrays, and so on until only one or two elements subarrays exist.
  2.  Sort by comparing adjacent subarrays with one another.
  3.  Merge sorted subarrays, until only a single sorted array exists.


Insertion Sort

Similar to Bubble Sort, but splits an array into sorted and unsorted subarrays, with the initial sorted subarray containing only a single element.

  1.  Divide unsorted array into sorted and unsorted subarrays.
  2.  Compare an element from the unsorted subarray with the sorted
  3.  Insert element from unsorted into correct position of sorted from right to left
        a.  if unsorted is greater than unsorted, insert.
        b.  if unsorted is less than unsorted:
            1.  save unsorted into memory
            2.  reassign sorted element to unsorted's position
            3.  reassign saved unsorted element to sorted's former position
  4.  Continue until all elements are inserted into the sorted array.


Selection Sort

An O(n2) algorithm that scans an array and swaps elements based on their size/value and iteration number.  The smallest element would be swapped to index 0, the second smallest to index 1, etc.  Probably one of the silliest and most inefficient sorting methods ever devised.

  1.  Loop through array and identify index number of smallest element
  2.  Swap identified index with index 0.
  3.  Iterate through array to find next smallest element
  4.  Swap element with element at index 1.
  5.  Continue until all elements are sorted.


Quick Sort

An O(log n) algorithm that uses recursion to sort an array, and that theoretically outperforms merge sort.  This method selects a 'pivot' element to which all other elements are compared, and rearranges so that all elements less than the pivot are to the left, and all elements larger than the pivot are to the right.  The subarrays on the left and right are then recursively sorted, resulting in a fully sorted array.

  1.  Choose pivot element
  2.  Rearrange elements smaller than the pivot to the left, larger to the right
  3.  Sort subarrays to left and right of pivot
