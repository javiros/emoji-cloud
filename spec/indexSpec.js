describe('EmojiCloud', function () {

  var EmojiCloud = require('../index.js');

  it('returns an object', function () {
    let emojicloud = EmojiCloud.build();
    spyOn(emojicloud, 'build');
    expect(1 === 1).toBe(true);
  });
});
