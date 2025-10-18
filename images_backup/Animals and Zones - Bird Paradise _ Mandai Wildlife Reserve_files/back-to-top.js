WRS.require(['jquery'], function($) {
    'use strict';
  
    var pluginName = 'back-to-top';
  
    function Plugin(element, options) {
      this.element = $(element);
      this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
      this.init();
    }
    Plugin.prototype = {
      init: function() {
        var that = this;
        that.redirectTop();
      },
  
      redirectTop: function() {
        var that = this,
            el = that.element,
            screen_height = screen.height;

        $(window).scroll(function() {
          if ($(window).scrollTop() > screen_height) {
            el.addClass('active');
          } else {
            el.removeClass('active');
          }
        });

        el.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '500');
        });
      },
  
      destroy: function() {
        $.removeData(this.element[0], pluginName);
      }
    };
  
    $.fn[pluginName] = function(options, params) {
      return this.each(function() {
        var instance = $.data(this, pluginName);
        if (!instance) {
          $.data(this, pluginName, new Plugin(this, options));
        } else if (instance[options]) {
          instance[options](params);
        }
      });
    };
  
    $.fn[pluginName].defaults = {};
  
    $(function() {
      $('[data-' + pluginName + ']')[pluginName]();
    });
  });
  