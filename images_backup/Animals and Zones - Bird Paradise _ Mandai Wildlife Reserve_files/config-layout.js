WRS.require(['jquery'], function($) {
  'use strict';

  var pluginName = 'config-layout';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      var that = this,
          resizeTimeout, resizeTimeoutDuration = that.options.duration;
      that.mfaShowHideComponent();
      that.directPage();
      that.mabBanner();

      if(!$('body').hasClass('ticketing-page') && !$('body').hasClass('membership-page')){
        Site.win.off('notice:showed' + pluginName).on('notice:showed ' + pluginName, function() {
          pageHeightConfig();
        }).trigger('resize.' + pluginName);
      } else {
        Site.win.off('notice:showed resize.' + pluginName).on('notice:showed resize.' + pluginName, function() {
          pageHeightConfig();
        }).trigger('resize.' + pluginName);
      }

      that.getHeightContainer();

      function pageHeightConfig () {
        resizeTimeout = window.setTimeout(function () {
          that.getHeightContainer();
          that.detectHeight404();
          window.setTimeout(function () {
            that.nullifyAnchor();
            that.initHashAnchorTag();
          }, resizeTimeoutDuration);
        }, resizeTimeoutDuration);
        window.clearTimeout(resizeTimeout);
      }
    },

    getHeightContainer: function() {
      var that = this,
          el = that.element,
          options = that.options,
          headerHeight = el.find('[data-height-header]').outerHeight(),
          headerTrans = el.find('.bgd-transparent').height(),
          content = el.find('[data-config-container]'),
          selectionBox = el.find('[data-config-selection]'),
          selectionHeight = selectionBox.outerHeight(),
          footer = el.find('[data-config-footer]'),
          heightMinus = 0;

      if (selectionBox.length > 0) {
        heightMinus = Site.win.height() - (
          headerHeight + selectionHeight + footer.outerHeight()) + options.uselessSpacing;
      } else if(headerTrans) {
        heightMinus = headerTrans + Site.win.height() - (
          headerHeight + footer.outerHeight(true)) + options.uselessSpacing;
      } else {
        heightMinus = Site.win.height() - (
          headerHeight + footer.outerHeight(true)) + options.uselessSpacing;
      }

      content.css('min-height', heightMinus);
      footer.fadeIn();
    },

    detectHeight404: function() {
      var that = this,
          el = that.element,
          options = that.options,
          headerHeight = $('[data-height-header]').outerHeight(),
          heightMinus = 0;

      if (el.data('layout-item')) {
        heightMinus = Site.win.height() - headerHeight + options.uselessSpacing;
      }

      el.css('min-height', heightMinus);
    },

    directPage : function() {
      var that = this,
          el = that.element,
          isTrue = el.find('[data-redirect]').data('redirect'),
          urlPage = el.find('[data-redirect-url]').data('redirect-url');
      if(isTrue === true) {
        window.location.href = urlPage;
      }
    },

    mabBanner : function() {
      $('.rich-text:has(img.mab-banner)').addClass('mab-wrapper');

      if ($(".mab-banner")[0]) {
        $('body').addClass('mab-has-banner');
      }

      $(".mab-banner").each(function() {
          var $this = $(this),
              mobileData = $this.data('mobile'),
              desktopData = $this.attr('src');
        
          if ($(window).width() < 768) {
              $this.attr('src', mobileData);
              $this.addClass('mab-mobile');
        }
        
        $(window).resize(function() {
              if ($(this).width() < 768) {
                  $this.attr('src', mobileData);
                  $this.addClass('mab-mobile');
              } else {
                  $this.attr('src', desktopData);
                  $this.removeClass('mab-mobile');
              }
          });
      });
    },

    nullifyAnchor : function() {
      // turn off chrome/firefox scroll memory
      // https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      this.initPageLoad();
      this.scrollToElement( window.location.hash , -48 );
    },

    initHashAnchorTag : function() {
      var that = this,
        anchorTag = that.element.find('a'),
        href = '',
        functionName = 'anchor-jump-scroll';

        anchorTag.each(function(){
        href = $(this).attr('href');
        if(href) {
          if(href.indexOf('#') === 0 && href.length > 1){
            //It's anchor tag
            $(this).off('click.' + functionName).on('click.' + functionName, function(event){

              event.stopPropagation();

              href = $(this).attr('href');
              var anchorBlock = $(href).closest('.tab-category-block');
              var anchorPanel = $(href).closest('.panel').addClass('open');

              //Open the tab first
              if(anchorBlock) {
                anchorBlock.find('.tab-content-detail').removeClass('active');
                anchorBlock.find('.tab-navigation > li').removeClass('active');
                $(href).parents('.tab-content-detail').addClass('active');
                var tabContentId = $(href).parents('.tab-content-detail').attr('id');
                anchorBlock.find('.tab-navigation li[data-block-content="#'+tabContentId+'"]').addClass('active');
              }

              //Open the Panel then
              if(anchorPanel) {
                anchorPanel.addClass('open');
              }

              that.scrollToElement( href , 0 );
            });
          }
        }
      });
    },

    //For scrolling to a certain element
    //Accepts
    //String selector = The ID of the element
    //Integer offset = top offset E.g put offset 100 to land 100px on top of the target element
    scrollToElement: function(selector, offset) {
      //html is for firefox while body is for opera
      //header-note is excluded if it is not available
      if(selector) {
        if($(selector).offset()) {
          $('html, body').animate({ scrollTop: ($(selector).offset().top - $('header').height() - offset ) },500);
        }
      }
    },

    //For checking for hash availability.
    //If the hash / anchor is available, the page will be loaded to up again
    initPageLoad: function() {
      if(window.location.hash) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    },

mfaShowHideComponent : function() {
      var that = this,
          el = that.element;
      $( document ).ready(function() {
        var mfaComponents = el.find('[data-mfa]');
        var browserUserAgent = navigator.userAgent;
        var isMFA = false;
        if (mfaComponents.length) {
          mfaComponents.each(function (index, component) {
            $(component).addClass("hide");
            var dataUserAgent = $(component).data('mfa-user-agent');
            if (!dataUserAgent || !(browserUserAgent.indexOf(dataUserAgent) > -1)) {
              $(component).removeClass("hide")
            } else if (!isMFA)
              isMFA = true;
          })
        }
        if (isMFA)
          $('.logo > a').attr('href', 'javascript:void(0)');
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

  $.fn[pluginName].defaults = {
    uselessSpacing: 10,
    duration: 400
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });
});
