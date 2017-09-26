'use strict';

var EmojiCloud = (function() {
    return {
        build: build
    }

    function build(selector, options) {
      var emojiData = transformData(options.data)
      buildEmojicloud(selector, emojiData);
    }

    function transformData(options) {
      var transformedData = []
      options.forEach(function(k) {
        transformedData.push({ text: 'xx', weight: k.count, html: { title: k.unicode }, name: k.name });
      });
      return transformedData;
    }

    function cssSettings(selector, css) {
      $(selector).css(css);
    }

    function buildEmojicloud(selector, emojiData){
      // emojiSpinner.show();
      cssSettings(selector, {'visibility': 'hidden', 'height': '600', 'width': '600'})
      $(selector).jQCloud(emojiData, {
        afterCloudRender: emojiBinder(selector),
        fontSize: {
          from: 1,
          to: 0.5
        }
      });
    }

    function emojiBinder(selector) {
      setTimeout(function() {
        var spans = $(selector).children('span');
        // emojiSpinner.hide();
        $(selector).css('visibility', 'visible');
        insertEmojis(spans);
      }, 1500);
    }

    function insertEmojis(spans) {
      $.each(spans, function(i, sp) {
        var emojicode = '&#x' + $(sp).attr('title');
        $(sp).html(emojicode);
      });
    }


}(jQuery));
