WRS.define(['jquery'], function ($) {

  var date = new Date();
  date.setTime(date.getTime() + (60 * 3000));

  var hostName = window.location.hostname;
  var domainName = hostName.substring(hostName.indexOf(".", hostName.indexOf(".") - 1) + 1);

  function callAPI(callback) {
    if ($.cookie('mandaiId') !== undefined && $.cookie('ciamToken') !== undefined) {
        callRefreshCIAMTokenAPI(callback);
    } else {
        callGenerateCustomerTokenAPI(callback);
    }
  }

  function callGenerateCustomerTokenAPI(callback) {
    $.ajax({
        type: 'GET',
        url: '/bin/wrs/membership'
    }).done(function(obj) {
        sessionStorage.setItem('membershipForms', JSON.stringify(obj.data.forms));
        sessionStorage.setItem('membershipConstants', JSON.stringify(obj.data.membershipConstants));
        if(callback!=null) {
            callback();
        }
    }).fail(function() {
        console.log("Generate callGenerateCustomerTokenAPI Error");
        return false;
    });
  }

  function callProductsAPI(callback) {
    $.ajax({
      type: 'GET',
      url: '/bin/wrs/membership-product'
    }).done(function(obj) {
        sessionStorage.setItem('productList', JSON.stringify(obj.data.productList));

        sessionStorage.setItem('membershipListNew', JSON.stringify(obj.data.membershipListNew));
        sessionStorage.setItem('prodListfors', JSON.stringify(obj.data.prodListfors));
        sessionStorage.setItem('prodListfobp', JSON.stringify(obj.data.prodListfobp));
        sessionStorage.setItem('prodListfons', JSON.stringify(obj.data.prodListfons));
        sessionStorage.setItem('prodListfow', JSON.stringify(obj.data.prodListfow));
        sessionStorage.setItem('prodListfosz', JSON.stringify(obj.data.prodListfosz));
        sessionStorage.setItem('prodListfowp', JSON.stringify(obj.data.prodListfowp));
        sessionStorage.setItem('prodListfom', JSON.stringify(obj.data.prodListfom));
        sessionStorage.setItem('prodListfomp', JSON.stringify(obj.data.prodListfomp));
        sessionStorage.setItem('prodListrfwasia', JSON.stringify(obj.data.prodListrfwasia));
        sessionStorage.setItem('prodListsg60', JSON.stringify(obj.data.prodListsg60));

        sessionStorage.setItem('membershipListRenew', JSON.stringify(obj.data.membershipListRenew));
        sessionStorage.setItem('prodListrenewalfosz', JSON.stringify(obj.data.prodListrenewalfosz));
        sessionStorage.setItem('prodListrenewalfons', JSON.stringify(obj.data.prodListrenewalfons));
        sessionStorage.setItem('prodListrenewalfobp', JSON.stringify(obj.data.prodListrenewalfobp));
        sessionStorage.setItem('prodListrenewalfors', JSON.stringify(obj.data.prodListrenewalfors));
        sessionStorage.setItem('prodListrenewalfow', JSON.stringify(obj.data.prodListrenewalfow));
        sessionStorage.setItem('prodListrenewalfowp', JSON.stringify(obj.data.prodListrenewalfowp));
        sessionStorage.setItem('prodListrenewalfom', JSON.stringify(obj.data.prodListrenewalfom));
        sessionStorage.setItem('prodListrenewalfomp', JSON.stringify(obj.data.prodListrenewalfomp));
        sessionStorage.setItem('prodListrenewalrfwasia', JSON.stringify(obj.data.prodListrenewalrfwasia));

        if(callback!=null) {
            callback();
        }
    }).fail(function() {
        console.log("Generate callProductsAPI Error");
        return false;
    });
  }

  function callRefreshCIAMTokenAPI(callback) {
    var body = {
        mandaiId: $.cookie('mandaiId')
    };

    $.ajax({
        url: '/bin/wrs/ciam/refreshaccesstoken',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(body),
        success: function(res) {
            if (res.statusCode === 200 && res.token.accessToken !== undefined) {
                const newCiamToken = res.token.accessToken;
                $.cookie('ciamToken', newCiamToken, {
                    path: '/',
                    domain: domainName
                });
            }

            callGenerateCustomerTokenAPI(callback);
        },
        error: function() {
            logout();
        }
    });
  }

  function log(data) {
    $.ajax({
      type: 'POST',
      url: '/bin/wrs/log',
      data: { log: data }
    })
   }

   function error(code, divBlock, errorMessage) {
       $.ajax({
         type: 'GET',
         url: '/bin/wrs/error',
         data: { code: code }
       }).done(function(obj) {
        if(divBlock!=null) {
            $("#"+divBlock).removeClass("hidden");
            $("#"+errorMessage).text(obj.data);
        } else {
            $("#errorNotification").removeClass("hidden");
            $("#errorMessage").text(obj.data);
        }
       })
   }

    function getUtc8DateTimeByDate(date) {
        // create Date object by date
        var d = new Date(date);

        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (3600000 * +8));

        // return time as a string
        return nd;
    }

    function getCorrectTimeForValidityDate(validityTime) {
        return getUtc8DateTimeByDate(parseInt((validityTime).substring(6, 19)));
    }

    function logout() {
        $.removeCookie('customerId', { path : '/', domain : domainName });
        $.removeCookie('customerName', { path : '/', domain : domainName });
        $.removeCookie('customerHideNSMenu', { path : '/', domain : domainName });
        $.removeCookie('customerQualifiedBookingPasses', { path : '/', domain : domainName });
        $.removeCookie('ticketType', { path : '/', domain : domainName });
        $.removeCookie('ciamLoginSrc', { path : '/', domain : domainName });
        $.removeCookie('ciamToken', { path : '/', domain : domainName });
        $.removeCookie('mandaiId', { path : '/', domain : domainName });
        sessionStorage.removeItem('membershipForms');

        var loginRedirectPath = $("#loginPathHidden").val();
        window.location = loginRedirectPath + "?expired=true";
    }

  return {
    callAPI: callAPI,
    callGenerateCustomerTokenAPI: callGenerateCustomerTokenAPI,
    callProductsAPI: callProductsAPI,
    callRefreshCIAMTokenAPI: callRefreshCIAMTokenAPI,
    log: log,
    logout: logout,
    error: error,
    getUtc8DateTimeByDate: getUtc8DateTimeByDate,
    getCorrectTimeForValidityDate: getCorrectTimeForValidityDate
  };
});
