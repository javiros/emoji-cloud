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
      $(selector).text(options.title);
    }


}(jQuery));