// Tell chai we will be using the "should" style assertions.
chai.should();


describe('EmojiCloud', () => {
  describe('#_transformData', () => {


    let inputData = {
      data: [
        {
          "unicode": "26F5",
          "name": "boat",
          "count": 43
        }, {
          "unicode": "1F60D",
          "name": "heart_eyes",
          "count": 39
        }
      ]
    };
    console.log('inputData', inputData.data);
    let expectedData = [
      {
        'text': 'xx',
        'weight': 43,
        'html': { 'title': '26F5' }
      },
      {
        'text': 'xx',
        'weight': 39,
        'html': { 'title': '1F60D' }
      }
    ];
    console.log('expectedData', expectedData);
    beforeEach(() => {
      selector = '#emoji-cloud';
      emojicloud = new EmojiCloud(selector, inputData);
    });

    it('exists', function () {
        emojicloud._transformData.should.be.a('function');

    });

    it('returns transformed data', () => {
      emojicloud._transformData(inputData.data).should.deep.equal(expectedData);
    });
  });
});