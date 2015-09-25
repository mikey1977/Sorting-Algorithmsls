function BubbleSort(items) {
  this.items = items;
  this.array = [];
}

BubbleSort.prototype.sort = function() {
  var sorted;
  do {

    //sorted initialized to false;
    sorted = false;
    for (var i = 0; i < this.items.length; i++) {

      //if current is greater than next is true, enter loop
      if (this.items[i] > this.items[i + 1]) {

        //save higher value into temp
        var temp = this.items[i];

        //reassign lower value to first index
        this.items[i] = this.items[i + 1];

        //replace next index with saved value
        this.items[i + 1] = temp;

        //set sorted to true
        //continue to loop through until no items are left to sort
        sorted = true;
      }
    }
  }
    while (sorted);
    return this.items;

};

var bubbles = new BubbleSort([1, 4, 2, 7, 3, 8, 5, 11, 98, 6, 15, 14, 9, 20]);
bubbles.sort();