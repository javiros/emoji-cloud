// 'use strict';

class EmojiCloud {
  constructor(selector, options = {}) {
    this.selector = (selector || '').replace('#', '');
    this.options = options;
    this.transformedData = this._transformData(options.data || []);
    this._applyCustomCss(options.cssOptions);
    this._buildEmojicloud(this.transformedData);
  }

  _transformData(data = []) {
    return data.map((item) => [item.unicode, item.count]);
  }

  _cssOption(customCss) {
    const defaultCss = {
      visibility: 'hidden',
      height: '600',
      width: '600'
    };

    if (!customCss) {
      return defaultCss;
    }

    return {
      visibility: 'hidden',
      height: String(customCss.height),
      width: String(customCss.width)
    };
  }

  _setCustomCss(element, customCss) {
    if (!element) {
      return null;
    }

    return Object.assign(element.style, this._cssOption(customCss));
  }

  _setDefaultCss(element) {
    if (!element) {
      return null;
    }

    return Object.assign(element.style, this._cssOption());
  }

  _applyCustomCss(cssOptions) {
    const element = document.getElementById(this.selector);
    if (!element) {
      return null;
    }

    if (cssOptions) {
      return this._setCustomCss(element, cssOptions);
    }

    return this._setDefaultCss(element);
  }

  _insertEmojis(spans = []) {
    const unicodePrefix = '&#x';

    for (const span of spans) {
      if (!span || !span.innerText) {
        continue;
      }
      span.innerHTML = unicodePrefix + span.innerText + ';';
    }
  }

  _emojiBinder() {
    setTimeout(() => {
      const element = document.getElementById(this.selector);
      if (!element) {
        return;
      }

      const spans = element.children;
      element.style.visibility = 'visible';
      this._insertEmojis(spans);
    }, 1200);
  }

  _hideInitialElement() {
    return {
      visibility: 'hidden'
    };
  }

  _cssSettings(customCss) {
    const element = document.getElementById(this.selector);
    const css = this._cssOption(customCss);

    if (element) {
      Object.assign(element.style, css);
    }

    return css;
  }

  _applyCssSettings() {
    return this._cssSettings(this.options.cssOptions);
  }

  _buildEmojicloud(emojiData) {
    const target = document.getElementById(this.selector);
    if (!target) {
      return;
    }

    this._applyCssSettings();

    if (typeof WordCloud !== 'undefined') {
      WordCloud(target, { list: emojiData });
    }

    target.addEventListener('wordclouddrawn', () => this._emojiBinder());
  }
}

function init() {
  window.EmojiCloud = function(selector, options) {
    return new EmojiCloud(selector, options);
  };
}

init();
