var expect = chai.expect;
var should = chai.should();

describe('BubbleSort', function() {
  var bubbly;
  beforeEach(function() {
    bubbly = new BubbleSort([1, 4, 2, 7, 3, 8, 5]);
  });
  it('should be a class', function() {
   expect(BubbleSort).to.be.a('function');
  });
  it('should have a property items', function() {
    bubbly.should.have.property('items');
    bubbly.items.should.deep.equal([1, 4, 2, 7, 3, 8, 5])
  });
  it('should have a property "array"', function() {
    bubbly.should.have.property('array');
    bubbly.array.should.deep.equal([]);
  });

  describe('sort', function() {

    it('should be a function', function() {
      bubbly.sort.should.be.a('function');
    });
    it('should sort items from low to high', function() {
      expect(bubbly.sort()).to.deep.equal([1, 2, 3, 4, 5, 7, 8]);
    });
  });
});

describe('mergeSort', function() {
  it('should be a function', function() {
    expect(mergeSort).to.be.a('function');
  });
  it('should sort items in an array from low to high', function() {
    expect(mergeSort(sample)).to.deep.equal([1, 2, 5, 6, 12, 19, 33, 34, 37, 65, 76, 85, 90, 99]);
    expect(mergeSort(sample2)).to.deep.equal([1, 2, 3, 21, 21, 44, 45, 56, 88, 101]);
  });
});

describe('insertionSort', function() {
  it('should be a function', function() {
    expect(insertionSort).to.be.a('function');
  });
  it('should sort items in an array from low to high', function() {
    expect(insertionSort(sample)).to.deep.equal([1, 2, 5, 6, 12, 19, 33, 34, 37, 65, 76, 85, 90, 99]);
    expect(insertionSort(sample2)).to.deep.equal([1, 2, 3, 21, 21, 44, 45, 56, 88, 101]);
  });
});

describe('selectionSort', function() {
  it('should be a function', function() {
    expect(selectionSort).to.be.a('function');
  });
  it('should sort items in an array from low to high', function() {
    expect(selectionSort(sample)).to.deep.equal([1, 2, 5, 6, 12, 19, 33, 34, 37, 65, 76, 85, 90, 99]);
    expect(selectionSort(sample2)).to.deep.equal([1, 2, 3, 21, 21, 44, 45, 56, 88, 101]);
  });
});

describe('quickSort', function() {
  it('should be a function', function() {
    expect(quickSort).to.be.a('function');
  });
  it('should sort items in an array from low to high', function() {
    expect(quickSort(sample)).to.deep.equal([1, 2, 5, 6, 12, 19, 33, 34, 37, 65, 76, 85, 90, 99]);
    expect(quickSort(sample2)).to.deep.equal([1, 2, 3, 21, 21, 44, 45, 56, 88, 101]);
  });
});
