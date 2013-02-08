/*
 * Zload - jQuery plugin for lazy loading background images
 *
 * Copyright (c) 2013-2018 Øyvind Nordhagen
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://github.com/nordhagen/jquery-zload
 *
 * Version:  0.1.3
 *
 */

(function( $ ){
  $.fn.zload = function(o) {

    o           = o           || {};
    o.attribute = o.attribute || 'original';    // Name of data attribute containing image source path
    o.fallback  = o.fallback  || 'none';        // Value to set for background-image when outside viewport
    o.unload    = o.unload    || false;         // true will remove background-images when el leaves viewport
    o.delay     = o.delay     || 30;           // Delay between when scrolling stops and lazyload kicks in

    o.fallback = o.fallback === 'none' ? o.fallback : 'url(' + o.fallback + ')';

    var sel = '[data-' + o.attribute + ']';
    var $window = $(window);
    var $el = this;
    var to = null;

    // Runs on every scroll event
    var update = function () {
      if (to) clearTimeout(to);
      to = setTimeout(loop, o.delay);
    };

    // No more scroll events within delay time, proceed.
    var loop = function(){
      var w_top = $window.scrollTop();
      var w_bottom = $window.height() + w_top;

      $el.children(sel).each(function(i, el) {

        var $el = $(el);
        var url = $el.data(o.attribute);

        var el_top = $el.offset().top;
        var el_bottom = el_top + $el.height();

        if (w_top < el_bottom && el_top < w_bottom) {
          var bg = $el.css('background-image');
          if (!bg || bg === 'none' || bg.indexOf(url) == -1) {
            $el.css('background-image', 'url(' + url + ')');
          }
        }
        else if (o.unload) {
          $el.css('background-image', o.fallback);
        }
      });
    };

    $window.scroll(update);
  };
})( jQuery );