WRS.require(['jquery', 'lodash', 'storagePolyfill'], function($, _) {
    'use strict';

    var pluginName = 'tracking-analytics';

    function Plugin(element, options) {
        this.element = $(element);
        this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            this.onUpdateDatalayer();
            this.handlesClickEvent();
            //this.handlesSearchEvent();
            this.handleGeneralFormSubmission();
            this.handleMakeMyDaySubmission();
        },

        handlesClickEvent: function() {
            var el = this.element;
            el.on('click.analytics', '[data-action="click"]', function() {
                var clickedItem = $(this),
                    dataClickEvent = clickedItem.data('analytics'),
                    buttonClose = clickedItem.data('buttonClose');


                if (buttonClose && buttonClose === 'data-button-close') {
                    dataClickEvent = JSON.parse(clickedItem.attr("data-analytics"));
                }

                if (dataClickEvent !== undefined) {
                    _.merge(window.wrsDataLayer, dataClickEvent);
                    if (dataClickEvent.mmd && dataClickEvent.mmd.route) {
                        sessionStorage.setItem('mmd', JSON.stringify(dataClickEvent));
                    }

                    if (dataClickEvent.mmd && dataClickEvent.mmd.source) {
                        if (typeof _satellite != "undefined") {
                            if (dataClickEvent.mmd.action === 'save' || dataClickEvent.mmd.action === 'download') {
                                _satellite.track('mmd_complete_actions');
                            } else if (dataClickEvent.mmd.action === 'noaction') {
                                //no action require
                            } else {
                                _satellite.track('mmd_activity_actions');
                            }
                        }
                        sessionStorage.setItem('source', dataClickEvent.mmd.source);
                    }
                }
                $(document).trigger('datalayer.update', Date.now());
            });
        },

        handlesSearchEvent: function() {
            var els = this.element;
            els.on('keypress.analytics', '[data-action="search"]', function(e) {
                var code = e.keyCode || e.which;
                if (code === 13) {
                    var dataSearchEvent = $(this).parents('form').data('analytics');
                    _.merge(window.wrsDataLayer, dataSearchEvent);
                }
            });
        },

        /**
         * runs on thank you page to resubmit formdata to datalayer in case
         * it did not get written before form submit triggers
         */
        handleGeneralFormSubmission: function() {
            var formData = sessionStorage.getItem('formData');
            var datalayer = window.wrsDataLayer;

            if (formData) {
                var parsedFormData = JSON.parse(formData);

                datalayer['form'] = {
                    formInfo: parsedFormData
                };

                if (window.location.pathname.indexOf('error') > -1) {
                    datalayer.form.formInfo.formEvent = 'Error';
                    datalayer.form.formInfo.formField = 'Server Error';
                }

                $(document).trigger('datalayer.update', Date.now());

                // delete session data once sent
                sessionStorage.removeItem('formData');
            } else {
                return false;
            }

        },

        handleMakeMyDaySubmission: function() {
            var expPlannerData = sessionStorage.getItem('expPlannerData');
            var datalayer = window.wrsDataLayer;

            if (expPlannerData) {
                var parsedExpPlannerData = JSON.parse(expPlannerData);

                datalayer['wrs'] = parsedExpPlannerData.wrs;

                $(document).trigger('datalayer.update', Date.now());

                // delete session data once sent
                sessionStorage.removeItem('expPlannerData');
            } else {
                return false;
            }
        },

        onUpdateDatalayer: function() {
            $(document).on('datalayer.update', function( /* e, timestamp */ ) {
                //console.log(window.wrsDataLayer);
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

    $(function() {
        $('[data-' + pluginName + ']')[pluginName]();
    });
});