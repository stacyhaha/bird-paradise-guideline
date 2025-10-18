WRS.require(['jquery', 'jqueryUi'], function($) {
  'use strict';

  var pluginName = 'search-component';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      this.search();
    },

    search: function() {
      var that = this,
        el = that.element,
        inputSearch = el.find('[data-input-search]'),
        url = el.data('autocomplete-url'),
        analytics = el.data('analytics'),
        wrapSearchingEl = el.find('.wrap-searching'),
        colorKey;

      var el = that.element,
          // opt = that.options,
          redirectUrl = el.data('redirect-url'),
          input = el.find('.input-form');

      el.off('focus').on('focus.' + pluginName, 'input', function() {
        $(input).attr('placeholder','');
        $(input).siblings('.label-custom').css('opacity','1');
        $(input).addClass('search-custom-input');
      });

      el.off('blur').on('blur.' + pluginName, 'input', function() {
        if(!$(input).val()){ //hide only if input has no val
          $(input).siblings('.label-custom').css('opacity', '0');
          $(input).removeClass('search-custom-input');
        }
        $(input).attr('placeholder' , ($(input).siblings('.label-custom').text()));
      });

      el.off('click').on('click.' + pluginName, 'label', function() {
        if (!!input.val()) {
          el.trigger('submitSearch');
        }
      });

      el.off('keypress').on('keypress.' + pluginName, 'input', function(e) {
        var code = e.keyCode || e.which;

        if (code === 13) {
          e.preventDefault();
          if (input.val()) {
            el.trigger('submitSearch');
          }
        }
      });

      el.on('submitSearch.' + pluginName, function() {
        var preUrl = !!redirectUrl ? redirectUrl: window.location.href.split('?')[0];
        return window.location = preUrl + '?search=' + encodeURIComponent(input.val());
      });

      wrapSearchingEl.removeClass('hidden');
      inputSearch.autocomplete({
        appendTo : el,
        source: function(request, response) {
          var data = {};

          if (!url) { return; }

          if (redirectUrl) {
            data = { 'searchKey': request.term }
          } else {
            data = {
              'searchKey': request.term,
              'rootPath': $('.filter-item.active').attr('data-root-path')
            }
          }

          $.ajax({
            url: url,
            type: 'GET',
            data: data,
            dataType: 'json',
            success: function(result) {
              response(result);
              // analytics.wrs.search.searchInfo.term = inputSearch.val();
              // analytics.wrs.search.searchInfo.results = result.length;
            }
          });
        },
        focus: function( event, ui ) {
          inputSearch.val(ui.item.value.replace(/(<([^>]+)>)/ig,""));
          return false;
        },
        select: function( event, ui ) {
          return window.location = ui.item.pagePath;
        },
        open: function(event) {
          if($('[name="search"]') != null){
            $('.ui-autocomplete').css('left', $('[name="search"]').offset().left);
          }
          $('.ui-autocomplete').css('width', $(event.target).outerWidth());
        }
      })
      .autocomplete('instance')._renderItem = function( ul, item ) {
        var re = new RegExp(this.term, 'ig');
        var t = item.value.replace(re,'<span style="font-weight:bold; color:'+ colorKey +';">' + '$&' + '</span>');
        return $('<li>')
          .append('<a href="' + item.pagePath + '" title=""><div class="searching-item">' + '<span class="name">' + t + '</span><span class="type">' + item.parentPageTitle + '</span>' +'</div></a>')
          .appendTo(ul);
      };
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
