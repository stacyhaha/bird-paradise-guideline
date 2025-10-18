WRS.require(['jquery', 'cookie'], function ($) {
  'use strict';

    if (window.location.pathname.toLowerCase().indexOf('/booking/') < 0) {
        sessionStorage.removeItem('curBookingId');
        sessionStorage.removeItem('curBookingPark');
    }

    var hostName = window.location.hostname;
    var domainName = hostName.substring(hostName.indexOf(".", hostName.indexOf(".") - 1) + 1);

    var logoutBtn = $("#logoutBtn");
    logoutBtn.on('click', function(e) {
        e.preventDefault();
        $.removeCookie('customerId', { path : '/', domain : domainName });
        $.removeCookie('customerName', { path : '/', domain : domainName });
        $.removeCookie('customerHideNSMenu', { path : '/', domain : domainName });
        $.removeCookie('customerQualifiedBookingPasses', { path : '/', domain : domainName });
        $.removeCookie('ticketType', { path : '/', domain : domainName });
        $.removeCookie('ciamLoginSrc', { path : '/', domain : domainName });
        $.removeCookie('customerBookingPasses', { path : '/', domain : domainName });
        $.removeCookie('selectedPass', { path : '/', domain : domainName });

        var customerInfo = sessionStorage.getItem('MembershipCustomerInfoResult');
        customerInfo = JSON.parse(customerInfo)

        var body = {
            email: customerInfo !== null ? customerInfo.Email : ''
        };

        $.ajax({
            url: '/bin/wrs/ciam/logout',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(body),
            success: function(res) {
                if (res.statusCode === 200 && res.membership.mwgCode === 'MWG_CIAM_USERS_LOGOUT_SUCCESS') {
                    console.log("Successfully logged out from CIAM");
                } else {
                    console.log("Error logging out from CIAM");
                }
            },
            complete: function() {
                $.removeCookie('ciamToken', { path : '/', domain : domainName });
                $.removeCookie('mandaiId', { path : '/', domain : domainName });
                sessionStorage.removeItem('membershipForms');
                $('#logoutBtn').parents('form').submit();
            }
        });

        sessionStorage.removeItem('MembershipCustomerInfoResult');
    });
});