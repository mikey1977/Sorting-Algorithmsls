(function() {
  var animation_speed = 10;
  var container = document.getElementById('container');
  var array = [1, 2, 3, 4, 5, 6, 11, 7, 8, 9, 10];
  var animateUntil = false;
  var frame = 0;
  var animationInterval = null;



  function loop() {

    _sort(array);

    _clearContainer();

    _render();

    // _drawGraph();

    _drawButton();

    frame++;

    if (frame >= animateUntil) {
      clearInterval(animationInterval);
    }
  }
  function _initialize() {
    _drawButton();
    _drawGraph(array);
  }


  function _drawGraph(a) {
    //loop through array
    for (var i = 0; i < a.length; i++) {
      var containerDiv = document.getElementById('container');
      //save div element to rowDiv variable
      var rowDiv = document.createElement('div');

      //style rows
      rowDiv.style.background = 'green';
      rowDiv.style.height = '25px';
      rowDiv.style.width = a[i] * 50 + 'px';

      //append rows to container id in HTML
      containerDiv.appendChild(rowDiv);

    }
  }

  function _drawButton() {
    var bubbleButton = document.createElement('button');
    bubbleButton.id = 'button';
    bubbleButton.appendChild(document.createTextNode('Bubble Sort'));
    document.getElementById('container').appendChild(bubbleButton);
    bubbleButton.addEventListener('click', function() {
      animationInterval = setInterval(loop, animation_speed);
    });
  }

  function _sort(array) {
  // do {

    //sorted initialized to false;
    animatedUntil = true;
    for (var i = 0; i < array.length; i++) {

      //if current is greater than next is true, enter loop
      if (array[i] > array[i + 1]) {

        //save higher value into temp
        var temp = array[i];

        //reassign lower value to first index
        array[i] = array[i + 1];

        //replace next index with saved value
        array[i + 1] = temp;

        //set sorted to true
        //continue to loop through until no array are left to sort
        animatedUntil = false;
      }
      _drawGraph(array);
        //updating frame by frame
        // triggerAnim(array);
    }

    // while (animatedUntil);
    return array;
};


  function _clearContainer() {

    //clear innerHTML with each loop
    container.innerHTML = '';
  }

  function _render() {

    _drawGraph(array);
    // array.forEach(function() {
    //   var block = document.createElement('div');
    //   container.appendChild(block);
    // });
    // _drawGraph();
    // var containerDiv = document.getElementById('container');
    // var newContainerDiv = document.createElement('div');
    // newContainerDiv.id = 'container';

    // containerDiv.innerHTML = '';
    // document.body.appendChild(containerDiv);


}

  _initialize();

  //set interval to loop function with saved animation speed
  // animationInterval = setInterval(loop, animation_speed);
})();

