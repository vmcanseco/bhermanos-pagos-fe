"use strict";
var MAX_TIMEOUT_SECONDS = 120 * 1000;
const URL_VOUCHERS_MICROSERVICE = "http://localhost:6080/bhermanos-cobranza-api/api/vales"

function createVoucher(voucher) {

    var url = URL_VOUCHERS_MICROSERVICE;

    console.log("Submit URL " + url);
    console.log(JSON.stringify(voucher));

    var settings = {
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "data": JSON.stringify(voucher),
        "contentType": "application/json; charset=utf-8",
        "dataType": "json",
        "async": false,
        "timeout": MAX_TIMEOUT_SECONDS
    }

    var jqXHR = $.ajax(settings);

    return jqXHR;
}

function findValidVouchersByClientId(clientId) {
    var url = URL_VOUCHERS_MICROSERVICE + "/disponibles?idCliente=" + clientId;

    var settings = {
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "async": false,
        "dataType": "json",
        "timeout": MAX_TIMEOUT_SECONDS
    }

    var jqXHR = $.ajax(settings);

    return jqXHR;
};
