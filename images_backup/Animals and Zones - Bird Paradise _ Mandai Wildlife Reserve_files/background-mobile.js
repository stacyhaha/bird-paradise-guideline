WRS.require(['jquery'], function($) {
  'use strict';

  var pluginName = 'style-mobile';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }
  Plugin.prototype = {
    init: function() {

      let that = this;

      this.backgroundChange();

      this.initSearchPage();
      this.footerAutoHideMobile();

      $(window).on('resize', function() {
        that.footerAutoHideMobile();
      });
    },

    backgroundChange: function () {
      var that = this,
        dataChange = that.element.find('[data-change-style]');

      dataChange.each(function() {
        var thisEl = $(this),
          attrChange = thisEl.data('change-style'),
          desktopStyle = thisEl.css('background-image');

        if(Site.isMobile()) {
          thisEl.attr('style', '');
          for(var key in attrChange) {
            thisEl.css(key, attrChange[key]);
          }
        }

        Site.win.on('resize.' + pluginName, function () {
          if(Site.isMobile()) {
            thisEl.attr('style', '');
            for(var key in attrChange) {
              thisEl.css(key, attrChange[key]);
            }
          } else {
            thisEl.attr('style', '');
            thisEl.css('background-image', desktopStyle);
          }
        });
      });
    },

    footerAutoHideMobile: function() {
      var membershipPage = $('.membership-ticketing-page');
      var completePage = $('.ms-complete-regis');
      var footer = $('footer[data-config-footer]');

      if ((membershipPage.length || completePage.length) && footer.length) {
        if (Site.isMobile()) {
          footer.hide();

          $(window).on('scroll', function() {
            if (Site.isMobile()) {
              setTimeout(() => { 
                if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                    footer.show();
                } else {
                    footer.hide();
                }
              }, 50);
            } else {
              return
            }
          });
        } else {
          setTimeout(function() {
            footer.show();
          }, 100);
        }
      }
    },

    initSearchPage: function () {
      var bodyHeight = $('body').outerHeight(),
        windowHeight = $(window).innerHeight();

      if(windowHeight > bodyHeight) {
        $('.search.parsys').css('margin-bottom', (windowHeight - bodyHeight) + 'px');
        //$('.search-wrap').css('margin-bottom', (windowHeight - bodyHeight) + 'px');
      }
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
