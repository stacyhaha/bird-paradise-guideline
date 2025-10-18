WRS.require(['jquery'], function($) {
  'use strict';

  var pluginName = 'list-social';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      var that = this;

      if(window.Modernizr.mq('(max-width: 992px)')){
        that.clickIcon();
      } else {
        that.hoverIcon();
      }

      that.closeIcon();
      that.layoutIcon();
    },

    hoverIcon: function() {
      var that = this,
          icons = that.element.find('li');
      
      icons.each(function(){
        $(this).mouseenter(function(e){
          if ($(this).find('.icon-popup').length) {
            e.preventDefault();
            $('.icon-popup').removeClass('active');
            $(this).find('.icon-popup').addClass('active');
          }
        });
        
        $('.list-social li').mouseleave(function(){
          $('.icon-popup').removeClass('active');
        });
      });
    },

    clickIcon: function() {
      var that = this,
          icons = that.element.find('li');

      icons.on('click',function(e){
        if ($(this).find('.icon-popup').length) {
          e.preventDefault();
          $('.list-social li').find('a, .no-social-link').removeClass('active');
          $('.icon-popup').removeClass('active');
          $(this).find('a, .no-social-link').addClass('active');
          $(this).find('.icon-popup').addClass('active');
        }
      });

      $('.icon-popup img').on('click',function(){
        var href = $(this).parents('a').attr('href');
        var hrefTarget = $(this).parents('a').attr('target');
        var hrefEl = document.createElement('a');

        if(href) {
          hrefEl.target= hrefTarget;
          hrefEl.href= href;
          hrefEl.click();
        } else {
          return;
        }
      });

      $(document).on('click',function(e){
        if (!$(e.target).closest($('.list-social li a, .list-social li .no-social-link')).length) {
          $('.list-social li').find('a, .no-social-link').removeClass('active');
          $('.icon-popup').removeClass('active');
        }
      });
    },

    layoutIcon: function() { 
      var that = this,
          icons = that.element.find('li'); 
      
      if (icons.length === 5) {
        icons.addClass('custom-width');
      } else {
        icons.removeClass('custom-width');
      }
    },

    closeIcon: function() {
      $(document).on('click', '.icon-popup .btn-close', function(e) {
        e.preventDefault();
        $('.icon-popup .btn-close').parent().removeClass('active');
        $('.list-social li').find('a, .no-social-link').removeClass('active');
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
