/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

    _cssOption() {
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

      this._cssSettings(selector, this._cssOption());
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
// module.exports = EmojiCloud;

/***/ })
/******/ ]);