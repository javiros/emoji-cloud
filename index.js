'use strict';

/**
 * generates an emoji cloud based on array of data
 * @param {[data]} Array of data
 * @return {element}
 */
/* Highcharts wrapper / helper */


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

    function buildEmojicloud(selector, emojiData){
      // emojiSpinner.show();
      $(selector).css({'visibility': 'hidden', 'height': '600'});
      $(selector).jQCloud(emojiData, {
        afterCloudRender: emojiBinder(selector),
        fontSize: {
          from: 0.2,
          to: 0.05
        }
      });
    }

    function emojiBinder(selector) {
      setTimeout(function() {
        var spans = $(selector).children('span');
        // emojiSpinner.hide();
        $(selector).css('visibility', 'visible');
        insertEmojis(spans);
      }, 3000);
    }

    function insertEmojis(spans) {
      $.each(spans, function(i, sp) {
        var emojicode = '&#x' + $(sp).attr('title');
        $(sp).html(emojicode);
      });
    }


}(jQuery));