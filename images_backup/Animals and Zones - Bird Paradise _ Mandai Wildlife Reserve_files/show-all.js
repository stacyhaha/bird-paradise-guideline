WRS.require([ "jquery", "cookie" ], function($) {
  "use strict";
  var pluginName = "show-all", toggleShow = false;
  function Plugin(element, options) {
      this.element = $(element);
      this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
      this.init();
  }
  Plugin.prototype = {
      init: function() {
          var that = this;
          that.bind();
          Site.win.on("resize." + pluginName, function() {
              if (Site.isMobile()) {}
          });
      },
      bind: function() {
          var that = this, el = that.element, btnShow = el.find("[data-btn-show]"), titleShow = btnShow.data("btn-show"), btnHide = el.find("[data-btn-hide]"), titleHide = btnHide.data("btn-hide"), animalItem = el.find(".animals-item"), showAllMin = el.data("show-all-min");
          if (Site.isMobile()) {
              animalItem.each(function(index) {
                  if (index > showAllMin - 1) {
                      $(this).addClass("hidden-xs hidden-sm");
                  }
              });
              btnShow.html(titleShow);
          }
          btnShow.on("click", function() {
              if (Site.isMobile()) {
                  animalItem.each(function(index) {
                      if (index > showAllMin - 1) {
                          if ($(this).hasClass("hidden-xs")) {
                              $(this).removeClass("hidden-xs hidden-sm");
                          } else {
                              $(this).addClass("hidden-xs hidden-sm");
                          }
                      }
                  });
                  if (!toggleShow) {
                      btnShow.html(titleHide);
                      toggleShow = true;
                  } else {
                      btnShow.html(titleShow);
                      toggleShow = false;
                  }
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
      $("[data-" + pluginName + "]")[pluginName]();
  });
});
//# sourceMappingURL=show-all.js.map