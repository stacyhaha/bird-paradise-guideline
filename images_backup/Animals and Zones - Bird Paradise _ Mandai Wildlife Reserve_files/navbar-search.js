WRS.require(['jquery', 'jqueryUi', 'simplePagination'], function($) {
  'use strict';

  var pluginName = 'navbar-search';
  var filterRootPathListArr = $('#filterRootPathList').data('filterRootPathList');

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this;
      this.showSearchbar();
      this.closeSearchbar();
      this.handleSearchInput();
      this.autocompletePosition();
      this.beforeSearchResult();
      this.initSearchResult();
    },
    showSearchbar: function (){
      var that = this.element,
          el = that,
          searchMenu = $('.setting-link.search');

      searchMenu.on('click', function(e) {
        e.preventDefault();

        if (el.hasClass('md-navbar-search')) {
          el.addClass('active');
          $('html').addClass('no-scroll');
          $('body').addClass('page-fixed-mobile');
        }
      })
    },
    closeSearchbar: function (){
      var that = this.element,
          el = that;

      el.on('click', function(e) {
        if (!$(e.target).hasClass('ui-autocomplete-input') && !$(e.target).hasClass('search-wrap') && !$(e.target).hasClass('label-close')) {
          el.removeClass('active');
          $('body').removeClass('page-fixed-mobile');

          if (!$('.md-header.open-menu').length) {
            $('html').removeClass('no-scroll');
          }
        }
      })
    },
    handleSearchInput: function (){
      var that = this.element,
          el = that,
          searchInput = el.find('[data-input-search]'),
          searchClose = el.find('.label-close');

      searchInput.on('keyup', function (e, ui) {
        e.target.value ? searchClose.addClass('active') : searchClose.removeClass('active');
      });

      searchClose.on('click', function(e) {
        e.preventDefault();
        searchInput.val('');
        searchClose.removeClass('active');
      })
    },
    autocompletePosition: function () {
      var that = this.element,
        el = that,
        searchInput = el.find('[data-input-search]');

      // Check if it's not a mobile view (i.e., desktop or larger)
      if (!$(window).width() <= 1025 && el.hasClass('md-navbar-search-result')) {
        searchInput.autocomplete({
          position: { my: "left+0 top-5 bottom+0", }
        });
      } else {
        // For mobile view, change the positioning to bottom
        searchInput.autocomplete({
          position: { my: "left+0 bottom-6 top+0", } // Switch from top to bottom
        });
      }
    },
    beforeSearchResult: function (){
      var that = this.element,
          el = that,
          currentURLString = window.location.href,
          currentURL = new URL(currentURLString),
          searchKey = currentURL.searchParams.get("search"),
          searchResultEL = el.find('.md-search-result');

      if (searchKey) {
        searchResultEL.show();
        $('[data-input-search]').val(searchKey).addClass('search-custom-input').attr('placeholder','');
        $('[data-input-search]').siblings('.label-custom').css('opacity', '1');
      } else {
        searchResultEL.hide();
      }
    },
    initSearchResult: function (){
      var that = this.element,
          el = that,
          filterItem = el.find('.filter-item'),
          searchResultURL = el.find('.md-search-result').attr('data-search-result-url'),
          searchResultContainer = $('.result-item-container'),
          noResultEL = $('.search-notification'),
          suggestionEL = $('.md-search-suggestion'),
          overlayLoading = $('.overlay'),
          autoCompleteURL = el.find('.search-news').attr('data-autocomplete-url'),
          resultHTML = "",
          currentURLString = window.location.href,
          currentURL = new URL(currentURLString),
          searchKey = currentURL.searchParams.get("search");

      sessionStorage.setItem('autoCompleteURL', autoCompleteURL);

      filterItem.on('click', function(){
        if($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).siblings().removeClass('inactive');
          autoCompleteURL = sessionStorage.getItem('autoCompleteURL');
          el.find('.search-news').attr('data-autocomplete-url', autoCompleteURL);
        } else {
          $('.filter-item').removeClass('inactive active');
          $(this).siblings().addClass('inactive');
          $(this).addClass('active');
          autoCompleteURL = sessionStorage.getItem('autoCompleteURL') + "?rootPath=" + $(this).attr("data-root-path");
          el.find('.search-news').attr('data-autocomplete-url', autoCompleteURL);
        }
        initPagination($(this).attr('data-value'));
      });

      if (!searchResultURL) {
        return;
      }

      if (!searchKey) {
        overlayLoading.fadeOut();
        return;
      }

      $.ajax({
        url: searchResultURL,
        dataType: 'json',
        data: {
          searchKey: searchKey,
        },
        success: function(result) {
          if (result && result.length) {
            result.forEach(function(item) {
                if(filterRootPathListArr.length != 0){
                    for(let i=0; i< filterRootPathListArr.length; i++){
                        let value = filterRootPathListArr[i];
                        if (item.URL.includes(value)){
                            resultHTML += "<div class='result-item "+ value.replaceAll("/","-") +"'>";
                            break;
                        }
                        else{
                            if(i == filterRootPathListArr.length-1)
                                resultHTML += "<div class='result-item'>";
                            else
                                continue;
                        }
                    }
                }
                else
                    resultHTML += "<div class='result-item'>";


              if (!item.URL || item.URL == "undefined") { item.URL = "#" }

              if (item.pathText && item.pathText != "undefined") {
                resultHTML += "<div class='result-item__path'>"+item.pathText+"</div>";
              }

              if (item.name && item.name != "undefined") {
                resultHTML += "<a href='"+item.URL+"'><div class='result-item__title'>"+item.name+"</div></a>";
              }

              if (item.description && item.description != "undefined") {
                resultHTML += "<div class='result-item__desc'>"+item.description+"</div>";
              }

              resultHTML += "</div>";
            });
            searchResultContainer.append(resultHTML);
            initPagination();
            overlayLoading.fadeOut();
          } else {
            noResultEL.removeClass('hidden');
            overlayLoading.fadeOut();
          }
        },
        error: function(error) {
          console.log(error);
        }
      });

      function initPagination(selectedFilter) {
        var items = $(".md-search-result .result-item");
        var paginationEl = $('.md-search-result .pagination-container');
        var totalSearchEl = $('.result-total span');
        var numItems = items.length;
        var perPage = 10;
        var displayedPagesConfig = 3;
        var searchInput = $('[data-input-search]').val();

        if ($('.filter-item').hasClass('active') && selectedFilter != "") {
          var filter = selectedFilter.replaceAll("/","-") || $('.filter-item.active').attr('data-value');
          items.show();
          items.not($("." + filter).slice(0,perPage)).hide();
          items = $(".md-search-result .result-item." + filter);
          numItems = items.length;
        } else {
          items.show();
          items.slice(perPage).hide();
        }
  
        if (numItems) {
          totalSearchEl.html(items.length);
          noResultEL.addClass('hidden').find('.search-key').html(searchInput);
          suggestionEL.addClass('hidden');
          (numItems > 10) ? paginationEl.show() : paginationEl.hide()
          
        } else {
          totalSearchEl.html(0);
          paginationEl.hide();
          noResultEL.removeClass('hidden');
          suggestionEL.removeClass('hidden');
        }
  
        paginationEl.pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&nbsp",
            nextText: "&nbsp",
            displayedPages: displayedPagesConfig,
            edges: 1,
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
                $('html, body').animate({scrollTop:0}, '500');
            }
        });
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
