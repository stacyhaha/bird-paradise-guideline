WRS.require(['jquery'], function($) {
  'use strict';

  var pluginName = 'image-mobile';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      var self = this,
          resizeTimeout = null;

      self.img = self.element.find('[data-image-change]');
      self.img.each(function () {
        var thisEl = $(this);

        thisEl.data('image-desktop', thisEl.attr('src'));
      });

      // Link to sticky nav plugin (recalculate sticky nav offset)
      self.element.filter('.cover-picture').find('[data-image-change]')
        .off('load.sticky')
        .on('load.sticky', function () {
          var sticky = $('[data-sticky-anchor]');

          sticky[0] &&
            typeof sticky['sticky-anchor'] === 'function' &&
              sticky['sticky-anchor']('triggerOnResize');
        });

      if (Site.isMobile()) {
        self.imageChange();
      }

      Site.win.on('resize.' + pluginName, function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(self.imageChange.bind(self), 500);
      });
    },

    imageChange: function () {
      var dataSrc = Site.isMobile() ? 'data-image-change' : 'data-image-desktop';

      this.img.each(function () {
        var thisEl = $(this);

        thisEl.attr('src', thisEl.attr(dataSrc));
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
