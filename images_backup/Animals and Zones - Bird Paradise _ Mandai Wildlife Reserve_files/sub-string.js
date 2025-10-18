WRS.require(['jquery'], function($) {
  'use strict';

  var pluginName = 'sub-string-plugin';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      var that = this,
        getString = that.element.find('[data-string]');

      getString.each(function(){
        var thisEl = $(this),
          num = parseInt(thisEl.data('string')),
          text = thisEl.text();
        if(text.length > num) {
          text = text.substring(0, num) + '...';
          thisEl.text(text);
        }
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
