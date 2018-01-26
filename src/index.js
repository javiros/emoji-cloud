// 'use strict';
  class EmojiCloud {
    constructor(selector, options) {
      this.transformedData = this._transformData(options.data);
      this.cssOptions = options.cssOptions;
      this._buildEmojicloud(selector, this.transformedData);
    }

    // returns array of transformed input data so it can be added to divs as metada-data
    _transformData(data) {
      let modifiedData = [];

      data.forEach((k) => {
        // pushes to array necessary data: text: placeholder, weight: will provide the size of emoji,
        // html: emoji unicode representation, name: in case emoji does not render
        modifiedData.push({
          text: 'xx',
          weight: k.count,
          html: { title: k.unicode }
        });
      });
      return modifiedData;
    }

    // Inserts emojis into spans, prepends unicode identifier &#x
    _insertEmojis(spans) {
      for (let span of spans) {
        let emojicode = '&#x' + $(span).attr('title');
        $(span).html(emojicode);
      }
    }

    _emojiBinder(selector) {
      setTimeout(() => {
        let spans = $(selector).children('span');
        $(selector).css('visibility', 'visible');
        this._insertEmojis(spans);
      }, 1500);
    }

    _cssOptinon() {
      let cssObj = {
        'visibility': 'hidden',
        'height': '600',
        'width': '600'
      }

      if (this.cssOptions) { cssObj['height'] = this.cssOptions.height, cssObj['width'] = this.cssOptions.width }
      return cssObj;
    }

    _cssSettings(selector, css) {
      $(selector).css(css);
    }

    _buildEmojicloud(selector, emojiData) {
      // emojiSpinner.show();
      let self = this;

      this._cssSettings(selector, this._cssOptinon());
      $(selector).jQCloud(emojiData, {
        afterCloudRender: self._emojiBinder(selector),
        fontSize: {
          from: 0.1,
          to: 0.05
        }
      });
    }
  }

$(function(){
  const Factory = (selector, options) => {
    return new EmojiCloud(selector, options);
  }
  window.EmojiCloud = Factory;
});
