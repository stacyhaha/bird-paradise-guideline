WRS.require([ "jquery" ], function($) {
    "use strict";
    var pluginName = "accordion-footer";
    function Plugin(element, options) {
        this.element = $(element);
        this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            var that = this;
            that.collapse();
            Site.win.on("resize." + pluginName, function() {
                setTimeout(function() {
                    that.rotate();
                }, 500);
            });
            Site.win.on("orientationchange." + pluginName, function() {
                if (Site.isDesktop()) {
                    that.element.find(".section-body").css("display", "block");
                }
            });
        },
        collapse: function() {
            var that = this, el = that.element.find(".section-title"), duration = that.options.duration, easing = that.options.easing;
            el.off("click").on("click." + pluginName, function() {
                if (Site.isMobile()) {
                    var self = $(this), elchild = self.parent().parent();
                    if (elchild.hasClass("open")) {
                        elchild.removeClass("open");
                        self.next().stop().slideUp({
                            duration: duration,
                            easing: easing
                        });
                    } else {
                        el.parent().parent().removeClass("open");
                        el.next().stop().slideUp({
                            duration: duration,
                            easing: easing
                        });
                        elchild.toggleClass("open");
                        self.next().stop().slideDown({
                            duration: duration,
                            easing: easing
                        });
                    }
                }
            });
        },
        rotate: function() {
            var that = this, html = $("html"), el = that.element.find(".section-title");
            if(that.element.hasClass('no-accordion')) return;
            if (html.hasClass("portrait")) {
                el.each(function() {
                    var self = $(this), sectionBody = self.next();
                    sectionBody.css("display", "none");
                });
            } else {
                if (!Site.isMobile()) {
                    el.each(function() {
                        var self = $(this), sectionBody = self.next();
                        sectionBody.css("display", "block");
                    });
                }
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
    $.fn[pluginName].defaults = {
        duration: 200,
        easing: "linear"
    };
    $(function() {
        $("[data-" + pluginName + "]")[pluginName]();
    });
});
//# sourceMappingURL=accordion-footer.js.map