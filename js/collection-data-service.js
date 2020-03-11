"use strict";
var MAX_TIMEOUT_SECONDS = 120 * 1000;
const URL_COLLECTION_MICROSERVICE = "http://localhost:6080/bhermanos-cobranza-api/api/cobranza";

function findPendingPaymentsByClient(date, clientId, includeOldPayments) {
    var url = URL_COLLECTION_MICROSERVICE + "/clientes-pagos-pendientes?fecha=" + date + "&idCliente=" + clientId + "&incluirPagosAtrasados=" + includeOldPayments;

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

function applyCollectionPayment(payment) {

    var url = URL_COLLECTION_MICROSERVICE+"/aplicar-pago";

    console.log("Submit URL " + url);
    console.log(JSON.stringify(payment));

    var settings = {
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "data": JSON.stringify(payment),
        "contentType": "application/json; charset=utf-8",
        "dataType": "json",
        "async": false,
        "timeout": MAX_TIMEOUT_SECONDS
    }

    var jqXHR = $.ajax(settings);

    return jqXHR;
}