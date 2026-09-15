chai.should();

describe('EmojiCloud', function() {
  var selector;
  var inputData;
  var emojicloud;

  beforeEach(function() {
    selector = '#emoji-cloud';
    inputData = {
      data: [
        { unicode: '26F5', name: 'boat', count: 43 },
        { unicode: '1F60D', name: 'heart_eyes', count: 39 }
      ]
    };

    var node = document.createElement('DIV');
    node.setAttribute('id', 'emoji-cloud');
    document.body.appendChild(node);

    emojicloud = new EmojiCloud(selector, inputData);
  });

  afterEach(function() {
    var element = document.getElementById('emoji-cloud');
    if (element) {
      element.remove();
    }
  });

  describe('#_transformData', function() {
    it('exists', function() {
      emojicloud._transformData.should.be.a('function');
    });

    it('returns transformed data as WordCloud list entries', function() {
      var expectedData = [['26F5', 43], ['1F60D', 39]];
      emojicloud._transformData(inputData.data).should.deep.equal(expectedData);
    });
  });

  describe('#_insertEmojis', function() {
    it('exists', function() {
      emojicloud._insertEmojis.should.be.a('function');
    });

    it('renders the emoji character after parsing the HTML entity', function() {
      var span = document.createElement('SPAN');
      span.innerText = '1F60D';

      emojicloud._insertEmojis([span]);

      span.textContent.should.equal('😍');
    });
  });

  describe('#_emojiBinder', function() {
    it('exists', function() {
      emojicloud._emojiBinder.should.be.a('function');
    });
  });

  describe('#_cssOption', function() {
    var defaultCss = { visibility: 'hidden', height: '600', width: '600' };
    var customCss = { visibility: 'hidden', height: '900', width: '750' };

    it('exists', function() {
      emojicloud._cssOption.should.be.a('function');
    });

    it('returns default css property object', function() {
      emojicloud._cssOption().should.deep.equal(defaultCss);
    });

    it('returns custom css property object', function() {
      emojicloud._cssOption({ height: '900', width: '750' }).should.deep.equal(customCss);
    });
  });

  describe('#_cssSettings', function() {
    it('exists', function() {
      emojicloud._cssSettings.should.be.a('function');
    });

    it('applies hidden visibility and default dimensions', function() {
      var css = emojicloud._cssSettings();
      css.should.deep.equal({ visibility: 'hidden', height: '600', width: '600' });
    });
  });

  describe('#_buildEmojicloud', function() {
    it('exists', function() {
      emojicloud._buildEmojicloud.should.be.a('function');
    });
  });
});
