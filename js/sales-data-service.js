"use strict";
var MAX_TIMEOUT_SECONDS = 120 * 1000;
const URL_SALES_MICROSERVICE = "http://localhost:6080/bhermanos-cobranza-api/api/ventas"


function findSalesByClientId(clientId) {
    var url = URL_SALES_MICROSERVICE + "?idCliente=" + clientId;

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
}

function createSale(sale) {

    var url = URL_SALES_MICROSERVICE;

    console.log("Submit URL " + url);
    console.log(JSON.stringify(sale));

    var settings = {
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "data": JSON.stringify(sale),
        "contentType": "application/json; charset=utf-8",
        "dataType": "json",
        "async": false,
        "timeout": MAX_TIMEOUT_SECONDS
    }

    var jqXHR = $.ajax(settings);

    return jqXHR;
}