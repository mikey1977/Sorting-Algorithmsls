// create columns composed of divs, each column is derived from index of array

var array = [1, 2, 3, 4, 5, 6, 11, 7, 8, 9, 10];
var div = document.createElement('div');

window.onload = function() {
  bubbleAnimation(array);
};

//creating rows
function bubbleAnimation(array, trigger) {

  if (trigger === true) {

    var containerDiv = document.getElementById('container');
    var newContainerDiv = document.createElement('div');
    newContainerDiv.id = 'container';

    containerDiv.innerHTML = '';
    containerDiv.appendChild(newContainerDiv);

  } else {
    var containerDiv = document.getElementById('container');
    var buttonSpot = document.getElementById('button');
    var bubbleButton = document.createElement('button');
    bubbleButton.className = 'sortButton';
    bubbleButton.appendChild(document.createTextNode('Bubble Sort'));
    bubbleButton.addEventListener('click', function() {
    var newBubbleSort = new BubbleSort(array);
      newBubbleSort.sort();

    });
    buttonSpot.appendChild(bubbleButton);

  }
  //looping over array and attaching div elements
  for (var i = 0; i < array.length; i++) {

    var rowDiv = document.createElement('div');

    //styling rows
    rowDiv.style.background = 'green';
    rowDiv.style.height = '25px';
    rowDiv.style.width = array[i] * 50 + 'px';

    //appending rows to container id in HTML
    containerDiv.appendChild(rowDiv);

  }

}
