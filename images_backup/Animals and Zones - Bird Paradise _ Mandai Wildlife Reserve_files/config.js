/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

var browserIE = detectIE();
if (browserIE)console.log(browserIE);

WRS.require.config({
  baseUrl: '/etc/designs/wrs/footLibs/js',
  paths: {
    jquery: 'libs/jquery-3.5.1',
    selectize: 'libs/plugins/selectize.min',
    parsley: browserIE ? 'libs/plugins/parsley' : 'libs/plugins/parsley.wrs',
    lodash: 'libs/plugins/lodash.min',
    easel: 'libs/plugins/easeljs-0.8.2.min',
    jqueryModal: 'libs/plugins/jquery.modal',
    jquerySlimScroll: 'libs/plugins/jquery.slimScroll',
    jqueryUi: 'libs/plugins/jquery-ui.min',
    debounce: 'libs/plugins/debounce.min',
    preload: 'libs/plugins/preloadjs-0.6.2.min',
    slick: 'libs/plugins/slick.min',
    handlebar: 'libs/plugins/handlebars-v4.7.8.min',
    cookie: 'libs/plugins/jquery.cookie',
    filterizr: 'libs/plugins/jquery.filterizr',
    fastselect: 'libs/plugins/fastselect',
    fastsearch: 'libs/plugins/fastsearch.min',
    moment: 'libs/plugins/moment.min',
    iscroll: 'libs/plugins/iscroll.min',
    cropper: 'libs/plugins/cropper.min',
    matchHeight: 'libs/plugins/jquery.matchHeight.min',
    scrollEnd: 'libs/plugins/jquery.event.scroll',
    storagePolyfill: 'libs/plugins/storagePolyfill',
    generatetoken: 'plugins/membership/generatetoken',
    swiper: 'libs/plugins/swiper.min',
    inputMask: 'libs/plugins/jquery-input-mask',
    niceSelect: 'libs/plugins/nice-select',
    simplePagination: 'libs/plugins/jquery.simplePagination',
    barcode: 'libs/plugins/barcode.min',
    qrcode: 'libs/plugins/qrcode.min',
    monthyearpicker: 'libs/plugins/jquery.datepicker.monthyearpicker'
  },
  shim: {
    jquerySlimScroll: ['jquery'],
    jqueryModal: ['jquery'],
    filterizr: ['jquery'],
    fastselect: ['fastsearch'],
    monthyearpicker: ['jqueryUi']
  }
});
