// 'use strict';

import * as jQuery from 'jquery';
// import * as jQCloud from 'jqcloud/jqcloud/jqcloud-1.0.4';
class EmojiCloud {
  build(selector, options) {
    var emojiData = this.transformData(options.data);

    this.buildEmojicloud(selector, emojiData);
  }

  transformData(options) {
    var transformedData = [];

    options.forEach(function (k) {
      transformedData.push({ text: 'xx', weight: k.count, html: { title: k.unicode }, name: k.name });
    });
    return transformedData;
  }

  insertEmojis(spans) {
    jQuery.each(spans, function (i, sp) {
      var emojicode = '&#x' + jQuery(sp).attr('title');

      jQuery(sp).html(emojicode);
    });
  }

  emojiBinder(selector) {
    let self = this;

    setTimeout(function () {
      var spans = jQuery(selector).children('span');

      jQuery(selector).css('visibility', 'visible');
      self.insertEmojis(spans);
    }, 1500);
  }

  cssSettings(selector, css) {
    jQuery(selector).css(css);
  }

  buildEmojicloud(selector, emojiData) {
    // emojiSpinner.show();
    let self = this;

    this.cssSettings(selector, {'visibility': 'hidden', 'height': '600', 'width': '600'});
    jQuery(selector).jQCloud(emojiData, {
      afterCloudRender: self.emojiBinder(selector),
      fontSize: {
        from: 1,
        to: 0.5
      }
    });
  }
  // return {
  //   build: build
  // };
};
// (jQuery));
// console.log('%c EmojiCloud: ', 'background-color:red; color:white;', EmojiCloud);
// module.exports = EmojiCloud;
let emojicloud = new EmojiCloud();

// export default emojicloud.default;
module.exports = emojicloud;
