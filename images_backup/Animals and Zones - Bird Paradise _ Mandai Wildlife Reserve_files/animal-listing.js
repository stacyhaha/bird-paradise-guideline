WRS.require(['jquery', 'filterizr'], function($) {
  'use strict';

  var pluginName = 'animal-listing',
      dataFitler = 'data-filter';

  var hideViewAll = function() {
    if ((!Site.isMobile() && this.animalItems.length <= 12) || (Site.isMobile() && this.animalItems.length <= 6)) {
      console.log('yes hide');
      this.viewAll.parent().hide();
    }
  };

  var setTotalItem = function() {
    var that = this;
    var total = [];

      var item = that.filterEl.find('.filtr-item'),
          isViewAll = that.viewAll.text() === that.textBtnAll,
          noticeBlock = that.listingList.parent().find('[data-not-found]');

      item.removeClass('hidden');

      if (noticeBlock.length) {
        noticeBlock.remove();
      }

      item.each(function() {
        var thatEl = $(this);
        if (thatEl.css('opacity') === '1') {

          if ((total.length >= 12 || (Site.isMobile() && total.length >= 6)) && isViewAll) {
            thatEl.addClass('hidden');
          }

          total.push(thatEl);
        }
      });

      if (total.length > 12 || Site.isMobile() && total.length > 6) {
        that.viewAll.removeClass('hidden');
        that.filterEl.filterizr('sort');
      } else {
        if (!total.length) {
          item.addClass('hidden');
          var noticeNotFound = '<p class="not-found" data-not-found>' + that.options.noResult + '</p>';
          that.listingList.parent().append(noticeNotFound);
          that.filterEl.filterizr('sort');
          that.listingList.css('height', '100px');
        }

        that.viewAll.addClass('hidden');
      }

      hideViewAll.call(that);
  };

  var handleFilterClick = function(e) {
    this.isReadyShownAll = true;
    var currentFilter = $(e.currentTarget);
    var filterValue = parseInt(currentFilter.attr(dataFitler), 10);

    currentFilter.toggleClass('active');
    this.filterEl.filterizr('toggleFilter', filterValue);
  };

  var handleAnalytics = function(val) {
    var dataAnalytics = window.wrsDataLayer;
    if (val.length >= 3 && dataAnalytics) {
      dataAnalytics.search = {
        'tool': {
          'toolInfo': {
            'toolName': 'internal search'
          }
        },
        'searchInfo' : {
          'term_input': val
        }
      }
    }
  }

  var handleSearch = function(val) {
    handleAnalytics(val);
    this.isReadyShownAll = true;
    this.element.find('.not-found').addClass('hidden');
    this.filterEl.find('.hidden').removeClass('hidden');
    this.filterEl.filterizr('search', val, this.searchPrefix);
    this.filterEl.filterizr('sort', 'domIndex', 'asc', this.searchPrefix);

    if (this.element.find('.list-animals-content').css('height') === '100px') {
      this.element.find('.not-found').removeClass('hidden');
    }
  };

  var handleDropdown = function(val) {
    this.isReadyShownAll = true;
    this.filterEl.find('.hidden').removeClass('hidden');
    this.filterEl.filterizr('dropdown', val, this.searchPrefix);
  };

  var handleAllClick = function() {
    var textBtn = this.viewAll.text();
    this.filterEl.find('.hidden').removeClass('hidden');
    if (textBtn === this.viewAll.data('listing-all')) {
      var top = Site.isMobile() ? this.listingList.offset().top : this.element.offset().top;
      $('html body').animate({
        scrollTop: top - 200,
      });
      this.viewAll.text(this.textBtnAll);
      setTotalItem.call(this);
    } else {
      this.viewAll.text(this.viewAll.data('listing-all'));
    }
    this.filterEl.filterizr('sort', 'domIndex', 'asc', this.searchPrefix);
  };

  var beforeFilter = function() {
    if (this.isReadyShownAll) {
      this.filterEl.find('.filtr-item.hidden').removeClass('hidden');
      this.viewAll.text(this.textBtnAll);
    }
  };

  var afterFilter = function() {
    var that = this;
    setTotalItem.call(that);
  };

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this;
      that.bind();
      Site.win.off('orientationchange.' + pluginName)
              .on('orientationchange.' + pluginName, function() {
        setTimeout(function() {
          that.viewAll.text(that.textBtnAll);
          // setTotalItem.call(that);
        }, 500);
      });
    },

    bind: function() {
      var that = this,
          opt = that.options,
          el = that.element,
          timer,
          enterKeyPress = 13;

      that.filterEl = el.find(that.options.selector);
      that.totalEl = el.find('[data-listing-total]');
      that.input = el.find('[data-search]');
      that.viewAll = el.find('[data-listing-all]');
      that.listingList = el.find('[data-listing-list]');
      that.textBtnAll = that.viewAll.data('view-all');
      that.animalItems = el.find(opt.item);
      that.isReadyShownAll = false;
      that.sortTimeout = null;
      that.searchPrefix = opt.searchPrefix || false;
      that.searchIcon = el.find('.label-form');

      that.viewAll.text(that.textBtnAll);

      hideViewAll.call(that);
      if(that.animalItems.length) {
      that.filterEl.filterizr(that.options);

      that.filterEl.on('filteringStart.' + pluginName, function() {
          beforeFilter.call(that);
        });

        function setCount() {
          setTimeout(function() {

            var getTotal = that.filterEl.find('.filtr-item').filter(function() { return $(this).css('opacity') === '1' });

            that.totalEl.text(getTotal.length);
            afterFilter.call(that);
          }, 0);
        }

        that.filterEl.filterizr('setOptions', {
          callbacks: {
            onFilteringEnd: function() {
              setCount();
            },
            onSortingEnd: function() {
              setCount();
            }
          }
        })

      //bind Events
      el.off('click.' + pluginName, '[' + dataFitler + ']')
        .on('click.' + pluginName, '[' + dataFitler + ']', handleFilterClick.bind(that));

      var dropdownStart =  el.find('[data-nice-select]').find('option:first-child');
      el.find('.nice-select .current').text(dropdownStart.text());

      that.searchIcon.on('click', + pluginName, function() {
        handleSearchEvent(that.input);
      });

      $(document).on('keypress', + pluginName, function(e) {
        if (e.which === enterKeyPress) {
          handleSearchEvent(that.input);
        }
      });

      that.input.on('input.' + pluginName, function() {
        var val = $(this).val();

        if (val.length === 0) {
          handleSearch.call(that, val);
        }
      });

      function handleSearchEvent(element) {
        if (el.find('[data-nice-select]').length) {
          var dropdownSelected =  el.find('[data-nice-select]').find('option:first-child');
          dropdownSelected.prop('selected',true).trigger('change');
          el.find('.nice-select .current').text(dropdownSelected.text());
        }

        clearTimeout(timer);
        var val = element.val();

        timer = setTimeout(function() {
          handleSearch.call(that, val);
        }, 300);
      }

      el.find('.nice-select ul li').on('click', function() {
        that.input.val('');
      });

      el.find('[data-nice-select]').off().on('change', function() {
        $(this).parents('.md-3-col-content-fragment-with-filter-and-cta__selection').removeClass(function (index, classNames) {
          var current_classes = classNames.split(" "),
              classes_to_remove = [];
      
          $.each(current_classes, function (index, class_name) {
            if (/colour-.*/.test(class_name)) {
              classes_to_remove.push(class_name);
            }
          });
          return classes_to_remove.join(" ");
        });

        var getString = this.value.toLowerCase().replace(" ", "-");

        $(this).parents('.md-3-col-content-fragment-with-filter-and-cta__selection').addClass(`colour-${getString}`);
        clearTimeout(timer);
        var val = this.value;
        timer = setTimeout(function() {
          handleDropdown.call(that, val);
        }, 300);
      });

      that.viewAll.on('click.' + pluginName, handleAllClick.bind(that));

        // setTimeout(function() {
        //   that.filterEl.filterizr('sort');
        // }, 500);
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
    animationDuration: 0.5,
    filterOutCss: {
      opacity: 0,
      transform: 'scale(0.75)'
    },
    filterInCss: {
      opacity: 1,
      transform: 'scale(1)'
    },
    selector: '[data-listing-list]',
    layout: 'packed',
    setupControls: false
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });
});
