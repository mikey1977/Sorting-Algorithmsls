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
  it('should have a property array', function() {
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

describe('MergeSort', function() {
  var mergy;
  beforeEach(function() {
    mergy = new MergeSort([1, 4, 2, 7, 3, 8, 5]);
  });
  it('should be a class', function() {
    expect(MergeSort).to.be.a('function');
  });
  it('should have a property items', function() {
    mergy.should.have.property('items');
    mergy.items.should.deep.equal([1, 4, 2, 7, 3, 8, 5])
  })
});

