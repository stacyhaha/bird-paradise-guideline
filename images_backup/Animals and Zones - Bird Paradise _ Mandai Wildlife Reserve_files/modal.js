WRS.require(['jquery', 'handlebar', 'iscroll'], function($, handlebar, IScroll) {
  'use strict';

  var pluginName = 'modal';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  function getTemplate(template) {
    return template.html();
  }

  var initSlimScroll = function() {
    var inner = this.modal.find('[data-inner-modal]');

    if (this.scroll) {
      this.scroll.destroy();
    }

    if (inner.length) {
      this.scroll = new IScroll(inner[0], {
        scrollbars: true,
        mouseWheel: true,
        bounce: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        HWCompositing: false
      });
    }
  };

  var loadTemplate = function(result) {
    var that = this,
        op = that.options,
        templateHTML = getTemplate($(op.idTemplate)),
        template = handlebar.compile(templateHTML || ''),
        items = [],
        contentEl;

    if (result.data) {
      if (result.data.length) {
        result.data.forEach(function(obj) {
          items.push(template(obj));
        });
      } else {
        items.push(template(result.data));
      }
      contentEl = items.join('');
      that.bodyModal.empty();
      that.bodyModal.html(contentEl);
      if (!that.scroll) {
        that.scroll.destroy();
        initSlimScroll.call(that);
      }
    }
  };

  var callRequest = function(callback) {
    var that = this,
        op = that.options;

    $.ajax({
      url: op.url,
      type: 'GET',
      data: {
        idItem: op.idItem
      },
      success: function(result) {
        loadTemplate.call(that, result);
        typeof callback === 'function' && callback();
      }
    });
  };

  var calcContentModalHeight = function (contentModal) {
    contentModal.css('height', '');

    var contentModalHeight = contentModal.outerHeight(),
        // ----- Magic number description -----
        // Total distance from top and bottom to content
        // Ex: 50 => 25px from top to offset top of content
        magicNumber = 50,
        maxHeight = Site.win.innerHeight() - magicNumber,
        setHeight = contentModalHeight > maxHeight ? maxHeight : contentModalHeight;

    contentModal.css('height', setHeight);
  };

  var setHeightModal = function() {
    var that = this;
    if (that.modal.css('display') === 'block') {
      if (that.scroll) {
        that.scroll.destroy();
      }
      var contentModal = that.modal.find('.modal-content'),
          timeoutDuration = 400; // Best for iOS8

      calcContentModalHeight(contentModal);

      setTimeout(function() {
        calcContentModalHeight(contentModal);

        if (that.scroll) {
          that.scroll.destroy();
        }
        initSlimScroll.call(that);
      }, timeoutDuration);

    }
  };

  var showHidePopup = function(stt) {
    stt ? this.modal.show() : this.modal.hide();
    setHeightModal.call(this);
    Site.freezenBody();
  };

  var resizeDetail = function() {
    var op = this.options;
    if (op.idItem === this.modal.data('id-item')) {
      setHeightModal.call(this);
    }
  };

  Plugin.prototype = {
    init: function() {
      var that = this,
          op = that.options;
      that.togglePopup();
      that.cancelMembershipBooking();
      Site.win.on('resize.' + that.idModal, function() {
        if (that.scroll) {
          that.scroll.destroy();
        }
        switch (op.typeModal) {
          case 'detail':
              if ((Site.isDesktop() && !op.showMobile) || (Site.isMobile() && op.showMobile)) {
                resizeDetail.call(that);
              }
              return;
          case 'cancel':
              resizeDetail.call(that);
              return;
          case 'voucher':
              resizeDetail.call(that);
              return;
          case 'pass':
              resizeDetail.call(that);
              return;
          case 'addons':
              break;
          default:
              setHeightModal.call(that);
              return;
        }
      });
    },

    cancelMembershipBooking: function() {
      $('.btn-cancel-detail').on('click', cancelBooking);

      function cancelBooking() {
        var currID = $(this).parents('.membership-info-block__content').data('id-item');
        $('#cancel-night-safari').data('id-item', currID);
      }
    },

    togglePopup: function() {
      var that = this,
          el = that.element,
          op = that.options;
      that.body = $('body');
      that.isExpired = op.typeModal === 'expired';
      that.idModal = op.target;
      that.modal = $(that.idModal);
      that.bodyModal = that.modal.find('[data-content-popup]');
      that.btnModalClose = that.modal.find('[data-close]');
      that.btnConfirm = that.modal.find('[data-btn-confirm]');

      initSlimScroll.call(that);
      if (that.isExpired) {
        setHeightModal.call(that);
        Site.freezenBody();
      }

      // for addon page, tags are added to parent container
      // so look for the child <a> element for setting modal target
      if (op.typeModal === 'addons') {
        el = that.element.find('a');
      }

      var togglePopupFn = function () {
        if (that.btnConfirm.length) {
          that.btnConfirm.attr('data-id-park', op.idItem);
        }

        that.modal.attr('data-id-item', op.idItem);
        $("#bookingDate").text(op.dateItem)
        showHidePopup.call(that, true);
      };

      el.on('click.' + pluginName, function(e) {
        // for addons desc external link 
        if (op.typeModal === 'addons' && $(this).attr("href") != "#") {
          return;
        }
        e.preventDefault();
        if (op.url) {
          callRequest.call(that, togglePopupFn.bind(that));
        } else {
          togglePopupFn.call(that);
        }
      });

      that.btnModalClose.on('click.' + pluginName, function(e) {
        e.preventDefault();
        e.stopPropagation();
        showHidePopup.call(that, false);
        that.body.removeClass('freeze');
        document.body.style.position = '';
        
        if (that.isExpired) {
          el.remove();
        }
      });

      that.btnConfirm.on('click.' + pluginName, function() {
        var thisEl = $(this);
        if (op.idItem === thisEl.data('id-park')) {
          if (op.popupCancel) {
            $.ajax({
              url: thisEl.data('btn-confirm'),
              type: 'GET',
              data: {
                id: thisEl.data('id-park')
              },
              success: function(result) {
                el.parent().parent().parent().parent().remove();
                showHidePopup.call(that, false);
              }
            });
          }
        }
      });

      $('#updateEmailSubmit').on('click', function(){	
        if($('#email-profile').hasClass('parsley-success')) {	
            showHidePopup.call(that, false);	
        }	
      });

      that.modal.on('click.' + pluginName, function(e) {
        if (that.body.hasClass('freeze')) {
          var inBody = !that.bodyModal.is(e.target) && that.bodyModal.has(e.target).length === 0;

          if (inBody) {
            showHidePopup.call(that, false);
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

  $.fn[pluginName].defaults = {
    iScroll: {
      scrollbars: true,
      mouseWheel: true,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale'
    }
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });
});
